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
      <f7-button raised popup-open=".add-expense-popup">Add</f7-button>
    </f7-block>

     <f7-popup class="add-expense-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="Popup Title">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
         <expenseForm />
        </f7-block>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>
<script>
import firebase from "firebase";
import { mapActions, mapGetters } from "vuex";
import expenseDetails from "../assets/expenseDetails";
import expenseForm from "../assets/expenseForm";
export default {
  name: "Expenses",
  data() {
    return {
      title: "Expenses",
      popupOpened: false
    };
  },
  components: {
    expenseDetails,
    expenseForm
  },
  methods: {
    ...mapActions(["updateTitle"]),
    onPageInit(newPageTitle) {
      this.updateTitle(newPageTitle);
    },
    addExpense() {
      const { currentUser } = firebase.auth();
      console.log("addExpense", firebase.auth());

      firebase
        .database()
        .ref(`users/${currentUser.uid}/expenses`)
        .push({
          id: 0,
          date: "2018-08-19",
          item: "tires",
          cost: 35,
          description: "some details here",
          address: "dummy address"
        });
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
