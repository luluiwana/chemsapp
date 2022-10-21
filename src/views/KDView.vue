<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/kdipk">
                </MobileHeader>
                <div class="center">
                    <img src="@/theme/img/menu/menu-ipk.png" id="header-icon">
                    <img src="@/theme/img/header/kd.png" id="header-title">

                </div>

                <div class="bg-white">
                    <div class="bg-yellow">
                        <!-- ipk -->
                        <p>
                            3.10 Menjelaskan konsep asam basa serta kekuatannya dan kesetimbangan pengionan dalam
                            larutan.

                        </p>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="bg-yellow">
                        <!-- ipk -->
                        <p>
                            4.10 Menganalisis trayek perubahan pH beberapa indikator yang diekstrak dari bahan alam
                            melalui percobaan

                        </p>
                    </div>
                </div>
                <MobileFooter />


            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import MobileHeader from '@/components/AppHeader.vue';
import MobileFooter from '@/components/AppFooter.vue';



export default defineComponent({
    name: 'kd-view',
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
    position: relative;
    width: 92%;
    height: 120px;
    left: 4%;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 5px 10px 5px rgb(0 0 0 / 25%);
    border-radius: 20px;
    margin: 10px 0px;
}

p {
    font-size: 15px;
    margin: auto;
    padding: 20px;
}

.bg-yellow {
    box-sizing: border-box;
    position: absolute;
    width: 98%;
    height: 110px;
    left: 0%;
    background: #FFDE59;
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
    display: block;
    margin: auto;
}

#header-title {
    display: block;
    margin: auto;
}

.menu {
    width: 100px;
}

@media screen and (min-width:768px) {
    #header-title {
        width: 400px;
    }
}
</style>
        