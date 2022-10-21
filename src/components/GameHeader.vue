<template id="custom-button">
    <div class="top">
        <ion-button :router-link="link" router-direction="root" fill="clear" v-if="url">
            <img src="@/theme/img/back.png" class="icon-back d-none">
        </ion-button>
        <ion-button fill="clear" id="sound">
            <img v-show="soundon" @click="audiopause" src="@/theme/img/sound-on.png" class="icon-sound" id="on">
            <img v-show="soundoff" @click="audioplay" src="@/theme/img/sound-off.png" class="icon-sound" id="off">
        </ion-button>

    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
import music from '@/theme/audio/background.mp3';
import music_game from '@/theme/audio/game.mp3';
const audio = new Audio(music);
const audio_game = new Audio(music_game);

export default defineComponent({
    GameHeader: {
        template: "#custom-button",
        name: "game-header"
    },
    components: {
        IonButton
    },
    data() {
        return {
            soundon: this.checkPlay(),
            soundoff: this.checkPause(),
            link: this.url,
        }
    },
    props: ['url'],
    methods: {
        audioplay: function () {
            this.soundoff = false;
            this.soundon = true;
            audio_game.play();
        },
        audiopause: function () {
            this.soundoff = true;
            this.soundon = false;
            audio_game.pause();
        },
        checkPlay: function () {
            if (audio_game.duration > 0 && !audio_game.paused) {
                return true;
            } else {
                return false;
            }
        },
        checkPause: function () {
            if (audio_game.duration > 0 && !audio_game.paused) {
                return false;
            } else {
                return true;
            }
        }
    },
    mounted() {
        audio.pause();
    }

})
</script>
<style scoped>
#sound {
    right: 0;
    position: absolute;
    margin-top: 10px;
}
</style>