<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <MobileHeader url="/game" game="true">
            </MobileHeader>
            <div id="container">

                <div>

                    <div class="title-header">
                        <div class="icon">
                            <img src="@/theme/img/quiz/chemsicon.png" class="">
                        </div>
                        <div class="title">
                            {{title}}
                        </div>
                    </div>
                </div>
                <div class="center">

                    <img src="@/theme/img/quiz/ready.png" class="ready">
                    <ion-button @click="start($route.params.id)" router-direction="root" fill="clear" class="btn-menu">
                        <button class="btn">Start</button>
                    </ion-button>
                </div>

                <MobileFooter>
                </MobileFooter>

            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import MobileHeader from '@/components/AppHeader.vue';
import MobileFooter from '@/components/AppFooter.vue';
import click from '@/theme/audio/click.mp3';
import ready from '@/theme/audio/ready.mp3';
import anime from 'animejs';

const sound_click = new Audio(click);
const sound_ready = new Audio(ready);



export default defineComponent({
    name: 'ready-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        MobileFooter,
        IonButton
    },
    data() {
        return {
            title: 'no title',
            id: 0,
        }
    },
    methods: {
        defineTitle: function () {
            if (this.$route.params.id == '1') {
                this.title = "Teori Asam Basa"
            }
            if (this.$route.params.id == '2') {
                this.title = "Kesetimbangan Ion dalam Larutan Asam Basa"
            }
            if (this.$route.params.id == '3') {
                this.title = "Derajat Keasaman"
            }
            if (this.$route.params.id == '4') {
                this.title = "Indikator Asam Basa"
            }
        },
        start: function (id: string) {
            this.sound();
            window.location.href = "quiz/" + id;
        },
        sound: function () {
            sound_click.play();
        },
        scale: function () {
            anime({
                targets: '.ready',
                scale: 3,
                duration: 10000
            });
        },
    },
    mounted() {
        this.defineTitle();
        sound_ready.play();
        this.scale();
    }

});
</script>
<style scoped>
.icon {
    width: 20%;
}

.title {
    vertical-align: middle;
    margin: auto;
    margin-left: 0;
    width: 80%;
    padding-left: 10px;
}

.btn {
    font-size: 30px
}

.ready {
    margin-top: 4rem;
    margin-bottom: 3rem;
    scale: 0.2;
}

.title-header {

    display: flex;
    background-color: #FFDE59;
    border-radius: 50px;
    padding: 15px;
    margin: 0px 20px 0px 20px;
    font-size: 20px;
}

#univ {
    min-width: 90px;
}

.menu {
    width: 80%
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
    