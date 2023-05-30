let AllPagesObject = [
{
  name: "الطلبات",
  link: "./Dashboard-Orders.html",
  iconClass: "fa-regular fa-circle-user fa-fw",
  iconStyle: "color: black;",
},
{
  name: "الطلبات المقبولة مبدئيا",
  link: "./Dashboard-Accepted-0.html",
  iconClass: "fa-regular fa-circle-user",
  iconStyle: "color: darkred;",
},
{
  name: "قسم المتابعة والتنفيذ",
  link: "./Dashboard-Accepted-1.html",
  iconClass: "fa-regular fa-circle-user",
  iconStyle: "color: #b8a941;",
},
{
  name: "العملاء",
  link: "./Dashboard-Accepted.html",
  iconClass: "fa-regular fa-circle-user fa-fw",
  iconStyle: "color: green;",
},
{
  name: "الطلبات المرفوضة",
  link: "./Dashboard-Archived.html",
  iconClass: "fa-solid fa-folder-open fa-fw",
  iconStyle: "color: gray;",
},

]
  
document.querySelector(".AllPagesBtns").innerHTML=""
AllPagesObject.forEach(e=>{
  document.querySelector(".AllPagesBtns").innerHTML+=`
      
      <a class="active d-flex align-center fs-14 c-black rad-6 p-10" style="${(`.${location.pathname}`==`${e.link}`)?"background: rgba(176, 206, 226, 0.85)":"background: white;"};display: flex; justify-content: end;" href="${e.link}">
        <span style="font-weight: bold; font-size:20px; text-align: end;">${e.name}</span>
        <i class="${e.iconClass}" style=" ${e.iconStyle}  font-weight: bold; font-size:20px; margin-left: 10px;"></i>
      </a>
      
  `
});






  