<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <MobileHeader url="/materi">
                </MobileHeader>
                <flipbook v-if="book1" class="flipbook" :pages="materi1" v-slot="flipbook">
                    <div class="action-bar">
                        <left-icon class=" left" :class="{ disabled: !flipbook.canFlipLeft }"
                            @click="flipbook.flipLeft" />
                        <plus-icon class=" plus" :class="{ disabled: !flipbook.canZoomIn }" @click="flipbook.zoomIn" />
                        <span class="page-num">
                            Halaman {{ flipbook.page }} dari {{ flipbook.numPages }}
                        </span>
                        <minus-icon class=" minus" :class="{ disabled: !flipbook.canZoomOut }"
                            @click="flipbook.zoomOut" />
                        <right-icon class=" right" :class="{ disabled: !flipbook.canFlipRight }"
                            @click="flipbook.flipRight" />
                    </div>
                </flipbook>
                <flipbook v-if="book2" class="flipbook" :pages="materi2" v-slot="flipbook">
                    <div class="action-bar">
                        <left-icon class=" left" :class="{ disabled: !flipbook.canFlipLeft }"
                            @click="flipbook.flipLeft" />
                        <plus-icon class=" plus" :class="{ disabled: !flipbook.canZoomIn }" @click="flipbook.zoomIn" />
                        <span class="page-num">
                            Halaman {{ flipbook.page }} dari {{ flipbook.numPages }}
                        </span>
                        <minus-icon class=" minus" :class="{ disabled: !flipbook.canZoomOut }"
                            @click="flipbook.zoomOut" />
                        <right-icon class=" right" :class="{ disabled: !flipbook.canFlipRight }"
                            @click="flipbook.flipRight" />
                    </div>
                </flipbook>
                <flipbook v-if="book3" class="flipbook" :pages="materi3" v-slot="flipbook">
                    <div class="action-bar">
                        <left-icon class=" left" :class="{ disabled: !flipbook.canFlipLeft }"
                            @click="flipbook.flipLeft" />
                        <plus-icon class=" plus" :class="{ disabled: !flipbook.canZoomIn }" @click="flipbook.zoomIn" />
                        <span class="page-num">
                            Halaman {{ flipbook.page }} dari {{ flipbook.numPages }}
                        </span>
                        <minus-icon class=" minus" :class="{ disabled: !flipbook.canZoomOut }"
                            @click="flipbook.zoomOut" />
                        <right-icon class=" right" :class="{ disabled: !flipbook.canFlipRight }"
                            @click="flipbook.flipRight" />
                    </div>
                </flipbook>
                <flipbook v-if="book4" class="flipbook" :pages="materi4" v-slot="flipbook">
                    <div class="action-bar">
                        <left-icon class=" left" :class="{ disabled: !flipbook.canFlipLeft }"
                            @click="flipbook.flipLeft" />
                        <plus-icon class=" plus" :class="{ disabled: !flipbook.canZoomIn }" @click="flipbook.zoomIn" />
                        <span class="page-num">
                            Halaman {{ flipbook.page }} dari {{ flipbook.numPages }}
                        </span>
                        <minus-icon class=" minus" :class="{ disabled: !flipbook.canZoomOut }"
                            @click="flipbook.zoomOut" />
                        <right-icon class=" right" :class="{ disabled: !flipbook.canFlipRight }"
                            @click="flipbook.flipRight" />
                    </div>
                </flipbook>
                <MobileFooter>
                </MobileFooter>
            </div>




        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent, } from 'vue';
import MobileHeader from '@/components/AppHeader.vue';
import MobileFooter from '@/components/AppFooter.vue';
import Flipbook from 'flipbook-vue';
import 'vue-material-design-icons/styles.css';
import LeftIcon from 'vue-material-design-icons/ChevronLeftCircle.vue';
import RightIcon from 'vue-material-design-icons/ChevronRightCircle.vue';
import PlusIcon from 'vue-material-design-icons/PlusCircle.vue';
import MinusIcon from 'vue-material-design-icons/MinusCircle.vue';

