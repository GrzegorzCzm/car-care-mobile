<template>
  <!-- App -->
  <div id="app">
    <RightSidebarMenu/>
        <NavigationBar/>
        <f7-view id="main-view" url="/" main>
        </f7-view>
  </div>
</template>

<script>
import NavigationBar from "./assets/NavigationBar";
import RightSidebarMenu from "./assets/RightSidebarMenu";

import Store from "./store/store";

export default {
  name: "App",
  store: Store,

  data() {
    return {};
  },
  components: {
    NavigationBar,
    RightSidebarMenu
  },
  computed: {
    isiOS() {
      return window.isiOS;
    }
  }
};
</script>
