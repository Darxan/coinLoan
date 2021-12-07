export const state = () => ({
    userAssets: [
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
    ]
})
export const mutations = {
  SET_COIN(state, payload){
    state.userAssets = payload
  },
  REMOVE_COIN(state) {
    state.userAssets = []
  }
}

export const actions = {
  fetchUserAssets({ commit }) {
    // get commission data is api
    commit("SET_COIN", data)
  },
  removeCommission({ commit }) {
    commit('REMOVE_COIN')
  }
}
export const getters = {
  getUserAssets: s => s.userAssets
}
