import {React ,useState,useEffect}from "react";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
const TestApi = () => {
  const [showButton, setShowButton] = useState(false);
  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(5);

  const userApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    userApi();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadMoreData = () => {
    setVisible((prev) => prev + 5);
  };

  const lessData = () => {
    setVisible((prev) => prev - 5);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <div className="row text-center">
        {user.slice(0, visible).map((curElm) => (
          <div key={curElm.id} className="col-md-4 border">
            <h3>{curElm.userId}</h3>
            <h6>{curElm.id}</h6>
            <span>{curElm.title}</span>
            <p>{curElm.body}</p>
          </div>
        ))}
      </div>

      {showButton && (
        <button className="btn btn-success hello" onClick={scrollTop}>
        {<FaArrowUp/>}
        </button>
      )}

      {visible < 100 && (
        <button className="btn btn-dark" onClick={loadMoreData}>
          Load More
        </button>
      )}

      {visible > 5 && (
        <button className="btn btn-dark " onClick={lessData}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default TestApi;
