<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/menu">
                </MobileHeader>
                <div class="center">
                    <img src="@/theme/img/header/profil.png" class="menu-header">
                </div>
                <div class=" profil-bg">
                    <img src="@/theme/img/profil.png">
                    <table>
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td>Ismawatul Ardiah Tambunan</td>
                        </tr>
                        <tr>
                            <td>NIM</td>
                            <td>:</td>
                            <td>180331616072</td>
                        </tr>
                        <tr>
                            <td>Fakultas</td>
                            <td>:</td>
                            <td>Matematika dan Ilmu Pengetahuan Alam</td>
                        </tr>
                        <tr>
                            <td id="univ">Universitas</td>
                            <td>:</td>
                            <td>Universitas Negeri Malang</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>ismatambunan20@gmail.com</td>
                        </tr>
                    </table>
                </div>
                <MobileFooter>
                </MobileFooter>

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
    name: 'profil-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        MobileFooter,
    },
});
</script>
<style scoped>
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
    