import { GoogleMap } from "@react-google-maps/api";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import "./Map.scss";
import { _INFO_OUR_MAP_COORDINATES_ } from "../../data/consts";

interface GoogleMapsProps {
  center: any;
  children: any;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Map: FC<GoogleMapsProps> = ({ children, center }) => {
  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    mapRef.current = null;
  }, []);

  return (
    <div className="google-map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 42.876913, lng: 74.600025 }}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {children}
      </GoogleMap>
    </div>
  );
};

export default Map;
