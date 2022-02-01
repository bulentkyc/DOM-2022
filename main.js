//alert(123)

console.log(document.getElementById('chapter'));

console.log(Date); //Native Object

console.log(window); // Host Object

//Host Object vs Native Object
//If an object comes with the host envoirenment, it's a host object.

window.myLuckyNumber = 13;

console.log(myLuckyNumber);

//In the window object directly
var myFavoriteDay = 'Saturday';
console.log(window.myFavoriteDay);

/* Not on the window object directly 
let myFavoriteDay = 'Saturday';
console.log(window.myFavoriteDay); 
*/

//Window object contains all JS and HTML and CSS

function salute (name) {
    console.log('Hello ' + name);
}

window.document.getElementById('chapter').innerHTML = '<span>Hello World!</span>';
window.document.getElementById('chapter').style.color = 'white';
window.salute('Wojtek');

//////////////////////////////////////////////////////////////////////////
//document.getElementById()

console.log(document.getElementById('text'));

document.getElementById('chapter').innerHTML = document.getElementById('text').innerHTML;


//////////////////////////////////////////////////////////////////////////
//document.getElementById().style

console.log(getComputedStyle(document.getElementById('text')).color);

document.getElementById('text').style.color = 'red';