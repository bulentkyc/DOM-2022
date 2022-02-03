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

select('text').innerHTML = '<h2>Our function works insane!</h2><h2 class="red-text">Test</h2>';
select('text').style.cssText = 'color: yellow; font-size: 50px';
select('chapter').style.color = 'white';

document.querySelector('#text>h2').style.fontSize = '20px';

console.log(document.querySelectorAll('#text>h2'));

const $ = (selector) => {
    const items = document.querySelectorAll(selector);
    console.log(items);

    if (items.length == 1) {
        return items[0];
    } else {
        return items;
    }
}
////////////////// element.classList //////////////////
$('#text').style.color = 'coral'

console.log($('#text>h2')[1].style);

const h2 = $('#second > h2');

h2.classList.add('lg-text');
h2.classList.add('carlos');

console.log(h2.classList);

h2.classList.remove('red-text');

console.log(h2.classList);

////////////////// document.createElement() /////////////////
//syntax: let element = document.createElement(tagName[, options]);

const myFirstElement = document.createElement('article');
myFirstElement.innerText = `Hey there! I'm your newest article`;

console.log(myFirstElement);

////////////////// element.appendChild() /////////////////
//syntax: appendChild(aChild);

$('#second').appendChild(myFirstElement);

$('#second').append('Essence');

$('#second').insertAdjacentHTML('beforebegin', '<section><h1>Done!</h1></section>');

//////////////////////////////////////////////////////////
$('section').appendChild(myFirstElement);

const newItem = '<h1>New Item</h1>';

$('#second').insertAdjacentHTML('beforebegin', newItem);
$('section').insertAdjacentHTML('beforebegin', newItem);

//////////////////////////////////////////////////////////
// Elemnts and Nodes

//Node: The generic name of any type of objects in the DOM tree

//Elemnts: Basicly all HTML elements

//////////////////////////////////////////////////////////
//Syntax: node.cloneNode(deep)
let test = $('#text > h2')[1].cloneNode(true); 
//false is the default parameter value

$('#text').appendChild(test);

//////////////////////////////////////////////////////////
//Walking through the DOM

//node.childNodes()

console.log($(`#second`).childNodes);

//element.children()
console.log($(`#second`).children);

//DOM collections are live
//DOM collections are read-only
//Don’t use for..in to loop over collections

$('#target')
.previousElementSibling
.previousElementSibling
.style
.backgroundColor = 'navy';

$('#target')
.parentElement
.style
.backgroundColor = 'tomato';

const main = $('main');

console.log(document.querySelectorAll('div'));
console.log(main.querySelectorAll('div'));