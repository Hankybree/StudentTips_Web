  
<template>
  <div id="map"></div>
</template>

<script>
<<<<<<< HEAD
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { computed } from "../scripts/computed.js";

export default {
  name: "Map",
  computed: computed,
  head() {
    return {
      script: [
        { src: "https://cdn.klokantech.com/mapbox-gl-js/v0.43.0/mapbox-gl.js" }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.klokantech.com/mapbox-gl-js/v0.43.0/mapbox-gl.css"
        }
      ]
    };
  },
=======
    import mapboxgl from 'mapbox-gl'
    import 'mapbox-gl/dist/mapbox-gl.css'
    import {computed} from '../scripts/computed.js'
    import {store} from '../main.js'
    export default {
        
        name: "Map",
        components:mapboxgl,
        computed: computed,
        
        methods: {
            map: function () {
>>>>>>> ce499a6be7aef833916a525cd08acd51978269ee

  methods: {
    map: function() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic2FtaWVoIiwiYSI6ImNrYWZhZHpqajIzcGwzNHM5b29sMG14NTQifQ.g-aQlEoxJwrmu2_7ONlevg"; // optional

<<<<<<< HEAD
      return new mapboxgl.Map({
        container: "map",
        center: [11.989179, 57.690902],
        zoom: 12,
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

    map.addControl(new mapboxgl.NavigationControl());
    var features = [];

    fetch("http://116.203.125.0:12001/pins")
      .then(response => response.json())
      .then(result => {
        result.forEach(p => {
          features.push({
            type: "Feature",
=======
                return new mapboxgl.Map({
                    container: 'map',
                    center: [11.989179, 57.690902],
                    zoom: 10,
                    pitch: 10,
                    bearing: -10,
                    interactive: true,
                    attributionControl: false,
                    style: 'mapbox://styles/samieh/ckans78oz3ehp1illrbn63u6i'
>>>>>>> ce499a6be7aef833916a525cd08acd51978269ee

            geometry: {
              type: "Point",
              coordinates: [p.pinCoordinates.x, p.pinCoordinates.y]
            },
<<<<<<< HEAD
            properties: {
              title: p.pinTitle,
              icon: "bar"
            }
          });
        });
      });

    map.on("load", function() {
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
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          "icon-image": ["concat", ["get", "icon"], "-15"],
          // get the title name from the source's "title" property
          "text-field": ["get", "title"],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
    });

    map.on("click", function(e) {
      var point = map.queryRenderedFeatures(e.point, {
        layers: ["points"]
      });

      if (point.length) {
        var clickedPoint = point[0];

        map.flyTo({
          center: clickedPoint.geometry.coordinates,
          zoom: 15
        });
      }
      console.log(map);
    });
  }
};
=======

            
        },
        mounted() {
            let map = this.map()
            
            map.addControl(new mapboxgl.NavigationControl())
            var features=[]
                fetch('http://116.203.125.0:12001/pins')
                 .then(response => response.json())
                    .then(result => {
                         result.forEach(p => {
                             features.push(
                                 {
                                   'type': "Feature",
                                     "geometry":{
                                         'type': "Point",
                                          'coordinates':[p.pinCoordinates.x,p.pinCoordinates.y],
                                     },
                                     'properties':
                                     {
                                         'pinId':p.pinId,
                                         'title': p.pinTitle,
                                         'tag': [p.pinTags],
                                         'icon': "bar",
                                         'Description':p.pinDescription
                                     }
                                 }
                             )
                         });
                    })
           map.on('load', function () {
                        map.addSource('points', {
                            'type': 'geojson',
                            'data': {
                                'type': "FeatureCollection",
                                'features': features
                            }
                        });
                       
                        map.addLayer({
                            'id': 'points',
                            'type': 'symbol',
                            'source': 'points',
                            'layout': {
                                // get the icon name from the source's "icon" property
                                // concatenate the name to get an icon from the style's sprite sheet
                                'icon-image': ['concat', ['get', 'icon'], '-15'],
                                // get the title name from the source's "title" property
                                'text-field': ['get', 'title'],
                                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                                'text-offset': [0, 0.6],
                                'text-anchor': 'top',
                            }
                        });
                    });

                    map.on('click', function(e) {
                        var point = map.queryRenderedFeatures(e.point, {
                        layers: ['points']
                         });
                      if(point.length){ 
                          var clickedPoint=point[0]
                          //console.log(clickedPoint.properties.pinId)
                          var desc= clickedPoint.properties.Description
                          
                         // var tag=clickedPoint.properties.tag
                            map.flyTo({
                                    center: clickedPoint.geometry.coordinates,
                                    zoom: 15
                                }); 
                          new mapboxgl.Popup()
                              .setLngLat(clickedPoint.geometry.coordinates)
                              .setHTML(desc)
                              .addTo(map);
                      }else{
                        var p=(e.lngLat)
                        
                        store.commit('setPinCoordinatesX',p.lng)
                        
                        store.commit('setPinCoordinatesY',p.lat)

                        //  new mapboxgl.Marker()
                        //       .setLngLat([p.lng, p.lat])
                        //       .addTo(map);

                      }
                 })
                }
    }
>>>>>>> ce499a6be7aef833916a525cd08acd51978269ee
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>