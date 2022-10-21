<template id="question-1">
    <div class="timer-class">
        <div class="timer">
            <span class="waktu">Waktu</span>
            <span> {{timer}}</span>
        </div>
        <div class="score">
            <span class="waktu">Skor</span>
            <span>{{score}}</span>
            <!-- {{questions}} -->
        </div>
    </div>

    <div class="quiz-container">
        <img src="@/theme/img/quiz/owl.png">
        <div v-for="(item) in questions" :key="item" class="">
            <div class="bg-blue" v-if="item.number==current">
                <div class="numQuestion">
                    SOAL {{item.number}}
                </div>
                <div class="question">
                    <img v-if="item.number==2" src="@/theme/img/question/32.png" alt="" srcset="">
                    <div v-html="item.desc"></div>
                </div>

                <div class="option">
                    <ion-button @click="check(item.trueOption,'optionA')" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn no-shadow">A</button>
                        <div class="answer" v-html="item.optionA"></div>
                        <div class="result">
                            <img v-if="correct_a" src="@/theme/img/quiz/correct.png" class="correct">
                            <img v-if="wrong_a" src="@/theme/img/quiz/wrong.png" class="wrong">
                        </div>
                    </ion-button>

                </div>
                <div class="option">
                    <ion-button @click="check(item.trueOption,'optionB')" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn no-shadow">B</button>
                        <div class="answer" v-html="item.optionB"></div>
                        <div class="result">
                            <img v-if="correct_b" src="@/theme/img/quiz/correct.png" class="correct">
                            <img v-if="wrong_b" src="@/theme/img/quiz/wrong.png" class="wrong">
                        </div>

                    </ion-button>
                </div>
                <div class="option">
                    <ion-button @click="check(item.trueOption,'optionC')" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn no-shadow">C</button>
                        <div class="answer" v-html="item.optionC"></div>
                        <div class="result">
                            <img v-if="correct_c" src="@/theme/img/quiz/correct.png" class="correct">
                            <img v-if="wrong_c" src="@/theme/img/quiz/wrong.png" class="wrong">
                        </div>

                    </ion-button>
                </div>
                <div class="option">
                    <ion-button @click="check(item.trueOption,'optionD')" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn no-shadow">D</button>
                        <div class="answer" v-html="item.optionD"></div>
                        <div class="result">
                            <img v-if="correct_d" src="@/theme/img/quiz/correct.png" class="correct">
                            <img v-if="wrong_d" src="@/theme/img/quiz/wrong.png" class="wrong">
                        </div>

                    </ion-button>
                </div>
                <div class="option">
                    <ion-button @click="check(item.trueOption,'optionE')" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn no-shadow">E</button>
                        <div class="answer" v-html="item.optionE"></div>
                        <div class="result">
                            <img v-if="correct_e" src="@/theme/img/quiz/correct.png" class="correct">
                            <img v-if="wrong_e" src="@/theme/img/quiz/wrong.png" class="wrong">
                        </div>

                    </ion-button>
                </div>
            </div>



        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
import correct from '@/theme/audio/correct.mp3';
import wrong from '@/theme/audio/wrong.mp3';
const sound_correct = new Audio(correct);
const sound_wrong = new Audio(wrong);

