<script setup>
	const props = defineProps(['formData'])
	console.log(props.formData)
</script>

<template>
	<div>
		<h1>Order Summary</h1>
        <p>
			Quantity <span>{{formData.quantity}}</span>
        </p>
        <p>
			Size <span>{{formData.size}}</span>
        </p>
        <p>
			Toppings <span>{{formData.toppings}}</span>
        </p>
        <p>
			Add_ons <span>{{formData.add_ons}}</span>
        </p>
        <p>
			Delivery <span>{{formData.delivery}}</span>
        </p>
        <div id="btn_div">
		  <input type="button" value="Confirm Order" id="confirmBtn" @click="$emit('submitEvent')">
          <input type="button" value="Back" @click="$emit('backEvent')">
        </div>
	</div>
</template>

<style scoped>
	#confirmBtn{
		font-weight : bold;
	}
	span{
		background-color : white;
		padding : 0.2rem;
		width : 10rem;
		border-radius : 0.2rem;
	}
	p{
		margin-bottom : 0.7rem;
		display : flex;
		justify-content : space-between;
		align-items : center;
	}
	input{
		background-color : var(--theme-color);
		margin-bottom : 0.3rem;
		color : white;
	}
</style>