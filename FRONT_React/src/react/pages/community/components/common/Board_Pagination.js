import {
  PaginationContainer,
  PaginationEachBoxActive,
  PaginationEachBoxInactive,
  PaginationLLInactive,
  PaginationLInactive,
  PaginationNumber,
  PaginationRActive,
  PaginationRRActive,
  PaginationLActive,
  PaginationLLActive,
  PaginationRInactive,
  PaginationRRInactive,
  PaginationNumberBox,
} from "../../../../styles/community/Pagination";

const Board_Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <PaginationContainer>
      {currentPage > 1 ? (
        <PaginationEachBoxInactive onClick={() => onPageChange(1)}>
          <PaginationLLActive />
        </PaginationEachBoxInactive>
      ) : (
        <PaginationEachBoxInactive
          onClick={() => alert("현재 페이지가 첫 페이지입니다.")}
        >
          <PaginationLLInactive />
        </PaginationEachBoxInactive>
      )}

      {currentPage > 1 ? (
        <PaginationEachBoxInactive
          onClick={() => onPageChange(currentPage - 1)}
        >
          <PaginationLActive />
        </PaginationEachBoxInactive>
      ) : (
        <PaginationEachBoxInactive
          onClick={() => alert("이전 페이지가 없습니다.")}
        >
          <PaginationLInactive />
        </PaginationEachBoxInactive>
      )}

      {pages.map((page) => (
        <PaginationNumberBox key={page} onClick={() => onPageChange(page)}>
          {currentPage === page ? (
            <PaginationEachBoxActive>
              <PaginationNumber>{page}</PaginationNumber>
            </PaginationEachBoxActive>
          ) : (
            <PaginationEachBoxInactive>
              <PaginationNumber>{page}</PaginationNumber>
            </PaginationEachBoxInactive>
          )}
        </PaginationNumberBox>
      ))}

      {currentPage === totalPages ? (
        <PaginationEachBoxInactive
          onClick={() => alert("다음 페이지가 없습니다.")}
        >
          <PaginationRInactive />
        </PaginationEachBoxInactive>
      ) : (
        <PaginationEachBoxInactive
          onClick={() => onPageChange(currentPage + 1)}
        >
          <PaginationRActive />
        </PaginationEachBoxInactive>
      )}

      {currentPage === totalPages ? (
        <PaginationEachBoxInactive
          onClick={() => alert("현재 페이지가 마지막 페이지입니다.")}
        >
          <PaginationRRInactive />
        </PaginationEachBoxInactive>
      ) : (
        <PaginationEachBoxInactive onClick={() => onPageChange(totalPages)}>
          <PaginationRRActive />
        </PaginationEachBoxInactive>
      )}
    </PaginationContainer>
  );
};

export default Board_Pagination;
