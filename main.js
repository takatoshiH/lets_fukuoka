let municipalities = [
    {'id': '_x40_40401', 'name': '小竹町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40108', 'name': '北九州市八幡東区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40109', 'name': '北九州市八幡西区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40101', 'name': '北九州市門司区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40213', 'name': '行橋市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40381', 'name': '芦屋町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40218', 'name': '春日市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40221', 'name': '太宰府市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40348', 'name': '久山町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40231', 'name': '那珂川市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40137', 'name': '福岡市早良区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40131', 'name': '福岡市東区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40216', 'name': '小郡市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40207', 'name': '柳川市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40211', 'name': '筑後市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40212', 'name': '大川市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40522', 'name': '大木市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40544', 'name': '広川市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40203', 'name': '久留米市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40503', 'name': '太刀洗町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40447', 'name': '筑前町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40382', 'name': '水巻町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40383', 'name': '岡垣町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40384', 'name': '遠賀町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40384', 'name': '遠賀町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40215', 'name': '中間市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40107', 'name': '北九州市小倉南区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40621', 'name': '苅田町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40223', 'name': '古賀市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40342', 'name': '篠栗町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40344', 'name': '須恵町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40349', 'name': '筑紫野市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40219', 'name': '大野城市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40343', 'name': '志免町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40341', 'name': '宇美町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40608', 'name': '大任町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40609', 'name': '赤村', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40601', 'name': '香春町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40206', 'name': '田川市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40610', 'name': '福智町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40604', 'name': '糸田町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40204', 'name': '直方市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40402', 'name': '鞍手町', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40226', 'name': '宮若市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40224', 'name': '福津市', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40136', 'name': '福岡市城南区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40134', 'name': '福岡市南区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40133', 'name': '福岡市中央区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40132', 'name': '福岡市博多区', url: 'https://qiita.com/Takatoshi_Hiki'},
    {'id': '_x40_40105', 'name': '北九州市戸畑区', url: 'https://qiita.com/Takatoshi_Hiki'},
];


let app = new Vue({
    el: '#app',
    data: {
        readyToStart: true, // スタート前の状態
        rouletteActive: false, // ルーレットが回っているか
        waitingAnswer: false, // 回答待ちの状態か
        popupVisible: false, // POPUPは表示されているか
        answerIndex: 0,
        intervalId: 0,
        municipality: municipalities[0],
        answers: [],
    },
    methods: {
        // スタートボタン
        startRoulette: function () {
            if (this.readyToStart) {
                this.readyToStart = false;
                this.rouletteActive = true;
                this.roulette();
            }
        },
        // 停止ボタン
        stopRoulette: function () {
            if (this.rouletteActive) {
                this.rouletteActive = false;
                this.waitingAnswer = true;
                clearTimeout(this.intervalId);
                this.createAnswers();
            }
        },

        // POPUP内の次へボタン
        closePopUp: function () {
            this.popupVisible = false;
            this.readyToStart = true;
            Array.from(document.getElementsByClassName('answer')).forEach(function (municipality) {
                municipality.innerHTML = null;
            });


        },

        // 回答ボタン
        answer: function () {
            if (this.waitingAnswer) {
                this.rouletteActive = false;
                this.waitingAnswer = false;
                this.popupVisible = true;
            }
        },

        // 市町村ルーレット
        roulette: function () {
            this.intervalId = setInterval(() => {
                document.getElementById(this.municipality['id']).setAttribute('fill', 'white');
                this.answerIndex  = Math.round(Math.random() * (municipalities.length - 1));
                this.municipality = municipalities[this.answerIndex];
                document.getElementById(this.municipality['id']).setAttribute('fill', 'red');
            }, 100);
        },

        createAnswers: function () {
            this.answers.push(Math.round(Math.random() * (municipalities.length - 1)));
            this.answers.push(Math.round(Math.random() * (municipalities.length - 1)));
            this.answers.push(Math.round(Math.random() * (municipalities.length - 1)));
            this.answers.push(this.answerIndex);

            let answers  = 1;
            for ( let index of this.answers) {
                document.getElementById(`answer_${answers}`).innerText = municipalities[index]['name'];
                answers++;
            }
        }
    },

});

// let intervalId;
// let index = Math.round( Math.random() * (municipalities.length - 1) );
// let municipality = municipalities[index];
// let is_active = false;
//
// function startRoulette() {
//     if(is_active) return;
//     is_active = true;
//
//     closePopup();
//     stopButtonActive();
//
//     Array.from(document.getElementsByClassName('answer')).forEach(( answer ) =>  {
//         answer.innerText = '';
//     });
//
//     changeStateIactive();
//
//     intervalId = setInterval(() => {
//         document.getElementById(municipality['id']).setAttribute('fill', 'white');
//         index = Math.round( Math.random() * (municipalities.length - 1) );
//         municipality = municipalities[index];
//         document.getElementById(municipality['id']).setAttribute('fill', 'red');
//     }, 100);
// }
//
// function stopRoulette() {
//     if (!is_active) return;
//     is_active = false;
//
//     stopButtonInactive();
//     changeStateInactive();
//
//     document.getElementById('start_btn').disabled = false;
//
//     makeAnswers();
//
//     Array.from(document.getElementsByClassName('answer')).forEach((answer) => {
//         answer.onclick = () => {
//             createPopup(answer.innerText);
//         }
//     });
//
//     clearTimeout(intervalId);
// }
//
// // 解答のPOPUP表示
// function createPopup(municipality_name) {
//     document.getElementById('popup').style.display = 'block';
//     document.getElementById('popup_title').innerText = municipality_name === municipality['name'] ? '正解' : `違います。`;
//     document.getElementById('municipality_content').innerText = municipality_name !== municipality['name'] ? `正解は ${municipality['name']}です` : '';
//     document.getElementById('municipality_url').href = municipality['url'];
//
//     changeStateIactive();
// }
//
// // 解答のPOPUPを閉じる
// function closePopup() {
//     document.getElementById('popup').style.display = 'none';
//     Array.from(document.getElementsByClassName('answer')).forEach((answer) => {
//         answer.innerText = '';
//     })
// }
//
// function makeIncorrectIndex(index) {
//     let incorectIndex = Math.random() * (municipalities.length - 1);
//
//     while(index == incorectIndex) {
//         incorectIndex = Math.random() * (municipalities.length - 1);
//     }
//
//     return Math.round(incorectIndex);
// }
//
// function changeStateActive() {
//     Array.from(document.getElementsByClassName('answer')).forEach((answer) => {
//         answer.classList.remove('answer_active');
//         answer.classList.add('answer_inactive');
//     });
// }
//
// function changeStateInactive() {
//     Array.from(document.getElementsByClassName('answer')).forEach((answer) => {
//         answer.classList.remove('answer_active');
//         answer.classList.add('answer_inactive');
//     });
// }
//
// function stopButtonActive() {
//     document.getElementById('start_btn').removeAttribute('class');
//     document.getElementById('start_btn').setAttribute('class', 'start_btn_inactive');
//     document.getElementById('stop_btn').removeAttribute('class');
//     document.getElementById('stop_btn').setAttribute('class', 'stop_btn_active');
// }
//
// function stopButtonInactive() {
//     document.getElementById('start_btn').removeAttribute('class');
//     document.getElementById('start_btn').setAttribute('class', 'start_btn_active');
//     document.getElementById('stop_btn').removeAttribute('class');
//     document.getElementById('stop_btn').setAttribute('class', 'stop_btn_inactive');
// }
//
// function makeAnswers() {
//     let answers = [
//         municipality['name'],
//         municipalities[makeIncorrectIndex(index) ]['name'],
//         municipalities[makeIncorrectIndex(index) ]['name'],
//         municipalities[makeIncorrectIndex(index) ]['name'],
//     ];
//
//     document.getElementById('answer_1').innerText = answers[0];
//     document.getElementById('answer_2').innerText = answers[1];
//     document.getElementById('answer_3').innerText = answers[2];
//     document.getElementById('answer_4').innerText = answers[3];
// }

