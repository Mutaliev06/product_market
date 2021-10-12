import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ productsOnPage, totalProducts, paginate }) {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil( totalProducts / productsOnPage ); i++) {
    pageNums.push(i)
  }

  return (
    <div className="mt-3">
      <ul className="pagination">
        {
          pageNums.map(number => (
            <li className="page-item" key={number}>
              <Link to="#" className="page-link" onClick={() => paginate(number)}>
                {number}
              </Link>
            </li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default Pagination;
