<template>
  <f7-page>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
    </f7-block>
  </f7-page>
</template>
<script>
import { mapActions } from "vuex";


export default {
  name: 'CarCare',
  data() {
    return {
      title: 'CarCare Home Page'
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
