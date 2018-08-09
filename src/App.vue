<template>
  <!-- App -->
  <div id="app">
    <RightSidebarMenu/>
    <f7-view main>
      <f7-page>
        <NavigationBar/>
        <f7-view id="main-view" url="/" main>
        </f7-view>
      </f7-page>
  </f7-view>
  </div>
</template>

<script>
import NavigationBar from "./assets/NavigationBar";
import RightSidebarMenu from "./assets/RightSidebarMenu";
import { mapActions } from "vuex";

import Store from "./store/store";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavigationBar,
    RightSidebarMenu
  },
  methods: {
    ...mapActions(["updateTitle"]),
  },
  computed: {
    isiOS() {
      return window.isiOS;
    }
  }
};
</script>
