<template>
  <v-app>
      <navigation></navigation>

      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container style="padding:50px;" fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Navigation from './components/Navigation';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  @import './assets/stylesheets/application.scss';
</style>
