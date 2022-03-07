<template>
  <svg
    :class="`icon icon-${name}`"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    aria-hidden="true"
    role="img"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  min-height: 1em;
  max-width: 30px;
  max-height: 22px;
  vertical-align: -5px;
}
</style>
