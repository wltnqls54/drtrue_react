import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true로 초기화
        setLoading(true);
        const Kakao = axios.create({
          baseURL: "https://dapi.kakao.com/v2/search/image?query=안녕", // 공통 요청 경로를 지정해준다.
          headers: {
            Authorization: "KakaoAK facbb84a986a578369c2938173b5a8ae" // 공통으로 요청 할 헤더
          }
        });
        const response = await Kakao.get();
        setUsers(response.data);
        } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
  
    return (
        <>
        <ul>
            {users.key.map(users => (
                <li key={users.errorType}>
                    {users.errorType} {users.name}
                </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>api 불러오기</button>
        <h3>Test</h3>
        </>
  )
  
}
export default Users;
