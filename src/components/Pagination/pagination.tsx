// import { useDispatch, useSelector } from "react-redux";

// interface PaginationProps {
//   totalPages: number;
// }

// export default function Pagination({ totalPages }: PaginationProps) {
//   const dispatch = useDispatch<AppDispatch>();
//   const { currentPage } = useSelector(selectRecipeState);

//   if (totalPages <= 1) {
//     return null;
//   }

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       dispatch(setPage(page));
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers: (number | string)[] = [];
//     const pagesAroundCurrent = 1;

//     const startPage = Math.max(1, currentPage - pagesAroundCurrent);
//     const endPage = Math.min(totalPages, currentPage + pagesAroundCurrent);

//     const pagesToShow = new Set<number>();

//     pagesToShow.add(1);

//     for (let i = startPage; i <= endPage; i++) {
//       pagesToShow.add(i);
//     }

//     pagesToShow.add(totalPages);

//     const sortedUniquePages = Array.from(pagesToShow).sort((a, b) => a - b);
//     let lastAddedPage = 0;

//     for (const pageNum of sortedUniquePages) {
//       if (
//         typeof pageNum === "number" &&
//         typeof lastAddedPage === "number" &&
//         pageNum > lastAddedPage + 1
//       ) {
//         pageNumbers.push("...");
//       }
//       pageNumbers.push(pageNum);
//       lastAddedPage = pageNum;
//     }

//     return pageNumbers.map((page, index) => (
//       <button
//         key={typeof page === "number" ? page : `ellipsis-${index}`}
//         onClick={() => typeof page === "number" && handlePageChange(page)}
//         className={`px-3 py-1 mx-1 rounded-md border border-gray-300
//                     ${
//                       page === currentPage
//                         ? "bg-main-color text-white-200"
//                         : "bg-white-200 text-black-200"
//                     }
//                     ${
//                       typeof page === "string"
//                         ? "cursor-default opacity-50"
//                         : "hover:bg-hover-light hover:text-hover-dark cursor-pointer"
//                     }
//                     transition-colors duration-200 ease-in-out`}
//         disabled={typeof page === "string"}
//         aria-label={
//           typeof page === "number" ? `Go to page ${page}` : "Ellipsis"
//         }
//       >
//         {page}
//       </button>
//     ));
//   };

//   return (
//     <div className="flex justify-center items-center my-8">
//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-4 py-2 mx-2 rounded-md bg-main-color text-white-200 hover:bg-hover-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out"
//         aria-label="Previous page"
//       >
//         Prev
//       </button>
//       {renderPageNumbers()}
//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-4 py-2 mx-2 rounded-md bg-main-color text-white-200 hover:bg-hover-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out"
//         aria-label="Next page"
//       >
//         Next
//       </button>
//     </div>
//   );
// }
