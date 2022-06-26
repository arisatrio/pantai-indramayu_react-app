import './Map.css';

import { MapContainer, TileLayer, Polyline, GeoJSON } from 'react-leaflet';

import Shorelines from '../data/Eretan/shorelines_1992-2022.json';
import Eretan from '../data/Eretan/region_of_interest.json';

const Map = () => {
    return (
        <MapContainer 
            center={[-6.3347842, 108.2982456]} 
            zoom={11} 
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100wh' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />
            <GeoJSON
                pathOptions={{ color: 'lime' }}
                data={Shorelines}
            />
             <GeoJSON
                pathOptions={{ color: 'gray' }}
                data={Eretan}
            />
        </MapContainer>
    );
}

export default Map;