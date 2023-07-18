<script setup>
import { ref } from 'vue'
import SuccessNotification from '../components/NotificationComp.vue'
import OrderSummary from '../components/OrderSummaryComp.vue'
import axios from 'axios'

axios.get('https://pykidev.pythonanywhere.com/pizza_api/get_csrf_token/')
.then( response => {
	const csrfToken = response.data.csrfToken
	axios.defaults.headers.common['X-CSRFToken'] = csrfToken
	console.log(csrfToken)
})
.catch( error => {
	console.log(error)
})

const quantity = ref(1)
const size = ref('Small')
const toppings = ref('Pepperoni')
const add_ons = ref('Fries')
const delivery = ref(false)
const orderSummaryShow = ref(false)
const showSuccess = ref(false)
const formData = ref(null)

function clampQuantity(event){
	if(event.target.value < 1){
		quantity.value = 1
	}
}

function showOrderSummary(){
	formData.value = {
		quantity : quantity.value,
		size : size.value,
		toppings : toppings.value,
		add_ons : add_ons.value,
		delivery : delivery.value
	}
	console.log(formData.value)
	orderSummaryShow.value = true
}
 
function notShowOrderSummary(){
	orderSummaryShow.value = false
}

function submitOrder(){
	console.log(formData)
	axios.post('https://pykidev.pythonanywhere.com/pizza_api/pizzas/', formData.value)
	.then(response => {console.log(response)})
	.catch(error => { console.error(error)})
	showSuccess.value = true
}
</script>

<template>

  
  
  <main class="container">
    <div>
	  <SuccessNotification v-if="showSuccess"/>
	  <OrderSummary :formData="formData" v-if="orderSummaryShow && !showSuccess" @back-event="notShowOrderSummary" @submit-event="submitOrder"/>
      <form @submit.prevent="showOrderSummary" v-show="!orderSummaryShow && !showSuccess" >
		<h1>Order Form</h1>
        <p>
          <label for="quantity"><strong>Quantity</strong></label>
          <input type="number" id="quantity" name="quantity" v-model="quantity" @input="clampQuantity" />
        </p>
        <p>
          <label for="pizza_size"><strong>Size</strong></label>
          <select name="pizza_size" id="pizza_size" v-model="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Kingsize">King Size</option>
          </select>
        </p>
        <p>
          <label for="toppings"><strong>Toppings</strong></label>
          <select name="toppings" id="toppings" v-model="toppings">
            <option value="Pepperoni">Pepperoni</option>
            <option value="Mushrooms">Mushrooms</option>
            <option value="Pineapple">Pineapple</option>
          </select>
        </p>
        <p>
          <label for="add_ons"><strong>Add-ons</strong></label>
          <select name="add_ons" id="add_ons" v-model="add_ons">
            <option value="Fries">Fries</option>
            <option value="Coleslaw">Coleslaw</option>
          </select>
        </p>
        <p id="delivery">
          <label for="delivery">Delivery</label>
          <input type="checkbox" name="delivery" id="delivery" v-model="delivery">
        </p>
        <p>
          <strong>Total Price</strong> <span id="total_price">{{ total_price }}</span>
        </p>
        <div id="btn_div">
          <input type="submit" value="Place Order" id="submitBtn">
          <RouterLink to="/" id='routerlink'><input type="button" value="Back"></RouterLink>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
	header>h1{
		color: red;
		margin-bottom: 0.2rem;
	}
	.container>div{
		padding: 0rem 0.3rem;
	}
	#routerlink{
		text-decoration: none;
		color: var(--theme-color);
	}
	#btn_div{
		padding: 0.3rem 0rem;
	}
	#btn_div input{
		margin-bottom: 0.3rem;
		background-color: var(--theme-color);
		color: white;
	}
	#submitBtn{
		font-weight: bold;
	}
	#delivery{
		display: flex;
		padding: 0.3rem;
		justify-content: center;
		align-items: center;
	}
	#delivery>input{
		height: 1.5rem;
		width: 2rem;
		margin-left: 2rem;
	}
</style>