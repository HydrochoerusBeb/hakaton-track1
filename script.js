let items = [
    { from: 'Казань', towhere: 'Рыбинск', date: '23.04.2023', type: 'боковой' },
    { from: 'Москва', towhere: 'Екатеринбург', date: '28.09.2023', type: 'задний' },
    { from: 'Санкт-петербург', towhere: 'Куда-то', date: '14.04.2023', type: 'любой' },
    { from: 'Тула', towhere: 'Ростов на Дону', date: '05.06.2023', type: 'боковой' },
    { from: 'Казань', towhere: 'Рыбинск', date: '17.05.2023', type: 'любой' },
    { from: 'Казань', towhere: 'Рыбинск', date: '19.04.2023', type: 'боковой' },
]

// -----------------------------------------------------------------------------------------------

// Функция вывода одного объекта из массива
function getTableItem(itemObj) {
    const container = document.createElement('div');
    const from = document.createElement('div');
    const towhere = document.createElement('div');
    const date = document.createElement('div');
    const type = document.createElement('div');

    container.classList.add('row');
    from.classList.add('cell')
    towhere.classList.add('cell')
    date.classList.add('cell')
    type.classList.add('cell')

    from.textContent = itemObj.from
    towhere.textContent = itemObj.towhere
    date.textContent = itemObj.date
    type.textContent = itemObj.type

    container.append(from, towhere, date, type);

    return container
}


// Отрисовка таблицы
function renderTable(items) {
    const table = document.getElementById('table');

    for (item of items) {
        table.append(getTableItem(item))
    }
}
renderTable(items);


// Поиск
const form = document.getElementById('form');

form.addEventListener('input', function() {
    const from = document.getElementById('from').value.toLowerCase().trim();
    const towhere = document.getElementById('towhere').value.toLowerCase().trim();
    const table = document.getElementById('table');

    const filteredItems = items.filter(item => {
        const itemFrom = item.from.toLowerCase();
        const itemTowhere = item.towhere.toLowerCase();
        return itemFrom.includes(from) && itemTowhere.includes(towhere);
    });

    table.innerHTML = ''; // очищаем таблицу перед добавлением новых элементов

    renderTable(filteredItems)
});