export default defineComponent({
    QuestionsList3: {
        template: "#question-1",
        name: "question-list3"
    },
    components: {
        IonButton
    },
    data() {
        return {
            timer: 90,
            interval: 0,
            current: 1,
            score: 0,
            total_question: 10,
            questions: {
                0: {
                    number: 1,
                    desc: "Derajat keasaman air murni adalah...",
                    optionA: "3",
                    optionB: "5",
                    optionC: "7",
                    optionD: "9",
                    optionE: "11",
                    trueOption: "optionC"
                },
                1: {
                    number: 2,
                    desc: "Tokoh di atas adalah seorang ahli biokimia yang berasal dari Denmark yang pertama kali menemukan konsep pH pada tahun...",
                    optionA: "1909",
                    optionB: "1939",
                    optionC: "1923",
                    optionD: "1807",
                    optionE: "1868",
                    trueOption: "optionA"
                },
                2: {
                    number: 3,
                    desc: "pH larutan yang dibuat dari 0,001 mol KOH dalam 10 L air adalah...",
                    optionA: "7",
                    optionB: "4",
                    optionC: "11",
                    optionD: "10",
                    optionE: "12",
                    trueOption: "optionD"
                },
                3: {
                    number: 4,
                    desc: "pH larutan HCl dengan konsentrasi 10<sup>-2</sup> M pada suhu 25º C adalah...",
                    optionA: "5",
                    optionB: "4",
                    optionC: "1",
                    optionD: "7",
                    optionE: "2",
                    trueOption: "optionE"
                },
                4: {
                    number: 5,
                    desc: "pH dari asam etanoat 0,02 M (Ka = 2 x 10<sup>-4</sup>) adalah...",
                    optionA: "2-log 3,5",
                    optionB: "3,5-log 2",
                    optionC: "3,5-log 4",
                    optionD: "3,5+log 2",
                    optionE: "7-log 4",
                    trueOption: "optionB"
                },
                5: {
                    number: 6,
                    desc: "Larutan 0,74 g Ca(OH)<sub>2</sub> (Mr = 74) dalam 2 L air memiliki harga pH...",
                    optionA: "3-log 5",
                    optionB: "2",
                    optionC: "12",
                    optionD: "11+log 5",
                    optionE: "12-log 5",
                    trueOption: "optionD"
                },
                6: {
                    number: 7,
                    desc: " Jika 90 cm<sup>3</sup> air ditambahkan ke dalam 10 cm<sup>3</sup> larutan HCl 01 M, pH larutan berubah dari...",
                    optionA: "1 menjadi 3",
                    optionB: "1 menjadi 2",
                    optionC: "1 menjadi 5",
                    optionD: "3 menjadi 4",
                    optionE: "1 menjadi 4",
                    trueOption: "optionB"
                },
                7: {
                    number: 8,
                    desc: "pH dari larutan asam lemah CH<sub>3</sub>COOH 0,1 M, jika 0,1% telah terionisasi adalah...",
                    optionA: "1",
                    optionB: "2",
                    optionC: "3",
                    optionD: "4",
                    optionE: "5",
                    trueOption: "optionD"
                },
                8: {
                    number: 9,
                    desc: "Larutan amonia dibuat dengan cara melarutkan 4,48 L gas NH<sub>3</sub> (STP) hingga diperoleh volume larutan sama dengan 2 L. pH larutan amonia adalah...(Kb=10<sup>-5</sup>)",
                    optionA: "10",
                    optionB: "12",
                    optionC: "11",
                    optionD: "7",
                    optionE: "4",
                    trueOption: "optionC"
                },
                9: {
                    number: 10,
                    desc: "Suatu asam lemah HCOOH 0,01 M memiliki pH sebesar...(Ka=10<sup>-5</sup>)",
                    optionA: "3,5",
                    optionB: "5",
                    optionC: "4,5",
                    optionD: "2,5",
                    optionE: "5,5",
                    trueOption: "optionA"
                },

            },
            correct_a: false,
            correct_b: false,
            correct_c: false,
            correct_d: false,
            correct_e: false,
            wrong_a: false,
            wrong_b: false,
            wrong_c: false,
            wrong_d: false,
            wrong_e: false,
        }
    },
    methods: {
        startTimer: function () {
            this.interval = setInterval(() => {
                if (this.timer === 0) {
                    clearInterval(this.interval);
                    this.current++;
                    this.timer = 90;
                    this.startTimer();
                } else {
                    this.timer--
                }
            }, 1000)
        },
        clearResult: function () {
            this.correct_a = false;
            this.correct_b = false;
            this.correct_c = false;
            this.correct_d = false;
            this.correct_e = false;
            this.wrong_a = false;
            this.wrong_b = false;
            this.wrong_c = false;
            this.wrong_d = false;
            this.wrong_e = false;
        },
        nextQuestion: function (add: number) {
            setTimeout(
                () => {
                    if (this.current == this.total_question) {
                        this.clearResult();
                        const value = this.score + add;
                        window.location.href = "result/3/" + value;
                    }
                    else {
                        this.clearResult();
                        this.current++;
                        this.score = this.score + add;
                        this.timer = 90;
                    }
                },
                1000
            );
        },
        check: function (trueOption: string, answer: string) {
            if (trueOption == answer) {
                if (trueOption == 'optionA') {
                    this.correct_a = true;
                }
                if (trueOption == 'optionB') {
                    this.correct_b = true;
                }
                if (trueOption == 'optionC') {
                    this.correct_c = true;
                }
                if (trueOption == 'optionD') {
                    this.correct_d = true;
                }
                if (trueOption == 'optionE') {
                    this.correct_e = true;
                }
                sound_correct.play();
                this.nextQuestion(10);

            } else {
                if (answer == 'optionA') {
                    this.wrong_a = true;
                }
                if (answer == 'optionB') {
                    this.wrong_b = true;
                }
                if (answer == 'optionC') {
                    this.wrong_c = true;
                }
                if (answer == 'optionD') {
                    this.wrong_d = true;
                }
                if (answer == 'optionE') {
                    this.wrong_e = true;
                }
                sound_wrong.play();
                this.nextQuestion(0);
            }
        }
    },
    mounted() {
        this.startTimer();
    }

})
</script>
<style scoped>
ion-button {
    height: auto;
    display: flex;
    width: 100%;
}

.option {
    margin-bottom: 2rem;

}


.btn {
    margin-right: 1rem;
    width: 10%;
    padding: 5px;
}

.question {
    font-size: 20px;
    margin-top: 3rem;
    padding: 20px;
}

.answer {
    width: 80%;
    white-space: normal;
    text-align: left;
    color: black;
    font-size: 20px;
    text-transform: none;
}

.result {
    width: 10%;
}

.quiz-container {
    display: block;
    text-align: center;
    margin-top: 0rem;
}

.menu-header {
    width: 200px;
}

.timer-class {
    display: block;
    padding: 0px 20px;
}

.waktu {
    display: block;
    font-size: 25px;
}

.timer {
    text-align: center;
    float: left;
    margin-top: 5rem;
}

.score {
    text-align: center;
    float: right;
    margin-top: 5rem
}

.bg-blue {
    width: 100%;
    height: auto;
    background: #6396CB;
    border: 12px solid #FFFFFF;
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-top: -6rem;
    position: absolute
}

.numQuestion {
    background-color: white;
    width: 150px;
    font-size: 25px;
    left: 29%;
    display: block;
    position: absolute;
    padding: 10px;
}

#univ {
    min-width: 90px;
}

.ion-page {
    background-image: url("../theme/img/quiz/background.png");
}

.menu {
    width: 200px;
}

.menu-container {
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: 2rem;
}

.icon2 {
    width: 50%;

}

.profil-bg {
    background: #FFDE59;
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    text-align: center;
    padding: 20px 0px;

}

.profil-bg img {
    width: 50%;
}

.profil-bg table {
    font-size: 15px;
    margin: 0px 16px;
    text-align: left;
    font-weight: 100;

}

td {
    padding: 3px;
    vertical-align: top;
    word-break: break-word;
}


.center {
    text-align: center;
    margin-top: 2rem;
}
</style>
        