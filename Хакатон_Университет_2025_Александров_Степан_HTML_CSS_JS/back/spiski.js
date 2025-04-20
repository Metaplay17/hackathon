
let numerNapr; // Направление
let formeres;
let spiskises;
let napr;

function loading() {
    napr = document.getElementById("napravlenie");
    spiskises = document.getElementById("spiskis");
    formeres = document.getElementById("formeres");
    init();
}
async function init() {
    napr.innerHTML = ``;
    let text = ``;
    
    try {
        const data = await loadSpisokNapravlenie();
        
        text += `<select name="nap" id="napravlen" onchange="changeNapr(this)">
            <option disabled selected>Выберите направление</option>`;

        data.forEach(nap => {
            text += `<option value="${nap.name}">${nap.value}</option>`;
        });
        text += `</select>`;
        napr.innerHTML = text;
    } catch (error) {
        console.error('Error:', error);
        napr.innerHTML = `<p>Ошибка загрузки направлений</p>`;
    }
}

async function loadSpisokNapravlenie() {
    let address = `http://localhost:5230/Lists/directions`;
    const response = await fetch(address);
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
}

function changeNapr(napravl) {
    numerNapr = napravl.value;
    formeres.innerHTML = `<form>
        <div class="viborSpiska">
            <p>Общий</p>
            <input type="radio" name="typeSpisok" value="list" onchange="handleRadioChange(this)">
        </div>
        <div class="viborSpiska">
            <p>Оригинальные атестаты</p>
            <input type="radio" name="typeSpisok" value="originals" onchange="handleRadioChange(this)">
        </div>
        <div class="viborSpiska">
            <p>Итоговый список с учётом приоритетов</p>
            <input type="radio" name="typeSpisok" value="result" onchange="handleRadioChange(this)">
        </div>
    </form>`;
}

function handleRadioChange(radio) { // При выборе другого radio
    if (radio.checked) { // Тестовый
            /*const jsonString = JSON.stringify([
                {
                    "n":1,
                    "snils":9847532975023,
                    "sumBalls":254,
                    "priority":1
                },
                {
                    "n":2,
                    "snils":98709873423,
                    "sumBalls":234,
                    "priority":2
                }
            ]);*/
            /* НУЖНО ОТПРАВИТЬ ЗАПРОС НА СЕРВЕР */
            /*console.log(jsonString);*/
            json = radio.value;
            console.log(json);
            let address = `http://localhost:5230/Lists/${numerNapr}/${json}`;
            fetch(address)  // URL API, который возвращает JSON
                .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();  // Парсим ответ в JSON
            })
                .then(data => {
                    addSpisokOnDisplay(data);
                    console.log(data);
            })
                .catch(error => {
                    console.error('Error fetching data:', error);
            });
    }
}

function addSpisokOnDisplay(jsonString) {
    let text = ``; // Поменять n, priority, snils, sumBalls
    for(let i = 0; i < jsonString.length; i++){
        if (i == 0) {
            text += `<div id="underSpisok">
        <p id="n">Номер</p>
        <p id="snils">Снилс</p>
        <p id="sumBalls">Сумма баллов</p>
        <p id="priority">Приоритет</p>
    </div>`;
        }
        text += `<div id="underSpisok">
        <p id="n">${i + 1}</p>
        <p id="snils">${jsonString[i].snils}</p>
        <p id="sumBalls">${jsonString[i].ballAmount}</p>
        <p id="priority">${jsonString[i].priority}</p>
    </div>`;
    spiskises.innerHTML = text;
    }
}

/* Для получения обычных списков:
http://localhost:5230/Lists/"Название"/list
Оригиналы:
http://localhost:5230/Lists/"Название"/originals
Итоговый список:
http://localhost:5230/Lists/"Название"/result */