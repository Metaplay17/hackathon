// ФАЙЛ для заполнение полей

/*let varEge = ["Русский язык", "Математика(Профиль)", "Информатика", "Физика", "Обществознание"];*/
let varEge = [];
let count = 0;

let predmets = []; // Выбранные предметы
let ozenka = []; // Баллы по предметам
let snils = ""; // СНИЛС
let email = ""; // Почту
let number = ""; // Номер

let formes;
let formesTwo;

function load() {
    formes = document.querySelector(".formes");
    formesTwo = document.querySelector(".formesTwo");
    loadPredmets();
    console.log(varEge);
    init();
}

function init() {
    formes.innerHTML = ``;
    let inst = `<p>Регистрация на участие в конкурсе</p>
                <input type="text" id="snils" placeholder="СНИЛС" value="${snils || ''}">
                <input type="email" id="email" placeholder="EMAIL" value="${email || ''}">
                <input type="tel" id="number" placeholder="+7 (___) ___-__-__" value="${number || ''}">
                <select id="inst" onchange="ouo(this)">
                    <option disabled selected>Выберите предмет</option>`;
    
    for(let i = 0; i < varEge.length; i++) {
        inst += `<option value="${i}">${varEge[i]}</option>`;
    }
    inst += `</select>`;
    formes.innerHTML = inst;
}

function loadPredmets(){
    const subjects = [
            "Русский язык",
            "Математика(Профиль)",
            "Информатика",
            "Обществознание",
            "История",
            "Биология",
            "География",
            "Химия",
            "Литература",
            "Математика(База)",
            "Английский"];

    /* НУЖНО ОТПРАВИТЬ ЗАПРОС НА СЕРВЕР по предметам*/
    for(let i = 0 ; i < subjects.length; i++){
        varEge.push(subjects[i]);
    }
}

function ouo(selectElement) {
    // Сохраняем текущие значения input перед обновлением
    saveInputValues();
    
    if (predmets.length != 5) {
        // Добавляем выбранный предмет
        predmets.push(varEge[selectElement.value]);
        // Обновляем список доступных предметов
        varEge = varEge.filter(item => item !== varEge[selectElement.value]);
        init();
    }

    // Обновляем форму
    updateForm();
    
    // Восстанавливаем сохраненные значения
    restoreInputValues();
}

function updateForm() { // Обновление формы

    if (count == 5){
        alert("Вы не можете выбрать больше 5 предметов");
        console.log(predmets);
    }
    else {
        formesTwo.innerHTML = '';
        if (predmets.length > 0) {
            formesTwo.innerHTML += `<p id="ball">Баллы ЕГЭ</p>`;
            
            for (let i = 0; i < predmets.length; i++) {
                formesTwo.innerHTML += `
                    <div class="predmet">
                        <p id="textPred">${predmets[i]}</p>
                        <input type="text" class="pred" id="pred${i+1}" value="${ozenka[i] || ''}">
                    </div>
                `;
            }
            
            if (predmets.length >= 3) {
                formesTwo.innerHTML += `<button id="finish" onclick="finish()">Продолжить</button>`;
            }
        }
        count++;
    }
}

function saveInputValues() { // Сохранение инпутов
    // Сохраняем СНИЛС
    const snilsInput = document.getElementById("snils");
    if (snilsInput) snils = snilsInput.value;
    // Сохраняем Email
    const emailInput = document.getElementById("email");
    if (emailInput) email = emailInput.value;
    // Сохраняем Телефон
    const numberInput = document.getElementById("number");
    if (numberInput) number = numberInput.value;
    
    // Сохраняем баллы
    ozenka = [];
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`pred${i}`);
        if (input) ozenka.push(input.value);
    }
}

function restoreInputValues() { // Востановление инпутов
    // Восстанавливаем СНИЛС
    const snilsInput = document.getElementById("snils");
    if (snilsInput) snilsInput.value = snils;
    // Восстанавливаем Email
    const emailInput = document.getElementById("email");
    if (emailInput) emailInput.value = email;
    // Восстанавливаем Телефон
    const numberInput = document.getElementById("number");
    if (numberInput) numberInput.value = number;
    
    // Восстанавливаем баллы
    for (let i = 0; i < ozenka.length; i++) {
        const input = document.getElementById(`pred${i+1}`);
        if (input) input.value = ozenka[i];
    }
}

function finish() { // Отправка
    saveInputValues(); // Сохраняем последние введенные данные
    
    console.log("СНИЛС:", snils);
    console.log("Email:", snils);
    console.log("Телефон:", snils);
    console.log("Предметы:", predmets);
    console.log("Баллы:", ozenka);
    
    if (save()){
        alert("Успешно");
        window.location.replace("naprav.html");
    }
}

function clickLogout() {
    alert("Возвращение");
    window.location.replace("main.html");
}

// Инициализация при загрузке
window.onload = load;

function save() {
    const vib = {
        sn: snils,
        em: email,
        nu: number,
        pr: predmets,
        oz: ozenka
    }
    // Проверки
    check = true;

    // Проверка СНИЛС
    if (snils === '') { check = false; alert("Вы не заполнили СНИЛС");}

    // Проверка СНИЛС
    if (email === '') { check = false; alert("Вы не заполнили EMAIL");}

    // Проверка СНИЛС
    if (number === '') { check = false; alert("Вы не заполнили ТЕЛЕФОН");}

    // Проверка на заполнение баллов
    for(let i = 0; i < ozenka.length; i++) {
        if (ozenka[i] === '') {
            check = false;
            alert("Вы заполнили не все баллы");
            break;
        }
        if (ozenka[i] > 100 || ozenka[i] < 0) {
            check = false;
            alert("Вы заполнили баллы не правильно");
            break;
        }
    }

    if (check) {
        const jsonString = JSON.stringify(vib);
        localStorage.setItem('userVib', jsonString);
    }
    return check;
}

// ТОлько 1 страниа index
// Все проверки в JS
// Добавить код перенос с сервера в JS -> html
// Пользователь зашёл успешно - localstoradge
// Чтение удаление изменение в JS
