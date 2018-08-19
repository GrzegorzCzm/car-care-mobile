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

    <f7-link>
        <i class="f7-icons">gear</i>
        Edit
    </f7-link>
    <f7-link>
            <i class="f7-icons">trash</i>
            Remove
    </f7-link>
  </f7-card-footer>
</f7-card>
</template>

<script>
export default {
  props: ["expense"],
  name: "ExpenseDetails",
  data() {
    return {};
  }
};
</script>
