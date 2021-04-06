/* eslint-disable no-undef */
Vue.component("app-username", {
  data: function(){
    return {
      //username: "Yo"
    };
  },
  template: "<p @click='usernameClicked'>{{ username }}</p>",
  props:["username"],
  methods: {
    usernameClicked(){
      this.$emit("usrclicked", this.username);
    }
  }
});

new Vue({
  el:"#app",
  data:{
    name: "Jorge",
    elements:[]
  },
  methods:{
    changeName: function(){
      this.name = "Anna";
    },
    addElement: function(){
      this.elements.push(this.elements.length + 1);
    },
    getColor: function(number){
      return number % 2 == 0 ? "green" : "red";
    },
    userWasClicked(name){
      alert(name);
    }
  }
});

new Vue({
  el:"#app2",
  data:{
    message: "Hello there"
  }
});