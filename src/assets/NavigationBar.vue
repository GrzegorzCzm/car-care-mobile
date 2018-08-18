<template>
    <f7-navbar sliding>
      <f7-nav-title><i class="f7-icons">graph_round</i>{{title}}</f7-nav-title> 
      <div class="right panel-open" href="#" data-panel="right">
            <i class="f7-icons">menu</i>
        </div> 
    </f7-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavigationBar",
  data() {
    return {
          title: "CarCare"
    };
  }
};
</script>
