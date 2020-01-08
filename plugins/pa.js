export default ({Vue}) => {
  Vue.mixin({
    mounted() {
      console.log(this.$site)
    },
  })
}