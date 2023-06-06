"use client";

import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Write() {
  const [postData, setPostData] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const [current, setCurrent] = useState({ lng: 0, lat: 0 });
  const getGeolocation = async () => {
    await navigator.geolocation.getCurrentPosition((pos) => {
      setCurrent({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  };

  const getAddress = () => {
    searchAddrFromCoords(current, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result, status);
        setPostData({ ...postData, address: result[0].address_name });
      }
    });
  };

  function searchAddrFromCoords(
    coords: { lng: number; lat: number },
    callback: (
      result: kakao.maps.services.RegionCode[],
      status: kakao.maps.services.Status
    ) => void
  ) {
    const geocoder = new kakao.maps.services.Geocoder();
    // 좌표로 행정동 주소 정보를 요청합니다
    return geocoder.coord2RegionCode(coords.lng, coords.lat, callback);
  }

  return (
    <div className="flex flex-col p-1">
      <h1>등록하기</h1>
      <label>
        제목
        <input
          name="title"
          onChange={handleChange}
          className="border-orange-100 bg-orange-100 rounded w-80 m-2"
        />
      </label>
      <label>
        내용
        <input
          name="content"
          onChange={handleChange}
          className="border-orange-100 bg-orange-100 rounded w-80 h-80 m-2"
        />
      </label>
      <label>
        사진 업로드 &nbsp;
        <input
          onChange={handleChange}
          type="file"
          accept="image/*"
          name="image"
          //   capture="camera"
        />
      </label>
      <button onClick={getGeolocation} className="m-3 bg-blue-100 rounded">
        내 위치 등록
      </button>
      <button onClick={getAddress} className="m-3 bg-blue-100 rounded">
        주소찾기
      </button>
      {current.lat === 0 ? (
        <></>
      ) : (
        <div className="pl-3">
          <Map
            center={current}
            style={{ width: "400px", height: "300px" }}
            level={3}
          >
            <MapMarker position={current} />
          </Map>
        </div>
      )}
      <button
        className="m-3 bg-blue-100 rounded"
        onClick={() => console.log("postData : ", postData)}
      >
        등록
      </button>
    </div>
  );
}
