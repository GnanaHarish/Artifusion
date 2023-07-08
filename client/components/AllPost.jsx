import { useState, useEffect } from "react";
import AllPostHeader from "./AllPostHeader";
import AllPostPara from "./AllPostPara";
import AllPostCard from "./AllPostCard";
import axios from "axios";
import Pagination from "./Pagination";
const Posts = () => {
  //Loading
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/posts");
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (posts.length === 0) {
      fetchPosts();
    }
  }, [posts]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <AllPostHeader />
      <AllPostPara />
      <div>
        {/* <Carousel> */}
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-start md:justify-center p-3">
          {/* {loading && <Loading />} */}
          {currentPosts.map((post) => {
            return (
              <AllPostCard
                key={post.id}
                imgUrl={post.url}
                typedPhrase={post.phrase}
                name={post.name}
                pubId={post.pubId}
              />
            );
          })}
        </div>
        <Pagination
          totalPages={posts.length}
          postPerPages={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage = {currentPage}
        />
        {/* </Carousel> */}
      </div>
    </div>
  );
};
export default Posts;
