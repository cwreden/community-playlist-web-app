<template>
    <div>
        <h1>Your playlist</h1>
        <button v-on:click="openOverallPlaylist">Main playlist</button>
        <button v-on:click="logout">Logout</button>
        <form>
            <input v-model="songTitle" placeholder="enter a song title">
            <input v-model="artistName" placeholder="enter a song title">
        </form>
        <ul id="song-list">
            <li v-for="song in foundSongs"
                v-bind:key="song.id"
            >
                {{ song.title }} - {{ song.artist }}
                <button v-on:click="addToPlaylist(song)">Add</button>
            </li>
        </ul>
        <span v-if="totalItems">Your playlist is empty. Search some songs and add them to your list.</span>
        <ul id="user-playlist">
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
  name: 'UserPlaylist',
  mounted: function () {
    let userId = localStorage.getItem('userId')
    this.$http.get('http://localhost:8080/playlist/' + userId).then(function (response) {
      let songs = response.data.songs
      if (typeof songs !== 'object' || !songs.hasOwnProperty('length')) {
        songs = []
      }
      this.totalItems = songs.length
      this.songs = songs
    }, function (error) {
      console.log(error.statusText)
    })
  },
  data () {
    return {
      totalItems: 0,
      songs: [],
      songTitle: '',
      artistName: '',
      foundSongs: []
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('userId')
      this.$router.push('/')
    },
    openOverallPlaylist: function () {
      this.$router.push('/overview')
    },
    addToPlaylist: function (song) {
      console.log(song)
    }
  }
}
</script>
