<script setup>
import { ref } from 'vue'
import OrderView from '../components/OrderViewComp.vue'

const orderData = ref({
	id : 1,
	quantity : 1,
	size : 1,
	toppings : 'Pineapple',
	add_ons : 'Fries',
	delivery : false
})

function cancelOrder(){
	console.log("Order Cancelled")
}
</script>

<template>
	<main>
		<h1> Your Orders </h1>
		<OrderView :data="orderData" @cancel-order="cancelOrder"/>
		<OrderView :data="orderData" @cancel-order="cancelOrder"/>
		<OrderView :data="orderData" @cancel-order="cancelOrder"/>
		<OrderView :data="orderData" @cancel-order="cancelOrder"/>
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