// $.ajax({
//     url: 'Сколопендра_Кейс 1_дополнение.csv',
//     dataType: 'text',
//   }).done(successFunction);

//   function successFunction(data) {
//     var allRows = data.split(/\r?\n|\r/);
//     var table = '<table>';
//     for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
//       if (singleRow === 0) {
//         table += '<thead>';
//         table += '<tr>';
//       } else {
//         table += '<tr>';
//       }
//       var rowCells = allRows[singleRow].split(',');
//       for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
//         if (singleRow === 0) {
//           table += '<th>';
//           table += rowCells[rowCell];
//           table += '</th>';
//         } else {
//           table += '<td>';
//           table += rowCells[rowCell];
//           table += '</td>';
//         }
//       }
//       if (singleRow === 0) {
//         table += '</tr>';
//         table += '</thead>';
//         table += '<tbody>';
//       } else {
//         table += '</tr>';
//       }
//     } 
//     table += '</tbody>';
//     table += '</table>';
//     $('body').append(table);
//     console.log(table)
//   }



// // let fs = require('fs')
// // fs.readFile('')


// const neatCsv = require('neat-csv');
// const fs = require('fs')

// fs.readFile('./main.csv', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(neatCsv(data))
// })


// // Элемент для выбора файлов.
// const INPUT = document.querySelector('input[name="readable"]');
// // Элемент для вывода сгенерированной таблицы.
// const PREVIEW = document.querySelector('#preview');
// // Регулярное выражение для проверки расширения файла.
// const REGEX = new RegExp('(.*?)\.(csv)$', 'i');

// // Функция, отрабатывающая при выборе файла.
// function handleFile(event) {
//   // Выбираем первый файл из списка файлов.
//   const file = event.target.files[0];

//   // Если файл выбран и его расширение допустимо,
//   // то читаем его содержимое и отправляем
//   // в функцию отрисовки таблицы.
//   if (file && REGEX.test(file.name)) {
//     // Создаем экземпляр объекта.
//     const reader = new FileReader();

//     // Чтение файла асинхронное, поэтому
//     // создание таблицы привязываем к событию `load`,
//     // которое срабатывает при успешном завершении операции чтения.
//     reader.onload = (e) => renderTable(e.target.result);

//     // Читаем содержимое как текстовый файл.
//     reader.readAsText(file);
//   } else {
//     // Мизерная обработка ошибок.
//     alert('Файл не выбран либо его формат не поддерживается.');
//     event.target.value = '';
//   }
// }

// // Функция отрисовки таблицы.
// function renderTable(data) {
//   // Предварительно создадим элементы,
//   // отвечающие за каркас таблицы.
//   let table = document.createElement('table');
//   let thead = document.createElement('thead');
//   let tbody = document.createElement('tbody');

//   // Добавим класс к таблице.
//   table.classList.add('table');

//   // Разбиваем входящие данные построчно.
//   // Разделитель - перенос строки.
//   // Перебираем полученный массив строк.
//   data.split(/\r\n|\r|\n/)
//     .forEach(function(row, index) {
//       // Создадим элемент строки для таблицы.
//       let trow = document.createElement('tr');

//       // Разбиваем каждую строку на ячейку.
//       // Разделитель - точка с запятой.
//       // Перебираем полученный массив будущих ячеек.
//       row.split(/;/).forEach(function(cell) {
//         // Создадим элемент ячейки для таблицы.
//         let tcell = document.createElement(index > 0 ? 'td' : 'th');
//         // Заполним содержимое ячейки.
//         tcell.textContent = cell;
//         // Добавляем ячейку к родительской строке.
//         trow.appendChild(tcell);
//       });

//       // Добавляем строку к родительскому элементу.
//       // Если индекс строки больше нуля,
//       // то родительский элемент - `tbody`,
//       // в противном случае- `thead`.
//       index > 0 ? tbody.appendChild(trow) : thead.appendChild(trow);
//     });

//   // Добавляем заголовок таблицы к родительскому элементу.
//   table.appendChild(thead);
//   // Добавляем тело таблицы к родительскому элементу.
//   table.appendChild(tbody);

//   // Очищаем элемент для вывода таблицы.
//   PREVIEW.innerHTML = '';
//   // Добавляем саму таблицу к родительскому элементу.
//   PREVIEW.appendChild(table);
// }

// // Регистрируем функцию обработчика события `change`,
// // срабатывающего при изменении элемента выбора файла.
// INPUT.addEventListener('change', handleFile);


// import check from './script.js'
// console.log(check)


// let res;

// let obj = {
//     from: [],
//     toWhere: [],
//     date: [],
//     type: []
// }

// let work;
// function func(){
//     // console.log(res.result)
//     work = res.result
//     // console.log(work)
//     let arr = Array.from(work.split(';'))
//     // console.log(arr)
//     arr.shift()
//     // console.log(arr)
//     for(let i = 9; i < arr.length; i+=5){
//         arr[i] = Array.from(arr[i])
//         // console.log(arr[i])
//         // console.log(typeof arr[i])
//         arr[i].pop()
//         arr[i].pop()
//         arr[i].pop()
//         // console.log(arr[i])
//         if(i > 50){
//             arr[i].pop()
//             if(i > 500){
//                 arr[i].pop()
//             }
//         }


