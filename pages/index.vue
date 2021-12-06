<template lang="pug">
.dashboard
  Sidebar
  .dashboard__layout
    Exchange
    
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Exchange from '@/components/Exchange'
export default {
  components: {
    Sidebar,
    Exchange
  }
}
</script>
<style lang="scss">
.dashboard{
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  &__layout{
    padding-left: 250px;
  }
}
</style>
