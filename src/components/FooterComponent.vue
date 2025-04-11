<template>
  <div class="bg-gray-900 text-white py-12">
    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
      <div class="flex-1 mr-4 border-r-2 border-white px-4">
        <ul class="list-none">
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Terms & Conditions</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Privacy Policy</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Cookie Policy</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Accessibility Statement</a>
          </li>
        </ul>
      </div>
      <div class="flex-1 mr-4 border-r-2 border-white px-4">
        <ul class="list-none">
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Contact Us</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Request a Quote</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Sales Rep Locator</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Technical Support</a>
          </li>
        </ul>
      </div>
      <div class="flex-1 px-4">
        <ul class="list-none">
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Product 1</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Product 2</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Product 3</a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="hover:underline"
            >Product 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
a.hover\:underline {
  position: relative;
}

a.hover\:underline:before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.2s ease-in-out;
}

a.hover\:underline:hover:before {
  width: 100%;
}
</style>
  
