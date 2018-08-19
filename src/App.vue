<template>
  <!-- App -->
  <div id="app">
    <RightSidebarMenu/>    <f7-login-screen class="demo-login-screen" :opened="loginScreenOpened" @loginscreen:closed="loginScreenOpened = false">
      <f7-page login-screen>
        <f7-login-screen-title>CarCare login page</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Username</f7-label>
            <f7-input type="text" placeholder="Your username" @input="username = $event.target.value"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Password</f7-label>
            <f7-input type="password" placeholder="Your password" @input="password = $event.target.value"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">Sign In</f7-list-button>
          <f7-block-footer>Footer</f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-login-screen>
        <NavigationBar/>
        <f7-view id="main-view" url="/" main>
        </f7-view>  
        
        </div>
</template>

<script>
import firebase from "firebase";

import NavigationBar from "./assets/NavigationBar";
import RightSidebarMenu from "./assets/RightSidebarMenu";

import Store from "./store/store";

export default {
  name: "App",
  store: Store,

  data() {
    return {
      loginScreenOpened: true,
      username: "",
      password: ""
    };
  },
  components: {
    NavigationBar,
    RightSidebarMenu
  },
  computed: {
    isiOS() {
      return window.isiOS;
    }
  },
  methods: {
    signIn() {
      const self = this;
      const app = self.$f7;

      firebase
        .auth()
        .signInWithEmailAndPassword(self.username, self.password)
        .then(
          user => {
            console.log("LOGGED IN USER:", user);
            app.loginScreen.close();
          },
          error => {
            app.dialog.alert(`Uppsss... wrong credentials`);
          }
        );
    }
  }
};
</script>
