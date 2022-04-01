"use strict";

// Body div

var ele = document.createElement("div");
ele.setAttribute("id", "container");
ele.setAttribute("class", "container");
document.body.append(ele);

// Head tag

var tag = document.createElement("h1");
var text = document.createTextNode("Makeup API");
tag.appendChild(text);
var element = document.getElementById("container");
element.appendChild(tag);

var tag = document.createElement("p");
var text = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cum illum soluta reprehenderit earum totam reiciendis natus non officiis doloremque ex, quae iste, eos doloribus."
);
tag.appendChild(text);
var element = document.getElementById("container");
tag.classList.add("description");
element.appendChild(tag);

// Image grid
var element = document.createElement("div");
element.setAttribute("id", "header-grid");
element.setAttribute("class", "header-grid");
element.appendChild(document.createTextNode(""));
document.getElementById("container").appendChild(element);

var element1 = document.createElement("div");
element1.setAttribute("id", "photo");
element1.setAttribute("class", "photo");
element1.appendChild(document.createTextNode(""));
var img1 = document.createElement("img");
img1.setAttribute(
  "src",
  "https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo").appendChild(img1);

var element1 = document.createElement("div");
element1.setAttribute("id", "photo1");
element1.setAttribute("class", "photo1");
element1.appendChild(document.createTextNode(""));
var img2 = document.createElement("img");
img2.setAttribute(
  "src",
  "http://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo1").appendChild(img2);

var element1 = document.createElement("div");
element1.setAttribute("id", "photo2");
element1.setAttribute("class", "photo2");
element1.appendChild(document.createTextNode(""));
var img3 = document.createElement("img");
img3.setAttribute(
  "src",
  "https://media.istockphoto.com/photos/makeup-palette-and-brushes-professional-eyeshadow-palette-picture-id1299164489?b=1&k=20&m=1299164489&s=170667a&w=0&h=GqoYQHfqq4UfbHFq9TlUp3isRCAqm9hoFqnxaKUEQEU="
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo2").appendChild(img3);

var element1 = document.createElement("div");
element1.setAttribute("id", "photo3");
element1.setAttribute("class", "photo3");
element1.appendChild(document.createTextNode(""));
var img4 = document.createElement("img");
img4.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFrZXVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo3").appendChild(img4);

var element1 = document.createElement("div");
element1.setAttribute("id", "photo4");
element1.setAttribute("class", "photo4");
element1.appendChild(document.createTextNode(""));
var img5 = document.createElement("img");
img5.setAttribute(
  "src",
  "https://i.pinimg.com/736x/8a/a1/ac/8aa1ac93b8c2c9a3259d99a4d9cfa520.jpg"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo4").appendChild(img5);

var element1 = document.createElement("div");
element1.setAttribute("id", "photo5");
element1.setAttribute("class", "photo5");
element1.appendChild(document.createTextNode(""));
var img6 = document.createElement("img");
img6.setAttribute(
  "src",
  "https://static.ffx.io/images/$zoom_0.571%2C$multiply_1.0582%2C$ratio_1.5%2C$width_756%2C$x_2%2C$y_0/t_crop_custom/q_86%2Cf_auto/92024f446017962c00c4124c6bd133ab6fd3ad7f"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo5").appendChild(img6);

// br tag

var tag = document.createElement("br");
var element = document.getElementById("container");
element.appendChild(tag);

var tag = document.createElement("br");
var element = document.getElementById("container");
element.appendChild(tag);

// 2nd head
var tag = document.createElement("h2");
var text = document.createTextNode("About the Makeup API");
tag.appendChild(text);
var element = document.getElementById("container");
element.appendChild(tag);

var element = document.createElement("div");
element.setAttribute("id", "sub-heading");
element.setAttribute("class", "sub-heading");
element.appendChild(document.createTextNode(""));
document.getElementById("container").appendChild(element);

var tag = document.createElement("ul");
tag.setAttribute("id", "docs-list");
tag.setAttribute("class", "docs-list");
var element = document.getElementById("sub-heading");
element.appendChild(tag);

var tag = document.createElement("li");
tag.setAttribute("id", "li");
tag.setAttribute("class", "li");
var element = document.getElementById("docs-list");
element.appendChild(tag);

var s = document.createElement("h3");
s.setAttribute("id", "bold");
s.setAttribute("class", "bold");
var text = document.createTextNode("Protocol: The transport is HTTP. This API conforms to REST principals");
s.appendChild(text);
var element = document.getElementById("li");
element.appendChild(s);

// var tag = document.createElement("h4");
// var text = document.createTextNode(
//   "The transport is HTTP. This API conforms to REST principals"
// );
// tag.appendChild(text);
// var element = document.getElementById("bold");
// element.appendChild(tag);

var tag = document.createElement("li");
tag.setAttribute("id", "li1");
tag.setAttribute("class", "li1");
var element = document.getElementById("docs-list");
element.appendChild(tag);

var s = document.createElement("h3");
s.setAttribute("id", "bold");
s.setAttribute("class", "bold");
var text = document.createTextNode("API Endpoints: The endpoint for the current API version is: http://makeup-api.herokuapp.com/api/v1/products.json");
s.appendChild(text);
var element = document.getElementById("li1");
element.appendChild(s);








async function foo() {
  let res = document.getElementById("text").value;
  console.log(res);
  let result = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  let final = await result.json();
  console.log(final);

  for (var i = 0; i < final.length; i++) {
    let ele = document.createElement("div");
    ele.setAttribute("id", "data");
    ele.setAttribute("class", "data");
    ele.innerHTML = `brand:${final[i].brand} name:${final[i].name} price:${final[i].price} price_sign:${final[i].price_sign} image_link:${final[i].image_link} product_link:${final[i].product_link} description:${final[i].description} product_type:${final[i].product_type}`;
    document.body.append(ele);
  }
}
foo();
