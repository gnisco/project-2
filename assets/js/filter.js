function showCars() {
    $.getJSON('/assets/js/carList.json', function (data) {
        console.log(data);
        $.each(data.car_list, function (key, Value) {
            var Value = eval('/assets/js/carList.json');
            console.log(key);
            console.log(value);

                document.getElementById('car_link').innerHTML = Value.link;

                document.getElementById('car').innerHTML = Value.car;
                
                document.getElementById('range').innerHTML = Value.range;
                
                document.getElementById('doors').innerHTML = Value.doors;
                
                document.getElementById('type').innerHTML = Value.type;
                
                document.getElementById('price').innerHTML = Value.price;
                
                document.getElementById('car_image').innerHTML = Value.image;          

            
            
        });
    });
};
showCars();


/*  
car_list.push([value.car, value.range, value.doors, value.type, value.price, value.car_link, value.car_image]);
 $('a').on('click', addContent);

var min_mileage = get range from ('assets/js/car_list.json');
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
*/
