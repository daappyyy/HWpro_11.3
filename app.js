function getRandomNum(){
    return Math.floor((Math.random() * 9) + 1);
}
const fileNumber = getRandomNum();
const newImg = document.createElement('img');
const cardImg = document.querySelector('.card-image');
const refreshButton = document.querySelector('.refresh-btn')


refreshButton.addEventListener('click', HandleUserClick);
function HandleUserClick(){
    const fileNumber = getRandomNum();
    newImg.src = `images/${fileNumber}.jpg`;
    newImg.width = 300;
    newImg.height = 300;
    newImg.alt = 'Zhorik';
    cardImg.appendChild(newImg);
}
