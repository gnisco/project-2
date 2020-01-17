filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("list_item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var typeContainer = document.getElementById("typeContainer");
var typeFilter = typeContainer.getElementsByClassName("typeFilter");
for (var i = 0; i < typeFilter.length; i++) {
  typeFilter[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 


/*function show_cars(){
  var price = get price from ('assets/js/car_list.json');
  var min_mileage = get min mileage from ('assets/js/car_list.json');
  var type = get type from ('assets/js/car_list.json');
  var list_of_cars_to_display = get_list_of_cars_to_display(price, min_mileage, type)
  
  var carListDiv = document.getElementById('list_item');
  loop through list of cars to display:
    car = current car
    cardiv = document.CreateElement('div')
    carListDiv.appendElement(cardiv)

}

function get_list_of_cars_to_display(price, min_mileage, type) {
  var all_cars =  all cars in full_dataset
  
  cars_to_display = []

  loop through full_dataset and:

    car = current_object in list

    price_correct = (price >= min_price and price <= max_price);
    mileage_correct = (car.mileage == 'all' or >= min_mileage);
    type_correct = (car.type == make or car.type == 'all');
    

    if make_correct and mileage_correct:
      add car to cars_to_display

    return cars_to_display

}




document.getElementById("price")
  .addEventListener("change", function(evt) {
    console.log(evt.target.value)
  })
document.getElementById("range")
  .addEventListener("change", function(evt) {
    console.log(evt.target.value)
  })
document.getElementById("type")
  .addEventListener("change", function(evt) {
    console.log(evt.target.value)
  })

function show_cars() {
  const car_list = 
}

function myFunction() {
  document.getElementById("list_item").classList.toggle("show");
  
}




function filterFunction() {
  var input, filter, range, type, price;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("car_list");
  range = div.getElementsByClassName("range");
  for (i == 'all'; i >= range.valueOf()) {
    txtValue = range[i].number || a[i].innerText;
    if (Value.indexOf(filter) == range or >= range) {
      range[i].style.display = "";
    } else {
      range[i].style.display = "none";
    }
  }
}
*/


