<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/menu">
                </MobileHeader>
                <div class="center">
                    <img src="@/theme/img/header/materi.png" class="menu-header">
                </div>
                <div class="menu-container">
                    <div class="icon2">
                        <ion-button @click="sound" router-link="/book/1" router-direction="root" fill="clear"
                            class="btn-menu">
                            <img src="@/theme/img/materi/1.png" class="menu">

                        </ion-button>
                        <ion-button @click="sound" router-link="/book/1" router-direction="root" fill="clear"
                            class="btn-menu">
                            <button class="btn">MATERI 1</button>
                        </ion-button>
                    </div>
                    <div class="icon2">
                        <ion-button @click="sound" router-link="/book/2" router-direction="root" fill="clear"
                            class="btn-menu">
                            <img src="@/theme/img/materi/2.png" class="menu">
                        </ion-button>
                        <ion-button @click="sound" router-link="/book/2" router-direction="root" fill="clear"
                            class="btn-menu">
                            <button class="btn">MATERI 2</button>
                        </ion-button>
                    </div>
                </div>
                <div class="menu-container">
                    <div class="icon2">
                        <ion-button @click="sound" router-link="/book/3" router-direction="root" fill="clear"
                            class="btn-menu">
                            <img src="@/theme/img/materi/3.png" class="menu">

                        </ion-button>
                        <ion-button @click="sound" router-link="/book/3" router-direction="root" fill="clear"
                            class="btn-menu">
                            <button class="btn">MATERI 3</button>
                        </ion-button>
                    </div>
                    <div class="icon2">
                        <ion-button @click="sound" router-link="/book/4" router-direction="root" fill="clear"
                            class="btn-menu">
                            <img src="@/theme/img/materi/4.png" class="menu">
                        </ion-button>
                        <ion-button @click="sound" router-link="/book/4" router-direction="root" fill="clear"
                            class="btn-menu">
                            <button class="btn">MATERI 4</button>
                        </ion-button>
                    </div>
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
const sound_click = new Audio(click);



export default defineComponent({
    name: 'materi-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        MobileFooter,
        IonButton
    },
    methods: {
        sound: function () {
            sound_click.play();
        },
    }

});
</script>
<style scoped>
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
    