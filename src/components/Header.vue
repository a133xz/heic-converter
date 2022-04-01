<template>
  <header>
    <a
      href="https://www.producthunt.com/posts/heic-file-converter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-heic&#0045;file&#0045;converter"
      target="_blank"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=338470&theme=dark"
        alt="&#0046;HEIC&#0032;File&#0032;Converter - Easily&#0032;convert&#0032;your&#0032;iPhone&#0032;&#0046;HEIC&#0032;photos&#0032;to&#0032;&#0046;JPG&#0032;or&#0032;&#0046;PNG | Product Hunt"
        style="width: 250px; height: 54px"
        width="250"
        height="54"
    /></a>
    <div>
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
  justify-content: space-between;
  margin-right: 50px;
  padding-bottom: 10px;
  @include breakpoint(mobile-only) {
    margin: 0;
  }
}
.gh-box {
  padding: 10px;
  display: inline-block;
  background: #eaebf3;
  box-shadow: -8px -8px 10px rgba(255, 255, 255, 0.12), 8px 8px 10px rgba(0, 39, 80, 0.16);
  border-radius: 12px;
}
</style>
