<template>
	<div class="loading">
      	<span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
	export default {
		name: 'loading'
	}
</script>

<style scoped>
	.loading{
		justify-content: center !important;
        height: 40px;
        margin: 0 auto;
        margin-top:100px;
        border-bottom: none !important;
    }
    .loading span{
        display: inline-block;
        margin-left: 1rem;
        width: 8px;
        height: 100%;
        border-radius: 4px;
        background: lightgreen;
        -webkit-animation: load 1s ease infinite;
    }
    @-webkit-keyframes load{
        0%,100%{
            height: 40px;
            background: lightgreen;
        }
        50%{
            height: 70px;
            margin: -15px 0;
            background: lightblue;
        }
    }
    .loading span:nth-child(2){
        -webkit-animation-delay:0.2s;
    }
    .loading span:nth-child(3){
        -webkit-animation-delay:0.4s;
    }
    .loading span:nth-child(4){
        -webkit-animation-delay:0.6s;
    }
    .loading span:nth-child(5){
        -webkit-animation-delay:0.8s;
    }
</style>