//         arr[i] = arr[i].join('')

//         obj.type.push(arr[i])
//         // console.log(arr[i])
//         // if(arr[i].includes('любой')){
//         //     console.log(arr[i])
//         // console.log(typeof arr[i])
//         //     arr[i].replace('любой', 'любой2')
//         // }
//     }
//     for(let i = 5; i < arr.length; i+=5){
//         obj.from.push(arr[i])
//     }
//     for(let i = 6; i < arr.length; i+=5){
//         obj.toWhere.push(arr[i])
//     }
//     for(let i = 7; i < arr.length; i+=5){
//         obj.date.push(arr[i])
//     }


//     console.log(arr)
//     console.log(typeof arr)
//     console.log(obj)
// }

// // Элемент для выбора файлов.
// const INPUT = document.querySelector('input[name="readable"]');
// // Элемент для вывода сгенерированной таблицы.
// // const PREVIEW = document.querySelector('#preview');
// // Регулярное выражение для проверки расширения файла.
// const REGEX = new RegExp('(.*?)\.(csv)$', 'i');

// // Функция, отрабатывающая при выборе файла.
// function handleFile(event) {
//   // Выбираем первый файл из списка файлов.
//   const file = event.target.files[0];

//   // Если файл выбран и его расширение допустимо,
//   // то читаем его содержимое и отправляем
//   // в функцию отрисовки таблицы.
//   if (file && REGEX.test(file.name)) {
//     // Создаем экземпляр объекта.
//     const reader = new FileReader();

//     // Чтение файла асинхронное, поэтому
//     // создание таблицы привязываем к событию `load`,
//     // которое срабатывает при успешном завершении операции чтения.
//     // reader.onload = (e) => {
//     //     // res = e.target.result
//     // }

//     // Читаем содержимое как текстовый файл.
//     reader.readAsText(file);
//     console.log(reader)
//     res = reader
//     console.log(res)
//   func()

//   } else {
//     // Мизерная обработка ошибок.
//     alert('Файл не выбран либо его формат не поддерживается.');
//     event.target.value = '';
//   }
// }


// INPUT.addEventListener('change', handleFile);



// export default handleFile
// export default obj

// let res;

// let obj = {
//     from: [],
//     toWhere: [],
//     date: [],
//     type: []
// }

// // Элемент для выбора файлов.
// const INPUT = document.querySelector('input[name="readable"]');
// // Элемент для вывода сгенерированной таблицы.
// // const PREVIEW = document.querySelector('#preview');
// // Регулярное выражение для проверки расширения файла.
// const REGEX = new RegExp('(.*?)\.(csv)$', 'i');

// // Функция, отрабатывающая при выборе файла.
// function handleFile(event) {
//   // Выбираем первый файл из списка файлов.
//   const file = event.target.files[0];

//   // Если файл выбран и его расширение допустимо,
//   // то читаем его содержимое и отправляем
//   // в функцию отрисовки таблицы.
//   if (file && REGEX.test(file.name)) {
//     // Создаем экземпляр объекта.
//     const reader = new FileReader();

//     // Чтение файла асинхронное, поэтому
//     // создание таблицы привязываем к событию `load`,
//     // которое срабатывает при успешном завершении операции чтения.
//     // reader.onload = (e) => {
//     //     // res = e.target.result
//     // }

//     // Читаем содержимое как текстовый файл.
//     reader.readAsText(file);
//     console.log(reader)
//     res = reader
//     console.log(res)
//   } else {
//     // Мизерная обработка ошибок.
//     alert('Файл не выбран либо его формат не поддерживается.');
//     event.target.value = '';
//   }
// }


// INPUT.addEventListener('change', handleFile);


// let work;
// function func(){
//     // console.log(res.result)
//     work = res.result
//     // console.log(work)
//     let arr = Array.from(work.split(';'))
//     // console.log(arr)
//     arr.shift()
//     // console.log(arr)
//     for(let i = 9; i < arr.length; i+=5){
//         arr[i] = Array.from(arr[i])
//         // console.log(arr[i])
//         // console.log(typeof arr[i])
//         arr[i].pop()
//         arr[i].pop()
//         arr[i].pop()
//         // console.log(arr[i])
//         if(i > 50){
//             arr[i].pop()
//             if(i > 500){
//                 arr[i].pop()
//             }
//         }


//         arr[i] = arr[i].join('')

//         obj.type.push(arr[i])
//         // console.log(arr[i])
//         // if(arr[i].includes('любой')){
//         //     console.log(arr[i])
//         // console.log(typeof arr[i])
//         //     arr[i].replace('любой', 'любой2')
//         // }
//     }
//     for(let i = 5; i < arr.length; i+=5){
//         obj.from.push(arr[i])
//     }
//     for(let i = 6; i < arr.length; i+=5){
//         obj.toWhere.push(arr[i])
//     }
//     for(let i = 7; i < arr.length; i+=5){
//         obj.date.push(arr[i])
//     }


//     console.log(arr)
//     console.log(typeof arr)
//     console.log(obj)
// }


// let check;
// export default check = '444'