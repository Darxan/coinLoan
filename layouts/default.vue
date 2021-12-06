<template>
  <div>
    <!-- Navigation bar -->
    <Navigation />
    <div class="main">
        <Nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
  data() {
    return {
      currentMenu: []
    };
  },
  components: {
    Navigation
  },
  head() {
    return {
      // Установка rel="canonical" на всех страницах шаблона.
      link: [
        { rel: "canonical", href: `${process.env.baseUrl}${this.$route.path}` }
      ],
      // Пример установки общих мета-тегов на страницах.
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.baseUrl}${this.$route.path}`
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.main {
  position: relative;
  padding-top: 80px;
  min-height: 100vh;
  z-index: 1;
}
</style>