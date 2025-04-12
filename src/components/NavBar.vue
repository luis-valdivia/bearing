<script>
export default {
  data() {
    return {
      isNavHidden: false,
      prevScrollpos: window.pageYOffset,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset
      if (this.prevScrollpos > currentScrollPos) {
        this.isNavHidden = false
      } else {
        this.isNavHidden = true
      }
      this.prevScrollpos = currentScrollPos
    },
  },
}
</script>

<template>
  <nav
    class="bg-gray-500 shadow fixed top-0 w-full z-10"
    :class="{ 'nav-hidden': isNavHidden }"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img
            class="h-8 w-8"
            src="../assets/bear.png"
            alt="Logo"
          >
        </div>
        <!-- Navigation links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Home!</a>
            <a
              href="/products"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Products</a>
            <a
              href="/services"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Services</a>
            <a
              href="/about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >About Us</a>
            <a
              href="/contact"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
     
<style scoped>
.nav-hidden {
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}
</style>
