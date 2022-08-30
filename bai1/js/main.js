// list mau 
let arrColor = ["pallet", "viridian", "pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];
/**
 * @param {*} colors : mang mau sac
 */

let renderButton = (colors) => {
    let output = '';
    for(let i = 0; i< colors.length; i++){
        let color = colors[i];
        output += `
        <button class="color-button ${color}" onclick="changeColor('${color}')"></button> 
        `
        document.querySelector('#colorContainer').innerHTML = output;
    }
}
renderButton(arrColor);
// console.log(arrColor);

let changeColor = (color) => {
  let change = document.querySelector('#house');
  change.className = color;
  change.classList.toggle('house');
  // document.querySelector('#house').className = color;
}