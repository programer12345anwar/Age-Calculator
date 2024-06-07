document.addEventListener("DOMContentLoaded", function() {
    const btnE1 = document.getElementById("btn");
    const birthdayE1 = document.getElementById("birthday");
    const resultE1 = document.getElementById("result");
  
    function calculateAge() {
      const birthdayValue = birthdayE1.value;
      //console.log(`Birthday value: ${birthdayValue}`);
      if (birthdayValue === "") {
        customAlert("Please enter your birthday");
      } else {
        const age = getAge(birthdayValue);
        if(age<0){
            age=0;
        }
       
        resultE1.innerHTML = `Your are ${age} ${age > 1 ? "years" : "year"} old`;
      }
    }
  
    function getAge(birthdayValue) {
      const currentDate = new Date();
      const birthDate = new Date(birthdayValue);
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      const month = currentDate.getMonth() - birthDate.getMonth();
  
      if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age;
    }
  
    function customAlert(message) {
      const width = 300;
      const height = 200;
      const left = (window.innerWidth / 2) - (width / 2);
      const top = window.scrollY + 100; // Adjust this value to position vertically
      const alertWin = window.open("", "CustomAlert", `width=${width},height=${height},top=${top},left=${left}`);
      alertWin.document.write(`
        <html>
          <head>
            <title>Alert</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              button { padding: 10px 20px; }
            </style>
          </head>
          <body>
            <p>${message}</p>
            <button onclick="window.close()">OK</button>
          </body>
        </html>
      `);
    }
  
    btnE1.addEventListener("click", calculateAge);
  });
  
  
//document.addEventListener("DOMContentLoaded", function() {
//     const btnE1 = document.getElementById("btn");
//     const birthdayE1 = document.getElementById("birthday");
//     const resultE1 = document.getElementById("result");
  
//     function calculateAge() {
//       const birthdayValue = birthdayE1.value;
//       console.log(`Birthday value: ${birthdayValue}`);
//       if (birthdayValue === "") {
//         customAlert("Please enter your birthday");
//       } else {
//         const age = getAge(birthdayValue);
//         console.log(`Calculated age: ${age}`);
//         resultE1.innerHTML = `Your are ${age} ${age > 1 ? "years" : "year"} old`;
//       }
//     }
  
//     function getAge(birthdayValue) {
//       const currentDate = new Date();
//       const birthDate = new Date(birthdayValue);
//       let age = currentDate.getFullYear() - birthDate.getFullYear();
//       const month = currentDate.getMonth() - birthDate.getMonth();
  
//       if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
//         age--;
//       }
  
//       return age;
//     }
  
//     function customAlert(message) {
//       const alertWin = window.open("", "CustomAlert", "width=300,height=200");
//       alertWin.document.write(`
//         <html>
//           <head>
//             <title>Alert</title>
//             <style>
//               body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
//               button { padding: 10px 20px; }
//             </style>
//           </head>
//           <body>
//             <p>${message}</p>
//             <button onclick="window.close()">OK</button>
//           </body>
//         </html>
//       `);
//     }
  
//     btnE1.addEventListener("click", calculateAge);
//   });
  
// document.addEventListener("DOMContentLoaded", function() {
//     const btnE1 = document.getElementById("btn");
//     const birthdayE1 = document.getElementById("birthday");
//     const resultE1 = document.getElementById("result");
  
//     function calculateAge() {
//       const birthdayValue = birthdayE1.value;
//       if (birthdayValue === "") {
//         alert("Please enter your birthday");
//       } else {
//         const age = getAge(birthdayValue);
         
//         resultE1.innerHTML= `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//       }
//     }
  
//     function getAge(birthdayValue) {
//       const currentDate = new Date();
//       const birthDate = new Date(birthdayValue);
//       let age = currentDate.getFullYear() - birthDate.getFullYear();
//       const month = currentDate.getMonth() - birthDate.getMonth();
  
//       if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
//         age--;
//       }
  
//       return age;
//     }
  
//     btnE1.addEventListener("click", calculateAge);
//   });
  
