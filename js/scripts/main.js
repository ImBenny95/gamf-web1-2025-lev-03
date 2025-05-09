import {getAll} from './db.js';

const table = document.querySelector('table.table'); //Az a tábla amelyik a tábla osztályt tartalmazza, a table változóban tároljuk el

const generateTable = (data = []) => {
    console.log(data); // Ellenőrzéshez

    const thead = document.createElement('thead'); // Létrehozzuk a thead elemet
    table.appendChild(thead); // A táblához adjuk hozzá a thead elemet

    const keys = Object.keys(data[0]); // Az első elem kulcsait lekérjük, hogy tudjuk milyen oszlopokat kell létrehozni
    const tr = document.createElement('tr'); // Létrehozzuk a tr elemet
    thead.appendChild(tr); // A thead-hez adjuk hozzá a tr elemet
    keys.forEach(key => { // Végigmegyünk a kulcsokon
        const th = document.createElement('th'); // Létrehozzuk a th elemet
        tr.appendChild(th); // A tr-hez adjuk hozzá a th elemet
        th.innerText = key; // A th elem szövegét beállítjuk a kulcsra
    });
    const th = document.createElement('th'); // Létrehozzuk a th elemet
    tr.appendChild(th); // A tr-hez adjuk hozzá a th elemet

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    data.forEach(row => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        keys.forEach(key => {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = row[key];
        });
        const td = document.createElement('td');
        tr.appendChild(td);

        const btnGroup = document.createElement('div');
        td.appendChild(btnGroup);
        btnGroup.classList.add('btn-group');

        const infoBtn = document.createElement('button');
        btnGroup.appendChild(infoBtn);
        infoBtn.classList.add('btn', 'btn-info');
        infoBtn.innerText = 'Info';
    });
};

getAll().then(data => generateTable(data));