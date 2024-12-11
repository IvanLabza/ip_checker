async function IP_TEST() {
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {

const newDiv = document.createElement('h1');

newDiv.textContent = `${data.ip}`;

newDiv.style.color = 'blue';
newDiv.style.fontSize = '20px';

document.body.appendChild(newDiv);


})
.catch(error => {
console.error("Ошибка при получении IP-адреса:", error);
});
}

// async function IP_local(ip) {
// fetch(`https://ipapi.co/${ip}/json/`)
// .then(response => response.json())
// .then(data => {
//     createText(data);
//     document.querySelector("body").innerHTML(`
//     <ul>
//         <li>${data.city}</li>
//         <li>${data.region}</li>
//         <li>${data.country_name}</li>
//     </ul>
//     `);

// });

// }

IP_TEST();






