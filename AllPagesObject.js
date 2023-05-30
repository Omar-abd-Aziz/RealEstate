let AllPagesObject = [
{
  name: "الطلبات",
  link: "./Dashboard-Orders.html",
  iconClass: "fa-regular fa-circle-user fa-fw",
  iconStyle: "color: black;",
},
// {
//   name: "الشحن",
//   link: "./Dashboard-Delivery.html",
//   iconClass: "fa-solid fa-truck",
//   iconStyle: "color: black;",
// },
{
  name: "العملاء",
  link: "./Dashboard-Accepted.html",
  iconClass: "fa-regular fa-circle-user fa-fw",
  iconStyle: "color: green;",
},
{
  name: "الارشيف",
  link: "./Dashboard-Archived.html",
  iconClass: "fa-solid fa-folder-open fa-fw",
  iconStyle: "color: gray;",
},

]
  
document.querySelector(".AllPagesBtns").innerHTML=""
AllPagesObject.forEach(e=>{
  document.querySelector(".AllPagesBtns").innerHTML+=`
      
      <a class="active d-flex align-center fs-14 c-black rad-6 p-10" style="${(`.${location.pathname}`==`${e.link}`)?"background: rgba(176, 206, 226, 0.85)":"background: white;"};display: flex; justify-content: end;" href="${e.link}">
        <span style="font-weight: bold; font-size:20px;">${e.name}</span>
        <i class="${e.iconClass}" style=" ${e.iconStyle}  font-weight: bold; font-size:20px; margin-left: 10px;"></i>
      </a>
      
  `
});






  