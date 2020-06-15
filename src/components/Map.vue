<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { computed } from "../scripts/computed.js";
import { store } from "../main.js";
export default {
  name: "Map",
  components: mapboxgl,
  computed: computed,

  methods: {
    map: function() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic2FtaWVoIiwiYSI6ImNrYWZhZHpqajIzcGwzNHM5b29sMG14NTQifQ.g-aQlEoxJwrmu2_7ONlevg"; // optional
      return new mapboxgl.Map({
        container: "map",
        center: this.$store.state.center,
        //  : [11.989179, 57.690902],
        zoom: this.$store.state.zoom,
        pitch: 10,
        bearing: -10,
        interactive: true,
        attributionControl: false,

        style: "mapbox://styles/samieh/ckans78oz3ehp1illrbn63u6i"
      });
    }
  },
  mounted() {
    let map = this.map();
    var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
    map.addControl(
      new MapboxGeocoder({

        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );
    map.addControl(new mapboxgl.NavigationControl());
    
   
    var features = [];
    
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    fetch("http://116.203.125.0:12001/pins")
      .then(response => response.json())
      .then(result => {
        result.forEach(p => {
          features.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [p.pinCoordinates.x, p.pinCoordinates.y]
            },
            properties: {
              pinId: p.pinId,
              title: p.pinTitle,
              tag: p.pinTags,
              image: p.pinImage,
              user: p.pinUser,
              icon: "bar",

              Description: p.pinDescription
            }
          });
        });
      });

    map.on("load", function() {
      map.loadImage("https://i.ibb.co/C2GZ9P2/pin.png", function(error, image) {
        //this is where we load the image file
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: features
          }
        });

        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            "icon-allow-overlap": false,
            "icon-size": 0.5,
            // ["concat", ["get", "icon"], "-15"],
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
          }
        });
      });
    });
    map.on("click", function(e) {
      var point = map.queryRenderedFeatures(e.point, {
        layers: ["points"]
      });
      if (point.length) {
        var clickedPoint = point[0];
        store.commit("setPinInt", 2);
        console.log(store.state.pinInt);
        console.log(clickedPoint.properties.title);
        store.commit("setPinTags", clickedPoint.properties.tag);
        store.commit("setPinTitle", clickedPoint.properties.title);
        store.commit("setPinImage",clickedPoint.properties.image)
        store.commit(
          "setPinCoordinatesX",
          clickedPoint.geometry.coordinates[0]
        )
        store.commit('setPinCreator', clickedPoint.properties.user)
        store.commit('setPinId', clickedPoint.properties.pinId)

        store.commit(
          "setPinCoordinatesY",
          clickedPoint.geometry.coordinates[1]
        );
        var desc = clickedPoint.properties.Description;
        store.commit("setPinDescription", desc);

        map.flyTo({
          center: clickedPoint.geometry.coordinates,
          zoom: 15
        });
        
      } else {
        var p = e.lngLat;
        store.commit("setPinTitle", "");
        store.commit("setPinDescription", "");
        store.commit("setPinTags", "");
        //store.commit("setPinImage", p.image)
        store.commit("setPinCoordinatesX", p.lng);
        store.commit("setPinCoordinatesY", p.lat);
        store.commit("setPinInt", 1);

        //  new mapboxgl.Marker()
        //       .setLngLat([p.lng, p.lat])
        //       .addTo(map);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css");
</style>