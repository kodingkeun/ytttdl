<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid';

const emit = defineEmits(["submit"]);
const model = defineModel();
const props = defineProps({
  errors: Object,
  loading: Boolean,
  placeholder: String
})
</script>

<template>
    <form
        @submit.prevent="emit('submit')"
        class="w-full max-w-[500px] flex sm:flex-row flex-col gap-2 h-24 sm:h-11 p-1"
    >
        <label
            for="url"
            class="w-full flex-1 border focus-within:shadow duration-200 flex sm:h-full rounded-md gap-2 items-center dark:border-iron-900"
            :class="props.errors ? 'border-red-500' : ''"
        >
            <MagnifyingGlassIcon class="size-7 opacity-50 ml-2 flex-none" />
            <input
                type="text"
                class="w-full text-sm outline-none overflow-x-auto"
                :placeholder="props.placeholder"
                v-model="model"
            />
        </label>
        <button
            type="submit"
            :disabled="props.loading"
            class="btn-primary"
        >
            <IconsSpinner v-if="props.loading" />
            <span>{{ props.loading ? "Searching..." : "Search" }}</span>
        </button>
    </form>
</template>
