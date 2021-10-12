import React, { useState } from 'react';
import ProductEdit from './ProductEdit';
import ProductRead from './ProductRead';

function TableProductsRow({ product, openModal }) {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <ProductEdit
      setIsEditing={setIsEditing}
      product={product}
    />
  ) : (
    <ProductRead
      setIsEditing={setIsEditing}
      product={product}
      openModal = {openModal} />
  );
}

export default TableProductsRow;
