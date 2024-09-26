<template>
  <div id="app">
    <Stickman />
    <div class="ledge"></div>
  </div>
</template>

<script setup>
import Stickman from '../components/Stickman.vue'
</script>

<style scoped>
#app {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
</style>

<style scoped>


.ledge {
  width: 100%;
  height: 20px;
  background-color: #444;
  position: absolute;
  bottom: 0;
}
.stickman {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 50px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Ajuster l'alignement pour que les bras/jambes soient attachés à la tête */
  animation: walk 10s linear forwards;
}

.stickman .head {
  width: 50px;
  height: 25px;
  background-color: black;
  border-radius: 50% / 100%; /* Oval horizontal */
  margin-bottom: -10px; /* Pour que les bras/jambes soient attachés à la tête */
}

.stickman .arms, .stickman .legs {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: -30px; /* Pour remonter les membres vers la tête */
}

.stickman .arm, .stickman .leg {
  width: 50px;
  height: 10px;
  background-color: black;
  border-radius: 50% 50% 0 0; /* Crée une courbure sur un côté */
  position: absolute;
  transform-origin: left center; /* Point d'origine pour la rotation */
  animation: moveLimb 1s infinite alternate;
}

.stickman .arms .arm:first-child {
  left: -50%;
  transform: rotate(30deg);
}

.stickman .arms .arm:last-child {
  right: -50%;
  transform: rotate(-30deg);
}

.stickman .legs .leg:first-child {
  left: -50%;
  top: 20px;
  transform: rotate(15deg);
  animation: moveLimbReverse 1s infinite alternate;
}

.stickman .legs .leg:last-child {
  right: -50%;
  top: 20px;
  transform: rotate(-15deg);
  animation: moveLimbReverse 1s infinite alternate;
}

/* Animation pour la marche */
@keyframes walk {
  0% {
    left: 0;
  }
  80% {
    left: calc(100% - 50px);
  }
  100% {
    left: calc(100% - 50px);
    bottom: 20px;
  }
}

/* Animation pour les mouvements des membres */
@keyframes moveLimb {
  0% {
    transform: rotate(30deg) scaleY(1);
  }
  100% {
    transform: rotate(-30deg) scaleY(0.8);
  }
}

@keyframes moveLimbReverse {
  0% {
    transform: rotate(-15deg) scaleY(1);
  }
  100% {
    transform: rotate(15deg) scaleY(0.8);
  }
}

/* Animation pour s'asseoir */
@keyframes sit {
  0% {
    bottom: 20px;
    transform: rotate(0deg);
  }
  100% {
    bottom: 0;
    transform: rotate(90deg);
  }
}

</style>
