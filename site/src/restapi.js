import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com/v2/search/image?query=%EC%95%88%EB%85%95", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK facbb84a986a578369c2938173b5a8ae" // 공통으로 요청 할 헤더
  }
});

export const Search = params => {
  return Kakao.get();
};