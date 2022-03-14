//DOM ACCESSİNG

// id de tek obje döndü. ıd daha hızlı
let firstNameById=document.getElementById("first_name");
console.log(firstNameById);

// //html collection döndü s var .tek element olsaydı da classı olan collection döndü.
// let firstNameByClassName=document.getElementsByClassName("input--style-4")[0];
// console.log(firstNameByClassName);
// //nodelist geliyor. foreach kullanılabiliyor. yada array olması lazım
// // for döngüsüyle tamamını kullanabiliyoruz.
// let firstNameByName=document.getElementsByName("first_name")[0];
// console.log(firstNameByName);
// // 1 ıd 2 selector css gibi
// let firstNameBySelectorId=document.querySelector("#first_name");
// window.console.log(firstNameBySelectorId);
// // class ile kullnımı
// // query selector ile şartlara uyan ilk elemenı döndürdü.İlk eleman-tek eleman
// let firstNameBySelectorClassName=window.document.querySelector(".input--style-4");
// window.console.log(firstNameBySelectorClassName);

// // direk name olarak yakaladık
// let firstNameBySelectorName=document.querySelector("[name='first_name']");
// console.log(firstNameBySelectorName);
// // input üzerinden yakaladık
// let firstNameBySelectorInputName=document.querySelector("input[name=first_name]");
// console.log(firstNameBySelectorInputName);

//queryselector all ile şarta uyan bütün class ları döndürür.
//getElemenByClassName => Array.form(HTMLCollection).foreach() -- aşağıdaki bilgi için
//getElemenByName => Nodelist.foreach()
//querySelectorAll => Nodelist döndü

// Collection nodelist ve array collection array gibi kullanamıyoruz.
//Collection u array e çevirmemiz lazım itere etmek için.
// let firstNameBySelectorAllClass=window.document.querySelectorAll(".input--style-4");
// window.console.log(firstNameBySelectorAllClass);


//property--obje taraflı vs. attribute -- html taraflı
//property objelerde oluyor. 



console.log(firstNameById.getAttribute("id"));
console.log(firstNameById.getAttribute("class"));

// firstNameById.setAttribute("class","redColorClass");
// firstNameById.setAttribute("type" ,"radio")

//innerHTML innerText, textContent, value