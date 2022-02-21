<template>
  <div>
    <div>
      <h2>Vue Js Search and Add Marker</h2>
      <label>
        <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>
        <button @click="addLocationMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
        :zoom="14"
        :center="center"
        style="width:100%;  height: 600px;"
    >
      <gmap-marker
          :key="index"
          v-for="(m, index) in locationMarkers"
          :position="m.position"
          @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "AddGoogleMap",
  data(){
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  }
}
</script>

<style scoped>

</style>