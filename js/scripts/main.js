import { getAll, remove } from './db.js'; // Betöltjük a getAll és remove függvényeket a db.js-ből

const table = document.querySelector('table.table'); // Az a tábla amelyik a "table" osztályt tartalmazza, a table változóban tároljuk el

const generateTable = (data = []) => {
    console.log(data); // Ellenőrzéshez: megnézzük mit kaptunk a szervertől

    const thead = document.createElement('thead'); // Létrehozzuk a thead elemet
    table.appendChild(thead); // A táblához adjuk hozzá a thead elemet

    const keys = Object.keys(data[0]); // Az első elem kulcsait lekérjük, hogy tudjuk milyen oszlopokat kell létrehozni
    const tr = document.createElement('tr'); // Létrehozzuk a tr (sor) elemet
    thead.appendChild(tr); // A thead-hez adjuk hozzá a sort

    keys.forEach(key => { // Végigmegyünk a kulcsokon
        const th = document.createElement('th'); // Létrehozzuk a th (oszlopfej) elemet
        th.innerText = key; // A th elem szövegét beállítjuk a kulcs nevére
        tr.appendChild(th); // A sort bővítjük a th elemmel
    });

    const th = document.createElement('th'); // Létrehozunk egy plusz th oszlopot a műveletek (gombok) számára
    tr.appendChild(th); // Ezt is a sorhoz adjuk hozzá

    const tbody = document.createElement('tbody'); // A táblázat törzse
    table.appendChild(tbody); // A táblázathoz hozzáadjuk a tbody-t

    data.forEach(row => { // Minden adatobjektumra (sorra) ismétlünk
        const tr = document.createElement('tr'); // Új sor létrehozása
        tbody.appendChild(tr); // Hozzáadjuk a tbody-hoz

        keys.forEach(key => { // Az oszlopokat külön-külön hozzáadjuk
            const td = document.createElement('td'); // Egy új cella
            td.innerText = row[key]; // Beállítjuk a cella tartalmát az aktuális értékre
            tr.appendChild(td); // Hozzáadjuk a sorhoz
        });

        const td = document.createElement('td'); // Új cella a műveletekhez (gombok)
        tr.appendChild(td); // Hozzáadjuk a sorhoz

        const btnGroup = document.createElement('div'); // Gombcsoport létrehozása
        btnGroup.classList.add('btn-group'); // Osztály hozzáadása, ha stílus is van rá
        td.appendChild(btnGroup); // A gombcsoportot a cellába tesszük

        // INFO gomb
        const infoBtn = document.createElement('button'); // Info gomb létrehozása
        infoBtn.classList.add('btn', 'btn-info'); // Stílusosztályok (ha van hozzá CSS/Bootstrap)
        infoBtn.innerText = 'Info'; // Gomb felirata
        btnGroup.appendChild(infoBtn); // Gomb hozzáadása a csoporthoz

        // TÖRLÉS gomb
        const deleteBtn = document.createElement('button'); // Törlés gomb létrehozása
        deleteBtn.classList.add('btn', 'btn-danger'); // Vörös gomb stílus, ha van CSS
        deleteBtn.innerText = 'Törlés'; // Gomb felirata
        btnGroup.appendChild(deleteBtn); // Gomb hozzáadása a csoporthoz

        // Kattintás esemény a Törlés gombra
        deleteBtn.addEventListener('click', async () => {
            await remove(row.id); // Meghívjuk a remove() függvényt, amely DELETE kérést küld a szerver felé
            tr.remove(); // A DOM-ból is töröljük a sort, hogy eltűnjön az oldalról
        });
    });
};

// Az oldal betöltésekor lekérjük az összes adatot, majd meghívjuk a táblázatkészítő függvényt
getAll().then(data => generateTable(data));
