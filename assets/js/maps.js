
function sanitizeHTML(strings) {
  const entities = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;'};
  let result = strings[0];
  for (let i = 1; i < arguments.length; i++) {
    result += String(arguments[i]).replace(/[&<>'"]/g, (char) => {
      return entities[char];
    });
    result += strings[i];
  }
  return result;
}

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: {lat: 51.5074, lng: 0.1278},
  });

  // Load the stores GeoJSON onto the map.
  map.data.loadGeoJson('assets/js/stores.json', {idPropertyName: 'storeid'});


  const apiKey = 'AIzaSyAqthnqqZil9T4Tpz-2y9S13JjASnjjHPg';
  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    const category = event.feature.getProperty('make');
    const name = event.feature.getProperty('name');
    const phone = event.feature.getProperty('phone');
    const position = event.feature.getGeometry().get();
    const content = sanitizeHTML`
      <div style="margin-bottom:20px;">
        <b>Name:</b> ${name}</p>
        <b>Phone:</b> ${phone}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });

  // Build and add the search bar
  const card = document.createElement('div');
  const titleBar = document.createElement('div');
  const title = document.createElement('div');
  const container = document.createElement('div');
  const input = document.createElement('input');
  const options = {
    types: ['address'],
    componentRestrictions: {country: 'gb'},
  };

  card.setAttribute('id', 'pac-card');
  title.setAttribute('id', 'title');
  title.textContent = 'Find the nearest store';
  titleBar.appendChild(title);
  container.setAttribute('id', 'pac-container');
  input.setAttribute('id', 'pac-input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter an address');
  container.appendChild(input);
  card.appendChild(titleBar);
  card.appendChild(container);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  // Make the search bar into a Places Autocomplete search bar and select
  // which detail fields should be returned about the place that
  // the user selects from the suggestions.
  const autocomplete = new google.maps.places.Autocomplete(input, options);

  autocomplete.setFields(
      ['address_components', 'geometry', 'name']);

  // Set the origin point when the user selects an address
  const originMarker = new google.maps.Marker({map: map});
  originMarker.setVisible(false);
  let originLocation = map.getCenter();

  autocomplete.addListener('place_changed', async () => {
    originMarker.setVisible(false);
    originLocation = map.getCenter();
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert('No address available for input: \'' + place.name + '\'');
      return;
    }

    // Recenter the map to the selected address
    originLocation = place.geometry.location;
    map.setCenter(originLocation);
    map.setZoom(9);
    console.log(place);

    originMarker.setPosition(originLocation);
    originMarker.setVisible(true);

    // Use the selected address as the origin to calculate distances
    // to each of the store locations
    const rankedStores = await calculateDistances(map.data, originLocation);
    showStoresList(map.data, rankedStores);

    return;
  });
}
async function calculateDistances(data, origin) {
  const stores = [];
  const destinations = [];

  // Build parallel arrays for the store IDs and destinations
  data.forEach((store) => {
    const storeNum = store.getProperty('storeid');
    const storeLoc = store.getGeometry().get();

    stores.push(storeNum);
    destinations.push(storeLoc);
  });

  // Retrieve the distances of each store from the origin
  // The returned list will be in the same order as the destinations list
  const service = new google.maps.DistanceMatrixService();
  const getDistanceMatrix =
    (service, parameters) => new Promise((resolve, reject) => {
      service.getDistanceMatrix(parameters, (response, status) => {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          reject(response);
        } else {
          const distances = [];
          const results = response.rows[0].elements;
          for (let j = 0; j < results.length; j++) {
            const element = results[j];
            const distanceText = element.distance.text;
            const distanceVal = element.distance.value;
            const distanceObject = {
              storeid: stores[j],
              distanceText: distanceText,
              distanceVal: distanceVal,
            };
            distances.push(distanceObject);
          }

          resolve(distances);
        }
      });
    });

  const distancesList = await getDistanceMatrix(service, {
    origins: [origin],
    destinations: destinations,
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.METRIC,
  });

  distancesList.sort((first, second) => {
    return first.distanceVal - second.distanceVal;
  });

  return distancesList;
}

function showStoresList(data, stores) {
  if (stores.length == 0) {
    console.log('empty stores');
    return;
  }

  let panel = document.createElement('div');
  // If the panel already exists, use it. Else, create it and add to the page.
  if (document.getElementById('panel')) {
    panel = document.getElementById('panel');
    // If panel is already open, close it
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
    }
  } else {
    panel.setAttribute('id', 'panel');
    const body = document.body;
    body.insertBefore(panel, body.childNodes[0]);
  }


  // Clear the previous details
  while (panel.lastChild) {
    panel.removeChild(panel.lastChild);
  }

  stores.forEach((store) => {
    // Add store details with text formatting
    const name = document.createElement('p');
    name.classList.add('place');
    const currentStore = data.getFeatureById(store.storeid);
    name.textContent = currentStore.getProperty('name');
    panel.appendChild(name);
    const distanceText = document.createElement('p');
    distanceText.classList.add('distanceText');
    distanceText.textContent = store.distanceText;
    panel.appendChild(distanceText);
  });

  // Open the panel
  panel.classList.add('open');

  return;
}
