<template>
  <f7-card class="demo-card-header-pic">
  <f7-card-header
    class="no-border"
    valign="bottom"
  >
  Map placeholder</f7-card-header>
  <f7-card-content>
    <p class="date">{{expense.address}}</p>
    <p>{{expense.description}}</p>
  </f7-card-content>
  <f7-card-footer>

    <f7-button color="blue">
        Edit
    </f7-button>
      <!--f7-button color="red" v-on:click.prevent.stop="onDeleteExpense"-->
      <f7-button color="red" raised  popover-open=".popover-delete-confirmation">

            Remove
    </f7-button>
  </f7-card-footer>
  <f7-popover class="popover-delete-confirmation">
    Are you sure to remove expense?
        <f7-button color="blue" popover-close>
          Cancel
        </f7-button>
        <f7-button color="red" 
        v-on:click.prevent.stop="onDeleteExpense"
        popover-close
        >
          Remove
        </f7-button>


  </f7-popover>

</f7-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["expense"],
  name: "ExpenseDetails",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["deleteExpense"]),
    onDeleteExpense() {
      this.deleteExpense(this.expense.id);
    }
  }
};
</script>
