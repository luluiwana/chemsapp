<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <MobileHeader url="" game="quiz">
            </MobileHeader>
            <div id="container">
                <img src="@/theme/img/quiz/quiz.png" class="menu-header">
                <div v-if="$route.params.id=='1'">
                    <QuestionList1 />
                </div>
                <div v-if="$route.params.id=='2'">
                    <QuestionList2 />
                </div>
                <div v-if="$route.params.id=='3'">
                    <QuestionList3 />
                </div>
                <div v-if="$route.params.id=='4'">
                    <QuestionList4 />
                </div>


            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage, } from '@ionic/vue';
import { defineComponent } from 'vue';
import QuestionList1 from '@/components/QuestionList1.vue';
import QuestionList2 from '@/components/QuestionList2.vue';
import QuestionList3 from '@/components/QuestionList3.vue';
import QuestionList4 from '@/components/QuestionList4.vue';
import MobileHeader from '@/components/AppHeader.vue';


export default defineComponent({
    name: 'quiz-view',
    components: {
        IonContent,
        IonPage,
        QuestionList1,
        QuestionList2,
        QuestionList4,
        QuestionList3,
        MobileHeader
    },
    data() {
        return {
            timer: 30,
            interval: 0,
            score: 0
        }
    },
    methods: {
        startTimer: function () {
            this.interval = setInterval(() => {
                if (this.timer === 0) {
                    clearInterval(this.interval)
                } else {
                    this.timer--
                }
            }, 1000)
        }
    },
    mounted() {
        this.startTimer();

    }

});
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
    color: #000000a8;

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
    