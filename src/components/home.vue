<template>
  	<div id="home">
  		<header></header>
    	我是home
  	</div>
	
</template>

<script>
import header from "../header.vue";
Vue.component("header",header);
import router from "../router";
export default{

}
</script>

<style>
*{
  padding:0;
  margin:0;
}

</style>