<template>
  <footer>
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
  border-top: 1px solid #d8d9e1;
  margin: 5px 0;
  p {
    font-size: 0.8rem;
  }
}
</style>



