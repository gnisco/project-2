function showCars() {
    $.getJSON('/assets/js/carList.json', function (data) {
        $.each(data, function (i, item) {
            console.log(data[i].car)
                range = document.getElementById('range');

                console.log(range);

                document.getElementById('car').innerHTML = data[i].car;
                
                document.getElementById('range').innerHTML = `<span>Up to ${data[i].range} mile range</span>`;
                
                document.getElementById('doors').innerHTML = data[i].doors + `doors`;
                
                document.getElementById('type').innerHTML = data[i].type;
                
                document.getElementById('price').innerHTML = `Price from: £` + data[i].price;
                
                /*document.getElementById('car_link').innerHTML = item['link'];

                document.getElementById('car_image').innerHTML = item['image'];*/          

            
            
        });
    });
};
showCars();


/*  
car_list.push([Value.car, Value.range, Value.doors, Value.type, Value.price, Value.carink, Value.image]);
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
