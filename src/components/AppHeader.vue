<template id="custom-button">
    <div class="top">
        <ion-button @click="sound" :router-link="link" router-direction="root" fill="clear" v-if="url">
            <img src="@/theme/img/back.png" class="icon-back d-none">
        </ion-button>
        <ion-button fill="clear" id="sound">
            <img v-show="soundon" @click="audiopause" src="@/theme/img/sound-on.png" class="icon-sound" id="on">
            <img v-show="soundoff" @click="audioplay" src="@/theme/img/sound-off.png" class="icon-sound" id="off">
        </ion-button>

    </div>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue';
import { IonButton } from '@ionic/vue';
import { NativeAudio } from '@capacitor-community/native-audio'
NativeAudio.preload({
    assetId: "au_app",
    assetPath: require('@/theme/audio/background.mp3'),
    audioChannelNum: 1,
    isUrl: true
});
NativeAudio.preload({
    assetId: "au_game",
    assetPath: require('@/theme/audio/game.mp3'),
    audioChannelNum: 1,
    isUrl: true
});
NativeAudio.preload({
    assetId: "au_click",
    assetPath: require('@/theme/audio/click.mp3'),
    audioChannelNum: 1,
    isUrl: true
});




export default defineComponent({
    MobileHeader: {
        template: "#custom-button",
        name: "app-header"
    },
    components: {
        IonButton
    },
    setup() {
        const bgmusic = ref<HTMLAudioElement>();
        return {
            bgmusic,
        }

    },
    data() {
        return {
            soundon: this.checkPlay(),
            soundoff: this.checkPause(),
            link: this.url,
            game_status: this.game,

        }
    },
    props: ['url', 'game'],
    methods: {
        sound: function () {
            NativeAudio.resume({ assetId: 'au_click' });
        },
        audioplay: function () {
            this.soundoff = false;
            this.soundon = true;
            if (this.game_status == "true" || this.game_status == "quiz") {
                NativeAudio.resume({ assetId: 'au_game' });
            } else {
                NativeAudio.resume({ assetId: 'au_app' });
            }


        },
        audiopause: function () {
            this.soundoff = true;
            this.soundon = false;
            NativeAudio.pause({ assetId: 'au_game', });
            NativeAudio.pause({ assetId: 'au_app', });
        },
        checkPlay: function () {
            if (this.game_status == "quiz") {
                return false;
            } else {
                let played = false;
                NativeAudio.isPlaying({ assetId: 'au_app' })
                    .then(result => {
                        played = result.isPlaying;
                    });
                return played;
            }

        },
        checkPause: function () {
            if (this.game_status == "quiz") {
                return false;
            } else {
                let paused = true;
                NativeAudio.isPlaying({ assetId: 'au_app' })
                    .then(result => {
                        if (result.isPlaying == true) {
                            paused = false;
                        } else {
                            paused = true;
                        }
                    })
                return paused;
            }


        },
    },
    mounted() {
        if (this.game_status == "true" || this.game_status == "quiz") {
            NativeAudio.isPlaying({
                assetId: 'au_app'
            })
                .then(result => {
                    if (result.isPlaying == true) {
                        this.audiopause();
                        this.soundoff = false;
                        this.soundon = true;
                        this.audioplay();
                    }
                })
            NativeAudio.isPlaying({
                assetId: 'au_game'
            })
                .then(result => {
                    if (result.isPlaying == true) {
                        this.soundoff = false;
                        this.soundon = true;
                    }
                })
        } else {
            NativeAudio.isPlaying({
                assetId: 'au_game'
            })
                .then(result => {
                    if (result.isPlaying == true) {
                        this.audiopause();
                        this.soundoff = false;
                        this.soundon = true;
                        this.audioplay();
                    }
                })
            NativeAudio.isPlaying({
                assetId: 'au_app'
            })
                .then(result => {
                    if (result.isPlaying == true) {
                        this.soundoff = false;
                        this.soundon = true;
                    }
                })
        }

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