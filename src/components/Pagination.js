import React, {useState, useEffect} from 'react'

const Pagination = ({arrayLength , paginationHandler }) => {
  const [itemPerPage, setItemPerPage] = useState(10)
  const pageLimit = Math.ceil(arrayLength / Number(itemPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  //Go to Next Page
  const  goToNextPage = () => {
    const page = currentPage + 1;
    setCurrentPage(page);
    sendPaginationData(page)
  }

  //Go to Previous Page
  const  goToPreviousPage = () => {
    const page = currentPage - 1;
    setCurrentPage(page);
    sendPaginationData(page)
  }


  // Change Page
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    sendPaginationData(pageNumber)
  }


  //Send Start and Ens Index to Parent
  const sendPaginationData = (currentPage) => {
    const startIndex = currentPage * Number(itemPerPage) - Number(itemPerPage);
    const endIndex = startIndex + Number(itemPerPage);
    paginationHandler({startIndex, endIndex})
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const firstEntry = currentPage * Number(itemPerPage) - Number(itemPerPage);
  const lastEntry = firstEntry + Number(itemPerPage);

  return (
    <div className="pagination-box">
          <div className="col-1">
          <div className="row-1"><span>Showing{" "}{firstEntry + 1} to {lastEntry > arrayLength ? arrayLength : lastEntry} from total {" "}{arrayLength} entries</span>
            </div>
            <div className="row-2">
              <span>Show{" "}<select defaultValue={10} onChange={(e) => {
                setItemPerPage(e.target.value)
              }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                </select> {" "}
                entries
                </span>
            </div>
          </div>
          <div className="col-2">
            <div className="pagination">
              {/* previous button */}
            <button
               onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
              >
              prev
            </button>

              {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <button key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? 'active' : null}`} ><span>{item}</span> </button>))}

            {/* next button */}
            <button onClick={goToNextPage} className={`next ${currentPage >= pageLimit ? 'disabled' : ''}`}>next</button>
            </div>
          </div>
        </div>
  )
}

export default Pagination