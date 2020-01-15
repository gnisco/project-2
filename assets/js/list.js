var options = {
  valueNames: [ 'car', 'range', 'doors', 'type', 'price' ]
};

var values = [
  {
    car: 'Honda e',
    range: 'The Lightning Seeds',
    doors: 1992
    type: '',
    price: ''
  },
  {
    car: 'Sense',
    range: 'The Lightning Seeds',
    doors: 1992
    type: '',
    price: ''
  },
  ... 
];

var car-list = new List('car-list', options, values);
car-list.sort("price", {
  order: "asc"
})

$('.filter').on('click',function(){
  var $q = $(this).attr('data-filter');
  if($(this).hasClass('active')){
    albums.filter();
    $('.filter').removeClass('active');
  } else {
    albums.filter(function(item) {
      return (item.values().date == $q);
    });
    $('.filter').removeClass('active');
    $(this).addClass('active');
  }
});