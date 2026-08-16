import type {MetadataRoute} from 'next';
export default function manifest():MetadataRoute.Manifest{return{name:'Ganpati Chanda Manager',short_name:'GCM',description:'Digital chanda management for Ganpati Mandals',start_url:'/',display:'standalone',background_color:'#fff7ed',theme_color:'#f97316',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml'}]}}
