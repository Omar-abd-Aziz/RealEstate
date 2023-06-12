window.open('', '_self', '');

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs,getDoc, setDoc, addDoc, doc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

// TODO: Replace the following with your app's Firebase project configuration

import { firebaseConfig } from './firebase.js';

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let X;

async function getCit(db,X) {
const citiesCol = collection(db,`${X}`);
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());
return cityList;
};


//////////////////////////////////////////////////////////////////////////



function idGenerator() {
    var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+"-"+S4()+"-"+S4());
};







swool();
function swool(){

    Swal.fire({
        title: 'قم بملي البيانات التالية',
        html: `
        
        
        <div class="mainForm">
    
            <label for="name">:الاسم</label>
            <input type="text" dir="auto" autocomplete="off" id="name">

            <label for="city">:المدينة</label>
            <input type="text" dir="rtl" autocomplete="off" id="city" value="">

            <label for="phone">:رقم الجوال</label>
            <input type="number" placeholder="" dir="auto" autocomplete="off" id="phone">

            <label for="totalSalary">:اجمالي الراتب</label>
            <input type="number" dir="rtl" autocomplete="off" id="totalSalary" value="">

            <label for="netSalary">:صافي الراتب</label>
            <input type="number" dir="rtl" autocomplete="off" id="netSalary" value="">

            <label for="bankName">:البنك</label>
            <select dir="auto" id="bankName" style="font-weight: bold; padding: 5px 5px; width: 98%; margin: auto 10px auto 0px; border: 2px solid black; border-radius: 6px;">
              <option value="بنك البلاد">
                بنك البلاد
              </option>
              <option value="البنك السعودي الفرنسي">
                البنك السعودي الفرنسي
              </option>
              <option value=" البنك الاهلي ">
                البنك الاهلي
              </option>
              <option value=" بنك الرياض  ">
                بنك الرياض 
              </option>
              <option value=" البنك العربي ">
                البنك العربي
              </option>
              <option value=" بنك ساب  ">
                بنك ساب 
              </option>
              <option value=" البنك الاول ">
                البنك الاول
              </option>
              <option value=" البنك السعودي للاستثمار ">
                البنك السعودي للاستثمار
              </option>
              <option value=" بنك الراجحي ">
                بنك الراجحي
              </option>
              <option value=" بنك الجزيرة ">
                بنك جزيرة
              </option>
              <option value=" مصرف الانماء ">
                مصرف الانماء
              </option>
              <option value=" بنك اخر ">
                بنك اخر...
              </option>
            </select>

            <label for="sector">:القطاع</label>
            <select dir="auto" id="sector" name="carlist" form="carform" style="font-weight: bold; padding: 5px 5px; width: 98%; margin: auto 10px auto 0px; border: 2px solid black; border-radius: 6px;">
              <option value="مدني">
                مدني
              </option>
              <option value="عسكري">
                عسكري
              </option>
            </select>
    
           
            <label for="Q1">:هل يوجد ايقاف خدمات</label>
            <select dir="auto" id="Q1"  style="font-weiht: bold; padding: 5px 5px; width: 98%; margin: auto 10px auto 0px; border: 2px solid black; border-radius: 6px;">
              <option value="نعم">
                نعم
              </option>
              <option value="لا">
                لا
              </option>
            </select>

            <label for="Q2">:هل يوجد متعثرات</label>
            <select dir="auto" id="Q2" style="font-weiht: bold; padding: 5px 5px; width: 98%; margin: auto 10px auto 0px; border: 2px solid black; border-radius: 6px;">
              <option value="نعم">
                نعم
              </option>
              <option value="لا">
                لا
              </option>
            </select>

            <label for="Q3">:هل يوجد عقاري</label>
            <select dir="auto" id="Q3" style="font-weiht: bold; padding: 5px 5px; width: 98%; margin: auto 10px auto 0px; border: 2px solid black; border-radius: 6px;">
              <option value="نعم">
                نعم
              </option>
              <option value="لا">
                لا
              </option>
            </select>
    
            

            <label for="note">:الملاحظة</label>
            <textarea type="text" dir="rtl" autocomplete="off" id="note" value="" rows="4" style="width: 98%; border: 2px solid black; border-radius: 6px;"></textarea>

        </div>
        
        
        `,
        confirmButtonText: 'ارسال',
    }).then(async (result) => {    
        if (result.isConfirmed) {


            
            const inputOptions = new Promise(() => {
                setTimeout(() => {

                }, 4000)
            })
            
            
            
           
  

            let name=document.querySelector("#name").value;
            let city=document.querySelector("#city").value;
            let phone=document.querySelector("#phone").value;
            let totalSalary=document.querySelector("#totalSalary").value;
            let netSalary=document.querySelector("#netSalary").value;
            let bankName=document.querySelector("#bankName").value;
            let sector=document.querySelector("#sector").value;
            let Q1=document.querySelector("#Q1").value;
            let Q2=document.querySelector("#Q2").value;
            let Q3=document.querySelector("#Q3").value;
            let note=document.querySelector("#note").value;

            


            if(
                (name).trim()!==""&&
                (city).trim()!==""&&
                (phone).trim()!==""&&
                (totalSalary).trim()!==""&&
                (netSalary).trim()!==""&&
                (bankName).trim()!==""&&
                (sector).trim()!==""&&
                (Q1).trim()!==""&&
                (Q2).trim()!==""&&
                (Q3).trim()!==""
            ){

                if((netSalary).trim()<7000 || (Q3).trim()=="نعم" || (bankName).trim()!=="بنك الراجحي"){

                    Swal.fire({
                        icon: 'error',
                        title: 'عملينا العزيز تم رفض طلبك',
                        text: '',
                    })

                } else if((netSalary).trim()>=7000){

                    SendData(name,city,phone,totalSalary,netSalary,bankName,sector,Q1,Q2,Q3,note);

                    await Swal.fire({
                        title: '..برجاء الانتظار',
                        input: 'radio',
                        inputOptions: inputOptions,
                    })
                }


            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'برجاء كتابة البيانات بشكل صحيح',
                }).then((x)=>{
                    swool();
                });
            }


            
            
        };
    });

};

