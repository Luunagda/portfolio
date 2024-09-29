<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Typewritter from '@/components/Typewritter.vue';
import Header from '@/components/Header.vue';

import AfterEffect from '@/assets/svg/after_effect.svg';
import Illustrator from '@/assets/svg/illustrator.svg';
import Photoshop from '@/assets/svg/photoshop.svg';
import PremierePro from '@/assets/svg/premiere_pro.svg';
import Angular from '@/assets/svg/angular.svg';
import Css from '@/assets/svg/css.svg';
import Html from '@/assets/svg/html.svg';
import Js from '@/assets/svg/js.svg';
import Git from '@/assets/svg/git.svg';
import Unity from '@/assets/svg/unity.svg';
import Vue from '@/assets/svg/vue.svg';
import Php from '@/assets/svg/php.svg';
import Symfony from '@/assets/svg/symfony.svg';

const images = ref([
  AfterEffect,
  Illustrator,
  Photoshop,
  PremierePro,
  Angular,
  Css,
  Html,
  Js,
  Git,
  Unity,
  Vue,
  Php,
  Symfony,
]);

const isAllImagesVisible = ref(false);
const observer = ref(null);

onMounted(() => {
  const imageContainer = document.querySelector('.image-scroll-container');
  
  if (imageContainer) {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isAllImagesVisible.value = true;
        } else {
          isAllImagesVisible.value = false;
        }
      });
    });
    
    observer.value.observe(imageContainer);
  }
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>


<template>
  <main>
    <!-- Contenu principal inchangé -->
    <div class="container-main">
      <div class="image-container">
        <img class="flou-image" src="@/assets/img/me2.png" alt="Une photo de moi" />
      </div>
      <div class="typing-content">
        <div class="typewritter">
          <span>Bonjour, </span>
          <h1>
            <span class="typing-wrapper">
              <Typewritter />
            </span>
          </h1>
        </div>
        <div class="btn-clavier propos">
          <!-- <img src="@/assets/img/caillouteuh.png" alt="Caillout'euh" class="caillou"/> -->
          <a href="/a-propos">
            <div 
            class="backspace"
            >
            Qui suis-je ?
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
  <Header class="header"/>

  <!-- Section invite de commande et CV video inchangée -->
  <section class="flex flex-col items-center justify-center p-28">
    <div class="cmd-container mb-12">
      <div class="cmd-header">
        <div class="cmd-title">Invite de commande</div>
        <div class="cmd-buttons">
          <span class="btn minimize"></span>
          <span class="btn maximize"></span>
          <span class="btn close"></span>
        </div>
      </div>
      <div class="cmd-body">
        <p>C:\Users\Utilisateur&gt; </p>
        <p>C:\Users\Cyan_Henaff&gt; cd Portfolio <span class="blink">&nbsp;</span></p>
        <div class="btn-clavier entree">
          <a href="/projets">
            <div 
            class="backspace"
            >
            ⤶ Entrée
            </div>
          </a>
        </div>
      </div>
    </div>

    <section class="image-scroll-container relative overflow-hidden" ref="imageContainer">
      <div class="image-scroll flex" :class="{ 'animate': isAllImagesVisible }">
        <div v-for="(image, index) in images" :key="index" class="image-item">
          <img :src="image" alt="Défilement d'images" class="svg-image" />
        </div>
        <div v-for="(image, index) in images" :key="'repeat-' + index" class="image-item">
          <img :src="image" alt="Défilement d'images" class="svg-image" />
        </div>
      </div>
    </section>


    <div class="cv-video">
      <h3>CV Video</h3>
      <video controls loop muted autoplay>
        <source src="@/assets/video/cv-video.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>



<style scoped>
p, h1, h2, h3, h4, h5, h6, a, li, span {
  color: #fff !important;
  @apply font-heading;
}
/* Section défilement infini */
.image-scroll-container {
  width: 100vw; /* Largeur de l'écran */
  height: 150px; /* Hauteur ajustée */
  overflow: hidden; 
  margin-top: 8rem;
}


.image-item {
  flex: 0 0 auto;
  margin-right: 2rem; 
}

.svg-image {
  height: 100px;
  width: auto; /* Ajuster selon les besoins */
}

.image-scroll {
  display: flex;
}

