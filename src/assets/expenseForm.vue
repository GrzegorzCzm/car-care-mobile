<template>
<f7-block>
    <f7-list no-hairlines-md>
    <f7-list-item v-for="field in formFields" :key="field.title">
        <f7-label>{{field.title}}</f7-label>
        <f7-input :type="field.type" :placeholder="field.placeholder" clear-button></f7-input>
    </f7-list-item>
    </f7-list>
    <f7-button v-on:click="addExpense">Add</f7-button>
    </f7-block>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ExpenseForm",
  data() {
    return {
      formFields: [
        { title: "Date", type: "text", placeholder: "1970-01-01" },
        { title: "Item", type: "text", placeholder: "Item here" },
        { title: "Cost", type: "text", placeholder: "99" },
        {
          title: "Description",
          type: "text",
          placeholder: "more details here"
        },
        { title: "Address", type: "text", placeholder: "address here" }
      ],
      date: "",
      item: "",
      cost: "",
      description: "",
      address: ""
    };
  },
  components: {},
  methods: {
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
  }
};
</script>
