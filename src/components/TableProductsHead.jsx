import React from 'react';

function TableProductsHead(props) {
  return (
    <thead>
      <tr>
        <th className="col-sm">№</th>
        <th className="col-sm-6">Name</th>
        <th className="col-sm-2">Ccal</th>
        <th className="col-sm-2">Date</th>
        <th className="col-sm-2">Actions</th>
      </tr>
    </thead>
  );
}

export default TableProductsHead;
