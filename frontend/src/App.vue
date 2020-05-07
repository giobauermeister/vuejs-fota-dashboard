<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list shaped>
        <v-subheader>Menu</v-subheader>
        <v-list-item link :to="{ name: 'firmware-manager' }">
          <v-list-item-action>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Firmware Manager</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'device-manager' }">
          <v-list-item-action>
            <v-icon>mdi-router-wireless</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Device Manager</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>OTA Firmware Management</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer color="green" app>
      <span class="white--text">Bauertronix &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    //HelloWorld,
  },

  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
};
</script>

<style>
   #inspire {
    background-color: #e6e7ec;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
