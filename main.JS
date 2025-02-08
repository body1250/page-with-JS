//the header
//ازالة تنسيقات البدايه
document.body.style.margin = 0;
document.body.style.maxHeight = '100vh';
document.body.style.padding = 0;
document.body.style.backgroundColor='rgb(183 182 178)'
//انشاء الheader
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText =
  "display:flex;padding:10px ; background-color:rgb(255,255,255);justify-content:space-between; align-items:center;";
//اضافه الlogo
let logo = document.createElement("img");
logo.setAttribute("src", "logo.ico");
//عمل القائمة
let menu = document.createElement("ul");
menu.style.display = "flex";
menu.style.listStyle = "none";

//العناصر داخل القائمة
let itemName = ["Home", "About", "Services", "Contact"];
for (item of itemName) {
  let items = document.createElement("li");
  let itemL = document.createElement("a");
  itemL.style.cssText =
    "text-decoration: none;padding: 10px 25px;box-sizing: border-box";
  itemL.setAttribute("href", "");
  itemL.className = item;
  itemL.innerHTML = item;
  items.append(itemL);
  menu.append(items);
}
//اضافة الصوره و القائمة للheader
header.prepend(logo);
header.append(menu);
document.body.prepend(header);

//the body
//creat the body and classname and the style
let body = document.createElement("div");
body.className = "content";
body.style.cssText =
  "display:flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height: calc(100vh - 142px);;box-sizing:border-box;";

  
  
  for(let i = 1 ; i<=12;i++){
    //the product number and style
      let num = document.createElement("span");
      num.style.cssText='font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px;margin-top:10px;';
      num.innerHTML =i
      //the product div and his style
      let prod = document.createElement("div");
      prod.className = "product";
      prod.style.cssText =
      "padding:15px;background-color:rgb(255,255,255);border:1px;width :calc((100% - 40px) / 3); box-sizing:border-box;text-align:center;color:rgb:136,136,136);border-radius:6px;";
      prod.append(num)
      // add the word "product"
      prod.append(document.createTextNode('product'))
      body.append(prod)
    }
// add the body to the document
document.body.append(body)

//the footer
let footer =document.createElement('footer')
footer.className ='footer'
footer.style.cssText='background-color:white ;font-size:16px ;text-align: center ; padding:20px; color :black;'
footer.innerHTML='Copyright 2024'


//add the footer to the document
document.body.append(footer)