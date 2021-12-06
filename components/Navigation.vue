<template lang="pug">
.header
	.navigation
		.navigation__wrap
			.navigation__logo
				.navigation__icon
					img(src="https://app.coinloan.io/app/img/logo-icon.8f90951.svg", alt="logo")
				span CoinLoan

			.navigation__profile
				.navigation__icon.circle
					img(src="https://www.t2transfer.com/wp-content/uploads/2021/10/83-836357_greg-ezeilo-avatar-icon-png.jpg")
				span Мой аккаунт

  	
</template>	
<script>
export default {
	
}
</script>
<style lang="scss">
.header {
	width: 100%;
	height: auto;
	display:flex;
	align-items: center;
	position: fixed;
	min-height: 80px;
	left: 0;
	box-sizing: border-box;
	background-color: #2d7efa;
	box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
	z-index: 4;
}
.navigation {
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px 0 15px;
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 6rem;
	padding: 10px;
  }
  &__logo {
	  display:flex;
	  align-items:center;
  }
  & span {
	  color: #fff;
	  font-weight: normal;
  }
  &__icon {
		width: 32px;
		height: 32px;
		margin-right: 8px;
		border-radius: 4px;
		border: 1px solid #fff;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		& img {
			height: 22px;
			width: 22px;
		}
    }
	&__profile{
		display:flex;
		align-items:center
	}
}
.circle{
	border-radius: 50px;
	background-color: #fff;
}

</style>
