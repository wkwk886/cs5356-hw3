// 获取随机狗狗图片
async function getDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        const dogImage = document.createElement('img');
        dogImage.src = data.message;
        dogImage.alt = 'Random dog';
        dogImage.style.maxWidth = '300px';
        
        const container = document.getElementById('dog-image');
        container.innerHTML = ''; 
        container.appendChild(dogImage);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('dog-image').textContent = 'Failed to load dog image';
    }
}

window.addEventListener('load', getDogImage);