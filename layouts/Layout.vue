<template>
  <div class="theme-container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
export default {
  name: "Layout",

  components: {
    Navbar
  },

  mounted() {
    console.log(Navbar)
  }
};
</script>
