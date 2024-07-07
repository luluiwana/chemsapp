<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <MobileHeader url="/kdipk"> </MobileHeader>
        <div class="center">
          <img src="@/theme/img/menu/menu-ipk.png" id="header-icon" />
          <img src="@/theme/img/header/cp1.png" id="header-title" />
        </div>
        <div v-if="currentPage === 'page1'" id="page1">
          <div class="bg-white">
            <div class="bg-yellow">
              <!-- ipk -->
              <p>
                Fase F (Umumnya untuk kelas XI dan XII SMA/MA/Program Paket C)
                <br />
                <br />
                Pada akhir fase F, Peserta didik memiliki kemampuan untuk
                memahami perhitungan kimia, sifat, struktur dan interaksi
                partikel dalam membentuk berbagai senyawa termasuk pengolahan
                dan penerapannya dalam keseharian; memahami konsep laju reaksi
                dan kesetimbangan reaksi kimia; memahami konsep larutan dalam
                keseharian; memahami konsep termokimia dan elektrokimia;
                memahami kimia organik termasuk penerapannya dalam keseharian.
                Konsep-konsep tersebut memungkinkan peserta didik untuk
                menerapkan dan mengembangkan keterampilan inkuiri sains mereka.
                <br />
                <br />
                Fase F Berdasarkan Elemen
                <br />
                <br />

                <span style="color: #3d3f7d">Elemen Pemahaman IPA </span>
                <br />
                <br />
                Peserta didik memiliki kemampuan memahami konsep mol dan
                stoikiometri dalam menyelesaikan perhitungan kimia; ikatan kimia
                dalam kaitannya dengan interaksi antar partikel materi dan sifat
                fisik materi; teori tumbukan antar partikel materi sebagai dasar
                konsep laju reaksi; kesetimbangan kimia untuk mengamati perilaku
                reaktan dan produk pada level mikroskopik; korelasi antara pH
                larutan asam, basa, garam dan larutan penyangga serta
                penerapannya dalam kehidupan sehari-hari; termokimia; konsep
                redoks dan sel elektrokimia sebagai implikasi perubahan materi
                dan energi yang menyertai reaksi kimia serta penerapannya dalam
                kehidupan sehari hari; senyawa karbon, hidrokarbon dan
                turunannya beserta pemanfaatannya dalam kehidupan sehari hari.
              </p>
            </div>
          </div>
          <div style="text-align: center">
            <ion-button
              @click="showPage('page2')"
              router-direction="root"
              fill="clear"
              class="right"
            >
              <img src="@/theme/img/next.png" class="right" alt="" srcset="" />
            </ion-button>
          </div>
        </div>
        <div v-else id="page2">
          <div class="bg-white">
            <div class="bg-yellow">
              <!-- ipk -->
              <p>
                <span style="color: #3d3f7d">Elemen Keterampilan Proses</span>
                <br />
                <br />
                <span style="color: #ff3131">● Mengamati</span>
                <br />
                Peserta didik mengamati fenomena ilmiah dan mencatat hasil
                pengamatannya dengan memperhatikan detail dari objek yang
                diamati untuk memunculkan pertanyaan yang akan diselidiki.
                <br />
                <span style="color: #ff3131"
                  >● Mempertanyakan dan memprediksi</span
                >
                <br />
                Peserta didik merumuskan pertanyaan ilmiah tentang hubungan
                antar variabel dan hipotesis yang dapat diselidiki secara ilmiah
                <br />
                <span style="color: #ff3131"
                  >● Merencanakan dan melakukan penyelidikan Peserta didik</span
                >
                <br />

                merencanakan dan memilih metode yang sesuai serta mengendalikan
                variabel berdasarkan referensi untuk mengumpulkan data yang
                dapat dipercaya. Peserta didik memilih dan menggunakan alat dan
                bahan, termasuk penggunaan teknologi digital yang sesuai untuk
                mengumpulkan serta mencatat data secara sistematis dan akurat.
                <br />
                <span style="color: #ff3131"
                  >● Memproses, menganalisis data dan informasi</span
                >
                <br />
                Peserta didik menafsirkan informasi yang didapatkan dengan jujur
                dan bertanggung jawab. Menggunakan berbagai metode untuk
                menganalisa pola dan kecenderungan pada data. Mendeskripsikan
                hubungan antar variabel serta mengidentifikasi inkonsistensi
                yang terjadi. Menggunakan data dan rujukan untuk menarik
                kesimpulan yang konsisten dengan hasil penyelidikan.
                <br />
                <span style="color: #ff3131">● Mengevaluasi dan refleksi</span>
                <br />

                Peserta didik mengidentifikasi sumber ketidakpastian dan
                kemungkinan penjelasan alternatif dalam rangka mengevaluasi
                kesimpulan, serta menjelaskan cara spesifik untuk meningkatkan
                kualitas data. Menganalisis aliditas informasi dari sumber
                primer dan sekunder dan mengevaluasi pendekatan yang digunakan
                untuk menyelesaikan masalah dalam penyelidikan.
                <br />
                <span style="color: #ff3131"
                  >● Mengomunikasikan hasil hasilgamati</span
                >
                <br />
                Peserta didik mengomunikasikan hasil penyelidikan secara
                sistematis dan utuh ditunjang dengan argumen ilmiah dan terbuka
                terhadap pendapat yang lebih relevan.
              </p>
            </div>
          </div>
          <div style="text-align: center">
            <ion-button
              @click="showPage('page1')"
              router-direction="root"
              fill="clear"
              class="right"
            >
              <img
                src="@/theme/img/previous.png"
                class="right"
                alt=""
                srcset=""
              />
            </ion-button>
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
import click from "@/theme/audio/click.mp3";
const sound_click = new Audio(click);

export default defineComponent({
  name: "kd-view",
  components: {
    IonContent,
    IonPage,
    MobileHeader,
    MobileFooter,
  },
  data() {
    return {
      currentPage: "page1", // Initial page to show
    };
  },
  methods: {
    showPage(pageName: string) {
      sound_click.play();
      this.currentPage = pageName; // Update current page based on button click
    },
  },
});
</script>
<style scoped>
.bg-white {
  box-sizing: border-box;
  position: relative;
  width: 92%;
  height: 910px;
  left: 4%;
  background: #ffffff;
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
  height: 900px;
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

@media screen and (min-width: 768px) {
  #header-title {
    width: 400px;
  }
}
</style>
