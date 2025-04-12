<script>
export default {
  data() {
    return {
      catchphrase: '"Steel tube bearings YOU can trust no matter where you go"',
    }
  },
  mounted() {
    this.$refs.title.addEventListener('animationend', () => {
      this.$refs.title.style.animation = 'none'
    })
  },
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div class="flex flex-col items-center justify-center text-center">
        <!-- <img
          src="../assets/hero.JPG"
          alt="Image"
          class="max-w-xl h-auto mb-6"
        > -->
        <h1
          ref="title"
          class="hero-title"
        >
          <span
            v-for="(letter, index) in catchphrase"
            :key="index"
            class="text-gray-800 italic"
            :style="{ 'animation-delay': `${index * 50}ms` }"
          >
            {{ letter }}
          </span>
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

.hero-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  white-space: nowrap;
  overflow: hidden;
  animation: type 1s steps(30, end) forwards;
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

@keyframes type {
  from {
    width: 0;
  }
}
</style>
  