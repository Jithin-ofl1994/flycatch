import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


export default function PaginationForPage(props) {
    const count =process.env.REACT_APP_PAGINATION_COUNT
    const {totalRecords} = props;
    const totalPages = Math.ceil(totalRecords/count);
    const currentPage = parseInt(props.currentPage);

    return (
      <>
        <Pagination>
          <Pagination.Prev  
                onClick={
                    currentPage === 1
                      ? () => {}
                      : () => {
                          props.pageClicked(currentPage - 1);
                    }
            } />
          <Pagination.Ellipsis />
            {Array.from(Array(totalPages), (e, i) => {
                let pageNumber = i + 1;
                return <Pagination.Item key={pageNumber} 
                    active={currentPage === pageNumber ? true : false}
                    onClick={
                        currentPage === pageNumber
                            ? () => {}
                         : () => {
                          props.pageClicked(pageNumber);
                        }
                  }>{pageNumber}</Pagination.Item>
            })}
          <Pagination.Ellipsis />

          <Pagination.Next
            onClick={
                currentPage === totalPages
                  ? () => {}
                  : () => {
                      props.pageClicked(currentPage + 1);
                    }
              }
          />
        </Pagination>
      </>
    );
  }