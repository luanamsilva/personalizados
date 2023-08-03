import React, { useState } from "react";
import Link from "next/link";
import { Item } from "./Item";
import itemsData from '../data/itemsData.json'

const itemsPerPage = 18;

const NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(itemsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemsData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goToPage = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="flex flex-wrap">
        {currentItems.map((item) => (
          <Link key={item.id} href={`/products/${item.id}`} passHref>
            <Item
              key={item.id}
              title={item.title}
              theme={item.theme}
              image={item.image}
            />
          </Link>
        ))}
      </div>
      <div className="text-main flex items-center justify-center gap-1 pb-2">
        <button onClick={prevPage} disabled={currentPage === 1} >
        {"<"}
        </button>
        <div className="page-numbers ">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`px-3 py-2 rounded-md  ${
                  currentPage === pageNumber
                    ? " text-main font-bold ring ring-rose"
                    : "text-brown"
                } mr-2`}
              
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
        <button onClick={nextPage} disabled={indexOfLastItem >= itemsData.length}>
        {">"}
        </button>
      </div>
    </div>
  );
};

export default NextPage;
