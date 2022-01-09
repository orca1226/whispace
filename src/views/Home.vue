<template>
  <div class="home">
    <Nav></Nav>
    <!-- hero section -->
    <section class="home__section hero d-flex center-center">
      <div class="hero__content d-flex align-items-center">
        <h2 class="write-vertical">絮絮空間感知研究室</h2>
        <div class="hero__content__logo d-flex center-center">
          <img alt="whispace logo" src="../assets/logo.png">
        </div>
        <h2 class="write-vertical">時絮建築師事務所</h2>
      </div>
    </section>
    <section class="home__section texture d-flex center-center position-relative">
      <div class="texture__content d-flex align-items-center">
        <div class="texture__content__img">
          <img class="object-cover" src="../assets/img/home/section2.png" alt="">
        </div>
        <div class="texture__content__text">
          <h3 class="texture__content__text__title __title">構築獨特的空間質地</h3>
          <p class="mb-4" style="margin-bottom: 36px;">從人的生活可能，一起構築專屬的空間設計<br></p>
          <p>
            在連續細瑣的穿梭中，因感知到潛藏的秩序，會真誠理解屬於空間的美。<br>
            期待在我們創造的空間，由隱隱的感知引導，能喚醒對光線、比例的敏銳偏好，建構屬於每個人的理想生活。
          </p>
        </div>
      </div>
      <div class="texture__deco__upright position-absolute">
        <img class="object-cover" src="../assets/img/home/section2-upright.png" alt="">
      </div>
      <div class="texture__deco__bottomright position-absolute">
        <img class="object-cover" src="../assets/img/home/section2-bottomright.png" alt="">
      </div>
    </section>
    <section class="home__section life d-flex position-relative">
      <div class="life__content d-flex align-items-center">
        <div class="life__content__text d-flex center-center">
          <div class="life__content__text__container">
            <h3 class="life__content__text__title __title">陽光、顏色與角落</h3>
            <p>
              生活的交織，來自於家人的話語之間，<br>
              家，不是三言兩語，就可以成為一個完美設計，<br>
              宅，更不是放置好所有的家庭器物，<br>
              就成為一個我們生活必需的場所，<br>
              而家來自於生活的各種細小微末相互交映，<br>
              你們向我們訴說美好的過往，<br>
              我們為你們創造美好的未來，<br>
              希望可以透過彼此溫暖的話語，<br>
              共同創造屬於最貼近你們彼此的那個居所。<br>
            </p>
          </div>
        </div>
        <div class="life__content__img">
          <img class="object-cover" src="../assets/img/home/section3.png" alt="">
        </div>
      </div>
      <div class="life__deco__upleft position-absolute">
        <img class="object-cover" src="../assets/img/home/section3-upleft.png" alt="">
      </div>
    </section>
    <section class="home__section words d-flex center-center">
      <div class="words__content d-flex center-center">
        <div class="words__content__text">
          <h3 class="words__content__text__title __title">｢從絮語中，開始空間的創造｣</h3>
          <p>
            ｢生活，即是穿梭各空間的流動。」<br>
            捕捉身體感知的絮語，還給生活舒適的狀態。<br>
            讓設計，找回人的空間感知。
          </p>
        </div>
      </div>
    </section>
    <footer class="p-4">
      <h4 class="mb-3">絮絮空間感知研究室 | 時絮建築師事務所</h4>
      <h4>Whispace Studio</h4>
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>
