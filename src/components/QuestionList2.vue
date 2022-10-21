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
                    <img v-if="item.number==10" src="@/theme/img/question/210.png" alt="" srcset="">
                    <div v-html="item.desc"></div>
                </div>

                <div class="option">
                    <ion-button @click="check(item.trueOption,'optionA')" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn no-shadow"> A</button>
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
                        <button class="btn no-shadow"> B</button>
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
                        <button class="btn no-shadow"> C</button>
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
                        <button class="btn no-shadow"> D</button>
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
                        <button class="btn no-shadow"> E</button>
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
    QuestionsList2: {
        template: "#question-1",
        name: "question-list2"
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
                    desc: "Perhatikan senyawa-senyawa dibawah ini: <br>1) NaOH <br>2) NH<sub>3</sub> <br>3) Al(OH)<sub>3</sub> <br>4) Mg(OH)<sub>2</sub><br>Yang merupakan senyawa basa kuat adalah...<br>",
                    optionA: "(1) dan (2)",
                    optionB: "(1) dan (3)",
                    optionC: "(2) dan (4)",
                    optionD: "(1) dan (4)",
                    optionE: "(3) dan (4)",
                    trueOption: "optionD"
                },
                1: {
                    number: 2,
                    desc: "Perhatikan senyawa-senyawa dibawah ini:<br>1) LiOH<br>2) Fe(OH)<sub>3</sub><br>3) Ca(OH)<sub>2</sub><br>4) NH<sub>4</sub>OH<br>Yang merupakan senyawa basa lemah adalah...<br>",
                    optionA: "(1) dan (2)",
                    optionB: "(1) dan (3)",
                    optionC: "(2) dan (4)",
                    optionD: "(1) dan (4)",
                    optionE: "(3) dan (4)",
                    trueOption: "optionC"
                },
                2: {
                    number: 3,
                    desc: "Perhatikan senyawa-senyawa dibawah ini:<br>1) HF<br>2) CH<sub>3</sub>COOH<br>3) HNO<sub>3</sub><br>4) HCl<br>Yang merupakan senyawa asam kuat adalah...<br>",
                    optionA: "(1) dan (2)",
                    optionB: "(1) dan (3)",
                    optionC: "(2) dan (4)",
                    optionD: "(1) dan (4)",
                    optionE: "(3) dan (4)",
                    trueOption: "optionE"
                },
                3: {
                    number: 4,
                    desc: "Perhatikan senyawa-senyawa dibawah ini:<br>1) HCN<br>2) H<sub>3</sub>PO<sub>4</sub><br>3) HI<br>4) HClO<sub>4</sub><br>Yang merupakan senyawa asam lemah di atas...<br>",
                    optionA: "(1) dan (2)",
                    optionB: "(1) dan (3)",
                    optionC: "(2) dan (4)",
                    optionD: "(1) dan (4)",
                    optionE: "(3) dan (4)",
                    trueOption: "optionA"
                },
                4: {
                    number: 5,
                    desc: "Konsentrasi OH<sup>-</sup> yang terdapat dalam larutan Ba(OH)<sub>2</sub> 0,20 M adalah...<br>",
                    optionA: "0,10 M",
                    optionB: "0,40 M",
                    optionC: "0,20 M",
                    optionD: "0,25 M",
                    optionE: "0,30 M",
                    trueOption: "optionB"
                },
                5: {
                    number: 6,
                    desc: "Konsentrasi H<sup>+</sup> yang terdapat dalam asam formiat (HCOOH) 0,01 M adalah... <br>(diketahui Ka HCOOH = 1,7 x 10<sup>-14</sup>)",
                    optionA: "1,3 x 10<sup>-2</sup> M",
                    optionB: "1,7 x 10<sup>-2</sup> M",
                    optionC: "1,0 x 10<sup>-2</sup> M",
                    optionD: "1,7 x 10<sup>-4</sup> M",
                    optionE: "1,25 x 10<sup>-2</sup> M",
                    trueOption: "optionA"
                },
                6: {
                    number: 7,
                    desc: "Konsentrasi OH<sup>-</sup> yang terdapat dalam larutan amonia 0,5 M adalah...<br>(diketahui Kb NH<sub>3</sub> = 1,8 x 10<sup>-5</sup>)",
                    optionA: "3,6 x 10<sup>-3</sup> M",
                    optionB: "1,7 x 10<sup>-2</sup> M",
                    optionC: "9,0 x 10<sup>-6</sup> M",
                    optionD: "2,7 x 10<sup>-3</sup> M",
                    optionE: "3,0 x 10<sup>-3</sup> M",
                    trueOption: "optionE"
                },
                7: {
                    number: 8,
                    desc: "Konsentrasi H<sup>+</sup> pada larutan yang terbuat dari 1,48 g H<sub>2</sub>SO<sub>4</sub> (Mr=98) dalam 100 mL air adalah...",
                    optionA: "0,15 M",
                    optionB: "0,20 M",
                    optionC: "0,03 M",
                    optionD: "0,30 M",
                    optionE: "3,0 x 10<sup>-4</sup> M",
                    trueOption: "optionD"
                },
                8: {
                    number: 9,
                    desc: "Sebanyak 0,1 mol gas amonia dilarutkan ke dalam air sampai 1 dm<sup>3</sup> sehingga mencapai reaksi keseimbangan sebagai berikut:<br><br> NH<sub>3</sub> <i>(g)</i> + H<sub>2</sub>O <i>(l)</i> ⥨ NH<sub>4</sub>+ <i>(aq)</i> + OH<sup>-</sup> <i>(aq)</i> <br><br> Jika 1% NH<sub>3</sub> telah terionisasi Ka amonia adalah...<br>",
                    optionA: "10<sup>-1</sup>",
                    optionB: "10<sup>-2</sup>",
                    optionC: "10<sup>-3</sup>",
                    optionD: "10<sup>-4</sup>",
                    optionE: "10<sup>-5</sup>",
                    trueOption: "optionE"
                },
                9: {
                    number: 10,
                    desc: "Perhatikan nilai Ka beberapa asam lemah berikut:<br><br>Berdasarkan tabel tersebut, dapat ditarik kesimpulan bahwa urutan kekuatan asam adalah...",
                    optionA: "CH<sub>3</sub>COOH > HCN >HNO<sub>3</sub>",
                    optionB: "CH<sub>3</sub>COOH > HNO<sub>3</sub>>HCN",
                    optionC: "HNO<sub>3</sub>> CH<sub>3</sub>COOH > HCN",
                    optionD: "HNO<sub>3</sub>> HCN > CH<sub>3</sub>COOH",
                    optionE: "HCN > HNO<sub>3</sub>> CH<sub>3</sub>COOH",
                    trueOption: "optionC"
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
                        window.location.href = "result/2/" + value;
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
        