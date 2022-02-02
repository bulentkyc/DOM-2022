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

//////////////////////////////////////////////////////////////////////////

const welcoming = document.getElementById('chapter');

welcoming.innerHTML = 'Hey everybody!';
welcoming.style.color = 'yellow';


const select = (id) => {
    return document.getElementById(id);
}

select('text').innerHTML = '<h2>Our function works insane!</h2><h2>Test</h2>';
select('text').style.cssText = 'color: yellow; font-size: 50px';
select('chapter').style.color = 'white';

document.querySelector('#text>h2').style.fontSize = '20px';

console.log(document.querySelectorAll('#text>h2'));

const mySelector = (selector) => {
    const items = document.querySelectorAll(selector);
    console.log(items);

    if (items.length == 1) {
        return items[0];
    } else {
        return items;
    }
}

mySelector('#text').style.color = 'coral'

console.log(mySelector('#text>h2')[1].style);