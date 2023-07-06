import Loading from "./Loading";
import { useState, useEffect } from "react";
import AllPostHeader from "./AllPostHeader";
import AllPostPara from "./AllPostPara";
import AllPostCard from "./AllPostCard";
import Carousel from "./Carousel";
import axios from "axios";

const Posts = () => {
  //Loading
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

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

  return (
    <div>
      <AllPostHeader />
      <AllPostPara />
      <div>
        {/* <Carousel> */}
          <div className="container mx-auto flex flex-wrap justify-center sm:justify-start md:justify-center p-3">
            {/* {loading && <Loading />} */}
            {posts.map((post) => {
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
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Posts;
