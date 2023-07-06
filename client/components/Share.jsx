/* eslint-disable react/prop-types */
import axios from "axios";
import Loading from "./Loading";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Share = ({ phrase, url, name, pubId }) => {
  const [isLoading, setLoading] = useState(false);
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      console.log(phrase);
      console.log(url);
      setLoading(true);
      await axios
        .post("http://localhost:3000/share", {
          phrase: phrase,
          url: url,
          name : name,
          pubId : pubId
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast('🙌 Share complete! Your post is now traveling the digital universe.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  return (
    <div className="sharing-buttons flex flex-wrap justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <a
          className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-3 px-5 rounded-lg text-white border-royal-blue bg-royal-blue hover:bg-blue-700 hover:border-blue-700"
          href="https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=&amp;caption=&amp;content=&amp;canonicalUrl=&amp;shareSource=tumblr_share_button"
          aria-label="Share with Community"
          draggable="false"
          onClick={handleClick}
        >
          <a href="#" className="share-icon">
            <i className="fas fa-share"></i>
          </a>
          <span className="ml-2">Share</span>
        </a>
      )}
      {/* Flash Message */}
      <ToastContainer />
    </div>
  );
};

export default Share;
