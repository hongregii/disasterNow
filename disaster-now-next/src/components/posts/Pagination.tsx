"use client";
const Pagination = ({
  handlePageChange,
}: {
  handlePageChange: (pageNumber: number) => void;
}) => {
  const totalPages = 10; // 전체 페이지 수 (예시로 10으로 설정)
  const currentPage = 1; // 현재 페이지 (예시로 1로 설정)

  //   const handlePageChange = (pageNumber: string | number) => {
  //     // 페이지 변경 로직을 처리하는 함수를 여기에 추가해주세요.
  //     console.log(`Go to page ${pageNumber}`);
  //   };

  return (
    <nav className="flex items-center justify-center mt-8">
      <ul className="pagination flex flex-row">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === currentPage;

          return (
            <li key={index} className="">
              <button
                className={`pagination-item p-1 m-1 border border-black rounded ${
                  isActive ? "active" : ""
                }`}
                onClick={() => {
                  handlePageChange(pageNumber);
                }}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
