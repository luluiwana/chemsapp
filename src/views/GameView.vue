<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/menu" game="true">
                </MobileHeader>
                <div class="center">
                    <img src="@/theme/img/header/games.png" class="menu-header">
                </div>
                <div class="road1">
                    <div class="line1">
                        <div class="title-1 swing">
                            Teori Asam Basa
                        </div>
                        <ion-button @click="sound" router-link="/ready/1" router-direction="root" fill="clear"
                            class="fade btn-menu game1">

                            <button class="btn">1</button>
                        </ion-button>
                    </div>
                    <img class="w-100" src="@/theme/img/road1.png">

                </div>
                <div class="road2 ">
                    <div class="w-100 flex">
                        <div class="w-50">
                            <div class="title-2 swing">
                                Derajat Keasaman
                            </div>
                            <ion-button @click="sound" router-link="/ready/3" router-direction="root" fill="clear"
                                class="fade btn-menu game3">
                                <button class="btn">3</button>
                            </ion-button>
                        </div>
                        <div class="w-50">
                            <div class="title-3 swing">

                                Kesetimbangan Ion dalam Larutan Asam Basa
                            </div>
                            <ion-button @click="sound" router-link="/ready/2" router-direction="root" fill="clear"
                                class="fade btn-menu game2">
                                <button class="btn">2</button>
                            </ion-button>
                        </div>
                    </div>


                    <img src="@/theme/img/road2.png" class="w-100">


                </div>
                <div class="road3 ">
                    <div class="line3">
                        <div class="title-4 swing">
                            Indikator Asam Basa
                        </div>
                        <ion-button @click="sound" router-link="/ready/4" router-direction="root" fill="clear"
                            class="fade btn-menu game4">
                            <button class="btn">4</button>
                        </ion-button>
                    </div>
                    <img src="@/theme/img/road3.png" class="w-100">


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
import anime from 'animejs';
import click from '@/theme/audio/click.mp3';
const sound_click = new Audio(click);


export default defineComponent({
    name: 'game-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        MobileFooter,
        IonButton
    },
    methods: {
        translate: function () {
            anime({
                targets: '.swing',
                rotate: -5,
                loop: true,
                easing: 'linear',
                direction: 'alternate',
            });
        },
        fadeup: function () {
            anime({
                targets: '.fade',
                translateY: -50
            });
        },
        sound: function () {
            sound_click.play();
        },
    },
    mounted() {
        this.translate();
        this.fadeup();
    }

});
</script>
    
<style scoped>
.swing {
    transform: rotate(5deg)
}

.fade {
    translate: 0 50px
}

.flex {
    display: flex;
    position: absolute;
    margin-top: -3rem;
}

.line1 {
    position: absolute;
    width: 100%;
    margin-top: 1rem;
}

.line3 {
    position: absolute;
    width: 100%;
}

.title-1 {
    background-color: #FFDE59;
    border-radius: 50px;
    padding: 15px;
    font-size: 15px;
    margin-top: -8rem;
    width: 50%;
    margin: auto;
    text-align: center;
}

.title-2 {
    background-color: #FFDE59;
    border-radius: 50px;
    padding: 15px;
    font-size: 15px;
}

.title-3 {
    background-color: #FFDE59;
    border-radius: 50px;
    padding: 15px;
    font-size: 15px;
}

.title-4 {
    background-color: #FFDE59;
    border-radius: 50px;
    padding: 15px;
    font-size: 15px;
    width: 50%;
    display: block;
    margin: auto;
    text-align: center
}


.game3 {}

.game4 {
    display: block;
    margin: auto
}

.game2 {}

.btn {
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.game1 {
    display: block;
    margin: auto;
    /* margin-top: -6rem */
}

/* .road1 {
    margin-top: -4rem
} */

.road2 {
    margin-top: 6rem;
    /* display: flex; */
}

.w-50 {
    width: 50%;
    text-align: center
}

.road3 {
    /* margin-top: -16rem */
}

.none {
    display: none
}



.center {
    text-align: center;
    margin-top: 2rem;
}
</style>