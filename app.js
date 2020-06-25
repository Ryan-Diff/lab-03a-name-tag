// const myButton = document.getElementById('my-special-button');

// myButton.addEventListener('click', () => {
//     // post-click logic goes here!
// })

// const myInput = document.getElementById('my-special-input');

// myInput.addEventListener('input', () => {
//     // post-click logic goes here!
// })

const pinkButton = document.getElementById('pinkButton');
pinkButton.addEventListener('click', () => {
    //Need to get DIV we want to change
    //Change Backround color of DIV
    const pinkback = document.getElementById('nametag');
    pinkback.style.background = 'pink';
});

const blueButton = document.getElementById('blueButton');
blueButton.addEventListener('click', () => {
    const blueback = document.getElementById('nametag');
    blueback.style.background = 'lightblue';
});
        
const greenButton = document.getElementById('greenButton');
greenButton.addEventListener('click', () => {
    const greenback = document.getElementById('nametag');
    greenback.style.background = 'lightgreen'; 
});

const myButton = document.getElementById('nameButton');
myButton.addEventListener('click', () => {
    const userNameInput = document.getElementById('nameField');
    const nameDisplay = document.getElementById('nametag');
    const value = userNameInput.value;
    nameDisplay.textContent = value;

});