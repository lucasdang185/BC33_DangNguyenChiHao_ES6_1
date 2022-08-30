// console.log(sum(1,2,3))

// document.querySelector('#frm1').onclick = (...arrInput) => {
//     arrInput = +document.querySelectorAll('#frm1 input','frm2 input');

// }

let average = (...arrInput) => {
  let num1 = +document.querySelector("#inpToan").value;
  let num2 = +document.querySelector("#inpLy").value;
  let num3 = +document.querySelector("#inpHoa").value;
  let num4 = +document.querySelector("#inpVan").value;
  let num5 = +document.querySelector("#inpSu").value;
  let num6 = +document.querySelector("#inpDia").value;
  let num7 = +document.querySelector("#inpEnglish").value;
  var diemTB1 = (num1+num2+num3)/3;
  var diemTB2 = (num4+num5+num6+num7)/4;
  document.querySelector('#tbKhoi1').innerHTML=diemTB1;
  document.querySelector('#tbKhoi2').innerHTML=diemTB2;
};

// let average = (...rest) => {
//   switch (rest.length) {
//     case 2:
//       {

//       }
//       break;
//     case 3:
//       {
//       }
//       break;
//       default:{
//         console.log('');
//       }
//   }
// };
