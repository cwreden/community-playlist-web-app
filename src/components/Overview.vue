<template>
    <div>
        <h1>Main playlist</h1>
        <button v-on:click="openOwnPlaylist">Own playlist</button>
        <button v-on:click="logout">Logout</button>
        <ul id="overall-playlist">
            <li v-for="song in songs"
                v-bind:key="song.id"
            >
                {{ song.title }} - {{ song.artist }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'OverallPlaylist',
  mounted: function () {
    this.$http.get('http://localhost:8080/playlist/overall').then(function (response) {
      let songs = response.data.songs
      if (typeof songs !== 'object' || !songs.hasOwnProperty('length')) {
        songs = []
      }
      this.songs = songs
    }, function (error) {
      console.log(error.statusText)
    })
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('userId')
      this.$router.push('/')
    },
    openOwnPlaylist: function () {
      this.$router.push('user')
    }
  }
}
</script>
