<template>
  <f7-page>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      <f7-list>
        <f7-list-item 
          v-for="expense in expenses" 
          :key="expense.id"
          link="#" 
          :header="expense.date" 
          :title="expense.item" 
          accordion-item
          :after="expense.cost">
           <f7-accordion-content>
            <f7-block>
                <expenseDetails :expense="expense"/>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import expenseDetails from '../assets/expenseDetails';

export default {
  name: "Expenses",
  data() {
    return {
      title: "Expenses"
    };
  },
    components: {
    expenseDetails
  },
  methods: {
    ...mapActions(["updateTitle"]),
    onPageInit(newPageTitle) {
      this.updateTitle(newPageTitle);
    }
  },
  on: {
    pageInit: function(event, page) {
      this.onPageInit(page.route.route.title);
    }
  },
  computed: mapGetters({
    expenses: "getAllExpenses"
  })
};
</script>
