"use client";

import { postAxios, postImgAxios } from "@/api/axiosInstance";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Write() {
  const [postData, setPostData] = useState({});

  const [imgFormData, setImgFormData] = useState<FormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const [current, setCurrent] = useState({ lng: 0, lat: 0, address: "" });
  const getGeolocation = async () => {
    await navigator.geolocation.getCurrentPosition((pos) => {
      setCurrent({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        address: "",
      });
    });
    // const geocoder = new kakao.maps.services.Geocoder();
    // // 좌표로 행정동 주소 정보를 요청합니다
    // const hi = await geocoder.coord2RegionCode(
    //   current.lng,
    //   current.lat,
    //   function (result, status) {
    //     if (status === kakao.maps.services.Status.OK) {
    //       console.log(result, status);
    //       setPostData({ ...postData, address: result[0].address_name });
    //     }
    //   }
    // );
    // console.log(hi);
  };

  const getAddress = () => {
    searchAddrFromCoords(current, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result, status);
        setCurrent({ ...current, address: result[0].address_name });
        setPostData({ ...postData, address: result[0].address_name });
      }
    });
  };

  const router = useRouter();
  const handleSubmit = async () => {
    console.log("postData : ", postData);
    console.log("current : ", current);
    console.log("imgFormData : ", imgFormData);

    //이미지 없으면
    if (!imgFormData) {
      const uploadData = { ...postData, ...current };
      console.log("here ", uploadData);
      const res = await postAxios(`/posts/create`, uploadData);
      console.log("res : ", res);
      if (res.data === "This action adds a new post") {
        router.push("posts");
      }
      return;
    }

    //이미지 있으면 먼저
    const imgRes = await postImgAxios(`/posts/image`, imgFormData);
    console.log("imgRes : ", imgRes);

    if (imgRes.data.status === 201) {
      const uploadData = { ...postData, ...current, img: imgRes.data.path };
      console.log("uploadData : ", uploadData);
      const res = await postAxios(`/posts/create`, uploadData);
      console.log("res : ", res);

      if (res.data === "This action adds a new post") {
        router.back();
      }
    }
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

  const [imgPreview, setImgPreview] = useState("");

  // 이미지 업로드 input의 onChange
  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      // let formData = new FormData();

      const imagefile = e.target.files[0];
      setImgPreview(URL.createObjectURL(imagefile));

      const imgPayload = new FormData();
      imgPayload.append("file", imagefile, imagefile.name);
      setImgFormData(imgPayload);
      // console.log(imgFormData);
      // for (const keyValue of formData) console.log(keyValue);
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onloadend = () => {
      //   setImgFile(reader.result);
      // };
    }
  };

  return (
    <div className="flex flex-col p-1">
      <h1>등록하기</h1>
      <div className="flex flex-row">
        {current?.address !== "" ? (
          ""
        ) : (
          <Button
            styles={{ width: "50%", backgroundColor: "rgb(125 211 252)" }}
            onClick={current?.lng !== 0 ? getAddress : getGeolocation}
          >
            {current?.lng !== 0 ? "도로명주소로 바꾸기" : "내 위치 찾기"}
          </Button>
        )}
        {/* <Button
          styles={{ width: "50%", backgroundColor: "rgb(125 211 252)" }}
          onClick={getAddress}
        >
          주소찾기
        </Button> */}
      </div>
      <div className="pl-5">
        {current.lat === 0
          ? ""
          : current?.address !== ""
          ? `현 주소 : ${current.address}`
          : `현 위치 : 위도 ${current.lat}, 경도 ${current.lng}`}
      </div>
      <div className="flex flex-col m-3">
        <label className="pl-2">
          사진 업로드 &nbsp;
          <input
            onChange={saveImgFile}
            type="file"
            accept="image/*"
            name="image"
            // ref={imgRef}
          />
        </label>
        {imgPreview ? <img src={imgPreview} className="w-20 m-2" /> : ""}
        <label className="flex flex-col m-2">
          제목
          <input
            name="title"
            onChange={handleChange}
            className="border border-slate-300 w-94 mt-1 "
          />
        </label>
        <label className="flex flex-col m-2">
          내용
          <textarea
            name="content"
            onChange={handleChange}
            className="border border-slate-300 w-94 h-80  mt-1 p-2"
          />
        </label>
      </div>

      {current.lat === 0 ? (
        <></>
      ) : (
        <div className="ml-5">
          <Map
            center={current}
            style={{ width: "342px", height: "200px" }}
            level={3}
          >
            <MapMarker position={current} />
          </Map>
        </div>
      )}
      <div className="m-4">
        <input
          className="border border-slate-300 w-36 h-8 mr-1 ml-1 p-2"
          onChange={handleChange}
          placeholder="닉네임"
          name="userName"
        />
        <input
          type="password"
          className="border border-slate-300 w-36 h-8 ml-1 p-2"
          onChange={handleChange}
          placeholder="비밀번호"
          name="password"
        />
      </div>
      <Button onClick={handleSubmit}>등록</Button>
    </div>
  );
}
