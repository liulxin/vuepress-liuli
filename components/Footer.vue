<template>
  <footer class="footer">
    <ul v-if="copyright" class="copyright">
      <li v-for="item in copyright" :key="item.text" class="copyright-item">
        <NavLink :link="item.link">{{ item.text }}</NavLink>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
ol, ul
  list-style none
  margin 0
  padding 0

.footer
  height 50px
  box-sizing border-box
  background-color #000
  color #FFF
  display flex
  padding 15px 32px
  .copyright
    display flex
    justify-content flex-end
    margin 0 auto
    .copyright-item
      flex 0 0 auto
      padding 0 10px
      position relative
      line-height 10px
      height 15px
      border-right 1px solid rgba(255, 255, 255, 0.6)
      &:last-child
        border-right none
      a
        font-size 12px
        color rgba(255, 255, 255, 0.6)
        text-decoration none
        transition color 0.3s
        &:hover
          color rgba(255, 255, 255, 0.9)
@media (max-width: $MQMobile)
  .footer
    height 65px
    flex-direction column
    .copyright
      display block
      margin 0 auto
      .copyright-item
        line-height 1
        border-right none
        text-align center
</style>
