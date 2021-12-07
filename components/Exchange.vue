<template lang="pug">
    .container
        .title
            img(src="~/assets/icons/arrow-left-right-fill.svg")
            strong Обмен криптовалюты

        .exchange
            .form
                .form__body
                    .form__title
                        h3 Обменять &nbsp;
                            strong(v-if="fromActive") {{ fromActive.currency.symbol }} на&nbsp;
                            strong(v-if="toActive") {{ toActive.currency.symbol }}
                    .form__inputs
                        p Вы платите
                        .form__input
                            input(class="amount_form" type="number" v-model="fromAmount" @input="calculateAmountSum($event, 'fromAmount')")
                            DropDown(:items="userWallet" tip="from" :selectedItem="fromActive" @selected="dropDownCallback")
                        .form__actions
                            p Доступно {{ fromActive.balance }}
                                //- button.max_btn Half
                                //- button.max_btn Max

                        .form__exchange-icon
                            img(src="~/assets/icons/arrow-left-right-fill.svg" style="transform:rotate(272deg)")
                        p Вы получаете
                        .form__input
                            input(class="amount_form" type="number" v-model="toAmount" @input="calculateAmountSum($event, 'toAmount')")
                            DropDown(:items="userWallet" tip="to" :selectedItem="toActive" @selected="dropDownCallback")
                        p Доступно {{ toActive.balance }}

            .info
                .info__body
                    .info__title
                        h3 Краткое описание
                    .info__list
                        span.info__text.
                            Ваш {{ fromActive.currency.name }} баланс
                        span  {{ fromActive.balance }} {{ fromActive.currency.symbol }}
                    .info__list
                        p.info__text.
                            Ваш {{ toActive.currency.name }} баланс
                        span  {{ toActive.balance }} {{ toActive.currency.symbol }}
                    .info__list
                        span.info__text Курс
                        span.info__text {{ calculatePerPrice }}

                    button.info__button.btn(@click="exchangeHandler") Обменять
</template>

<script>
import DropDown from "@/components/UI/DropDown.vue"
export default {
    data() {
        return {
            userWallet: [
              {
                    id:1, balance: 1.855, currency: {
                        name: "Bitcoin",
                        symbol: "BTC",
                        usd_price: 54000.00,
                        logo: "https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579"
                    }
                },
                {
                    id:2, balance: 1.8, currency: {
                        name: "Ethereum",
                        symbol: "ETH",
                        usd_price: 4000.00,
                        logo: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
                    }
                },
                {
                    id:3, balance: 7.4, currency: {
                        name: "Solana",
                        symbol: "SOL",
                        usd_price: 400.00,
                        logo: "https://assets.coingecko.com/coins/images/4128/thumb/Solana.jpg?1635329178"
                    }
                },
                {
                    id:4,
                    balance: 8000,
                    currency: {
                        name: "Tether",
                        symbol: "USDT",
                        usd_price: 1,
                        logo: "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707"
                    }
                }
            ],
            fromActive: {
                    id:1,
                    balance: 1.855,
                    currency: {
                        name: "Bitcoin",
                        symbol: "BTC",
                        usd_price: "54000.00",
                        logo: "https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579"
                    }
                },
            toActive: {
                    id:3, balance: 7.4, currency: {
                        name: "Solana",
                        symbol: "SOL",
                        usd_price: "400.00",
                        logo: "https://assets.coingecko.com/coins/images/4128/thumb/Solana.jpg?1635329178"
                    }
                },
            commissionData: [],
            currentCommission: null,
            fromAmount: 0,
            toAmount: 0,
        }
    },
    mounted(){
        this.commissionData = this.$store.getters['exchange/getCommission']
    },
    watch: {
        fromActive(newValue){
            this.currentCommission = [...this.commissionData].find(elem => {
                if(elem.base_currency == newValue.currency.symbol && elem.quote_currency == this.toActive.currency.symbol){
                    return elem
                }
            } )
        },
        toActive(newValue){
             this.currentCommission = [...this.commissionData].find(elem => {
                if(elem.base_currency == newValue.currency.symbol && elem.quote_currency == this.fromActive.currency.symbol){
                    return elem
                }
            })
        }
    },
    async fetch({store}){
        if(store.getters['exchange/getCommission'].length == 0){
            await store.dispatch('exchange/fetchCommission')
        }
    },
    components:{
        DropDown
    },
    methods: {
        exchangeHandler(){
            alert("Exchange")
        },
        dropDownCallback(item, type){
            if(type === "from") this.fromActive = item
            if(type === "to") this.toActive = item
            this.fromAmount = 0
            this.toAmount  = 0
        },
        calculateAmountSum(event, type){
           let result = 0
           if(type == "toAmount"){
               result = (this.toActive.currency.usd_price * event.target.value) / this.fromActive.currency.usd_price
               this.fromAmount = result.toFixed(8)
           }
           if(type == "fromAmount"){
               result = (this.fromActive.currency.usd_price * event.target.value) / this.toActive.currency.usd_price
               this.toAmount = result.toFixed(8)
           }

        }
    },
    computed:{
        calculatePerPrice(){
            if(this.fromActive && this.toActive){
                let price = (this.fromActive.currency.usd_price / this.toActive.currency.usd_price).toFixed(8)
                let responseMsg = `1 ${this.fromActive.currency.symbol} = ${price} ${this.toActive.currency.symbol}`
                return responseMsg
            }
            return 0
        },


    }
}
</script>

<style lang="scss">
.container{
    display:flex;
    align-items:start;
    height:100vh;
    flex-direction: column;
}
.title{
    width: 100%;
    display:flex;
    align-items: center;
    margin-top: 3rem;
    & img {
        margin-right: 10px;
    }
}
.exchange {
    display: flex;
    margin-top: 3rem;
    flex-wrap: wrap;
}
.form, .info {
    min-width: 400px;
    min-height: 380px;
    border:1px solid #fff;
    background-color: #fff;
    margin:1rem;
    padding:3rem;
    &__title{
        opacity: 0.7;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 18px;
    }
}
.form {
    &__body{
        display:flex;
        flex-direction: column;
    }
    &__inputs{
        margin-top: 1rem;
    }
    &__input{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    &__input input {
        height: 40px;
        width: 100%;
        padding: 0 0 0 5px;
        font-size: 16px;
    }
    &__actions{
        display: flex;
        width: 95%;
        justify-content: space-between;
        padding-top: 10px;
        & .max_btn, .half_btn{
            border-radius: 50px;
            padding: 2px 10px;
            color: #fff;
            background-color: linear-gradient(rgb(112, 97, 194), rgb(12, 121, 237));
            background-image: linear-gradient(rgb(112, 97, 194), rgb(12, 121, 237));
        }
    }
    &__exchange-icon{
        width: 90%;
        display:flex;
        justify-content: flex-end;
        padding: 10px 0 0 0;
    }
    p{
        color: #000817;
        font-size: 12px;
    }
}
.info{
    &__body{
        display:flex;
        flex-direction: column;
    }
    &__list{
        margin-top: 2rem;
        display:flex;
        justify-content:space-between;
        font-size:14px;
        padding: 5px;
    }
    &__button{
        margin-top: 3rem;
    }

}
</style>
