<script setup>

</script>

<template>
	<div>
		<p>Your order has been successfully registered.<br> Thank you for using our services</p>
		<p id="check">&check;</p>
		<div id="btn_div">
			<RouterLink to='/orders'><input type="button" value="View Order" id="viewOrderBtn"></RouterLink>
			<RouterLink to='/'><input type="button" value="Go to Homepage"></RouterLink>
		</div>
	</div>
</template>

<style scoped>
div{
	padding : 0.2rem;
}
p{
	text-wrap : wrap;
	text-align : center;
	color : var(--theme-color);
}
#check{
	font-size: 8rem;
	color : var(--theme-color);
	font-weight : bold;
}
input{
	background-color : var(--theme-color);
	margin-bottom : 0.3rem;
	color : white;
}
</style>