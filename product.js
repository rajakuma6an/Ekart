getData()

function getData() {
    var recData = JSON.parse(localStorage.getItem("newData"));
    console.log('recData', recData);
  
    localStorage.removeItem("newData")

    
  
    var image = document.getElementById("product-img");
    var title = document.getElementById("product-title");
    var category = document.getElementById("product-category");
    var price = document.getElementById("product-price");
    var des = document.getElementById("product-des");
    var button = document.getElementById("btn-primary");

    image.setAttribute("src", recData.image);
    title.textContent = recData.title;
    category.textContent = recData.category;
    price.textContent = recData.price;
    des.textContent = recData.description;
    button.textContent = "Buy Now"


    image.classList.add("img-fluid");


  }

