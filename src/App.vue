<template>
  <div ref="appWrapper">
    <PageHeader />
    <ChannelCreateButton @channel:create="handleCreateChannel" />
    <ChannelList :channels="channels" />
  </div>
</template>

<script>
import ChannelList from "@/components/ChannelList";
import PageHeader from "@/components/UX/PageHeader";
import ChannelCreateButton from "@/components/ChannelCreateButton";
import { addChannelIntoLocalStorage, getChannelsLocalStorage } from "@/mixins";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "App",
  components: {
    ChannelCreateButton,
    ChannelList,
    PageHeader,
  },
  data() {
    return {
      channels: [],
    };
  },
  created() {
    this.channels = getChannelsLocalStorage();
  },
  methods: {
    async handleCreateChannel() {
      addChannelIntoLocalStorage({ name: "", id: uuidv4(), isEdited: true });
      this.channels = getChannelsLocalStorage();
      this.$root.$el.scrollIntoView();
    },
  },
};
</script>
