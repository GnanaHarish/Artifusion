import Loading from './Loading';

// eslint-disable-next-line react/prop-types
const Card = ({loading, imgUrl, typedPhrase}) => {
    return (
        <div>
        <div className="container max-w-7xl mx-auto pt-4 ">
          <div className="flex justify-center items-center p-3">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-3 px-4">
              <div className="px-6">
                {loading ? (
                  <Loading />
                ) : (
                  <div>
                    {" "}
                    <img
                      alt="John Doe"
                      src={imgUrl}
                      className="mx-auto rounded-lg shadow-lg w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-256 xl:h-256 align-middle border-none undefined"
                    />
                    <div className="pt-6 text-center">
                      <p className="text-gray-700 text-base font-roboto leading-relaxed mt-0 mb-4">
                        {typedPhrase}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Card;