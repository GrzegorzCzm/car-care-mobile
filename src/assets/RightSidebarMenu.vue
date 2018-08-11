<template>
    <f7-panel right>
        <f7-block>Right panel content</f7-block>
        <ul class="right panel-close" 
          href="#" 
          data-panel="right"
          >
          <li 
          v-for="page in pages" 
          :key="page.id" 
          @click="updatePage(page)"
          >{{page.title}}</li>
        </ul>
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
  },
  methods: {
    ...mapActions(["setActivePage", "updateTitle"]),

    updatePage(page) {
      this.updateTitle(page.title);
      this.setActivePage(page.path);
    }
  }
};
</script>
