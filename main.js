// global variable
// onload
getProducts();
// AJAX
function getProducts() {
    let url = 'https://fakestoreapi.com/products';
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        url,
        true
    );
    xhr.onload = function() {
        if (this.status == 200) {
            Loadout(JSON.parse(this.responseText));
        }
        else{
          Loadout(staticcatalog);
        }
    };
    xhr.send();
}

// Functions
function Loadout(listProducts) {
  console.log(listProducts);
  let cards =document.querySelectorAll(".products");
  listProducts.forEach(function(item,index)
   {cards[index].querySelector('img').src=item['image'];
    cards[index].querySelector('h3').innerHTML=item['title'];
    cards[index].querySelector('h2').innerHTML=item['price'];
  });
}
