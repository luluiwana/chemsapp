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
                    <img v-if="item.number==5" src="@/theme/img/question/45.png" alt="" srcset="">
                    <img v-if="item.number==9" src="@/theme/img/question/49.png" alt="" srcset="">
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
    QuestionsList4: {
        template: "#question-1",
        name: "question-list4"
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
                    desc: "Indikator yang cukup teliti untuk mengukur kekuatan larutan asam atau derajat keasaman adalah...",
                    optionA: "Fenolftalein",
                    optionB: "Metil jingga",
                    optionC: "Bromtimol biru",
                    optionD: "Metil merah",
                    optionE: "Metil kuning",
                    trueOption: "optionC"
                },
                1: {
                    number: 2,
                    desc: "Indikator asam basa digunakan untuk...",
                    optionA: "Mendeteksi hasil akhir yang ditandai dengan perubahan warna",
                    optionB: "Menentukan konsentrasi suatu larutan asam basa",
                    optionC: "Mendeteksi kekuatan asam basa suatu larutan",
                    optionD: "Mengetahui sifat-sifat larutan",
                    optionE: "Menentukan nilai derajat ionisasi larutan asam basa",
                    trueOption: "optionA"
                },
                2: {
                    number: 3,
                    desc: "Perhatikan hasil pengujian larutan dengan kertas lakmus berikut: <br>1) Merah menjadi merah <br>2) Biru menjadi biru<br>3) Merah menjadi biru<br>4) Biru menjadi merah<br>Yang merupakan hasil pengujian terhadap larutan yang bersifat asam adalah...",
                    optionA: "1 dan 2",
                    optionB: "2 dan 3",
                    optionC: "3 dan 4",
                    optionD: "1 dan 3",
                    optionE: "1 dan 4",
                    trueOption: "optionE"
                },
                3: {
                    number: 4,
                    desc: "Perubahan warna zat atau larutan indikator yang memiliki rentang disebut...",
                    optionA: "pH meter",
                    optionB: "Kertas lakmus",
                    optionC: "Indikator pH",
                    optionD: "Trayek indikator",
                    optionE: "Kertas indikator universal",
                    trueOption: "optionD"
                },
                4: {
                    number: 5,
                    desc: "Seorang siswa sedang melakukan percobaan pengenalan asam basa. Mereka ditugaskan untuk menentukan sifat 4 buah larutan yang belum diketahui sifatnya, ke dalam larutan tersebut ditambahkan indikator asam basa. Berikut data hasil percobaannya:<br> Berdasarkan data diatas larutan yang bersifat basa adalah...",
                    optionA: "A dan B",
                    optionB: "C dan D",
                    optionC: "A dan C",
                    optionD: "B dan C",
                    optionE: "B dan D",
                    trueOption: "optionB"
                },
                5: {
                    number: 6,
                    desc: "Salah satu kelebihan menggunakan indikator alami dalam proses identifikasi sifat asam dan basa suatu senyawa adalah...",
                    optionA: "Mudah digunakan dan praktis",
                    optionB: "Dapat mengukur pH larutan secara presisi",
                    optionC: "Tidak berbahaya dan ramah lingkungan",
                    optionD: "Dapat digunakan secara berulang-ulang",
                    optionE: "Tersedia panduan untuk menentukan pH larutan berdasarkan warna indikator yang ditunjukkan",
                    trueOption: "optionC"
                },
                6: {
                    number: 7,
                    desc: "Untuk mengukur derajat keasaman asam atau basa yang akurat, paling tepat menggunakan...",
                    optionA: "Fenolftalein",
                    optionB: "Metil jingga",
                    optionC: "Bromtimol biru",
                    optionD: "Indikator universal",
                    optionE: "pH meter",
                    trueOption: "optionE"
                },
                7: {
                    number: 8,
                    desc: "Kertas lakmus merah akan menjadi biru bila dicelupkan ke dalam larutan...",
                    optionA: "HClO<sub>4</sub>",
                    optionB: "HCl",
                    optionC: "HCOOH",
                    optionD: "KOH",
                    optionE: "CH<sub>3</sub>COOH",
                    trueOption: "optionD"
                },
                8: {
                    number: 9,
                    desc: "Diketahui trayek perubahan warna dari beberapa indikator: <br>Larutan X ditetesi MM berwarna jingga, dengan BTB berwarna kuning, dengan MO berwarna kuning dan dengan PP tak berwarna maka pH larutan tersebut diperkirakan sebesar...",
                    optionA: "3,1 ‹ pH ‹ 4,2",
                    optionB: "4,4 ‹ pH ‹ 6,0",
                    optionC: "6,0 ‹ pH ‹ 6,2",
                    optionD: "6,2 ‹ pH ‹ 7,6",
                    optionE: "7,6 ‹ pH ‹ 8,3",
                    trueOption: "optionB"
                },
                9: {
                    number: 10,
                    desc: "Indikator yang mempunyai 4 garis warna dan dicocokkan dengan skala pH 0 sampai 14 yang terdapat pada kemasannya adalah...",
                    optionA: "Kertas indikator universal",
                    optionB: "Kertas lakmus",
                    optionC: "pH meter",
                    optionD: "Larutan indikator",
                    optionE: "Indikator alami",
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
                        window.location.href = "result/2/" + value;
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
        