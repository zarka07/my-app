<template>
    <div class="loader">
        {{$t("Loader")}}
    </div>
</template>
<script>

export default {
    name: 'Loader',
    props: {
       
    },
    
}
</script>
<style scoped>
.loader{
    font-size: 200px;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: burlywood;
}
</style>