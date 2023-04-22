const items = [];

// Функция чтения данных из файла
function loadCSV() {
    return fetch('Skolopendra_Kei_774_s_1_dopolnenie_1__1.csv')
        .then(response => response.text())
        .then(data => {
            const items = data.trim().split('\n').map(line => {
                const values = line.split(';');
                return {
                    from: values[0],
                    towhere: values[1],
                    date: values[2],
                    type: values[3]
                };
            });
            return items;
        });
}

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


const table = document.getElementById('table');

fetch('Skolopendra_Kei_774_s_1_dopolnenie_1__1.csv')
    .then(response => response.text())
    .then(data => {
        const items = [];
        data.trim().split('\n').forEach(line => {
            const values = line.split(',');
            const item = {
                from: values[0],
                towhere: values[1],
                date: values[2],
                type: values[3]
            };
            items.push(item);
        });
        renderTable(items); // вызов функции renderTable
    })
    .catch(error => {
        console.error(error);
    });

function renderTable(items) {
    table.innerHTML = ''; // очистка таблицы
    for (const item of items) {
        const row = getTableItem(item);
        table.appendChild(row);
    }
}



// Загрузка данных и отрисовка таблицы
loadCSV()
    .then(items => {
        renderTable(items);

        // Поиск
        const form = document.getElementById('form');

        form.addEventListener('input', function () {
            setTimeout(function () {
                const from = document.getElementById('from').value.toLowerCase().trim();
                const towhere = document.getElementById('towhere').value.toLowerCase().trim();
                const type = document.getElementById('type').value.toLowerCase().trim();
                const table = document.getElementById('table');

                const filteredItems = items.filter(item => {
                    const itemFrom = item.from.toLowerCase();
                    const itemTowhere = item.towhere.toLowerCase();
                    const itemType = item.type.toLowerCase();
                    return itemFrom.includes(from) && itemTowhere.includes(towhere) && itemType.includes(type);
                });

                table.innerHTML = ''; // очищаем таблицу перед добавлением новых элементов

                renderTable(filteredItems);
            }, 1000);
        });
    });
