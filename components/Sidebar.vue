<template lang="pug">
  .sidebar
    .sidebar__body
      .sidebar__nav
        ul.sidebar__list
          li.sidebar__item(v-for="menu in menuItems", :key="menu.id")
            nuxt-link(:to="menu.path", exect no-prefetch active-class="sidebar__item_active")
              .sidebar__item-icon
                img(src="~/assets/icons/wallet.svg")
                span {{ menu.title }}

</template>
<script>

export default {
  data() {
    return {
      menuItems: [  
        {id: 1, title: "Мой кошелёк", iconPath: "", path:"/wallet"},
        {id: 1, title: "Накопительный счёт", iconPath: "", path:"/balance"},
        {id: 1, title: "Мгновенный займ", iconPath: "", path:"/earn"},
        {id: 1, title: "Мои кредиты", iconPath: "", path:"/credits"},
        {id: 1, title: "Обмен криптовалюты", iconPath: "", path:"/"},
        {id: 1, title: "Реферальная программа", iconPath: "", path:"/ref"},
        {id: 1, title: "Мой кошелёк", iconPath: "", path:"/wallets"},
      ]
    }
    
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  position:fixed;
  min-width: 240px;
  display:flex;
  background-color: #fff;
  height:100vh;
  &__body{
    margin-top: 3rem;
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
  }
  &__item {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  &__item-icon{
    display:flex;
    align-items: center;
    
  }
  &__item-icon img{
    width: 27px;
    height: 27px;
    margin-right: 20px;
  }
  &__item-icon span {
    line-height: 30px;
    font-size: 14px;
  }
  &__item_active {
    color: tomato;
  }
}
hr{
  width:100%;
  height:1px;
  background-color: #aeaeae;
}
</style>