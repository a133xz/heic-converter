<template>
  <footer>
    <hr />
    <p>{{ $t('footer') }}</p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  p {
    font-size: 0.8rem;
  }
}
</style>



