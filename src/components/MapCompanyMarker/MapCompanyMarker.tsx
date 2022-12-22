import { FC, useContext, useEffect, useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import HttpRequests from "../../utils/httpRequests";
import { _INFO_OUR_MAP_COORDINATES_ } from "../../data/consts";
import locationImg from "../../assets/images/map/location.svg";
import { IProductInfo } from "../../types/app.interface";
import "./MapCompanyMarker.scss";
import { Context } from "../../pages/DetailProduct/context/Context";

export default function MapCompanyMarker({ data }: IProductInfo) {
  const [markers, setMarkers]: any = useState(null);
  let [initialState, isOpenWindow, setIsOpenWindow] = useContext(Context);

  const getAddress = async () => {
    if (data !== undefined) {
      data.forEach((obj: any) => {
        const coordArr = obj.geolocation.split(",");
        obj.geolocation = coordArr;
        initialState.push(false);
        return obj;
      });
      setMarkers(data);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  function showMarkerInfo(id: number) {
    initialState[id] = !initialState[id];
    setIsOpenWindow(initialState);
  }
  return markers ? (
    <>
      {markers.map((marker: any, id: number) => {
        return (
          <Marker
            key={id}
            position={{
              lat: +marker.geolocation[0],
              lng: +marker.geolocation[1],
            }}
            icon={{
              url: locationImg,
              scaledSize: new google.maps.Size(38, 31),
            }}
            title={marker.address}
            onClick={() => {
              showMarkerInfo(id);
            }}
          >
            {isOpenWindow[id] === true && (
              <InfoWindow
                position={{
                  lat: +marker.geolocation[0] + 0.01,
                  lng: +marker.geolocation[1],
                }}
              >
                <div className="company-marker">
                  <p>{marker.address}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </>
  ) : (
    <h2>Loading</h2>
  );
}
