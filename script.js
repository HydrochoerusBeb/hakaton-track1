const table = document.getElementById('table');

// Функция чтения данных из файла
function loadCSV() {
    return fetch('Skolopendra_Kei_774_s_1_dopolnenie_1__1.csv')
        .then(response => response.text())
        .then(data => {
            const items = data.trim().split('\n').map(line => {
                const [from, towhere, date, type] = line.split(';');
                return { from, towhere, date, type };
            });
            return items;
        });
}

// Функция вывода одного объекта из массива
function getTableRow(item) {
    const row = document.createElement('div');
    const cells = ['from', 'towhere', 'date', 'type'].map(key => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = item[key];
        return cell;
    });

    row.classList.add('row');
    row.append(...cells);

    return row;
}

// Функция отрисовки таблицы
function renderTable(items) {
    table.innerHTML = '';
    items.forEach(item => table.appendChild(getTableRow(item)));
}

// Загрузка данных и отрисовка таблицы
loadCSV()
    .then(items => {
        renderTable(items);

        // Поиск
        const form = document.getElementById('form');
        const delay = 1000; // Задержка перед поиском

        form.addEventListener('input', () => {
            setTimeout(() => {
                const from = document.getElementById('from').value.toLowerCase().trim();
                const towhere = document.getElementById('towhere').value.toLowerCase().trim();
                const type = document.getElementById('type').value.toLowerCase().trim();
                
                const filteredItems = items.filter(item => {
                    const itemFrom = item.from.toLowerCase();
                    const itemTowhere = item.towhere.toLowerCase();
                    const itemType = item.type.toLowerCase();
                    return itemFrom.includes(from) && itemTowhere.includes(towhere) && itemType.includes(type);
                });

                renderTable(filteredItems);
            }, delay);
        });
    })
    .catch(error => console.error(error));