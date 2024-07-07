<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <MobileHeader url="/landing"> </MobileHeader>
        <div class="center">
          <img src="@/theme/img/menu/menu.png" class="menu" />
        </div>
        <div class="menu-container">
          <div class="icon2">
            <ion-button
              @click="sound"
              router-link="/kdipk"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-ipk.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/kdipk"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">CP & TP</button>
            </ion-button>
          </div>
          <div class="icon2">
            <ion-button
              @click="sound"
              router-link="/materi"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-materi.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/materi"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">MATERI</button>
            </ion-button>
          </div>
        </div>
        <div class="menu-container">
          <div class="icon2">
            <ion-button
              @click="sound"
              router-link="/video"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-video.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/video"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">VIDEO</button>
            </ion-button>
          </div>
          <div class="icon2">
            <ion-button
              @click="sound"
              router-link="/game"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-games.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/game"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">GAMES</button>
            </ion-button>
          </div>
        </div>
        <div class="menu-container">
          <div class="icon1">
            <ion-button
              @click="sound"
              router-link="/profil"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-profil.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/profil"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">PROFIL</button>
            </ion-button>
          </div>
        </div>
      </div>
      <div class="container">
        <MobileFooter> </MobileFooter>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage, IonButton } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import MobileHeader from "@/components/AppHeader.vue";
import MobileFooter from "@/components/AppFooter.vue";
import click from "@/theme/audio/click.mp3";
const sound_click = new Audio(click);

export default defineComponent({
  name: "menu-view",
  components: {
    IonContent,
    IonPage,
    MobileHeader,
    IonButton,
    MobileFooter,
  },
  methods: {
    sound: function () {
      sound_click.play();
    },
  },
});
</script>
<style scoped>
.menu {
  width: 100px;
  margin-left: 10px;
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
</style>
