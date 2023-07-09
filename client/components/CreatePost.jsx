import Card from './Card'
import Share from './Share'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Random } from "./index";
import axios from "axios";

const Create = () => {
  const [loading, setLoading] = useState(false);

  const [typedPhrase, setTypedPhrase] = useState(
    "An Impressionist oil painting of sunflowers in a purple vase…"
  );

  const [name, setName] = useState("");

  const [pubId, setPubId] = useState("");

  const [imgUrl, setImgUrl] = useState("https://dummyimage.com/256");

  function supriseMe() {
    const randomIndex = Math.floor(Math.random() * Random.length);
    setTypedPhrase(Random[randomIndex]);
  }

  function handleTypedPhrase(event) {
    setTypedPhrase(event.target.value);
  }

  const createImage = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const imageData = await axios.post("https://artifusion.onrender.com/create", {
        typedPhrase,
      });
      console.log(imageData);
      setImgUrl(imageData.data.url);
      setName(imageData.data.original_filename);
      setPubId(imageData.data.public_id);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto flex flex-wrap p-5 flex-cols items-center place-content-center">
        <Link to="/">
          <h1 className="text-royal-blue text-lg font-bold  font-montserrat py-2 px-4 mt-0 ">
            Artifusion
          </h1>
        </Link>
      </div>
      <div className="container mx-auto flex flex-wrap p-5 items-start">
        <h1 className="w-full text-xl font-semibold font-roboto-slab text-gray-500">
          Unleash your artistry, sculpt captivating visuals!
        </h1>
        <p className="w-full text-gray-500 p-5 font-roboto text-lg font-medium">
          Unleash your artistic prowess and craft captivating visuals from your
          imagination. With Artifusion, create unique images that reflect your
          vision and ignite your creativity. Step into a world of boundless
          possibilities and let your imagination soar. Sculpt extraordinary
          masterpieces that mesmerize and inspire. Join Artifusion and unleash
          the artist within you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center pt-4 p-5">
        <h1 className="text-md font-bold font-roboto-slab text-gray-400 mb-4 md:mb-0 p-5">
          Embrace the Unexpected! Unleash the Magic of &apos;Surprise Me&apos;
          for a Thrilling Adventure!
        </h1>
        <button
          className="rounded-md border-solid border-2 ml-2 w-32 text-gray-600 text-md font-bold font-roboto-slab"
          type="button"
          onClick={supriseMe}
        >
          Suprise Me
        </button>
      </div>

      <div className="flex  justify-center">
        <form className="h-full w-5/6 flex justify-center p-5 drop-shadow-2xl ">
          <input
            className="h-10 w-4/5 rounded-l-md focus:outline-none focus:ring-0 p-3 font-roboto text-gray-500 text-md border-r-2 border-gray-200"
            type="text"
            placeholder={typedPhrase}
            onChange={handleTypedPhrase}
            value={typedPhrase}
            id="random-phrase"
          />
          <button
            className="h-10 w-24 rounded-r-md bg-white font-roboto text-gray-500 text-md "
            type="submit"
            onClick={createImage}
          >
            Unleash
          </button>
        </form>
      </div>
      {/* Card */}
      <Card loading={loading} imgUrl = {imgUrl} typedPhrase = {typedPhrase}/>
      {/* Share Button */}
      <Share phrase = {typedPhrase} url = {imgUrl} name = {name} pubId = {pubId}/>
      
    </div>
  );
};

export default Create;
