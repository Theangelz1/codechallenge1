import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LControlZoom, LControlAttribution, LPopup, LTooltip, LControl, LIcon, LPolygon, LCircleMarker, LPolyline } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-circle-marker', LCircleMarker);
Vue.component('l-control-zoom',LControlZoom)
Vue.component('l-control-attribution',LControlAttribution)
Vue.component('l-popup',LPopup)
Vue.component('l-tooltip',LTooltip)
Vue.component('l-control',LControl)
Vue.component('l-icon',LIcon)
Vue.component('l-polygon',LPolygon)
Vue.component('l-polyline',LPolyline)