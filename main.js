let app3 = new Vue({
    el: '#app',
    data: {
        rouletteActive: false,
        popupVisible: false,
        waitingAnswer: false,
        answerIndex: 0,
        intervalId: 0,
    },
    methods: {
        changeRouletteActive: function () {
            this.rouletteActive = true;
        },
        changeRouletteInactive: function () {
            this.rouletteActive = false;
        },
        startRoulette: function () {
            this.changeRouletteActive();
            this.popupVisible = false;

            // this.intervalId = setInterval(() => {
            //     document.getElementById(municipality['id']).setAttribute('fill', 'white');
            //     index = Math.round(Math.random() * (municipalities.length - 1));
            //     municipality = municipalities[index];
            //     document.getElementById(municipality['id']).setAttribute('fill', 'red');
            // }, 100);

        }, stopRoulette: function () {
            this.changeRouletteInactive();
            this.popupVisible = true;
        },
        closePopUp: function () {
            this.popupVisible = false;
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

