import { useState } from "react";

const Pagination = ({
  totalPages,
  postPerPages,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];

  for (var i = 1; i <= Math.ceil(totalPages / postPerPages); i++) {
    pages.push(i);
  }
  return (
    <div className="h-12 w-full flex justify-center items-center">
      {pages.map((page, index) => {
        //return <Button variant="outlined" key={index} className = {buttonClasses}>{page}</Button>
        return (
          <button
            key={index}
            className={`m-2 text-royal-blue w-16 rounded-full outline outline-offset-2 outline-2 hover:bg-blue-500 hover:text-white ${
              currentPage === page ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
