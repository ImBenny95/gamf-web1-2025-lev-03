const apiUrl = 'https://nettuts.hu/jms/ImBenny95/'; // API URL, ide a saját Github neved kell írni!

export const getAll = (entity = 'users') => {
  return fetch(apiUrl + entity).then(res => res.json()); //"res" lehet tetszőleges név, a fetch() metódus visszatérési értéke egy "Response" objektum, aminek van egy json() metódusa, ami visszaadja a válaszban kapott JSON-t
};