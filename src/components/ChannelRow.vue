<template>
  <div
    class="bg-gray-200 shadow-gray-500 shadow-md mb-10 pl-2 pr-4 py-4 rounded-2xl flex flex-col lg:flex-row"
  >
    <label for="channelName" class="text-xs font-bold px-2">
      <p class="pl-2">Name</p>
      <template v-if="!channelCopy.isEdited">
        <div
          class="flex hover:outline-dotted outline-1 outline-blue-700 py-1 px-2 mt-1 rounded-md cursor-pointer"
          @click="channelCopy.isEdited = true"
        >
          <p
            id="channelName"
            class="capitalize text-xl font-light overflow-ellipsis w-full lg:w-56 overflow-hidden"
            :title="channelCopy.name"
          >
            {{ channelCopy.name }}
          </p>
          <EditIcon class="hover:text-blue-600 relative top-1.5 ml-2" />
        </div>
      </template>
      <div v-else class="h-10 flex">
        <input
          type="text"
          class="px-2 pt-0 rounded-md flex h-full text-xl w-full lg:w-56 font-light"
          v-model="channelCopy.name"
          @keyup.enter="handleNameEdit"
        />
        <div class="flex flex-row-reverse pt-1.5">
          <button
            class="ml-2 font-bold bg-green-500 hover:bg-lime-400 h-7 w-8 rounded-md pl-2 text-white"
            @click="handleNameEdit"
          >
            <CheckIcon />
          </button>
        </div>
      </div>
    </label>
    <label
      for="channelId"
      class="font-bold text-xs lg:text-right px-4 mt-2 lg:mt-0"
    >
      id
      <p id="channelId" class="text-xl font-light mt-1">{{ channelCopy.id }}</p>
    </label>
  </div>
</template>

<script>
import EditIcon from "@/components/UX/icons/EditIcon";
import CheckIcon from "@/components/UX/icons/CheckIcon";
import { updateChannelIntoLocalStorage } from "@/mixins";

export default {
  name: "ChannelRow",
  components: {
    EditIcon,
    CheckIcon,
  },
  props: {
    channel: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isNameEdited: true,
      channelCopy: {},
    };
  },
  created() {
    this.channelCopy = JSON.parse(JSON.stringify(this.channel));
  },
  methods: {
    handleNameEdit() {
      this.channelCopy.isEdited = false;
      updateChannelIntoLocalStorage(this.channelCopy);
    },
    handleCancelEdit() {
      this.channelCopy.isEdited = false;
      updateChannelIntoLocalStorage(this.channel);
    },
  },
};
</script>
