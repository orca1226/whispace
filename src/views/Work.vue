<template>
  <div class="workPage customContainer pt-4 mt-4">
    <h3>貫穿維度的空間整合設計</h3>
    <p class="mt-3">從一期一會的展覽，到長久陪伴的住所與建築，我們期待能從感知出發，打造專屬的空間。</p>
    <div class="workList">
      <div class="workList__work d-flex" v-for="(item, index) in workList" :key="index">
        <div class="workList__work__lineGroup">
        </div>
        <div class="px-3">
          <h4 class="workList__work__title mb-2">{{ item.title }}</h4>
          <p class="workList__work__caption mb-3">{{ item.caption }}</p>
          <Swiper
            class="workList__work__imgList"
            :options="swiperOption"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            @click-slide="handleClickSlide(index, ...arguments)"
          >
            <SwiperSlide
              :key="imgIndex"
              class="workList__work__imgList__img object-contain"
              v-for="(img, imgIndex) in item.img"
              @click="goToWork(img.id)"
            >
              <img
                class="h-100"
                :src="require(`@/assets/img/work/${img.src}`)"
                :alt="item.name"
              >
            </SwiperSlide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Swiper, SwiperSlide, directive
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      workList: [
        {
          title: '建築',
          caption: '在實際的量體設計中，創造輕盈通透的空間感知。',
          img: [
            {
              src: 'a_01.png',
              name: 'a01',
              id: 'a01'
            },
            {
              src: 'a_01.png',
              name: 'a02',
              id: 'a02'
            }
          ]
        },
        {
          title: '商業空間',
          caption: '從品牌形象提取，打造專屬的空間意象。',
          img: [
            {
              src: 'a_01.png',
              name: 'a01',
              id: 'b01'
            },
            {
              src: 'a_01.png',
              name: 'a02',
              id: 'b02'
            },
            {
              src: 'a_01.png',
              name: 'a03',
              id: 'b03'
            },
            {
              src: 'a_01.png',
              name: 'a04',
              id: 'b04'
            }
          ]
        }
      ],
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    handleClickSlide (sliderIndex, slideIndex) {
      const id = this.workList[sliderIndex].img[slideIndex].id
      this.$router.push({
        path: '/work/detail',
        query: {
          id: id
        }
      })
    },
    onSwiper () {

    },
    onSlideChange () {

    }

  }
}
</script>
<style lang="scss">
  .swiper-slide {
    width: auto;
  }
</style>
