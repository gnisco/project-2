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
*/



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
  var car_list_filters 
}

function myFunction() {
  document.getElementById("list_item").classList.toggle("show");
  
}



/*

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



 
$.fn.listfilter = function(options) {
  options = $.extend(true, $.fn.listfilter.defaultOptions, options);
 
  return this.each(function() {
    if($(this).hasClass('car_list-processed')) {
      refreshFilters(this);
      return;
    }
    var table = $(this);
    var start = new Date();
 
    $('th:visible', table).each(function(index) {
      if($(this).hasClass('skip-filter')) return;
      var selectbox = $('<select class="form-control">');
      var values = [];
      var opts = [];
      selectbox.append('<option value="--all--">' + $(this).text() + '</option>');
 
      var col = $('tr:not(.skip-filter) td:nth-child(' + (index + 1) + ')', table).each(function() {
        var cellVal = options.valueCallback.apply(this);
        if(cellVal.length == 0) {
          cellVal = '--empty--';
        }
        $(this).attr('ddtf-value', cellVal);
 
        if($.inArray(cellVal, values) === -1) {
          var cellText = options.textCallback.apply(this);
          if(cellText.length == 0) {cellText = options.emptyText;}
          values.push(cellVal);
          opts.push({val:cellVal, text:cellText});
        }
      });
      if(opts.length < options.minOptions){
        return;
      }
      if(options.sortOpt) {
        opts.sort(options.sortOptCallback);
      }
      $.each(opts, function() {
        $(selectbox).append('<option value="' + this.val + '">' + this.text + '</option>')
      });
 
      $(this).wrapInner('<div style="display:none">');
      $(this).append(selectbox);
 
      selectbox.bind('change', {column:col}, function(event) {
        var changeStart = new Date();
        var value = $(this).val();
 
        event.data.column.each(function() {
          if($(this).attr('ddtf-value') === value || value == '--all--') {
            $(this).removeClass('car_list-filtered');
          }
          else {
            $(this).addClass('car_list-filtered');
          }
        });
        var changeStop = new Date();
        if(options.debug) {
          console.log('Search: ' + (changeStop.getTime() - changeStart.getTime()) + 'ms');
        }
        refreshFilters(table);
 
      });
      table.addClass('ddtf-processed');
      if($.isFunction(options.afterBuild)) {
        options.afterBuild.apply(table);
      }
    });
 
    function refreshFilters(table) {
      var refreshStart = new Date();
      $('tr', table).each(function() {
        var row = $(this);
        if($('td.ddtf-filtered', row).length > 0) {
          options.transition.hide.apply(row, options.transition.options);
        }
        else {
          options.transition.show.apply(row, options.transition.options);
        }
      });
 
      if($.isFunction(options.afterFilter)) {
        options.afterFilter.apply(table);
      }
 
      if(options.debug) {
        var refreshEnd = new Date();
        console.log('Refresh: ' + (refreshEnd.getTime() - refreshStart.getTime()) + 'ms');
      }
    }
 
    if(options.debug) {
      var stop = new Date();
      console.log('Build: ' + (stop.getTime() - start.getTime()) + 'ms');
    }
  });
};
 
$.fn.ddTableFilter.defaultOptions = {
  valueCallback:function() {
    return encodeURIComponent($.trim($(this).text()));
  },
  textCallback:function() {
    return $.trim($(this).text());
  },
  sortOptCallback: function(a, b) {
    return a.text.toLowerCase() > b.text.toLowerCase();
  },
  afterFilter: null,
  afterBuild: null,
  transition: {
    hide:$.fn.hide,
    show:$.fn.show,
    options: []
  },
  emptyText:'--Empty--',
  sortOpt:true,
  debug:false,
  minOptions:2
}
 
})(jQuery);