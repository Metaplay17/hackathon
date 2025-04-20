// let o = 0;
// let count = 0;

// let napravlenies = []; // Выбранные направления
// let prioritets = []; // Приоритеты

// let napzavlen = [];

// let formes;
// let formesTwo;

// let saved = JSON.parse(localStorage.getItem('userVib')); // Выбранные предметы и баллы
// let predmetVivor = saved.pr; // Выбранные предметы челиком
// let ozenksVibor = saved.oz; // Баллы по предметам челиком

// async function load() {

//     formes = document.querySelector(".formes");
//     formesTwo = document.querySelector(".formesTwo");
//     const data = await loadNaprav();
//     init(data);
// }

// function init(jsonString) {
//     formes.innerHTML = ``;
//     let inst = `<p>Регистрация на участие в конкурсе</p>
//                 <select id="inst" onchange="ouo(this)">
//                     <option disabled selected>Выберите направление</option>`;
//     let k = 0;
//     //console.log(jsonString);
//     jsonString.forEach(nap => {
//         let c = 0;
//         for (let i = 0; i < predmetVivor.length; i++) {
//             if (predmetVivor[i] == nap.prOne || predmetVivor[i] == nap.prTwo || predmetVivor[i] == nap.prThree){
//                 c++;
//             }     
//         }
//         if (c == 3) {
//             console.log("we");
//             inst += `<option value="${k}">${nap.value}</option>`;
//             k++;
//         }
//     });
//     inst += `</select>`;
//     formes.innerHTML = inst;
//     if (o == 0) {
//         jsonString.forEach(nap => {
//             napzavlen.push(nap.value);
//         })
//         o++;
//     }
//     console.log(jsonString);
// }

// async function loadNaprav() {
//     let address = `http://localhost:5230/Lists/directions`;
//     const response = await fetch(address);
    
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     return await response.json();
// }

// function ouo(selectElement) {
//     // Сохраняем текущие значения input перед обновлением
//     saveInputValues();
//     if (napravlenies.length != 5) {
//         // Добавляем выбранный предмет
//         napravlenies.push(napzavlen[selectElement.value]);
        
//         // Обновляем список доступных предметов
//         napzavlen = napzavlen.filter(item => item !== napzavlen[selectElement.value]);
//         init(napzavlen);
//     }

//     // Обновляем форму
//     updateForm();
    
//     // Восстанавливаем сохраненные значения
//     restoreInputValues();

//     console.log(napravlenies);
//     console.log(napzavlen);
// }

// function updateForm() { // Обновление формы
//     formesTwo.innerHTML = '';

//     if (count == 5){
//         alert("Вы не можете выбрать больше 5 Направлений");
//     }
//     else {
//         if (napravlenies.length > 0) {
//             formesTwo.innerHTML += `<p id="ball">Приоритеты</p>`;
            
//             for (let i = 0; i < napravlenies.length; i++) {
//                 formesTwo.innerHTML += `
//                     <div class="predmet">
//                         <p id="textPred">${napravlenies[i]}</p>
//                         <input type="text" class="pred" id="pred${i+1}" value="${prioritets[i] || ''}">
//                     </div>
//                 `;
//             }
            
//             if (napravlenies.length >= 1) {
//                 formesTwo.innerHTML += `<button id="finish" onclick="finish()">Подать заявку</button>`;
//             }
//         }
//         count++;
//     }
// }

// function saveInputValues() { // Сохранение инпутов
//     // Сохраняем баллы
//     prioritets = [];
//     for (let i = 1; i <= 5; i++) {
//         const input = document.getElementById(`pred${i}`);
//         if (input) prioritets.push(input.value);
//     }
// }

// function restoreInputValues() { // Востановление инпутов
//     // Восстанавливаем баллы
//     for (let i = 0; i < prioritets.length; i++) {
//         const input = document.getElementById(`pred${i+1}`);
//         if (input) input.value = prioritets[i];
//     }
// }

// function finish() { // Отправка
//     saveInputValues(); // Сохраняем последние введенные данные
    
//     //console.log("Предметы:", napravlenies);
//     //console.log("Баллы:", prioritets);

//     // ПРОВЕРКИ
//     let check = true;
//     for(let i = 0; i < prioritets.length; i++) {
//         if (prioritets[i] === '') {
//             check = false;
//             alert("Вы заполнили не все приоритеты");
//             break;
//         }
//         if (prioritets[i] > 5 || prioritets[i] < 0) {
//             check = false;
//             alert("Вы заполнили приоритеты не правильно");
//             break;
//         }
//     }
//     if (check) {
//         alert("Заявка успешно отправлена!");
//         window.location.replace("spiski.html");
//         // Здесь можно добавить отправку данных на сервер
//     }
// }

