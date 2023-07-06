import {Link} from 'react-router-dom';

const AllPostHeader = () => {
    return (
        <div className="container mx-auto flex flex-wrap p-3 flex-cols items-center justify-between ">
        <Link to="/">
          <h1 className="text-royal-blue text-lg font-bold  font-montserrat py-2 px-4 mt-0 ">
            Artifusion
          </h1>
        </Link>
        <Link to="/create">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-0 rounded">
            Create
          </button>
        </Link>
      </div>
    )
};

export default AllPostHeader;