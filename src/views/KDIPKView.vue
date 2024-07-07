<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <MobileHeader url="/menu"> </MobileHeader>
        <div class="center">
          <img src="@/theme/img/header/cptp.png" class="menu-header" />
        </div>
        <div class="menu-container">
          <div class="icon1">
            <ion-button
              @click="sound"
              router-link="/kd"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-ipk.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/kd"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">Capaian Pembelajaran</button>
            </ion-button>
          </div>
        </div>
        <div class="menu-container">
          <div class="icon1">
            <ion-button
              @click="sound"
              router-link="/ipk"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <img src="@/theme/img/menu/menu-ipk.png" class="menu" />
            </ion-button>
            <ion-button
              @click="sound"
              router-link="/ipk"
              router-direction="root"
              fill="clear"
              class="btn-menu"
            >
              <button class="btn">Tujuan Pembelajaran</button>
            </ion-button>
          </div>
        </div>

        <MobileFooter />
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
  name: "kdipk-view",
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
.menu-container {
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: 2rem;
}

.icon1 {
  width: 100% !important;
  padding: 0px 50px;
}

.btn-menu {
  height: auto;
  display: block;
}

.menu {
  width: 100px;
  margin-left: 10px;
}

.center {
  text-align: center;
  margin-top: 2rem;
}
</style>
