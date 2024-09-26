<template>
  <div class="stickman" :class="{ 'sit': isSitting }" @animationend="onWalkEnd">
    <div class="head"></div>
    <div class="arms">
      <div class="arm"></div>
      <div class="arm"></div>
    </div>
    <div class="legs">
      <div class="leg"></div>
      <div class="leg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stickman",
  data() {
    return {
      isSitting: false,
    };
  },
  methods: {
    onWalkEnd() {
      setTimeout(() => {
        this.isSitting = true;
      }, 1000); // Ajout d'un délai de 1 seconde avant de s'asseoir
    }
  }
};
</script>

<style scoped>
.sit {
  animation: sit 2s forwards;
}
</style>
