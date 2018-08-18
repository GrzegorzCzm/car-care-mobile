<template>
    <f7-panel right>
        <f7-block>Right panel content</f7-block>
        <f7-list>
          <f7-list-item
          v-for="page in pages" 
          :key="page.id"
          :link="page.path"
          :title="page.title"
          link-view="#main-view"
          panel-close
          reload-all
            />
        </f7-list>
  </f7-panel>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RightSidebarMenu",
  data() {
    return {
      title: "RightSidebarMenu",
      pages: [
        { id: 0, title: "Home", path: "/" },
        { id: 1, title: "Expenses", path: "/expenses" },
        { id: 2, title: "Refueling", path: "/refueling" }
      ]
    };
  }
};
</script>