// // Инициализация при загрузке
// window.onload = load;


// Глобальные переменные
let allDirections = []; // Все направления с сервера (полные данные)
let selectedDirections = []; // Выбранные направления (только названия)
let prioritets = []; // Приоритеты для выбранных направлений

// DOM элементы
let formes;
let formesTwo;

// Данные пользователя из localStorage
let saved = JSON.parse(localStorage.getItem('userVib'));
let predmetVivor = saved.pr; // Выбранные пользователем предметы
let ozenksVivor = saved.oz; // Баллы пользователя по предметам

// Основная функция загрузки
async function load() {
    formes = document.querySelector(".formes");
    formesTwo = document.querySelector(".formesTwo");
    allDirections = await loadNaprav();
    init();
}

// Инициализация формы
function init() {
    // Фильтруем доступные направления
    const availableDirections = getAvailableDirections();
    
    // Строим интерфейс выбора
    formes.innerHTML = `
        <p>Регистрация на участие в конкурсе</p>
        <select id="inst" onchange="ouo(this)">
            <option disabled selected>Выберите направление</option>
            ${availableDirections.map((nap, index) => 
                `<option value="${index}">${nap.value}</option>`
            ).join('')}
        </select>
    `;

    updateForm();
}

// Получение доступных направлений
function getAvailableDirections() {
    return allDirections.filter(nap => {
        // Направление еще не выбрано
        const notSelected = !selectedDirections.includes(nap.value);
        
        // У пользователя есть все нужные предметы
        const hasSubjects = [nap.prOne, nap.prTwo, nap.prThree].every(pr => 
            predmetVivor.includes(pr)
        );
        
        return notSelected && hasSubjects;
    });
}

// Загрузка направлений с сервера
async function loadNaprav() {
    let address = `http://localhost:5230/Lists/directions`;
    const response = await fetch(address);
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
}

// Обработчик выбора направления
function ouo(selectElement) {
    saveInputValues();
    
    if (selectedDirections.length >= 5) {
        alert("Вы не можете выбрать больше 5 направлений");
        return;
    }

    const availableDirections = getAvailableDirections();
    const selectedIndex = selectElement.value;
    
    if (selectedIndex >= 0 && selectedIndex < availableDirections.length) {
        selectedDirections.push(availableDirections[selectedIndex].value);
        init(); // Обновляем интерфейс
    }

    updateForm();
    restoreInputValues();
}

// Обновление формы с выбранными направлениями
function updateForm() {
    formesTwo.innerHTML = '';

    if (selectedDirections.length > 0) {
        formesTwo.innerHTML += `<p id="ball">Приоритеты</p>`;
        
        for (let i = 0; i < selectedDirections.length; i++) {
            formesTwo.innerHTML += `
                <div class="predmet">
                    <p id="textPred">${selectedDirections[i]}</p>
                    <input type="number" min="1" max="5" class="pred" id="pred${i+1}" 
                           value="${prioritets[i] || ''}" placeholder="1-5">
                </div>
            `;
        }
        
        if (selectedDirections.length >= 1) {
            formesTwo.innerHTML += `<button id="finish" onclick="finish()">Подать заявку</button>`;
        }
    }
}

// Сохранение введенных приоритетов
function saveInputValues() {
    prioritets = [];
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`pred${i}`);
        if (input) prioritets.push(input.value);
    }
}

// Восстановление введенных приоритетов
function restoreInputValues() {
    for (let i = 0; i < prioritets.length; i++) {
        const input = document.getElementById(`pred${i+1}`);
        if (input) input.value = prioritets[i];
    }
}

// Отправка заявки
function finish() {
    saveInputValues();
    
    // Проверки корректности данных
    let isValid = true;
    
    // Проверка заполненности всех приоритетов
    if (prioritets.some(p => p === '')) {
        alert("Вы заполнили не все приоритеты");
        isValid = false;
    }
    // Проверка диапазона значений (1-5)
    else if (prioritets.some(p => p < 1 || p > 5)) {
        alert("Приоритеты должны быть числами от 1 до 5");
        isValid = false;
    }
    // Проверка уникальности приоритетов
    else if (new Set(prioritets).size !== prioritets.length) {
        alert("Приоритеты не должны повторяться");
        isValid = false;
    }

    if (isValid) {
        alert("Заявка успешно отправлена!");
        window.location.replace("spiski.html");
        
        // Здесь можно добавить отправку данных на сервер:
        // const applicationData = {
        //     directions: selectedDirections,
        //     priorities: prioritets,
        //     subjects: predmetVivor,
        //     scores: ozenksVivor
        // };
        // sendToServer(applicationData);
    }
}

// Инициализация при загрузке страницы
window.onload = load;