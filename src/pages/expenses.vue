<template>
  <f7-page>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      EXPENSES LISTS
    </f7-block>
  </f7-page>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Expenses",
  data() {
    return {
      title: "Expenses"
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
