export const state = () => ({
    commission: [
        {
            "base_currency": "BTC",
            "quote_currency": "SOL",
            "commission": "5.00"
        },
        {
            "base_currency": "BTC",
            "quote_currency": "ETH",
            "commission": "3.00"
        },
        {
            "base_currency": "BTC",
            "quote_currency": "USDT",
            "commission": "5.00"
        },
        {
            "base_currency": "USDT",
            "quote_currency": "BTC",
            "commission": "4.00"
        },
        {
            "base_currency": "USDT",
            "quote_currency": "SOL",
            "commission": "2.00"
        },
        {
            "base_currency": "USDT",
            "quote_currency": "ETH",
            "commission": "4.00"
        },
        {
            "base_currency": "SOL",
            "quote_currency": "ETH",
            "commission": "2.00"
        },
        {
            "base_currency": "SOL",
            "quote_currency": "BTC",
            "commission": "1.00"
        },
        {
            "base_currency": "SOL",
            "quote_currency": "USDT",
            "commission": "4.00"
        },
        {
            "base_currency": "ETH",
            "quote_currency": "USDT",
            "commission": "4.00"
        },
        {
            "base_currency": "ETH",
            "quote_currency": "SOL",
            "commission": "2.00"
        },
        {
            "base_currency": "ETH",
            "quote_currency": "BTC",
            "commission": "3.00"
        },
  ]
})
export const mutations = {
  SET_COMMISSION(state, payload){
    state.commission = payload
  },
  REMOVE_COMMISSION(state) {
    state.commission = []
  }
}

export const actions = {
  fetchCommission({ commit }) {
    // get commission data is api 
    commit("SET_COMMISSION", data)
  },
  removeCommission({ commit }) {
    commit('REMOVE_COMMISSION')
  }
}
export const getters = {
  getCommission: s => s.commission
}