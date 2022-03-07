<template>
  <header>
    <div class="gh-box">
      <a
        href="https://github.com/a133xz/electron-heic-png"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name="github" />
        <span class="sr-only">Github</span>
      </a>
    </div>
  </header>
</template>

<script>
import Icon from '@/components/IconLoader';
export default {
  name: 'TheHeader',
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-end;
}
.gh-box {
  padding: 10px;
  display: inline-block;
  background: #eaebf3;
  box-shadow: -8px -8px 10px rgba(255, 255, 255, 0.12), 8px 8px 10px rgba(0, 39, 80, 0.16);
  border-radius: 12px;
}
</style>
