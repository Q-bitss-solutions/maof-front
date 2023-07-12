<template>
    <Carousel :autoplay="2000" :wrap-around="true" class="carousel">
      <Slide v-for="(slide, index) in images" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="carousel__image rounded-lg shadow-2xl" />
      </Slide>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Pagination, Slide } from 'vue3-carousel';
  
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
  });
  </script>
  
  <style>
  .carousel__image {
    width: 100%;
    height: 45%;
  }
  
  .carousel__slide {
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    transform: translateZ(0);
  }
  </style>
  