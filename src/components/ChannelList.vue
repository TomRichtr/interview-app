<template>
  <PageWrapper>
    <p v-if="!displayChannelList" class="text-center text-gray-400">
      No channels to be displayed
    </p>
    <template v-else>
      <ChannelRow
        v-for="channel in channels"
        :channel="channel"
        :key="channel.id"
        class="flex justify-between"
      />
    </template>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/UX/PageWrapper";
import ChannelRow from "@/components/ChannelRow";

export default {
  name: "ChannelList",
  components: {
    PageWrapper,
    ChannelRow,
  },
  props: {
    channels: {
      type: Array,
      required: true,
    },
  },
  computed: {
    displayChannelList() {
      return this.$props.channels?.length;
    },
  },
};
</script>

<style scoped></style>
