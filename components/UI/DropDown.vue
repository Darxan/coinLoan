<template lang="pug">
    .dropdown
        .dropdown__wrapped
            .selected-item(@click="isVisible = !isVisible")
                span.text-center(v-if="!state && selectedItem") {{ selectedItem.currency.symbol }}
                span(v-else-if="clearSelectedItem") {{ title }}
                span(v-else) {{ title }}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
            
            .dropdown__popover(v-if="isVisible")
                input(type="text" v-model="searchQuery" placeholder="Seach")
                span(v-if="filterItems.length == 0") No Data
                .options-custom
                    ul
                        li(v-for="item in filterItems" :key="item.id" @click="selectItemHandler(item)")
                            .option__item
                                span.dfxcenter
                                    img(:src="item.currency.logo" style="max-width:22px; padding-right:5px")
                                    span {{ item.currency.name }}
                                strong {{ item.balance }} {{ item.currency.symbol }} 
            
                        
</template>
<script>
export default {
	props: {
		items: {
			type: [Array],
			required: false,
            default:() => []
		},
		tip: {
			type: String,
			required: true
		},
		state: {
			type: [Boolean],
			required: false
		},
        selectedItem: {
            type: Object,
            required: true,
            default: {currency:{symbol: "Select"}}
        }
	},
	data: () => {
		return {
			searchQuery: "",
			isVisible: false
		}
	},
	methods: {
		selectItemHandler(item) {
			this.selectedItem = item;
			this.isVisible = false;
			this.searchQuery = ''
			this.$emit('selected', item, this.tip)
		}
	},
	computed: {
		filterItems() {
			const query = this.searchQuery.toLowerCase();
			if(this.searchQuery === ""){
				return this.items
			}
			return this.items.filter(item => item.currency.name.toLowerCase().includes(query))
		},
		clearSelectedItem(){
			if(this.state){
				this.selectedItem = null;
				return true
			}
		}
	}
}
</script>
<style  lang="scss" scoped>
.dropdown {
    display: flex;
    width: 100px;
    align-items: center;
    position: relative;
    left: -4%;
    &__wrapped {
        position: relative;
        margin: 0 auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__popover{
        min-width: 325px !important;
        position: absolute;
        border: 1px solid;
        top: 0px;
        right: 0;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all 0.5s ease;
        padding:4px;
        z-index: 10;
    }
	
}
.selected-item{
    width: 100%;
	height: 42px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: 300;
	color: #fff;
	border:1px solid;
    background-color: #2167ae;
}

.drop-down-icon{
	transform: rotate(0deg);
	transition: all 0.5s ease;
}
.drop-down-icon .dropdown {
	transform: rotate(180deg)
}
input {
    width: 100%;
	height: 2.5em;
	border: 2px solid lightgray;
	font-size: 16px;
	padding-left: 5px;
}
.options-custom{
	max-height: 400px;
	overflow-x: auto;
	width: 100%;
    & ul {
        list-style-type: none;
        max-height: 180px;
        width: auto;
        padding: 0;
    }
    & li {
        width: 100%;
        padding: 8px 8px;
        border-bottom: 1px solid lightgray;
        background-color: #fff;
        cursor: pointer;    
        font-size: 14px;
        &:hover{
           background-color: #839cb8;
           color: #000817;
        }
    }
    .option__item{
        display: flex;
        justify-content: space-between;
        width: 80%;
        align-items: center;
        & span {
            text-align: left;
        }
    }
}

</style>