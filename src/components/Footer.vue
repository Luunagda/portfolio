<template>
    <footer class="footer bg-white p-10">
    <aside>
      <h4>Portfolio</h4>
      <h2 class="nom">
        Cyan Henaff
      </h2>
      <p>
        Développeuse web
      </p>
      
    </aside>
    <nav>
      <h6 class="footer-title">Contact</h6>
      <div class="flex flex-col gap-4">
        <p>Email : <a href="mailto:cyanhenaff@gmail.com" class="mailto">cyanhenaff@gmail.com</a></p>
        <a href="https://www.linkedin.com/in/cyan-henaff-45a358249/" class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <p class="ml-2">Cyan Henaff</p>
        </a>
        <a class="flex">
          <img src="@/assets/svg/github.svg" alt="GitHub" class="w-6 h-6" />
          <p class="ml-2">Luunagda</p>
        </a>
      </div>
    </nav>
  </footer>
</template>

<style>
.mailto{
    text-decoration: underline;
}
.mailto:hover{
    text-decoration: none;
    background-color: cyan;
}
h4{
    font-family: 'Glitch_Paradise';
    font-size: 3rem !important;
}
h2{
    font-family: 'Painted';
    font-size: 2rem !important;
    
}
aside h2, aside p, aside h4{
    padding-bottom: 1.5rem;
}
p, h4, h2, h6, a, li, span {
    color: rgb(9, 9, 9) !important;
}
p, h6{
    @apply font-heading;
}
</style>