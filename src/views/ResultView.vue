<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/game" game="true">
                </MobileHeader>
                <div class="quiz-container">
                    <img src="@/theme/img/quiz/result.png">
                    <div class="value">{{$route.params.value}}</div>
                </div>
                <div class="restart">
                    <ion-button @click="restart($route.params.id)" router-direction="root" fill="clear"
                        class="btn-menu">
                        <button class="btn">Restart</button>
                    </ion-button>
                </div>
                <div class="navigation">
                    <ion-button router-link="/game" router-direction="root" fill="clear" class="btn-menu back">
                        <button class="btn">Back</button>
                    </ion-button>
                    <div v-if="next">
                        <ion-button v-if="$route.params.id=='1'" router-link="/ready/2" router-direction="root"
                            fill="clear" class="btn-menu next">
                            <button class="btn">Next</button>
                        </ion-button>
                        <ion-button v-if="$route.params.id=='2'" router-link="/ready/3" router-direction="root"
                            fill="clear" class="btn-menu next">
                            <button class="btn">Next</button>
                        </ion-button>
                        <ion-button v-if="$route.params.id=='3'" router-link="/ready/4" router-direction="root"
                            fill="clear" class="btn-menu next">
                            <button class="btn">Next</button>
                        </ion-button>
                    </div>

                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import MobileHeader from '@/components/AppHeader.vue';
import score from '@/theme/audio/score.mp3';
const sound_score = new Audio(score);


export default defineComponent({
    name: 'result-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        IonButton,
    },
    data() {
        return {
            next: true
        }
    },
    methods: {
        restart: function (id: string) {
            window.location.href = "quiz/" + id;
        },
    },
    mounted() {
        if (this.$route.params.id == "4") {
            this.next = false;
        }
        sound_score.play();
    }
});
</script>
<style scoped>
.navigation {
    display: flex;
    margin-top: 2rem
}

.quiz-container {
    text-align: center;
}

.back {
    width: 50%;
    float: left;
}

.next {
    width: 50%;
    float: right;
    position: absolute
}

.menu {
    width: 100px;
    margin-left: 10px;
}

.value {
    /* position: absolute; */
    margin-top: -11rem;
    /* margin-left: 8rem; */
    color: white;
    /* box-shadow: 7px 13px 26px 3px rgb(0 0 0 / 28%); */
    text-shadow: 7px 6px 10px rgb(0 0 0 / 50%);
    font-size: 100px;
}

.restart {
    margin-top: 6rem;
}

.center {
    text-align: center;
    margin-top: 2rem;
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

.icon1 {
    width: 100% !important;
    padding: 0px 50px;
}

.btn-menu {
    height: auto;
    display: block;
}

@media screen and (max-width: 375px) {
    .value {
        margin-top: -9rem;
        color: white;
        text-shadow: 7px 6px 10px rgb(0 0 0 / 50%);
        font-size: 80px;
    }
}
</style>
    