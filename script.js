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





//    let mybutton = document.getElementById("myBtn");

//     // Когда пользователь прокручивает вниз 20px от верхней части документа, покажите кнопку
//     window.onscroll = function() {scrollFunction()};
    
//     function scrollFunction() {
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//       } else {
//         mybutton.style.display = "none";
//       }
//     }
    
//     // Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
//     function topFunction() {
//       document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
//     } 


// content - это идентификатор того дива внутри которого должно лежать все содержимое, которое должно прокручиваться, если все содержимое страниц вашего сайта лежит в другом id, то можете его сюда вписать, т. к. без этого кнопки работать не будут
 
$(function() {
    var $elem = $('#content');
     
    // при помощи следующих двух строчек производится показ кнопок
     
    $('#nav_up').fadeIn('slow');
    $('#nav_down').fadeIn('slow');
     
    // при прокрутке у кнопок появляется эффект затухания, реализовано это изменением их прозрачности, поэтому меняя показатель 0,2 в диапазоне от 0,1 до 1 можно регулировать их прозрачность
     
    $(window).bind('scrollstart', function(){
    $('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
    });
     
    // здесь можно регулировать ту же прозрачность, но уже в тот момент когда кнопки просто отображаются на странице, по умолчанию значение - 1
     
    $(window).bind('scrollstop', function(){
    $('#nav_up,#nav_down').stop().animate({'opacity':'1'});
    });
     
    // изменяя число 800 можно увеличивать или уменьшать скорость прокрутки страницы вверх
     
    $('#nav_down').click(
    function (e) {
    $('html, body').animate({scrollTop: $elem.height()}, 800);
    }
    );
     
    // то же, что и выше но для прокрутки вниз
     
    $('#nav_up').click(
    function (e) {
    $('html, body').animate({scrollTop: '0px'}, 800);
    }
    );
    });