export default defineComponent({
    name: 'book-view',
    components: {
        IonContent,
        IonPage,
        MobileHeader,
        MobileFooter,
        Flipbook,
        LeftIcon,
        RightIcon,
        PlusIcon,
        MinusIcon

    },
    data() {
        return {

            book_id: this.$route.params.id,
            book1: false,
            book2: false,
            book3: false,
            book4: false,
            materi1: [
                require('@/theme/img/materi1/1.jpg'),
                require('@/theme/img/materi1/2.jpg'),
                require('@/theme/img/materi1/3.jpg'),
                require('@/theme/img/materi1/4.jpg'),
                require('@/theme/img/materi1/5.jpg'),
            ],
            materi2: [
                require('@/theme/img/materi2/1.jpg'),
                require('@/theme/img/materi2/2.jpg'),
                require('@/theme/img/materi2/3.jpg'),
                require('@/theme/img/materi2/4.jpg'),
                require('@/theme/img/materi2/5.jpg'),
                require('@/theme/img/materi2/6.jpg'),
                require('@/theme/img/materi2/7.jpg'),
                require('@/theme/img/materi2/8.jpg'),
                require('@/theme/img/materi2/9.jpg'),
            ],
            materi3: [
                require('@/theme/img/materi3/1.jpg'),
                require('@/theme/img/materi3/2.jpg'),
                require('@/theme/img/materi3/3.jpg'),
            ],
            materi4: [
                require('@/theme/img/materi4/1.jpg'),
                require('@/theme/img/materi4/2.jpg'),
                require('@/theme/img/materi4/3.jpg'),
                require('@/theme/img/materi4/4.jpg'),
            ],
        }
    },
    methods: {
        selectBook: function () {
            if (this.book_id == '1') {
                this.book1 = true;
            }
            if (this.book_id == "2") {
                this.book2 = true;
            }
            if (this.book_id == "3") {
                this.book3 = true;
            }
            if (this.book_id == "4") {
                this.book4 = true;
            }
        },

    },
    mounted() {
        setTimeout(
            () => { window.dispatchEvent(new Event('resize')); },
            10
        );
        this.selectBook();
    }
});
</script>
<style scoped>
.flip-book {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    display: none;
    background-size: cover;
}


.action-bar {
    width: 100%;
    height: 30px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
}

.action-bar .btn {
    font-size: 30px;
    color: #999;
}

.action-bar .btn svg {
    bottom: 0;
}

.action-bar .btn:not(:first-child) {
    margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
    color: #ccc;
    filter: drop-shadow(1px 1px 5px #000);
    cursor: pointer;
}

.action-bar .btn:active {
    filter: none !important;
}

.action-bar .btn.disabled {
    color: #666;
    pointer-events: none;
}

.action-bar .page-num {
    font-size: 12px;
    margin-left: 10px;
}

.flipbook {
    width: 100vw;
    height: 600px;
}

.page {
    padding: 20px;
    background-color: #fdfaf7;
    color: #785e3a;
    border: solid 1px #c2b5a3;
    overflow: hidden;
}

.page .page-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}

.page .page-content .page-header {
    height: 30px;
    font-size: 100%;
    text-transform: uppercase;
    text-align: center;
}

.page .page-content .page-image {
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}

.page .page-content .page-text {
    height: 100%;
    flex-grow: 1;
    font-size: 80%;
    text-align: justify;
    margin-top: 10px;
    padding-top: 10px;
    box-sizing: border-box;
    border-top: solid 1px #f4e8d7;
}

.page .page-content .page-footer {
    height: 30px;
    border-top: solid 1px #f4e8d7;
    font-size: 80%;
    color: #998466;
}

.page.--left {
    border-right: 0;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
}

.page.--right {
    border-left: 0;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);
}

.page.--right .page-footer {
    text-align: right;
}

.page.hard {
    background-color: #f2e8d9;
    border: solid 1px #998466;
}

.page.page-cover {
    background-color: #e3d0b5;
    color: #785e3a;
    border: solid 1px #998466;
}

.page.page-cover h2 {
    text-align: center;
    padding-top: 50%;
    font-size: 210%;
}

.page.page-cover.page-cover-top {
    box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), -2px 0 5px 2px rgba(0, 0, 0, 0.4);
}

.page.page-cover.page-cover-bottom {
    box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), 10px 0 8px 0px rgba(0, 0, 0, 0.4);
}

#univ {
    min-width: 90px;
}

.menu {
    width: 80%
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
    