<template>
  <div class="reservations">
    <div class="">
      <h1>
        Reservas realizadas
      </h1>
    </div>
    <v-data-table
      :headers="headers"
      :items="reservations"
      class="elevation-1"
      hide-default-footer
    ></v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import ReservationModal from '@/components/ReservationModal.vue'

export default {
  data(){
    return{
      reservations:[],
      headers:[
        {text:"Película", value:"movie_title"},
        {text:"Nombre", value:"name"},
        {text:"Correo", value:"email"},
        {text:"Cédula", value:"document"},
        {text:"Celular", value:"cellphone"}
      ],

    }
  },
  methods:{
  },
  mounted(){
    this.$http.get("http://localhost:3000/api/v1/reservations/index").then((response) => {
      this.reservations = response.data;
      console.log(this.reservations);
    }).catch( error => {
      console.log(error);
    });
  }
}
</script>
