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
            <input type="text" dir="rtl" autocomplete="off" id="bankName" value="">

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

                if((totalSalary).trim()<7000){

                    Swal.fire({
                        icon: 'error',
                        title: ' عملينا العزيز تم رفض طلبك لان اجمالي الراتب اقل من 7000 ريال  ',
                        text: '',
                    })

                } else if((totalSalary).trim()>7000){

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


    /* Start Send Whatsapp Massage */

//     let HelloMassage=`

// عميلنا العزيز ( ${name} )
// تم استلام طلبك ( ${active} )
// رقم الطلب : ${randomOrderNumber}
// الرجاء الاحتفاظ بهذه الرسالة وسوف يقوم فريقنا بالتواصل معك فور التاكد من بيانات طلبك
// سعدنا بخدمتك يومك سعيد

//     `;
    
//     HelloMassage=HelloMassage.trim();
//     let whatappAPI=`https://karzoun.app/api/send.php?number=${country_calling_code.slice(1)+Number(`${phone}`)}&type=text&message=${encodeURIComponent(HelloMassage)}&instance_id=63C2CA489C2CA&access_token=1757991908`;
//     console.log(whatappAPI);
    // fetch(whatappAPI);

    /* End Send Whatsapp Massage */
    

    
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





/* 2 start function to get differnce between data now */
function getDiffDate(oldDate){
        
    var starts = moment(`${oldDate}`);
    var ends   = moment();

    var duration = moment.duration(ends.diff(starts));

    // with ###moment precise date range plugin###
    // it will tell you the difference in human terms

    var diff = moment.preciseDiff(starts, ends, true); 
    // example: { "years": 2, "months": 7, "days": 0, "hours": 6, "minutes": 29, "seconds": 17, "firstDateWasLater":  false }


    // or as string:
    var diffHuman = moment.preciseDiff(starts, ends);
    // example: 2 years 7 months 6 hours 29 minutes 17 seconds

    let diffDate=diff;

    if(diffDate.years!==0){
        diffDate={
            "diffDateNum": diffDate.years,
            "diffDateName": "سنة",
        };
    } else if(diff.months!==0){
        diffDate={
            "diffDateNum": diffDate.months,
            "diffDateName": "شهر",
        };
    } else if(diff.days!==0){
        diffDate={
            "diffDateNum": diffDate.days,
            "diffDateName": "يوم",
        };
    } else if(diff.hours!==0){
        diffDate={
            "diffDateNum": diffDate.hours,
            "diffDateName": "ساعة",
        };
    } else if(diff.minutes!==0){
        diffDate={
            "diffDateNum": diffDate.minutes,
            "diffDateName": "دقيقة",
        };
    } else {
        diffDate={
            "diffDateNum": 0,
            "diffDateName": "الان",
        };
    }

    let stringDiffDate = `منذ ${diffDate.diffDateNum + " " + diffDate.diffDateName}`;
    // منذ 1 سنة

    if(diffDate.diffDateName=="الان"){
      stringDiffDate="الان";
    }
    
    // diffDate => json like {diffDateNum: 1, diffDateName: 'سنة'}

    return stringDiffDate;
}
