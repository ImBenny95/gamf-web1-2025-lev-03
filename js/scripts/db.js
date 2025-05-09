const apiUrl = 'https://nettuts.hu/jms/ImBenny95/'; // API URL - saját azonosítóval, ezt NE módosítsd más nevére!

// Az összes adat lekérdezése GET metódussal
export const getAll = (entity = 'users') => {
  return fetch(apiUrl + entity) // Lekérjük az adott entitás összes rekordját
    .then(res => res.json()); // A válaszból JSON-t csinálunk
};

// Egy adott elem törlése ID alapján
export const remove = (id, entity = 'users') => {
  return fetch(apiUrl + entity + '/' + id, { // Az adott ID-hez tartozó elem elérése
    method: 'DELETE' // HTTP DELETE metódust használunk
  });
};
