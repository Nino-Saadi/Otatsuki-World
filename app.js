var app = new Vue({
  el: '#app',
  data: {
    compteur: 0
  },
  methods: {
    increment: function() {
      return this.compteur++
    }
  }
})