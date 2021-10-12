import React from 'react';
import { deleteProduct } from '../redux/products';
import { useDispatch, useSelector } from 'react-redux';

function ProductRead( { product, setIsEditing, openModal } ) {
  const dispatch = useDispatch();

  const deleting = useSelector((state) => state.deleting);

  return (
    <tr>
      <td className="row-cols-1">{product.id}</td>
      <td>
        <a className="nav-link" href={`/product/${product.id}`}>
          {product.name}
        </a>
      </td>
      <td>{product.ccal}</td>
      <td>{product.date}</td>
      <td>
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsEditing(true)}
        >
          ✎
        </button>{" "}
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(deleteProduct(product.id))}
          disabled={deleting}
        >
          ␡
        </button>
      </td>
    </tr>
  );
}

export default ProductRead;
