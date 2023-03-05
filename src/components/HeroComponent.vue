<script>
export default {
  data() {
    return {
      catchphrase: 'Your Catchphrase Here',
      animatedCatchphrase: '',
    }
  },
  mounted() {
    this.animateCatchphrase()
  },
  methods: {
    animateCatchphrase() {
      const catchphraseLetters = this.catchphrase.split('')
      let animatedCatchphrase = ''
      let delay = 0
      for (let i = 0; i < catchphraseLetters.length; i++) {
        animatedCatchphrase += `<span style="animation-delay:${delay}ms">${catchphraseLetters[i]}</span>`
        delay += 100
      }
      this.animatedCatchphrase = animatedCatchphrase
    },
  },
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div class="flex flex-col items-center justify-center text-center">
        <img
          src="../assets/hero.JPG"
          alt="Image"
          class="max-w-xl h-auto mb-6"
        >
        <h1
          ref="catchphrase"
          class="text-3xl font-bold italic text-gray-900 mb-6"
        >
          "Steel tube bearings you can trust no matter where you go"
        </h1>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
  h1 span {
    animation: snake 0.4s ease forwards;
    opacity: 0;
  }
  @keyframes snake {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
  