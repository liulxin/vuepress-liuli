<template>
  <header class="navbar">
    logo
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  async mounted() {
    let res = await this.$axios('https://api.github.com/users/liuli')
    console.log(res)
  },
 }
</script>

<style lang="stylus" scoped>

</style>