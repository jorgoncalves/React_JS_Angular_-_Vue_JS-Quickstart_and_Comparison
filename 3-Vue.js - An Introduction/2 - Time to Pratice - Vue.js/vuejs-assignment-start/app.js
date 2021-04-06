/* eslint-disable no-undef */

Vue.component("app-hobby", {
  props: ["hobby"],
  template:"<li v-on:click='removeHobby'> {{hobby}} </li>",
  methods:{
    removeHobby: function(){
      this.$emit("hobbyremoved", this.hobby);
    }
  }
});

new Vue({
  el: "#app",
  data: {
    hobbies: ["Gym", "Studing", "Learning", "Gamings"],
    newHobby: "",
    deleted: false
  },
  methods: {
    addHobby: function (hobby) {
      this.hobbies.push(hobby);
    },
    removeHobby: function (hobby) {
      var hobbyIndex = this.hobbies.indexOf(hobby);
      console.log(hobbyIndex);
      this.hobbies.splice(hobbyIndex, 1);

      this.deleted = true;

    }
  }
});