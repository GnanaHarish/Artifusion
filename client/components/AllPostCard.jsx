/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

export default function AllPostCard({ imgUrl, typedPhrase, name, pubId }) {
  const handleDownload = (event, url) => {
    event.preventDefault();
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = name + ".png";
        link.click();
        URL.revokeObjectURL(downloadUrl);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  
  };
  var downloadImg =
    "https://res.cloudinary.com/dkyfmju2q/image/upload/" +
    pubId +
    ".png?dl=" +
    name +
    ".png";
  return (
    <div className="w-64 h-96 p-2 mx-4 my-5 md:mx-0">
      <Card className="h-full">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={imgUrl}
            className="w-full h-full object-cover"
            name={name}
          />
        </CardHeader>
        <CardBody className="text-center text-royal-blue text-xs font-bold  font-montserrat">
          <p>{typedPhrase}</p>
        </CardBody>
        <CardFooter className="pt-0">
          <a href={downloadImg} onClick={(event) => handleDownload(event, downloadImg)}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
            >
              <a className="share-icon pr-5">
                <i className="fas fa-download"></i>
              </a>
              Download
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
