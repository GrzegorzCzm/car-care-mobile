

<template>
  <f7-page>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Refueling LISTS
    </f7-block>
  </f7-page>
</template>
<script>
import { mapActions } from "vuex";


export default {
  name: 'Refueling',
  data() {
    return {
      title: 'Refueling'
    };
  },
  methods: {
    ...mapActions(["updateTitle"]),
    onPageInit(newPageTitle) {
      this.updateTitle(newPageTitle);
    }
  },
  on: {
    pageInit: function(event, page){this.onPageInit(page.route.route.title)}
  }
};
</script>
