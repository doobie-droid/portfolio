<template>
    <div class="relative  w-full  ">
        <input type="email" name="email" id="email"
            class="peer w-full  caret-primary dark:caret-yellow-400 p-3 border border-primary dark:border-yellow-400 outline outline-2 outline-transparent focus-visible:border-none focus-visible:outline focus-visible:outline-2 focus:placeholder-transparent bg-transparent  placeholder:text-black dark:placeholder:text-white placeholder:font-thin"
            :class="{
                'focus:outline-primary': !error,
                'dark:focus:outline-yellow-400': !error,
                'focus:outline-red-500': error,
                'border-red-500': error,
            }" placeholder="Email" autocomplete="new-password" :value="value"
            @input="updateEmail($event.target.value)">
        <label for="email"
            class="absolute opacity-0   top-3 left-3 text-sm bg-white dark:bg-neutral-900 peer-focus:-translate-y-6 peer-focus:opacity-100 transition ease-linear  "
            :class="{
                'opacity-100': value,
                '-translate-y-6 ': value,
                'text-primary': !error,
                'dark:text-yellow-400': !error,
                'text-red-500': error,
            }">Email</label>
        <span class="text-red-500 text-xs pl-3 mt-2 -mb-4 block">{{ error }}</span>
    </div>
</template>
<script>
export default {
    name: "EmailInput",
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
        updateEmail(email) {
            this.$emit('update:value', email);
        },
    },
    watch: {
        value(newValue, oldValue) {
            if (!newValue.includes("@")) {
                const err = "Your email should contain '@'"
                this.$emit("update:error", "Your email should contain '@'");
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