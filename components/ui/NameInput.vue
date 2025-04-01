<template>
    <div class="relative w-full">
        <input type="text" name="text" id="name"
            class="peer w-full  caret-primary dark:caret-yellow-400 p-3 border outline outline-2 outline-transparent focus-visible:border-none focus-visible:outline focus-visible:outline-2 focus:placeholder-transparent bg-transparent  placeholder:text-black dark:placeholder:text-white placeholder:font-thin"
            :class="{
                'focus:outline-primary': !error,
                'dark:focus:outline-yellow-400': !error,
                'border-primary': !error,
                'dark:border-yellow-400': !error,
                'focus:outline-red-500': error,
                'border-red-500': error,
            }" placeholder=" Full Name" autocomplete="new-password" :value="value"
            @input="updateName($event.target.value)">
        <label for="name"
            class="absolute opacity-0   top-3 left-3 text-sm bg-white dark:bg-neutral-900 peer-focus:-translate-y-6 peer-focus:opacity-100 transition ease-linear  "
            :class="{
                'opacity-100': value,
                '-translate-y-6 ': value,
                'text-primary': !error,
                'dark:text-yellow-400': !error,
                'text-red-500': error,
            }">Full Name</label>
        <span class="text-red-500 text-xs pl-3 mt-2 -mb-4 block">{{ error }}</span>
    </div>
</template>
<script>
export default {
    name: "NameInput",
    props: {
        error: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
    },
    methods: {
        updateName(name) {
            this.$emit('update:value', name);
        },
    },
    watch: {
        value(newValue, oldValue) {
            if (!newValue) {
                this.$emit("update:error", "Your name is required");
                return;
            }
            this.$emit("update:error", null);
        },
    },
};
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
}
</style>