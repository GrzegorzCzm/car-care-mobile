<template>
    <f7-navbar sliding title="CarCare" > 
      <div class="right">
            <i class="f7-icons" v-on:click="toggleSideMenu">menu</i>
        </div>
    </f7-navbar>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      title: "Navigation Bar"
    };
  },
  methods: {
    toggleSideMenu() {
      this.$emit('clicked');
    }
  }
};
</script>
