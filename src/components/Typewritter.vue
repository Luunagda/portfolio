<template>
    <div class="typing-container">
      <span class="typing">{{ currentWord }}</span>
      <span class="cursor-type">|</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: ["je m'appelle Cyan Henaff", "je suis développeuse web", "j'aime l'audiovisuel", "je suis créative"], // Liste des mots à afficher
        currentWord: "", // Le mot en cours d'affichage
        wordIndex: 0, // Index du mot actuel dans la liste
        typingDelay: 100, // Délai entre chaque lettre lors de l'écriture
        erasingDelay: 25, // Délai entre chaque lettre lors de l'effacement
        newWordDelay: 1500, // Délai avant de commencer à taper un nouveau mot
        isErasing: false, // Indique si l'on est en train d'effacer
      };
    },
    mounted() {
      this.typeWords();
    },
    methods: {
      typeWords() {
        const currentFullWord = this.words[this.wordIndex];
        
        if (!this.isErasing && this.currentWord.length < currentFullWord.length) {
          // Ajoute une lettre au mot en cours
          this.currentWord = currentFullWord.substring(0, this.currentWord.length + 1);
          setTimeout(this.typeWords, this.typingDelay);
        } else if (this.isErasing && this.currentWord.length > 0) {
          // Efface une lettre du mot en cours
          this.currentWord = currentFullWord.substring(0, this.currentWord.length - 1);
          setTimeout(this.typeWords, this.erasingDelay);
        } else if (!this.isErasing && this.currentWord.length === currentFullWord.length) {
          // Le mot est complètement tapé, commence à effacer après une pause
          this.isErasing = true;
          setTimeout(this.typeWords, this.newWordDelay);
        } else if (this.isErasing && this.currentWord.length === 0) {
          // Le mot est complètement effacé, passe au mot suivant
          this.isErasing = false;
          this.wordIndex = (this.wordIndex + 1) % this.words.length; // Passe au mot suivant en boucle
          setTimeout(this.typeWords, this.typingDelay);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  p, h1, h2, h3, h4, h5, h6, a, li, span {
  color: #fff !important;
  @apply font-heading;
}
  .typing-container {
    font-size: 2rem;
    display: inline;
  }
  
  .cursor-type {
    font-weight: 100;
    color: black;
    animation: blink 0.7s step-end infinite;
  }
  
  @keyframes blink {
    from, to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  </style>
  