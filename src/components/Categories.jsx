import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../redux/categories';
import Preloader from './Preloader';

function Categories(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const loading = useSelector((state) => state.loading);
  const categories = useSelector((state) => {
    return state.categories.items
    .map((item) => item)
    .filter((item) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
  });


  useEffect(() =>{
    dispatch(loadCategories())
  }, [dispatch]) ;

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mt-3">
        Категории:
      </h1>
      <input
        className="mt-3 w-50"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Поиск…"
      />
      <table className="table mt-3 text-center align-middle">
        <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Unit</th>
          <th scope="col">Count</th>
        </tr>
        </thead>
        <tbody>
        {categories?.map(item => {
          return (
            <tr>
              <th scope="row">
                <a className="nav-link" href={`/category/${item.id}`}>
                  {item.id}
                </a>
              </th>
              <td>
                <a className="nav-link" href={`/category/${item.id}`}>
                  {item.name}
                </a>
              </td>
              <td>
                <a className="nav-link" href={`/category/${item.id}`}>
                  {item.unit}
                </a>
              </td>
              <td>
                <a className="nav-link" href={`/category/${item.id}`}>
                  {item.count}
                </a>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;
