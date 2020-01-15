const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
  zoom: 7,
  center: {lat: 52.632469, lng: -1.689423},
  styles: mapStyle
});

map.data.loadGeoJson('stores.json');

map.data.setStyle(feature => {
  return {
    icon: {
      url: `img/icon_${feature.getProperty('category')}.png`,
      scaledSize: new google.maps.Size(64, 64)
    }
  };
});

map.data.addListener('click', event => {
  let category = event.feature.getProperty('category');
  let name = event.feature.getProperty('name');
  let description = event.feature.getProperty('description');
  let hours = event.feature.getProperty('hours');
  let phone = event.feature.getProperty('phone');
  let position = event.feature.getGeometry().get();
  let content = `
    <img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
    <div style="margin-left:220px; margin-bottom:20px;">
      <h2>${name}</h2><p>${description}</p>
      <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
      <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat(52.632469)},${position.lng(-1.689423)}&key=${AIzaSyAqthnqqZil9T4Tpz-2y9S13JjASnjjHPg}"></p>
    </div>
  `;
  infoWindow.setContent(content);
  infoWindow.setPosition(position);
  infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
  infoWindow.open(map);
});