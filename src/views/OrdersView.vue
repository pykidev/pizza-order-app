<script setup>
import { ref, onMounted } from 'vue'
import OrderView from '../components/OrderViewComp.vue'
import axios from 'axios'

const orderData = ref([])
const dataRetrieved = ref(false)

onMounted(fetchOrderData)

async function fetchOrderData() {
	try{
		const response = await axios.get('http://127.0.0.1:8000/pizza_api/pizzas/')
		orderData.value = response.data
		
	} catch(error) {
		console.error(error)
	}
}
	

function cancelOrder(orderID){
	axios.delete(`http://127.0.0.1:8000/pizza_api/pizzas/order/${orderID}`)
	.then((response) => console.log(`Order ${orderID} has been cancelled`))
	.catch((error) => console.error(error))
	.finally(() => window.location.reload())
}
</script>

<template>
	<main>
		<h1> Your Orders </h1>
		<h3 v-if="orderData == []">You have no orders currently</h3>
		<OrderView v-for="order in orderData" :data="order" :key="order.id" @cancel-order="cancelOrder"/>
	</main>
	<footer>
		
		<RouterLink to="/">
			<input type="button" value="Home"/>
		</RouterLink>
	</footer>
</template>

<style scoped>
main{
	background-color : white;
	padding : 2rem;
	padding-top : 2rem;
	padding-bottom : 0.8rem;
}
main>h1{
	position : fixed;
	top : 0;
	right : 0;
	left : 0;
	background-color : white;
	color : var(--theme-color);
	padding : 0.8rem; 
	text-align : center;
	font-size : 1.7rem;
	font-weight : bold;
}

footer{
	position : fixed;
	bottom : 0;
	left : 0.5rem;
	right : 0.5rem;
	border-radius : 0.6rem 0.6rem 0rem 0rem;
	background-color : var(--theme-color); 
	display : flex;
	justify-content : center;
}
footer input{
color : white;
font-weight : bold;
	background-color : var(--theme-color);
}
</style>