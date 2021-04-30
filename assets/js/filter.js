function showCars() {
    $.getJSON('/assets/js/carList.json', function (data) {
        $.each(data, function (i, item) {
            console.log(data[i].car)
                range = document.getElementById('range');

                console.log(range);

                document.getElementById('car0').innerHTML = data[0].car;
                
                document.getElementById('range0').innerHTML = `<span>Up to ${data[0].range} mile range</span>`;
                
                document.getElementById('doors0').innerHTML = `<span> ${data[0].doors} doors`;
                
                document.getElementById('type0').innerHTML = data[0].type;
                
                document.getElementById('price0').innerHTML = `Price from: £` + data[0].price;
                
                document.getElementById('car_link0').href = data[0].link;

                document.getElementById('car_image0').src = data[0].image;    
                
                document.getElementById('car1').innerHTML = data[1].car;
                
                document.getElementById('range1').innerHTML = `<span>Up to ${data[1].range} mile range</span>`;
                
                document.getElementById('doors1').innerHTML = `<span> ${data[1].doors} doors`;
                
                document.getElementById('type1').innerHTML = data[1].type;
                
                document.getElementById('price1').innerHTML = `Price from: £` + data[1].price;
                
                document.getElementById('car_link1').href = data[1].link;

                document.getElementById('car_image1').src = data[1].image;  

                document.getElementById('car2').innerHTML = data[2].car;
                
                document.getElementById('range2').innerHTML = `<span>Up to ${data[2].range} mile range</span>`;
                
                document.getElementById('doors2').innerHTML = `<span> ${data[2].doors} doors`;
                
                document.getElementById('type2').innerHTML = data[2].type;
                
                document.getElementById('price2').innerHTML = `Price from: £` + data[2].price;
                
                document.getElementById('car_link2').href = data[2].link;

                document.getElementById('car_image2').src = data[2].image;

                document.getElementById('car3').innerHTML = data[3].car;
                
                document.getElementById('range3').innerHTML = `<span>Up to ${data[3].range} mile range</span>`;
                
                document.getElementById('doors3').innerHTML = `<span> ${data[3].doors} doors`;
                
                document.getElementById('type3').innerHTML = data[3].type;
                
                document.getElementById('price3').innerHTML = `Price from: £` + data[3].price;
                
                document.getElementById('car_link3').href = data[3].link;

                document.getElementById('car_image3').src = data[3].image; 

                document.getElementById('car4').innerHTML = data[4].car;
                
                document.getElementById('range4').innerHTML = `<span>Up to ${data[4].range} mile range</span>`;
                
                document.getElementById('doors4').innerHTML = `<span> ${data[4].doors} doors`;
                
                document.getElementById('type4').innerHTML = data[4].type;
                
                document.getElementById('price4').innerHTML = `Price from: £` + data[4].price;
                
                document.getElementById('car_link4').href = data[4].link;

                document.getElementById('car_image4').src = data[4].image;  

                document.getElementById('car5').innerHTML = data[5].car;
                
                document.getElementById('range5').innerHTML = `<span>Up to ${data[5].range} mile range</span>`;
                
                document.getElementById('doors5').innerHTML = `<span> ${data[5].doors} doors`;
                
                document.getElementById('type5').innerHTML = data[5].type;
                
                document.getElementById('price5').innerHTML = `Price from: £` + data[5].price;
                
                document.getElementById('car_link5').href = data[5].link;

                document.getElementById('car_image5').src = data[5].image; 

                document.getElementById('car6').innerHTML = data[6].car;
                
                document.getElementById('range6').innerHTML = `<span>Up to ${data[6].range} mile range</span>`;
                
                document.getElementById('doors6').innerHTML = `<span> ${data[6].doors} doors`;
                
                document.getElementById('type6').innerHTML = data[6].type;
                
                document.getElementById('price6').innerHTML = `Price from: £` + data[6].price;
                
                document.getElementById('car_link6').href = data[6].link;

                document.getElementById('car_image6').src = data[6].image; 

                document.getElementById('car7').innerHTML = data[7].car;
                
                document.getElementById('range7').innerHTML = `<span>Up to ${data[7].range} mile range</span>`;
                
                document.getElementById('doors7').innerHTML = `<span> ${data[7].doors} doors`;
                
                document.getElementById('type7').innerHTML = data[7].type;
                
                document.getElementById('price7').innerHTML = `Price from: £` + data[7].price;
                
                document.getElementById('car_link7').href = data[7].link;

                document.getElementById('car_image7').src = data[7].image; 

                document.getElementById('car8').innerHTML = data[8].car;
                
                document.getElementById('range8').innerHTML = `<span>Up to ${data[8].range} mile range</span>`;
                
                document.getElementById('doors8').innerHTML = `<span> ${data[8].doors} doors`;
                
                document.getElementById('type8').innerHTML = data[8].type;
                
                document.getElementById('price8').innerHTML = `Price from: £` + data[8].price;
                
                document.getElementById('car_link8').href = data[8].link;

                document.getElementById('car_image8').src = data[8].image;

                document.getElementById('car9').innerHTML = data[9].car;
                
                document.getElementById('range9').innerHTML = `<span>Up to ${data[9].range} mile range</span>`;
                
                document.getElementById('doors9').innerHTML = `<span> ${data[9].doors} doors`;
                
                document.getElementById('type9').innerHTML = data[9].type;
                
                document.getElementById('price9').innerHTML = `Price from: £` + data[9].price;
                
                document.getElementById('car_link9').href = data[9].link;

                document.getElementById('car_image9').src = data[9].image;

                document.getElementById('car10').innerHTML = data[10].car;
                
                document.getElementById('range10').innerHTML = `<span>Up to ${data[10].range} mile range</span>`;
                
                document.getElementById('doors10').innerHTML = `<span> ${data[10].doors} doors`;
                
                document.getElementById('type10').innerHTML = data[10].type;
                
                document.getElementById('price10').innerHTML = `Price from: £` + data[10].price;
                
                document.getElementById('car_link10').href = data[10].link;

                document.getElementById('car_image10').src = data[10].image; 

                document.getElementById('car11').innerHTML = data[11].car;
                
                document.getElementById('range11').innerHTML = `<span>Up to ${data[11].range} mile range</span>`;
                
                document.getElementById('doors11').innerHTML = `<span> ${data[11].doors} doors`;
                
                document.getElementById('type11').innerHTML = data[11].type;
                
                document.getElementById('price11').innerHTML = `Price from: £` + data[11].price;
                
                document.getElementById('car_link11').href = data[11].link;

                document.getElementById('car_image11').src = data[11].image;

                document.getElementById('car12').innerHTML = data[12].car;
                
                document.getElementById('range12').innerHTML = `<span>Up to ${data[12].range} mile range</span>`;
                
                document.getElementById('doors12').innerHTML = `<span> ${data[12].doors} doors`;
                
                document.getElementById('type12').innerHTML = data[12].type;
                
                document.getElementById('price12').innerHTML = `Price from: £` + data[12].price;
                
                document.getElementById('car_link12').href = data[12].link;

                document.getElementById('car_image12').src = data[12].image;

                document.getElementById('car13').innerHTML = data[13].car;
                
                document.getElementById('range13').innerHTML = `<span>Up to ${data[13].range} mile range</span>`;
                
                document.getElementById('doors13').innerHTML = `<span> ${data[13].doors} doors`;
                
                document.getElementById('type13').innerHTML = data[13].type;
                
                document.getElementById('price13').innerHTML = `Price from: £` + data[13].price;
                
                document.getElementById('car_link13').href = data[13].link;

                document.getElementById('car_image13').src = data[13].image;

                document.getElementById('car14').innerHTML = data[14].car;
                
                document.getElementById('range14').innerHTML = `<span>Up to ${data[14].range} mile range</span>`;
                
                document.getElementById('doors14').innerHTML = `<span> ${data[14].doors} doors`;
                
                document.getElementById('type14').innerHTML = data[14].type;
                
                document.getElementById('price14').innerHTML = `Price from: £` + data[14].price;
                
                document.getElementById('car_link14').href = data[14].link;
            
                document.getElementById('car_image14').src = data[14].image;


            function filter() {
                document.getElementById('priceFliter')
            }
        });

    });
};
showCars();




/*

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
