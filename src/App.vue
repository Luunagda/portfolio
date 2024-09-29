<template>

  <Header v-if="route.path != '/'"/>
  <RouterView />
  <Footer/>
  <div>
    <div class="cursor" ref="cursor"></div>
    <div class="cursor2" ref="cursor2"></div>
    <div class="cursor3" ref="cursor3"></div> 
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.path)

const cursor = ref(null);
const cursor2 = ref(null);
const cursor3 = ref(null);

// Update cursor position
const updateCursorPosition = (event) => {
  const { clientX, clientY } = event;
  cursor.value.style.left = `${clientX}px`;
  cursor.value.style.top = `${clientY}px`;
  cursor2.value.style.left = `${clientX}px`;
  cursor2.value.style.top = `${clientY}px`;
  cursor3.value.style.left = `${clientX}px`;
  cursor3.value.style.top = `${clientY}px`;
};

// Add hover effect
const addHoverEffect = () => {
  cursor2.value.classList.add('hover');
  cursor3.value.classList.add('hover');
};

// Remove hover effect
const removeHoverEffect = () => {
  cursor2.value.classList.remove('hover');
  cursor3.value.classList.remove('hover');
};

// Initialize event listeners
const initEventListeners = () => {
  document.body.addEventListener('mousemove', updateCursorPosition);
  
  const hoverTargets = document.querySelectorAll('.hover-target');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseover', addHoverEffect);
    target.addEventListener('mouseout', removeHoverEffect);
  });
};

// Clean up event listeners
const cleanupEventListeners = () => {
  document.body.removeEventListener('mousemove', updateCursorPosition);
  
  const hoverTargets = document.querySelectorAll('.hover-target');
  hoverTargets.forEach(target => {
    target.removeEventListener('mouseover', addHoverEffect);
    target.removeEventListener('mouseout', removeHoverEffect);
  });
};

// Lifecycle hooks
onMounted(() => {
  initEventListeners();
});

onBeforeUnmount(() => {
  cleanupEventListeners();
});
</script>

<style>



body {
  background-color:  rgb(9, 9, 9) !important;
}
/* rgb(13, 13, 13) */
/* #090909 */
@font-face {
  font-family: 'Glitch_Paradise';
  src: url('assets/Glitch-Paradise.woff');
}

@font-face {
  font-family: 'Painted';
  src: url('assets/Painted.ttf');
}

.cursor,
.cursor2,
.cursor3 {
  position: fixed;
  border-radius: 50%;	
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  transition: all 300ms linear; 
  z-index: 9999999;
}
.cursor {
  background-color: var(--white);
  height: 0;
  width: 0;
}
.cursor2,
.cursor3 {
  height: 36px;
  width: 36px;
}
.cursor2.hover,
.cursor3.hover {
  transform: scale(2) translateX(-25%) translateY(-25%);
}
.cursor2 {
  border: 2px solid var(--white);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}
.cursor2.hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);
}

a:hover{
  background-color: inherit;
}
</style>
