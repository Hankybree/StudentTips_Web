  
<template>
    <div id="map"></div>
</template>

<script>
    import mapboxgl from 'mapbox-gl'
    export default {
        name: "Map",
        head() {
            return {
                script: [
                    { src: 'https://cdn.klokantech.com/mapbox-gl-js/v0.43.0/mapbox-gl.js' }
                ],
                link: [
                    {
                        rel: 'stylesheet',
                        href: "https://cdn.klokantech.com/mapbox-gl-js/v0.43.0/mapbox-gl.css"
                    }
                ]
            }
        },
        methods: {
            map: function () {
                mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaWVoIiwiYSI6ImNrYWZhZHpqajIzcGwzNHM5b29sMG14NTQifQ.g-aQlEoxJwrmu2_7ONlevg'; // optional
                return new mapboxgl.Map({
                    container: 'map',
                    center: [11.989179, 57.690902],
                    zoom: 11,
                    pitch: 10,
                    bearing: -10,
                    interactive: true,
                    attributionControl: false,
                    style: 'mapbox://styles/samieh/ckans78oz3ehp1illrbn63u6i'
                })
            },
        },
        mounted() {
            let map = this.map()
            map.addControl(new mapboxgl.NavigationControl())
            map.on('load', function () {
                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                // feature for Mapbox DC
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [11.984141, 57.682522]
                                },
                                'properties': {
                                    'title': 'First Place',
                                    'icon': 'bar'
                                }
                            },
                            {
                                // feature for Mapbox SF
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [11.982313, 57.688792]
                                },
                                'properties': {
                                    'title': 'Second Place ',
                                    'icon': 'bar'
                                }
                            }
                        ]
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
                        'text-anchor': 'top'
                    }
                });
            });
            }
            
  
            
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .marker {
  
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>