import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Table from './Table';

function ErrorMsg() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const fetchMsgs = async () => {
    try {
        // loading 상태를 true로 초기화
        setLoading(true);
        const response = await axios.get(
          "https://dapi.kakao.com/v2/search/image?query=안녕", 
          {
            headers: {
            Authorization: "KakaoAK facbb84a986a578369c2938173b5a8ae" 
            },
          }
        );
        setResult(response.data.documents);
        } catch (e) {
      }
      setLoading(false);
    };

    useEffect(() => {
        fetchMsgs();
    }, []);
    if (loading) return <div>로딩중..</div>;

    return (
      <Table table_data={document} table_result={result}/>
  )
  
}
export default ErrorMsg;
