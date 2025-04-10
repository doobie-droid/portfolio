<template>
    <div class='flex space-x-2 justify-center items-center  h-10 '>
        <span class='sr-only'>Loading..</span>
        <div class='h-4 w-4 bg-primary dark:bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div class='h-4 w-4 bg-primary dark:bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div class='h-4 w-4 bg-primary dark:bg-yellow-400 rounded-full animate-bounce'></div>
    </div>
</template>

<script>
export default {
    name: "LoadingDots"
}
</script>
