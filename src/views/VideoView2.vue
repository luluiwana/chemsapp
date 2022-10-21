<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/menu">
                </MobileHeader>
                <div class="center">
                    <img src="@/theme/img/header/video.png" class="menu-header">
                </div>
                <div class="video">
                    <img @click="youtube('https://www.youtube.com/watch?v=_cozD8Kx7J0')" src="@/theme/img/video/3.png">
                    <img @click="youtube('https://www.youtube.com/watch?v=W5WTuneRgcg')" src="@/theme/img/video/4.png">
                </div>
                <div class="control">
                    <ion-button @click="sound" router-link="/video" router-direction="root" fill="clear" class="left">
                        <img src="@/theme/img/previous.png" alt="" srcset="">
                    </ion-button>
                    <ion-button @click="sound" router-link="/video" router-direction="root" fill="clear" class="right">
                        <img src="@/theme/img/next.png" class="right" alt="" srcset="">
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
import { defineComponent, ref } from 'vue';
import MobileHeader from '@/components/AppHeader.vue';
import MobileFooter from '@/components/AppFooter.vue';
import click from '@/theme/audio/click.mp3';
const sound_click = new Audio(click);



export default defineComponent({
    name: 'video2-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        MobileFooter,
        IonButton
    },
    methods: {
        youtube: function (link: string) {
            location.href = link;
        },

        sound: function () {
            sound_click.play();
        },
    }
});
</script>
<style scoped>
.right {
    float: right;
}

.left {
    float: left
}

.control {
    position: fixed;
    top: 50%;
    width: 100%;
}

ion-button img {
    width: 40px
}

.video {
    text-align: center;
    margin-top: 4rem
}

.video img {
    margin-top: -6rem;
}

#univ {
    min-width: 90px;
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
    width: 60%;
}

.profil-bg table {
    font-family: cursive;
    font-size: 15px;
    margin: 0px 16px;
    text-align: left;
    font-weight: 600;

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
    