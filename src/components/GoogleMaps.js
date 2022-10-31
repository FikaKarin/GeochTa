import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import '../style/GoogleMaps.css';

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

  function Map() {
    const center = useMemo(() => ({ lat: 59.30903, lng: 18.1601282 }), []);
    return (
      <div>
        <GoogleMap
          zoom={12}
          center={{ lat: 59.30903, lng: 18.1601282 }}
          mapContainerClassName='mapContainer'
        >
          <MarkerF className="border-solid border" position={center} />
        </GoogleMap>
      </div>
    );
  }
}
