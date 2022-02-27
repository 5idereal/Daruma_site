<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
body {
  overflow-x: hidden;
  padding: 20px;
}

*{
  transition: 0.3s all ease;
}
</style>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
  setup() {
    if(localStorage.getItem('isDarkMode') == 'true'){
      document.documentElement.classList.add('dark');
    }
  },
};
</script>