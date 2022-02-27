<template>
  <div class="flex flex-row-reverse fixed inset-x-0 bottom-0">
    <button
      class="rounded-full bg-teal-500 hover:bg-teal-300 w-20 h-20 mb-8 mr-8 flex justify-center"
      @click="handleAddChannel"
    >
      <span class="text-6xl text-white mt-1.5">+</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ChannelCreateButton",
  methods: {
    handleAddChannel() {
      this.$emit("channel:create");
    },
  },
};
</script>