document.querySelector("#simpleBtn").addEventListener("click",()=>{

    swool();

});



async function SendData(name,city,phone,totalSalary,netSalary,bankName,sector,Q1,Q2,Q3,note){

    
    let country_calling_code;
    await fetch("https://ipapi.co/json/").then(e=>e.json()).then(data=>{
        country_calling_code=data.country_calling_code;
    });


    let randomOrderNumber = (Math.random()*1000000000).toFixed();



/* Start Send Whatsapp Message */

let HelloMassage=`

عميلنا العزيز ( ${name} )
تم استلام طلبك
رقم الطلب : ${randomOrderNumber}
الرجاء الاحتفاظ بهذه الرسالة وسوف يقوم فريقنا بالتواصل معك فور التاكد من بيانات طلبك
سعدنا بخدمتك يومك سعيد
    
`;
country_calling_code = country_calling_code.replace("+", "");
    
HelloMassage=HelloMassage.trim();
let whatappAPI=`https://wa.karzoun.app/api/send?number=${country_calling_code+Number(phone)}&type=text&message=${encodeURIComponent(HelloMassage)}&instance_id=6485D6EB5C03E&access_token=1757991908`;
console.log(whatappAPI);
    
try {
  fetch(whatappAPI, { mode: 'no-cors' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log("done")
    });
} catch (error) {
  console.log("error")
}

/* End Send Whatsapp Message */
    




    
    let id=idGenerator();

    setDoc(doc(db,"Orders",id), {

        id: id,
        name: name,
        city: city,
        phone: phone,
        totalSalary: totalSalary,
        netSalary: netSalary,
        bankName: bankName,
        sector: sector,
        Q1: Q1,
        Q2: Q2,
        Q3: Q3,
        note: note,
        ArrayOfOrderFilesLinks:[],

        date: Date.now(),
        orderDate: showDate(),
        orderNumber: randomOrderNumber,
        country_calling_code: country_calling_code,
        isAccepted: "Orders-New",
    }).then(e=>{
        Swal.fire('تم الارسال سنقوم بالتواصل معك ', '', 'success').then((e)=>{
            
            
        });
    })



};




/* 1 start function to get data now */
function showDate(){
  
    const d = new Date();
    
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let hour = d.getHours();
    let mint = d.getMinutes();
    
    if(mint<10){
      mint=`0${mint}`
    }
    
    let dateNow;


    if (hour>=12){
      
      dateNow= `
        ${year}/${month+1}/${day}
        => ${hour-12}:${mint} PM
        `;

    } else if (hour<=11){
      
        dateNow = `
        
        ${year}/${month+1}/${day}
           ${hour}:${mint} AM
        
        `;
    }
    return dateNow;
}


/* 1 end function to get data now */




