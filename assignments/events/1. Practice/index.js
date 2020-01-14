//Select the section with an id of container without using querySelector.

const container = document.getElementById('container');

//Select the section with an id of container using querySelector.
document.querySelector('#container');

//Select all of the list items with a class of "second".
document.getElementsByClassName('.second')


//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third');


//Give the section with an id of container the text "Hello!".
const container =  document.querySelector('#container');
const para = document.createElement('p');
para.textContent = 'Hello!';
container.append(para);

//Add the class main to the div with a class of footer.
document.querySelector(".footer").classList.add('main');

//Remove the class main on the div with a class of footer. 
document.querySelector('.footer').classList.remove('footer');

//Create a new li element.
const listItem = document.createElement('li');

//Give the li the text "four".
listItem.innerText = ("four");

//Append the li to the ul element.
document.querySelector('ul').append(listItem);

//Loop over all of the list inside the ol tag and give them a background color of "green".

const orderedList = document.querySelectorAll('ol li');
for (let i of orderedList) {
    i.style.background = 'green';
}


//Remove the div with a class of footer.
//answer commented purposely as it removes the footer for other tests
// var futer = document.querySelector('.main');
// futer.remove();