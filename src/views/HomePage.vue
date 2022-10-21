<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <div class="mobile text-center">
          <img src="@/theme/img/splash1.png" class="text-swing image-center w-70" alt="" srcset="">
        </div>

      </div>
      <img src="@/theme/img/splash.png" class="fade-up image-center w-100 btm" style="translate: 0 100px" alt=""
        srcset="">
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import anime from 'animejs';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
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
    fadeup: function () {
      anime({
        targets: '.fade-up',
        translateY: -100
      });
    },
    redirect: function () {
      setTimeout(() => this.$router.push({ path: '/landing' }), 3000);
    }
  },
  mounted() {
    this.translate();
    this.fadeup();
    this.redirect();
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#background-content {
  background: none;
}

.btm {
  position: absolute;
  bottom: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
