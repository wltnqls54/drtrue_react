import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Table from './Table';
import Pagination from './Pagination';

function Api_Info() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <>
      <Table table_data={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={result.length} paginate={paginate}/>
      </>
  ) 
  
}
export default Api_Info;
