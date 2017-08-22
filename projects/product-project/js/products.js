/*globals $ _*/
$(document).on('ready', onDocReady);


function onDocReady() {
    $.getJSON('data/product.json', onProductData)
    .fail(function() {console.log('getJson on product.json failed'); });
}

function onProductData(products) {
    //intialize ui
    initializeUI(products);
     $('<input id= "search">')
    .addClass('searchbar')
    .appendTo($('nav'));
    //show all products
    showProducts(products);
    // console.log(searchThroughProducts(products, "black"));
    $('#search').on('keyup', function(event) {
  showProducts(searchThroughProducts(products, $(event.currentTarget).val()));
});

getTypes(products);
$('nav').append($('<button>').attr('id', 'sort').addClass('btn').text('High').on('click', function(){
    sortByHigh(products);
}));
$('nav').append($('<button>').attr('id', 'sort').addClass('btn').text('Low').on('click', function(){
    sortByLow(products);
}));
$('nav').append($('<button>').attr('id', 'All').addClass('btn').text('All').on('click', function(){
    showProducts(products);
}));

  $('#background').on('click', function(event) {
    $(event.target).hide();
});   
}
function initializeUI(products) {
    //create static product ul
    $('<ul>')
    .attr('id', 'products')
    .addClass('list-products')
    .appendTo('main');
}

function showProducts(products) {
    //clear products from the DOM
    $('#products').empty()
    .append(createProductListItems(products));
}

function createProductListItems(products) {
    return _.map(products, function(product){
        return $('<li>').on('click', function(event) {
           let product = $(event.currentTarget).data('product');
           $('#pop-up').empty();
           $('#pop-up').append(createAllDiv(product.desc, product.price, product.stock, product.specs, product.type, product.color, product.availableColors));
           $('#pop-up').append(createProductImageDiv(`img/product/${product.image}`, "pop-up-img"))
          $('#background').toggle();
          
        })
        .addClass("li-product")
        .data('product', product)
        .append(createProductImageDiv(`img/product/thumbs/${product.image}`, 'product-thumb'))
        .append(createProductDetailDiv(product.desc, product.price, product.stock));
    });
}




function createProductImageDiv(url, cssclass) {
   return $('<div>')
        .append($('<img>').attr('src', url).addClass(cssclass));
}

function createProductDetailDiv(desc, price, stock) {
    return $('<div>')
    .append($('<div>')
    .attr('src', desc).text(desc))
    .append($('<div>')
    .attr('src', price).text(price))
    .append($('<div>')
    .attr('src', stock).text(stock));
    
}

function searchThroughProducts(products, string) {
    return _.reduce(products, function(combined, product, i, products){
        if(typeof product === "object"){
            
            if(searchThroughProducts(product, string).length) {
                combined.push(product);
            }
        }
        else {
            if(_.contains(product.toString().toLowerCase(), string.toLowerCase())) {
                combined.push(product);
            }
        } return combined; 
    }, []);
}



//create a div in doc ready which is the pop up
//on click for list item in create product function, event, event.target.data
//give new path for big image

function createAllDiv(desc, price, stock, specs, type, color, availableColors) {
    return $('<div>')
    .append($('<div>')
    .attr('src', desc).text("Description: " + desc))
    .append($('<div>')
    .attr('src', price).text("Price: " + "$" + price))
    .append($('<div>')
    .attr('src', stock).text("In Stock: " + stock))
    .append($('<div>')
    .attr('src', specs).text("Specifications: " + specs))
    .append($('<div>')
    .attr('src', type).text("Product Type: " + type))
    .append($('<div>')
    .attr('src', color).text("Standard Color: " + color))
    .append($('<div>')
    .attr('src', availableColors).text("Available in: " + availableColors));
    
}

function filterByType(products, buttonName) {
   return products.filter(function(value, pos, array) {
        return value.type === buttonName;
    });
}

//create function returns array
//get all of the types using pluck from products
//make array unique
//loop unique array to create buttons

function getTypes(products) {
    let types = _.pluck(products,"type");
    let unique = _.unique(types);
    _.each(unique, function(type) {
        $('nav').append($('<button>').attr('id', type).addClass('btn').text(type).on('click', function(){
    showProducts(filterByType(products, type));
}));
    });
}

//create a function which sorts by price;
//sort function

function sortByHigh(products) {
    let sort = products.sort(function(low, high) {
        return high.price - low.price;
        
    });
    showProducts(sort);
}

function sortByLow(products) {
    let sort = products.sort(function(low, high) {
        return low.price - high.price;
        
    });
    showProducts(sort);
}