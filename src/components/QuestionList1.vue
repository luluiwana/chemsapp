<template id="question-1">
    <div class="timer-class">
        <div class="timer">
            <span class="waktu">Waktu</span>
            <span> {{ timer }}</span>


        </div>
        <div class="score">
            <span class="waktu">Skor</span>
            <span>{{ score }}</span>
            <!-- {{questions}} -->
        </div>
    </div>

    <div class="quiz-container">
        <img src="@/theme/img/quiz/owl.png">
        <div v-for="(item) in questions" :key="item" class="">
            <div class="bg-blue" v-if="item.number == current">
                <div class="numQuestion">
                    SOAL {{ item.number }}
                </div>
                <div class="question" v-html="item.desc"></div>

                <div class="option">
                    <ion-button @click="check(item.trueOption, 'optionA')" router-direction="root" fill="clear"
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
                    <ion-button @click="check(item.trueOption, 'optionB')" router-direction="root" fill="clear"
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
                    <ion-button @click="check(item.trueOption, 'optionC')" router-direction="root" fill="clear"
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
                    <ion-button @click="check(item.trueOption, 'optionD')" router-direction="root" fill="clear"
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
                    <ion-button @click="check(item.trueOption, 'optionE')" router-direction="root" fill="clear"
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
    QuestionsList1: {
        template: "#question-1",
        name: "question-list1"
    },
    components: {
        IonButton
    },
    data() {
        return {
            timer: 30,
            interval: 0,
            current: 1,
            score: 0,
            total_question: 10,
            questions: {
                0: {
                    number: 1,
                    desc: "Menurut teori asam basa Arrhenius, zat dikatakan asam jika...",
                    optionA: "Dalam air menghasilkan ion H<sup>+<sup>",
                    optionB: "Dalam air menghasilkan atom H",
                    optionC: "Donor proton",
                    optionD: "Akseptor proton",
                    optionE: "Donor pasangan elektron bebas",
                    trueOption: "optionA"
                },
                1: {
                    number: 2,
                    desc: "Pernyataaan dibawah ini yang tidak benar berkaitan dengan teori asam basa Arrhenius adalah...",
                    optionA: "Arrhenius mengatakan bahwa pembawa sifat asam dalam larutan adalah H<sup>+</sup>",
                    optionB: "Dapat menjelaskan tentang valensi asam basa",
                    optionC: "Dapat menjelaskan sifat amfoter suatu senyawa ",
                    optionD: "Adanya ion OH<sup>-</sup> yang dilepaskan ketika senyawa terion di dalam air menunjukkan bahwa senyawa tersebut bersifat basa",
                    optionE: "Pelarutnya hanya sebatas air saja",
                    trueOption: "optionC"
                },
                2: {
                    number: 3,
                    desc: "NH<sub>3</sub> merupakan senyawa basa, tetapi teori asam basa Arrhenius tidak dapat menjelaskan sifat basa dari NH<sub>3</sub>. Hal ini disebabkan oleh salah satu kelemahan teori Arrhenius yaitu...",
                    optionA: "NH<sub>3</sub> tidak larut dalam air",
                    optionB: "NH<sub>3</sub> dapat bersifat asam maupun basa",
                    optionC: "NH<sub>3</sub> tidak mengandung ion OH<sup>-</sup>",
                    optionD: "Saat dilarutkan ke dalam air tidak terjadi donor proton oleh NH<sub>3</sub>",
                    optionE: "NH<sub>3</sub> tidak dapat mengion di dalam air",
                    trueOption: "optionC"
                }, 3: {
                    number: 4,
                    desc: "Senyawa basa menurut Bronsted-Lowry adalah...",
                    optionA: "Senyawa yang berasa pahit dan licin di tangan",
                    optionB: "Adanya pelepasan ion OH<sup>-</sup> ketika senyawa terionisasi",
                    optionC: "Senyawa yang menerima donor pasangan elektron dari senyawa lain",
                    optionD: "Senyawa yang bertindak sebagai akseptor proton",
                    optionE: "Senyawa yang memberikan ion H<sup>+</sup> pada senyawa lain",
                    trueOption: "optionD"
                }, 4: {
                    number: 5,
                    desc: "Spesi dibawah ini yang dapat bersifat amfoter menurut Bronsted-Lowry adalah...",
                    optionA: "H<sub>2</sub>O",
                    optionB: "Br<sup>-</sup> ",
                    optionC: "HCl",
                    optionD: "NH<sub>4</sub>Cl",
                    optionE: "Mg(OH)<sub>2</sub>",
                    trueOption: "optionA"
                }, 5: {
                    number: 6,
                    desc: "Perhatikan reaksi berikut:<br/><br/>HSO<sub>4</sub><sup>-</sup> <i>(aq)</i>+ CO<sub>3</sub><sup>2-</sup> <i>(aq)</i>→ SO<sub>4</sub><sup>2-</sup><i>(aq)</i> + HCO<sup>3-</sup> <i>(aq)</i><br/><br/>Dari reaksi diatas yang termasuk basa konjugasi menurut teori asam basa Lewis adalah...",
                    optionA: "Tidak ada",
                    optionB: "HCO<sup>3-</sup>",
                    optionC: "SO<sub>4</sub><sup>2-</sup>",
                    optionD: "HSO<sub>4</sub><sup>-</sup>",
                    optionE: "CO<sub>3</sub><sup>2-</sup>",
                    trueOption: "optionE"
                }, 6: {
                    number: 7,
                    desc: "Perhatikan reaksi berikut: <br><br>NH<sub>4</sub><sup>+</sup> <i>(aq)</i> + H<sub>2</sub>O (l) → NH<sub>3</sub> <i>(aq)</i> + H<sub>3</sub>O<sup>+</sup> <i>(aq)</i><br><br>Yang merupakan pasangan asam basa konjugasi adalah...",
                    optionA: "NH<sub>4</sub><sup>+</sup> dan H<sub>2</sub>O",
                    optionB: "NH<sub>4</sub><sup>+</sup> dan NH<sub>3</sub>",
                    optionC: "H<sub>2</sub>O dan NH<sub>3</sub>",
                    optionD: "NH<sub>3</sub> dan H<sub>3</sub>O<sup>+</sup>",
                    optionE: "NH<sub>4</sub><sup>+</sup> dan H<sub>3</sub>O<sup>+</sup>",
                    trueOption: "optionB"
                }, 7: {
                    number: 8,
                    desc: "Menurut teori asam basa Lewis, basa adalah...",
                    optionA: "Akseptor proton",
                    optionB: "Zat yang didalam air dapat melepaskan ion OH<sup>-</sup>",
                    optionC: "Donor proton",
                    optionD: "Akseptor pasangan elektron",
                    optionE: "Donor pasangan elektron",
                    trueOption: "optionE"
                }, 8: {
                    number: 9,
                    desc: "Menurut teori asam basa Lewis, sifat H<sub>2</sub>O dalam reaksi H<sub>2</sub>O <i>(l)</i> + CO<sub>2</sub><i><i>(g)</i></i> → H<sub>2</sub>CO<sub>2</sub><i>(aq)</i> adalah...",
                    optionA: "Asam",
                    optionB: "Basa",
                    optionC: "Asam konjugasi",
                    optionD: "Basa konjugasi",
                    optionE: "Netral",
                    trueOption: "optionB"
                }, 9: {
                    number: 10,
                    desc: "Diketahui persamaan reaksi sebagai berikut: <br> <br>BF<sub>3</sub> <i>(g)</i> + NH<sub>3</sub> <i>(g)</i> → BF<sub>3</sub>NH<sub>3</sub> <i>(g)</i> <br> <br>Menurut teori asam basa Lewis atom B pada BF<sub>3</sub> bertindak sebagai...",
                    optionA: "Asam",
                    optionB: "Basa",
                    optionC: "Asam konjugasi",
                    optionD: "Netral",
                    optionE: "Basa konjugasi",
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
                    this.timer = 30;
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
                        window.location.href = "result/1/" + value;
                    }
                    else {
                        this.clearResult();
                        this.current++;
                        this.score = this.score + add;
                        this.timer = 30;
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
        