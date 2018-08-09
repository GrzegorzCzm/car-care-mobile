<template>
    <f7-navbar sliding :title="title" > 
      <div class="right">
            <i class="f7-icons" v-on:click="toggleSideMenu">menu</i>
        </div>
    </f7-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "NavigationBar",
  data() {
    return {
    };
  },
  computed: mapGetters({
    title: 'getNavigationBarTitle'
  }),
  methods: {
    toggleSideMenu() {
      this.$emit('clicked');
    }
  }
};
</script>
