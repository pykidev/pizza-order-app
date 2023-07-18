<script setup>

</script>

<template>

  <header>
	<RouterLink to="/orders">
		<div id="orders">
			<div id="order_notification"></div>
			<span>&#128276;</span>
		</div>
	</RouterLink>
    <h1>Pizza Hub</h1>
  </header>
  <main>
    <div id="slogan">Home of the best pizzas</div>
    <RouterLink to="/order">
      <span class="router-link">
        Order Now
      </span>
    </RouterLink>
    <!-- <RouterLink to="/orders">
      Orders
    </RouterLink> -->
  </main>

</template>

<style scoped>
main {
  /* display: flex; */
  margin-top : 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  /* backdrop-filter: blur(10px); */
  padding-left: 1rem;
  color: var(--theme-color-2);
}

header > h1 {
  margin-top : 6rem;
  color: var(--theme-color);
  font-size: 5rem;
  margin-bottom: 1.5rem;
  font-style: oblique;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

#slogan {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: var(--theme-color);
  font-size: 36px;
  font-style: italic;
  margin-bottom: 2rem;
}
#orders{
	position : fixed;
	top : 0;
	right : 0;
	left : 0;
	padding : 0.7rem;
	padding-right : 1.3rem;
	display : flex;
	align-items : end;
	/*background-color : var(--theme-color);*/
}

#orders>span{
	font-size : 1.7rem;
	text-decoration : none;
	color : white;
}
main > button {
  font-size: 40px;
  background-color: transparent;
  color: var(--theme-color);
  padding: 0.4rem;
  border-color: var(--theme-color);
}

.router-link{
  background-color: transparent;
  color: var(--theme-color);
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.3rem;
  border: 1px solid var(--theme-color);
  transition: all 100ms ease-in-out;
}

.router-link:hover{
  background-color: white;
  border-color: transparent;
}

#order_notification{
	width : 0.8rem;
	height : 0.8rem;
	background-color : var(--theme-color);
	border-radius : 50%;
	position : relative;
	top : 1.1rem;
	left : -1.4rem;
}
</style>