.image-scroll.animate {
  animation: scroll-infinite 10s linear infinite;
}

@keyframes scroll-infinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.flou-image {
  width: 100%;
  filter: grayscale(100%);
}

.backspace {
  border-radius: 5px;
  box-shadow: -2px -2px 4px rgb(38, 38, 38), 2px 2px 4px rgb(0, 0, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  margin-left: 15px;
  font-size: 1.5rem;
  color: #94e1f5;
  text-shadow: #94e1f5 1px 0 10px;
}

.backspace:hover {
  box-shadow: inset -2px -2px 4px rgb(40, 40, 40), inset 2px 2px 4px black;
  transform: translateY(6px);
}


section{
  margin: 0;
}
video{
  width: 80%;
  height: auto;
  margin: 1.5rem;
}
.cv-video{
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  flex-direction: column;
  align-items: center;
}

.cv-video h3{
  font-family: Painted;
  font-size: 50px;
}
/* Conteneur de la fenêtre */
.cmd-container {
  width: 700px;
  height: 100%;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #333;
}

/* En-tête de la fenêtre */
.cmd-header {
  background-color: #1c1c1c;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 10px;
  border-bottom: 1px solid #333;
}

.cmd-title {
  color: white;
  font-size: 16px;
}

/* Boutons (Minimiser, Maximiser, Fermer) */
.cmd-buttons {
    display: flex;
}

.cmd-buttons button:focus {
  outline: none;
}
/* Boutons pour minimiser, maximiser, et fermer */
.minimize::before {
  content: '–';
}

.maximize::before {
  content: '□';
}

.close::before {
  content: '×';
}

/* Changement de couleur au survol */
.btn.close:hover {
  background-color: #d31b15;
}

.btn.maximize:hover {
  background-color: #555555;
}

.btn.minimize:hover {
  background-color: #555555;
}
.cmd-buttons .btn{
  height: 30px !important;
  min-height: 30px;
  border-radius: 0 !important;
  border: none;
  font-size: 1.3rem;
  background-color: #1c1c1c;
  border-bottom: 1px solid #333;
}
/* Corps de la fenêtre */
.cmd-body {
  padding: 15px;
  color: white;
  font-size: 16px;
  line-height: 1.6;
  flex-grow: 1;
  overflow-y: auto;
  /* margin: 0; */
}

.input {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

/* Effet clignotant pour le curseur */

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    background-color: transparent;
  }
  50% {
    background-color: white;
  }
}
.btn-clavier.entree{
  display: flex;
  justify-content: end;
  margin-top: 5%;
}
main {
  width: 100%;
  /* background-image: url(@/assets/mi.png);
  background-size: cover; */
}

.header{
  position: sticky;
  top: 0;
}
.typewritter{
  margin-top: 20%;
}
.btn-clavier{
  display: flex;
  justify-content: center;
  
}

.btn-clavier.propos{
  /* margin: 50% 10% 0 0; */
  position: relative;
  margin-top: 20%;
  margin-right: 10%;
}

.caillou{
  position: absolute;
  width: 10%;
  top: -90%;
  right: 20%;
  z-index: 100;
}
.btn-clavier.entree{
  display: flex;
  justify-content: end;
}
.btn-clavier.entree{
  height: 100%;
}
.container-main{
  display: flex;
  align-items: center;
}

.typing-content {
  font-size: 2rem;
  margin-left: 2rem;
  width: 40%;
}

.image-container {
  background-color: rgba(9, 9, 9, 1); 
  width: 60%;
}

.image-container img {
  width: 100%;
}

.backspace{
    border-radius: 5px;
    box-shadow: -2px -2px 4px rgb(38, 38, 38) , 2px 2px 4px rgb(0, 0, 0);
    /* #94E1F5 */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 60px;
    margin-left: 15px;
    font-size: 1.5rem;
    color: #94E1F5;
    text-shadow: #94E1F5 1px 0 10px;
    @apply font-heading;
}

.flou-image {
  width: 100%;
  filter: grayscale(100%);
  /* mask-image: linear-gradient(to right, rgb(13,13,13) 0%, transparent 100%); */
}

.backspace:hover{
    box-shadow:inset -2px -2px 4px rgb(40, 40, 40) ,inset 2px 2px 4px black;
    transform: translateY(6px);
}

</style>