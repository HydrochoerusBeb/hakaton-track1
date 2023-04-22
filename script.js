let res;

// let obj = {
//     from: [],
//     toWhere: [],
//     date: [],
//     type: []
// }
let resArr = []
let mainRes = []

let work;

const btn = document.querySelector('#btn')

const whereFrom = document.querySelector('#whereFrom')
const whereTo = document.querySelector('#whereTo')
const date = document.querySelector('#date')
const type = document.querySelector('#type')


// Элемент для выбора файлов.
const INPUT = document.querySelector('input[name="readable"]');
// Элемент для вывода сгенерированной таблицы.
// const PREVIEW = document.querySelector('#preview');
// Регулярное выражение для проверки расширения файла.
const REGEX = new RegExp('(.*?)\.(csv)$', 'i');

// Функция, отрабатывающая при выборе файла.
function handleFile(event) {
  // Выбираем первый файл из списка файлов.
  const file = event.target.files[0];

  // Если файл выбран и его расширение допустимо,
  // то читаем его содержимое и отправляем
  // в функцию отрисовки таблицы.
  if (file && REGEX.test(file.name)) {
    // Создаем экземпляр объекта.
    const reader = new FileReader();

    // Чтение файла асинхронное, поэтому
    // создание таблицы привязываем к событию `load`,
    // которое срабатывает при успешном завершении операции чтения.
    // reader.onload = (e) => {
    //     // res = e.target.result
    // }

    // Читаем содержимое как текстовый файл.
    reader.readAsText(file);
    console.log(reader)
    res = reader
    console.log(res)
  } else {
    // Мизерная обработка ошибок.
    alert('Файл не выбран либо его формат не поддерживается.');
    event.target.value = '';
  }
}


INPUT.addEventListener('change', handleFile);

btn.addEventListener('click', func)

function func(){
  // console.log(res.result)
  work = res.result
  // console.log(work)
  let arr = Array.from(work.split(';'))
  // console.log(arr)
  arr.shift()
  arr.shift()
  arr.shift()
  arr.shift()
  arr.shift()
  arr.shift()
  // console.log(arr)

  for(let i = 2; i < arr.length; i+=5){
    // arr[i] = Array.from(arr[i])
    // let reserve = []
    // reserve = arr[i].splice(6)
    // reserve.push('-')
    // let r = arr[i].slice(3, 5)
    // reserve.push(r)
    // reserve.push('-')
    // reserve.push(arr[i].slice(0, 2))

    // arr[i] = reserve.join('')
    // arr[i][6] = ''
    let r = [arr[i][6], arr[i][7], arr[i][8], arr[i][9], '-', arr[i][3], arr[i][4], '-', arr[i][0], arr[i][1]]
    arr[i] = r.join('')
  }

  for(let i = 4; i < arr.length; i+=5){
      arr[i] = Array.from(arr[i])
      // console.log(arr[i])
      // console.log(typeof arr[i])
      if(i == arr.length-1){ 
        arr[i].pop()
        arr[i].pop()
      arr[i] = arr[i].join('')

        break }
      arr[i].pop()
      arr[i].pop()
      arr[i].pop()

      if(i == 49){
      arr[i].pop()

      }
      // console.log(arr[i])
      
      if(i > 50){
          arr[i].pop()
          if(i > 500){
              arr[i].pop()
              if(i >= 4999){
                arr[i].pop()
            }
          }
      }


      arr[i] = arr[i].join('')
    }
    for(let i = 4; i < arr.length; i+=5){
      resArr.push([arr[i-4], arr[i-3], arr[i-2], arr[i]])
    }

  //       obj.type.push(arr[i])
  //     // console.log(arr[i])
  //     // if(arr[i].includes('любой')){
  //     //     console.log(arr[i])
  //     // console.log(typeof arr[i])
  //     //     arr[i].replace('любой', 'любой2')
  //     // }
  // }
  // // for(let i = 5; i < arr.length; i+=5){
  // //     obj.from.push(arr[i])
  // // }
  // // for(let i = 6; i < arr.length; i+=5){
  // //     obj.toWhere.push(arr[i])
  // // }
  // for(let i = 7; i < arr.length; i+=5){
  //   // if(arr[i] == date.value){
  //     // let jj = {i: arr[i]}
  //     obj.date.push(arr[i])
  //   // }
  // }




  console.log(arr)


  console.log(resArr)
  // console.log(typeof arr)
  // console.log(obj)
  // func2()

  for(let i = 0; i < resArr.length; i++){
    if(resArr[i][3] == type.value && resArr[i][2] == date.value){
      mainRes.push(resArr[i])
    }
  }
  console.log(mainRes)
  console.log(date.value)
  console.log(typeof date.value)
}

// let cities = ['казань', 'москва', 'питер', 'севастополь', 'новосибирск']
// obj.from = cities
// obj.toWhere = cities

// console.log(obj)



// function func2(){
//   if(obj.date.includes(date.value) && obj.type.includes(type.value)){
//     resArr.push([whereFrom.value, whereTo.value, date.value, type.value])
//   }
// }
