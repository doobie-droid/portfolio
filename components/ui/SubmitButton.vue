<template>
    <button type="submit"
        class="p-3 w-full md:w-1/6 border border-primary-500 rounded-md bg-green-400 dark:bg-yellow-300 text-black tracking-wide font-extrabold outline-none hover:bg-primary hover:dark:bg-yellow-400 focus:outline-none shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl active:translate-y-1 active:bg-primary-400">
        <slot>Submit</slot>
    </button>
</template>

<script>
export default {
    name: 'SubmitButton',
}
</script>