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
                    center: [0, 0],
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

            map.addSource('some id', {
                type: 'geojson',
                data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
            });
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>