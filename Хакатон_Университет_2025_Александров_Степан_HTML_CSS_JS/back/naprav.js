
let count = 0;

let napravlenies = []; // Выбранные направления
let prioritets = []; // Приоритеты

let napzavlen = [];

let formes;
let formesTwo;

let saved = JSON.parse(localStorage.getItem('userVib')); // Выбранные предметы и баллы
let predmetVivor = saved.pr; // Выбранные предметы челиком
let ozenksVibor = saved.oz; // Баллы по предметам челиком

async function load() {

    formes = document.querySelector(".formes");
    formesTwo = document.querySelector(".formesTwo");
    const data = await loadNaprav();
    init(data);
}

function init(jsonString) {
    formes.innerHTML = ``;
    let inst = `<p>Регистрация на участие в конкурсе</p>
                <select id="inst" onchange="ouo(this)">
                    <option disabled selected>Выберите направление</option>`;
    let i = 0;
    console.log(jsonString);
    jsonString.forEach(nap => {
        let c = 0;
        for (let i = 0; i < predmetVivor.length; i++) {
            if (predmetVivor[i] == nap.prOne || predmetVivor[i] == nap.prTwo || predmetVivor[i] == nap.prThree){
                c++;
            }     
        }
        if (c == 3) {
            inst += `<option value="${i}">${nap.value}</option>`;
            i++;
        }
    });
    inst += `</select>`;
    formes.innerHTML = inst;
    jsonString.forEach(nap => {
        napzavlen.push(nap.value);
    })
}

async function loadNaprav() {
    let address = `http://localhost:5230/Lists/directions`;
    const response = await fetch(address);
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
}

function ouo(selectElement) {
    // Сохраняем текущие значения input перед обновлением
    saveInputValues();
    
    // Добавляем выбранный предмет
    napravlenies.push(napzavlen[selectElement.value]);
    
    // Обновляем список доступных предметов
    napzavlen = napzavlen.filter(item => item !== napzavlen[selectElement.value]);
    //init();

    // Обновляем форму
    updateForm();
    
    // Восстанавливаем сохраненные значения
    restoreInputValues();
}

function updateForm() { // Обновление формы
    formesTwo.innerHTML = '';

    if (count == 5){
        alert("Вы не можете выбрать больше 5 Направлений");
    }
    else {
        if (napravlenies.length > 0) {
            formesTwo.innerHTML += `<p id="ball">Приоритеты</p>`;
            
            for (let i = 0; i < napravlenies.length; i++) {
                formesTwo.innerHTML += `
                    <div class="predmet">
                        <p id="textPred">${napravlenies[i]}</p>
                        <input type="text" class="pred" id="pred${i+1}" value="${prioritets[i] || ''}">
                    </div>
                `;
            }
            
            if (napravlenies.length >= 1) {
                formesTwo.innerHTML += `<button id="finish" onclick="finish()">Подать заявку</button>`;
            }
        }
        count++;
    }
}

function saveInputValues() { // Сохранение инпутов
    // Сохраняем баллы
    prioritets = [];
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`pred${i}`);
        if (input) prioritets.push(input.value);
    }
}

function restoreInputValues() { // Востановление инпутов
    // Восстанавливаем баллы
    for (let i = 0; i < prioritets.length; i++) {
        const input = document.getElementById(`pred${i+1}`);
        if (input) input.value = prioritets[i];
    }
}

function finish() { // Отправка
    saveInputValues(); // Сохраняем последние введенные данные
    
    //console.log("Предметы:", napravlenies);
    //console.log("Баллы:", prioritets);

    // ПРОВЕРКИ
    let check = true;
    for(let i = 0; i < prioritets.length; i++) {
        if (prioritets[i] === '') {
            check = false;
            alert("Вы заполнили не все приоритеты");
            break;
        }
        if (prioritets[i] > 5 || prioritets[i] < 0) {
            check = false;
            alert("Вы заполнили приоритеты не правильно");
            break;
        }
    }
    if (check) {
        alert("Заявка успешно отправлена!");
        window.location.replace("spiski.html");
        // Здесь можно добавить отправку данных на сервер
    }
}

// Инициализация при загрузке
window.onload = load;