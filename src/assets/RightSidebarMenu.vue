<template>
    <f7-panel right>
        <f7-block>Right panel content</f7-block>
        <ul>
          <li v-for="page in pages" :key="page.id">{{page.title}}</li>
        </ul>
  </f7-panel>
</template>

<script>

export default {
  name: 'RightSidebarMenu',
  data() {
    return {
      title: 'RightSidebarMenu',
      pages: [
        { id:0, title: "Home", path: ""},
        { id:1, title: "Expenses", path: ""},
        { id:2, title: "Refueling", path: ""},
      ]
    };
  }
};
</script>
