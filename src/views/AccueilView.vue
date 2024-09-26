<script setup>
import { ref } from 'vue';
import Typewritter from '@/components/Typewritter.vue';

// Référence pour l'élément backspace
const isBackspaceActive = ref(false);

const handleMouseDown = () => {
  isBackspaceActive.value = true;
  console.log('backspace pressed');
};

const handleMouseUp = () => {
  isBackspaceActive.value = false;
};
</script>

<template>
  <main>
    <div class="container-main">
      <div class="image-container">
        <img class="flou-image" src="@/assets/img/me2.png" alt="Une photo de moi" />
      </div>
      <div class="typing-content">
        <span>Bonjour, </span>
        <h1>
          <span class="typing-wrapper">
            <Typewritter />
          </span>
        </h1>
        <div 
          class="backspace"
          :class="{ active: isBackspaceActive }"
          @mousedown="handleMouseDown"
          @mouseup="handleMouseUp"
        >
        <!-- ⤶ Entrée -->
         A propos de moi
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  /* background-image: url(@/assets/mi.png);
  background-size: cover; */
}

.container-main{
  display: flex;
  align-items: center;
}

.typing-content {
  font-size: 1.5rem;
  margin-left: 2rem;
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
    width: 200px;
    height: 50px;
    margin-left: 15px;
    font-size: 1.2rem;
    color: #94E1F5;
    text-shadow: #000000 1px 0 10px;
}

.flou-image {
  width: 100%;
  filter: grayscale(100%);
  /* mask-image: linear-gradient(to right, rgb(13,13,13) 0%, transparent 100%); */
}

.active{
    box-shadow:inset -2px -2px 4px rgb(40, 40, 40) ,inset 2px 2px 4px black;
    transform: translateY(6px);
}
</style>
