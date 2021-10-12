import React, { useState } from 'react';
import { editProduct } from '../redux/products';
import { useDispatch, useSelector } from 'react-redux';

function ProductEdit( { product, setIsEditing } ) {
  const dispatch = useDispatch();

  const editing = useSelector((state) => state.editing);

  const [name, setName] = useState(product.name);
  const [ccal, setCcal] = useState(product.ccal);

  const handleEdit = async () => {
    await dispatch(editProduct(product.id, { name, ccal }));
    setIsEditing(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCcal = (e) => {
    setCcal(e.target.value);
  };

  return (
    <tr>
      <th scope="row">
        {product.id}
      </th>
      <td>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={handleChangeName}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          value={ccal}
          onChange={handleChangeCcal}
        />
      </td>
      <td>
        {product.date}
      </td>
      <td>
        <button
          className="btn btn-outline-primary"
          onClick={handleEdit}
          disabled={editing}
        >
          save
        </button>{" "}
        <button
          className="btn btn-outline-light"
          onClick={() => setIsEditing(false)}
          disabled={editing}
        >
          ↩
        </button>
      </td>
    </tr>
  );
}

export default ProductEdit;
