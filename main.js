let municipalities = [
    {'id': '_x40_40401', 'name': '小竹町'},
    {'id': '_x40_40108', 'name': '北九州市八幡東区'},
    {'id': '_x40_40109', 'name': '北九州市八幡西区'},
    {'id': '_x40_40101', 'name': '北九州市門司区'},
    {'id': '_x40_40213', 'name': '行橋市'},
    {'id': '_x40_40381', 'name': '芦屋町'},
    {'id': '_x40_40218', 'name': '春日市'},
    {'id': '_x40_40221', 'name': '太宰府市'},
    {'id': '_x40_40348', 'name': '久山町'},
    {'id': '_x40_40231', 'name': '那珂川市'},
    {'id': '_x40_40137', 'name': '福岡市早良区'},
    {'id': '_x40_40131', 'name': '福岡市東区'},
    {'id': '_x40_40216', 'name': '小郡市'},
    {'id': '_x40_40207', 'name': '柳川市'},
    {'id': '_x40_40211', 'name': '筑後市'},
    {'id': '_x40_40212', 'name': '大川市'},
    {'id': '_x40_40522', 'name': '大木市'},
    {'id': '_x40_40544', 'name': '広川市'},
    {'id': '_x40_40203', 'name': '久留米市'},
    {'id': '_x40_40503', 'name': '太刀洗町'},
    {'id': '_x40_40447', 'name': '筑前町'},
    {'id': '_x40_40382', 'name': '水巻町'},
    {'id': '_x40_40383', 'name': '岡垣町'},
    {'id': '_x40_40384', 'name': '遠賀町'},
    {'id': '_x40_40384', 'name': '遠賀町'},
    {'id': '_x40_40215', 'name': '中間市'},
    {'id': '_x40_40107', 'name': '北九州市小倉南区'},
    {'id': '_x40_40621', 'name': '苅田町'},
    {'id': '_x40_40223', 'name': '古賀市'},
    {'id': '_x40_40342', 'name': '篠栗町'},
    {'id': '_x40_40344', 'name': '須恵町'},
    {'id': '_x40_40349', 'name': '筑紫野市'},
    {'id': '_x40_40219', 'name': '大野城市'},
    {'id': '_x40_40343', 'name': '志免町'},
    {'id': '_x40_40341', 'name': '宇美町'},
    {'id': '_x40_40608', 'name': '大任町'},
    {'id': '_x40_40609', 'name': '赤村'},
    {'id': '_x40_40601', 'name': '香春町'},
    {'id': '_x40_40206', 'name': '田川市'},
    {'id': '_x40_40610', 'name': '福智町'},
    {'id': '_x40_40604', 'name': '糸田町'},
    {'id': '_x40_40204', 'name': '直方市'},
    {'id': '_x40_40402', 'name': '鞍手町'},
    {'id': '_x40_40226', 'name': '宮若市'},
    {'id': '_x40_40224', 'name': '福津市'},
    {'id': '_x40_40136', 'name': '福岡市城南区'},
    {'id': '_x40_40134', 'name': '福岡市南区'},
    {'id': '_x40_40133', 'name': '福岡市中央区'},
    {'id': '_x40_40132', 'name': '福岡市博多区'},
    {'id': '_x40_40105', 'name': '北九州市戸畑区'},
];

let intervalId;
let index = Math.round( Math.random() * (municipalities.length - 1) );
let municipality = municipalities[index];

function startRoulette() {
    document.getElementById('answer_1').innerText = '';
    document.getElementById('answer_2').innerText = '';
    document.getElementById('answer_3').innerText = '';
    document.getElementById('answer_4').innerText = '';

    document.getElementById('start_btn').disabled = true;
    intervalId = setInterval(() => {
        document.getElementById(municipality['id']).setAttribute('fill', 'white');
        index = Math.round( Math.random() * (municipalities.length - 1) );
        municipality = municipalities[index];
        document.getElementById(municipality['id']).setAttribute('fill', 'red');
    }, 100);
}

function stopRoulette() {
    document.getElementById('start_btn').disabled = false;
    document.getElementById('answer_1').innerText = municipality['name'];
    document.getElementById('answer_2').innerText = municipalities.length >= index + 1 ? municipalities[index + 1]['name']: municipalities[index - 1]['name'];
    document.getElementById('answer_3').innerText = municipalities.length >= index + 2 ? municipalities[index + 2]['name']: municipalities[index - 2]['name'];
    document.getElementById('answer_4').innerText = municipalities.length >= index + 3 ? municipalities[index + 3]['name']: municipalities[index - 3]['name'];

    document.getElementById('answer_1').onclick = () => {
        console.log('正解');
    }
    clearTimeout(intervalId);
}
