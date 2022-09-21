// Vanilla JavaScript DOM Challenges //


// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).
const div = document.createElement('div');

// 2. Add a class of "boxy" to that div.
div.classList.add('boxy');

// 3. Add two paragraphs of text to that div with the text of your choosing.
div.innerHTML = '<p>First para</p><p>Second Para</p>';

// 4. Insert the div into the DOM just after the h1.
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', div);

// 5. Add a third paragraph to the div after it’s in the DOM.
div.insertAdjacentHTML('beforeend', '<p>Third para</p>');



// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const list = document.querySelector('.list');
list.lastElementChild.insertAdjacentHTML('beforeend', `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`);

// 2. Add a paragraph after the list of items with a class of "glow."
list.insertAdjacentHTML('afterend', '<p class="glow">glow para</p>');

// 3. Remove a card when its button is clicked.
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.onclick = () => button.parentElement.remove();
// });

// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.parentElement.firstElementChild.classList.toggle('glow');
//     });
// });

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")
// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.parentElement.children[1].textContent = 'I’m the greatest!';
//     });
// });

//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const container = document.querySelector('.card-container');
container.insertAdjacentHTML('afterend', '<button class="btn">Add more cards</button>');
container.nextSibling.id = 'btn';

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).
const btn = document.querySelector('#btn');
const handleclick = () => {
    const length = container.children.length;
    
    container.insertAdjacentHTML('beforeend', `
    <div class="card" id="card-${length+1}">
        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${length+1}" alt="Lorem Ipsum Picture">
        <h2 class="card__heading">Lorem Ipsum Title ${length+1}</h2>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, at! Ipsam, provident omnis? Corrupti illum earum enim, dolorem quas fugiat iste.</p>
        <button class="btn card__btn">Learn More</button>
    </div>
    `)
}

btn.addEventListener('click', handleclick);

// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)
const generateCard = ({title, desc}) => {
    const length = container.children.length;
    
    container.insertAdjacentHTML('beforeend', `
    <div class="card" id="card-${length+1}">
        <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${length+1}" alt="Lorem Ipsum Picture">
        <h2 class="card__heading">${title} ${length+1}</h2>
        <p class="card__description">${desc}</p>
        <button class="btn card__btn">Learn More</button>
    </div>
    `)
}
generateCard({
    title: 'Another title',
    desc: 'This is a descriptive paragraph'
});
generateCard({
    title: 'Another title',
    desc: 'This is a descriptive paragraph'
});
generateCard({
    title: 'Another title',
    desc: 'This is a descriptive paragraph'
});

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)
const handleImgClicked = (e) => {
    if(!e.target.classList.contains('card__image')) return;
    e.target.closest('.card').remove();
}

container.addEventListener('click', handleImgClicked);

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.
container.insertAdjacentHTML('beforebegin', `<button class="btn" id="changeColorBtn">Change Color Scheme</button>`);
const colorBtn = document.querySelector('#changeColorBtn')

colorBtn.addEventListener('click', () => {
    const randColor = Math.floor(Math.random() * 360);
    document.documentElement.style.setProperty('--_hue', randColor);
});