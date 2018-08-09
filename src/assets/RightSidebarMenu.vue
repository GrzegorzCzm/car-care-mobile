<template>
    <f7-panel right :opened="opened">
    <!-- <f7-view> -->
        <f7-block>Right panel content</f7-block>
    <!-- </f7-view> -->
  </f7-panel>
</template>

<script>

export default {
  props: ['opened'],
  name: 'RightSidebarMenu',
  data() {
    return {
      title: 'RightSidebarMenu'
    };
  }
};
</script>
