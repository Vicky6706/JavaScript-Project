let currentAngle = 0;
const container = document.querySelector('.image-container');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const span = document.getElementsByClassName('close')[0];

document.getElementById('next').addEventListener('click', () => {
    currentAngle -= 60;
    container.style.transform = `perspective(1000px) rotateY(${currentAngle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    currentAngle += 60;
    container.style.transform = `perspective(1000px) rotateY(${currentAngle}deg)`;
});

const images = document.querySelectorAll('.image-container span img');
images.forEach(img => {
    img.addEventListener('click', () => {
        modalText.innerText = img.getAttribute('data-info');
        modal.style.display = 'block';
    });
});

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function updateTimeAndDate() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);
    dateElement.textContent = currentDate;
}


function showWelcomeAlert() {
    window.alert("Hello! Please click on a photo for showing information.");
}



setInterval(updateTimeAndDate, 1000);


updateTimeAndDate();

window.onload = function() {
    showWelcomeAlert();
    
};


