<!-- =========================================================================================
    File Name: GoogleMapInfoWindow.vue
    Description: Google map Basicwith info window
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div code-toggler>

        <!-- <p>A basic example of using a single infowindow for 3 markers</p> -->

        <div class="mt-5">
            <gmap-map :center="center" v-bind:options="mapStyle" :zoom="3" style="width: 100%; height: 700px">
                <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
                    {{infoContent}}
                </gmap-info-window>
                <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
            </gmap-map>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;gmap-map :center=&quot;center&quot; :zoom=&quot;15&quot; style=&quot;width: 100%; height: 500px&quot;&gt;
    &lt;gmap-info-window :options=&quot;infoOptions&quot; :position=&quot;infoWindowPos&quot; :opened=&quot;infoWinOpen&quot; @closeclick=&quot;infoWinOpen=false&quot;&gt;
      {{infoContent}}
    &lt;/gmap-info-window&gt;
    &lt;gmap-marker :key=&quot;i&quot; v-for=&quot;(m,i) in markers&quot; :position=&quot;m.position&quot; :clickable=&quot;true&quot; @click=&quot;toggleInfoWindow(m,i)&quot;&gt;&lt;/gmap-marker&gt;
  &lt;/gmap-map&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      center: { lat: 47.376332, lng: 8.547511 },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
      pixelOffset: { width: 0, height: -35 }
      },
      markers: [
        { position: { lat: 8.7832, lng: 34.5085 }, infoText: 'Africa' },
        { position: { lat: 47.4979, lng: 19.0402 }, infoText: 'Budapest' },
        { position: { lat: 15.8700, lng: 100.9925 }, infoText: 'Thailand' }
      ]
    }
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
}
&lt;/script&gt;
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 35.774365, lng: 54.572027 },
            infoContent: '',
            infoWindowPos: null,
            infoWinOpen: false,
            currentMidx: null,
            //optional: offset infowindow so it visually sits nicely on top of our marker
            mapStyle: {styles:[
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e0efef"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#1900ff"
                        },
                        {
                            "color": "#c0e8e8"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 700
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#7dcdcd"
                        }
                    ]
                }
            ]},
            infoOptions: {
              pixelOffset: { width: 0, height: -35 },
            },
            markers: [
                { position: { lat: 8.7832, lng: 34.5085 }, infoText: 'Africa' },
                { position: { lat: 47.4979, lng: 19.0402 }, infoText: 'Budapest' },
                { position: { lat: 15.8700, lng: 100.9925 }, infoText: 'Thailand' }
            ]
        }
    },
    methods: {
        toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
            }
        }
    }
}
</script>