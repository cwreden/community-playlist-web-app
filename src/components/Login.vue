<template>
  <div>
    <form v-on:submit.prevent="login">
      <input v-model="username" placeholder="enter your name">
      <button v-show="username">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  beforeMount: function () {
    if (localStorage.getItem('userId') !== null) {
      this.$router.push('overview')
    }
  },
  methods: {
    login: function () {
      this.$http.get('http://localhost:8080/user/' + this.username).then(function (response) {
        localStorage.setItem('userId', response.data.id)
        console.log(this.$router)
        this.$router.push('overview')
      }, function (error) {
        console.log(error.statusText)
      })
    }
  }
}
</script>
