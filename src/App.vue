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
</style>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>