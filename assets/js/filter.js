function show_cars() {
    var div = $('.car')
    var div = $('.range');
    var div = $('.doors');
    var div = $('.type');
    var div = $('.price');

    .getJSON('car_list.json', function(data) {
       $.each(data.car_list, function(i, f) {
            car_list.push([f.car, f.range, f.doors, f.type, f.price]);
            div.append(f.car);
            div.append(f.range);
            div.append(f.doors);
            div.append(f.type);
            div.append(f.price);
       });
       $('a').on('click', addContent);
   });

 
 
 
 
 
 
 
 
 
   /*  var min_mileage = get range from ('assets/js/car_list.json');
    var type = get type from ('assets/js/car_list.json');
    var list_of_cars_to_display = get_list_of_cars_to_display(price, range, type)

    var carListDiv = document.getElementById('list_item');
    loop through list of cars to display:
    car = current car
    cardiv = document.CreateElement('div')
    carListDiv.appendElement(cardiv)

}

function get_list_of_cars_to_display(price, min_mileage, type) {
    var all_cars = all cars in full_dataset

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
    .addEventListener("change", function (evt) {
        console.log(evt.target.value)
    })
document.getElementById("range")
    .addEventListener("change", function (evt) {
        console.log(evt.target.value)
    })
document.getElementById("type")
    .addEventListener("change", function (evt) {
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
* /


