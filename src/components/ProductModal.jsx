import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProductOne } from '../redux/products';
import Preloader from './Preloader';

function ProductModal() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const loading = useSelector((state) => state.loading);
  const product = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(loadProductOne(id));
  }, [dispatch, id]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="container-md mt-3 text-center border border-secondary">
      <h1 className="fw-bold mt-3">
        {product.name}
      </h1>
      <hr/>
      <div className="mw-100 w-auto d-flex justify-content-between mb-3">
        <img src="#" alt="icon" className="w-50 border border-secondary"/>
        <div className="w-50">
          <h3 className="mb-4">
            Описание:
          </h3>
          <p>
            <h5 className="d-inline-block">
              Количество калорий:
            </h5>
            &nbsp;{product.ccal}
          </p>
          <p>
            <h5 className="d-inline-block">
              Дата изготовления:
            </h5>
            &nbsp;{product.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
