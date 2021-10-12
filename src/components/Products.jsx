import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProducts } from '../redux/products';
import Preloader from './Preloader';
import TableProductsHead from './TableProductsHead';
import TableProductsRow from './TableProductsRow';
import Pagination from './Pagination';

function Products(props) {
  const dispatch = useDispatch();

  const { category_id } = useParams();
  const loading = useSelector((state) => state.loading);
  const products = useSelector((state) => state.products.items);

  const product = products.filter(item => {
    return Number(category_id) === item.category_id
  });

  const [countPage, setCountPage] = useState(1);
  const [productsOnPage] = useState(10);
  const lastProductIndex = countPage * productsOnPage;
  const firstProductIndex = lastProductIndex - productsOnPage;
  const countProduct = product.slice(firstProductIndex, lastProductIndex);
  const paginate = pageNumber => setCountPage(pageNumber)

  useEffect(() => {
    dispatch(loadProducts(category_id));
  }, [dispatch, category_id]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="table-responsive-sm d-flex flex-column align-items-center mt-3">
      <h1>
        Продукты:
      </h1>
      <table className="table mt-3 table-sm text-center align-middle">
        <TableProductsHead />
        <tbody>
        {countProduct.map((product) => {
          return <TableProductsRow
            key={product.id}
            product={product}
          />;
        })}
        </tbody>
      </table>
      <Pagination
        countPage = {countPage}
        productsOnPage = {productsOnPage}
        totalProducts = {product.length}
        paginate = {paginate}
      />
    </div>
  )
}

export default Products;
