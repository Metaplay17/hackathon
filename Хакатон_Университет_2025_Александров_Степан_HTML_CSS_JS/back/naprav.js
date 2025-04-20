let napzavlen = ["Программная инженерия", "ИВТ", "ПИ", "Экономика", "ИСТ"];
let count = 0;

let predmeteses = [
    ["Русский язык", "Математика(Профиль)", "Информатика"],
    ["Русский язык", "Математика(Профиль)", "Физика"]
    ["Русский язык", "Математика(Профиль)", "География"],
    ["Русский язык", "Математика(Профиль)", "Обществознание"],
    ["Русский язык", "Математика(Профиль)", "Физика"]
]

let napravlenies = []; // Выбранные направления
let prioritets = []; // Приоритеты

let formes;
let formesTwo;

let saved = JSON.parse(localStorage.getItem('userVib')); // Выбранные предметы и баллы
let predmetVivor = saved.pr; // Выбранные предметы челиком
let ozenksVibor = saved.oz; // Баллы по предметам челиком

function load() {

    formes = document.querySelector(".formes");
    formesTwo = document.querySelector(".formesTwo");
    init(loadNaprav());
}

function init(jsonString) {
    formes.innerHTML = ``;
    let inst = `<p>Регистрация на участие в конкурсе</p>
                <select id="inst" onchange="ouo(this)">
                    <option disabled selected>Выберите направление</option>`;
    let i = 0;
    jsonString.forEach(nap => {
        inst += `<option value="${i}">${nap.name}</option>`;
        i++;
    });
    inst += `</select>`;
    formes.innerHTML = inst;
}

function loadNaprav() {
    let jsonString = JSON.stringify([
        { "name": "Программная инженерия", "value": "progeng", "prOne": "Русский язык", "prTwo": "Математика", "prThree": "Информатика"},
        { "name": "ИВТ", "value": "ivt", "prOne": "Русский язык", "prTwo": "Математика", "prThree": "Информатика"}
        ]);
    return JSON.parse(jsonString);
    /* НУЖНО ОТПРАВИТЬ ЗАПРОС НА СЕРВЕР по Напрвлениям и их предметам*/
}

function ouo(selectElement) {
    // Сохраняем текущие значения input перед обновлением
    saveInputValues();
    
    // Добавляем выбранный предмет
    napravlenies.push(napzavlen[selectElement.value]);
    
    // Обновляем список доступных предметов
    napzavlen = napzavlen.filter(item => item !== napzavlen[selectElement.value]);
    init();

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
    
    console.log("Предметы:", napravlenies);
    console.log("Баллы:", prioritets);

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