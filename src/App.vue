<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  /* These will be downloaded and served from /src eventually */
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons);

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100%;
  }
</style>
