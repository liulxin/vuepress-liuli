<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }} ({{ tag.pages.length }})
  </router-link>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
.blog-tag
  position relative
  height 24px
  display inline-flex
  margin 0 10px 15px 0
  line-height 24px
  align-items center
  word-break break-word
  font-size 16px
  padding 0 8px 0 18px
  border-radius 0 4px 4px 0
  font-weight 300
  text-align left
  box-sizing border-box
  transition background-color 0.3s
  background #eee
  color #333
  white-space nowrap
  text-decoration none
  transition all 0.5s

  &::before
    position absolute
    content ""
    width 4px
    height 4px
    top 10px
    left 8px
    border-radius 100%
    background #fff

  &::after
    position absolute
    content ""
    top 0
    left 0
    width 0
    height 0
    border-width 12px 12px 12px 0
    border-color #fff transparent
    border-style solid

  &:hover
    // color $accentColor !important
    // border 1px solid $accentColor
    // box-shadow 0 0 5px $accentColor
    background #333
    color #fff

@media screen and (max-width: 768px)
  .blog-tag
    font-size 14px
    padding 3px 10px
    margin-right 10px
    margin-bottom 10px
</style>
