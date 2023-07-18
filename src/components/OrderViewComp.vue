<script setup>
	const props = defineProps(['data'])
	console.log(props.data);
</script>

<template>
	<div>
		<p>
			OrderID <span>{{ data.id }}</span>
        </p>
        <p>
			Quantity <span>{{data.quantity}}</span>
        </p>
        <p>
			Size <span>{{data.size}}</span>
        </p>
        <p>
			Toppings <span>{{data.toppings}}</span>
        </p>
        <p>
			Add_ons <span>{{data.add_ons}}</span>
        </p>
        <p>
			Delivery <span>{{data.delivery}}</span>
        </p>
        <p>
			Total Price <span>0</span>
        </p>
		
        <div id="btn_div">
          <input type="button" value="Cancel Order" @click="$emit('cancelOrder')">
        </div>
	</div>
</template>

<style scoped>
	div{
		display: flex;
		flex-direction : column;
		justify-content : center;
		align-items : space-between;
		margin-top : 0.5rem;
		padding : 0.7rem;
		padding-top : 0.8rem;
		border-radius : 0.3rem;
		background-color : var(--theme-color-2);
		margin-bottom : 1rem;
	}
	span{
		background-color : white;
		padding : 0.2rem;
		width : 10rem;
		border-radius : 0.2rem;
	}
	p{
		margin-top : 0.5rem;
		display : flex;
		justify-content : space-between;
		align-items : center;
	}
	input{
		color : white;
		background-color : var(--theme-color);
	}
</style>