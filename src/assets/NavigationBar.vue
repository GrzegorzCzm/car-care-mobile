<template>
    <f7-navbar sliding :title="title" > 
      <div class="right panel-open" href="#" data-panel="right">
            <i class="f7-icons">menu</i>
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
  })
};
</script>
