<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <MobileHeader url="/kdipk"> </MobileHeader>
        <div class="center">
          <img src="@/theme/img/menu/menu-ipk.png" id="header-icon" />
          <img src="@/theme/img/header/tp.png" id="header-title" />
        </div>

        <div class="bg-white">
          <div class="bg-yellow">
            <ol>
              <li>
                Peserta didik dapat menjelaskan sifat asam basa senyawa menurut
                teori asam basa
              </li>
              <li>
                Peserta didik dapat menentukan konsentrasi ion H dan OH dalam
                larutan berdasarkan kesetimbangan ion dalam larutan
              </li>
              <li>
                Peserta didik dapat menentukan derajat keasaman (pH) larutan
                asam atau basa
              </li>
              <li>
                Peserta didik dapat mengidentifikasi beberapa larutan asam basa
                dengan beberapa indikator
              </li>
            </ol>
          </div>
        </div>
        <MobileFooter />
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import MobileHeader from "@/components/AppHeader.vue";
import MobileFooter from "@/components/AppFooter.vue";

export default defineComponent({
  name: "ipk-view",
  components: {
    IonContent,
    IonPage,
    MobileHeader,
    MobileFooter,
  },
});
</script>
<style scoped>
.bg-white {
  box-sizing: border-box;
  position: absolute;
  width: 92%;
  height: 270px;
  left: 4%;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 5px 10px 5px rgb(0 0 0 / 25%);
  border-radius: 20px;
}

#header-icon {
  width: 70px;
  display: block;
  margin: auto;
}

#header-title {
  display: block;
  margin: auto;
  margin-bottom: 10px;
}

ol {
  font-size: 15px;
  padding-right: 20px;
  padding-top: 10px;
}

.bg-yellow {
  box-sizing: border-box;
  position: absolute;
  width: 98%;
  height: 260px;
  left: 0%;
  background: #ffde59;
  border: 1px solid #000000;
  border-radius: 20px;
}

.center {
  text-align: center;
}

.center img {
  width: 90%;
}

#header-icon {
  width: 70px;
}

.menu {
  width: 100px;
}

@media screen and (min-width: 768px) {
  #header-title {
    width: 400px;
  }
}
</style>
