<template id="app-footer">
    <div class="bottom">
        <ion-button @click="sound" router-link="/landing" router-direction="root" fill="clear">
            <img src="@/theme/img/home-icon.png" id="icon">
        </ion-button>

    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
import click from '@/theme/audio/click.mp3';
const sound_click = new Audio(click);

export default defineComponent({
    MobileFooter: {
        template: "#app-footer",
        name: "app-footer"
    },
    components: {
        IonButton
    },
    methods: {
        sound: function () {
            sound_click.play();
        },
    }
})
</script>
<style scoped>
#icon {
    height: 100%;
    width: 50px
}

.bottom {
    position: fixed;
    bottom: 0rem;
    margin: auto;
    background: #ffffff1a;
    width: 100%;
    text-align: center;
}
</style>