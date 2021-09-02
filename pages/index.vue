<template>
  <v-row justify="center" align="center">
      <l-map 
        style="height: 600px" 
        :zoom="zoom" 
        :center="center"
      >
        <l-control class="example-custom-control">
          <v-btn @click="save"> Guardar </v-btn>
        </l-control>
        <l-circle
          v-for="(marker, index) in markers"
          :key ="index + 999999"
          :lat-lng="marker.position"
          :radius="parseInt(marker.radio)"
        />
        <l-marker v-for="(marker, index) in markers"
          :key ="index"
          :visible="true"
          :lat-lng.sync="marker.position"
          fillColor='#f03'
          fillOpacity="Math.random()"
        >
           <l-popup style="width: 246px;">
             <v-row>
               <v-col cols="9">
                  <v-row no-gutters style="height: 50px;">
                    <v-col cols="7">
                      <v-subheader>Muestras</v-subheader>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        label="Regular"
                        solo
                        dense
                        type="number"
                        v-model="marker.num_samples"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="7">
                      <v-subheader>Radio(m)</v-subheader>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        label="radio"
                        solo
                        dense
                        min="0"
                        type="number"
                        v-model="marker.radio"
                      ></v-text-field>
                    </v-col>
                  </v-row>
               </v-col>
              <v-divider
                vertical
                inset
              >
              </v-divider>
              <v-col cols="3" style="margin: auto;">                      
                <v-icon
                  @click="eliminar(index)"
                  color="lead"
                  
                >
                  mdi-trash-can-outline
                </v-icon>
              </v-col>
             </v-row>
              
           </l-popup>
        </l-marker>
        <l-polygon 
        :lat-lngs="data.features[0].geometry.coordinates"
        :color="polygon.color"
        @click="agregarMarker"  
        >
        </l-polygon>
      </l-map>
  </v-row>
</template>
<script>
import {LMap, LMarker, LPolygon,LCircle} from 'vue2-leaflet';
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
import  data1  from '../data/data.json';
export default {
  components: {
    LMap,
    LMarker,
    LPolygon,
    LCircle
  },
  data () {
    return {
      markers: [],
      data: data1,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [-75.80318792584497, -14.010508830892729],
      markerLatLng: [-75.80318792584497, -14.010508830892729],
      polygon: {
        color: 'black'
      },
    };
  },
  methods: {
    agregarMarker(e){
      const newMarker = {
        position: { lat: e.latlng.lat, lng: e.latlng.lng },
        visible: true,
        radio: 12,
        num_samples: 3
      };
      this.markers.push(newMarker);
    },
    eliminar(id){
      this.markers.splice(id,1)
    },
    save() {
      console.log(this.markers)
    }
  },
}
</script>
<style scoped>
.leaflet-popup-content { 
    width: 200px;
    height: 200px;
}
.leaflet-popup-content {
    margin: 0px 0px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 0px;
}
</style>