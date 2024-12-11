async function IP_TEST() {
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {

console.log(data);


const newDiv = document.createElement('h1');

newDiv.textContent = `${data.ip}`;

newDiv.style.color = 'blue';
newDiv.style.fontSize = '20px';

document.body.appendChild(newDiv);

IP_local(data.ip)
})
.catch(error => {
console.error("Ошибка при получении IP-адреса:", error);
});
}

async function IP_local(ip) {
fetch(`https://ip-api.com/${ip}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    createText(data);
    document.querySelector("body").innerHTML(`
    <ul>
        <li> Country :${data.city}</li>
        <li> City: ${data.regionName}</li>
        <li> Mobile : ${data.as}</li>
    </ul>
    `);

});

}

IP_TEST();






