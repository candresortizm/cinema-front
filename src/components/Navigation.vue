<template>
    <v-navigation-drawer
            v-model="drawer"
            :color="color"
            absolute
            dark
            app
          >
            <v-list
              dense
              nav
              class="py-0"
            >
              <v-list-item two-line :class="'px-0'">
                <v-list-item-content>
                  <v-list-item-title>PlaceIt</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                router :to="item.route"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      items: [
        { title: 'Reservas', icon: 'mdi-calendar-blank', route: 'reservations' },
        { title: 'Películas', icon: 'mdi-filmstrip', route: 'movies' },
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      background: false,
    }),
    props: {

    },
    watch: {
    },
    beforeMount(){
    },
    components: {
    },
    methods:{
    }
  }
</script>
