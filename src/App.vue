<template>
  <!-- App -->
  <div id="app">
    <RightSidebarMenu :opened="showMenu"/>
    <f7-view main>
    <f7-page>
    <NavigationBar 
      @clicked="onToggleMenu"/>
    <f7-view id="main-view" url="/" main>
    {{ showMenu ? "YES": "NO"}}

    </f7-view>
    </f7-page>
  </f7-view>
  </div>
</template>

<script>
import NavigationBar from "./assets/NavigationBar";
import RightSidebarMenu from "./assets/RightSidebarMenu";
import { mapActions } from 'vuex'

import Store from './store/store'


export default {
  name: "App",
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    NavigationBar,
    RightSidebarMenu
  },
  methods: {
    ...mapActions([
      'updateTitle',
    ]),
    onToggleMenu() {
      console.log(this.showMenu);
      this.showMenu = true;
      this.updateTitle("SOME DUMMY TITLE");
      console.log(this.showMenu);
    }
  },
  computed: {
    isiOS() {
      return window.isiOS;
    }
  },
};

</script>
