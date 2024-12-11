async function IP_TEST() {
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
IP_local(data.ip);
})
.catch(error => {
console.error("Ошибка при получении IP-адреса:", error);
});
}

async function IP_local(ip) {
fetch(`https://ipapi.co/${ip}/json/`)
.then(response => response.json())
.then(data => {
    createText(data);
    document.querySelector("body").innerHTML(`
    <ul>
        <li>${data.city}</li>
        <li>${data.region}</li>
        <li>${data.country_name}</li>
    </ul>
    `);

});

}

IP_TEST();






