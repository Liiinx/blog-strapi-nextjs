import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

const Map = ({pos}) => {
    // console.log(pos)
    if(!pos) return "Pas de localisation pour cette article !!";
    return (
        <MapContainer center={[pos.lat, pos.long]}
                      zoom={13} scrollWheelZoom={false}
                      style={{height:"200px"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[pos.lat, pos.long]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map