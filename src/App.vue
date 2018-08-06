<template>
  <!-- App -->
  <div id="app">

  <f7-panel right opened="showMenu">
    <f7-block>Right panel content</f7-block>
  </f7-panel>
    <NavigationBar 
      @clicked="onToggleMenu"/>
    <f7-view id="main-view" url="/" main>
    </f7-view>
  </div>
</template>

<script>
import NavigationBar from "./assets/NavigationBar.vue";

export default {
  name: "App",
  data() {
    return {
      showMenu: true
    };
  },
  components: {
    NavigationBar
  },
  methods: {
    onToggleMenu() {
      console.log(this.showMenu);
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    }
  },
  computed: {
    isiOS() {
      return window.isiOS;
    }
  }
};
</script>
