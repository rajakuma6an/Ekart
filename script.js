async function getData() {
  const response = await fetch("https://demo6982887.mockable.io/getProducts");
  const data = response.json();
  return data;
}
getData().then((data) => initData(data));

function initData(model) {
  var div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("d-flex");
  div.classList.add("flex-wrap");

  for (var i = 0; i < model.length; i++) {
    let selectedItem = model[i];

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var img = document.createElement("img");
    var para = document.createElement("p");
    var h6 = document.createElement("h6");
    var pa = document.createElement("p");
    var btn = document.createElement("button");
    var main = document.getElementById("main");

    div3.appendChild(img);
    div1.appendChild(para);
    div3.appendChild(pa);
    div4.appendChild(h6);
    div4.appendChild(btn);
    div.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    main.append(div);

    img.setAttribute("src", selectedItem.image);
    pa.textContent = selectedItem.category;
    para.textContent = selectedItem.title;
    h6.textContent = selectedItem.price;
    btn.innerHTML = "BUY NOW";

    div1.classList.add("card");

    div1.classList.add("text-center");
    para.classList.add("card-title");
    div2.classList.add("card-img");
    img.classList.add("img-fluid");
    div3.classList.add("card-body");
    div4.classList.add("card-footer");
    btn.classList.add("btn");
    btn.classList.add("btn-warning");

    img.addEventListener("mouseenter", function (event) {
      event.target.style.opacity = "0.8";
    });
    img.addEventListener("mouseleave", function (event) {
      event.target.style.opacity = "1";
    });
    div1.addEventListener("mouseenter", function (event) {
      event.target.style = "box-shadow: 0 0 5px grey;";
    });
    div1.addEventListener("mouseleave", function (event) {
      event.target.style = "box-shadow: 0 0 0;";
    });
    div1.addEventListener("click", function (event) {
      transData(selectedItem);
    });
  }
}

 function transData(selectedItem) {
     var newData = selectedItem;
     
     localStorage.setItem("newData",JSON.stringify(newData));
    window.location.replace("product.html");
 }
