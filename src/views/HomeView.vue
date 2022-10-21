<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <MobileHeader url="">
            </MobileHeader>
            <div id="container">

                <div class="mobile" id="content">
                    <img src="@/theme/img/home.png" class="image-center w-100" alt="" srcset="">
                </div>
                <div class="text-center btn-menu">
                    <ion-button @click="sound" router-link="/menu" router-direction="root" fill="clear"
                        class="text-swing" style="transform: rotate(10deg);">
                        <button class="btn">MENU</button>
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import MobileHeader from '@/components/AppHeader.vue';
import anime from 'animejs';
import click from '@/theme/audio/click.mp3';
const sound_click = new Audio(click);

export default defineComponent({
    name: 'home-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        IonButton
    },
    methods: {
        translate: function () {
            anime({
                targets: '.text-swing',
                rotate: -10,
                loop: true,
                easing: 'linear',
                direction: 'alternate',
            });
        },
        sound: function () {
            sound_click.play();
        },
    },
    mounted() {
        this.translate();
    }

});
</script>
<style scoped>
.btn-menu {
    margin-top: -12rem;
}

#myAudio {
    display: blocks;
}

.mobile {
    margin-top: 3rem
}
</style>
    