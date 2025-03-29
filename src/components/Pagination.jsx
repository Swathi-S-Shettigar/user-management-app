import './Pagination.css'; // Import the CSS file

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination-container">
      <button 
        className="page-btn" 
        onClick={() => setPage(page - 1)} 
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="page-number"> Page {page} </span>
      <button 
        className="page-btn" 
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
