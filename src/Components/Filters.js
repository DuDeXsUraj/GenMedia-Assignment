import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/Filter_context";
import { FaCheck } from "react-icons/fa";
import { getUniqueValues, value } from "../Utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      min_price,
      category,
      shipping,
      price,
      max_price,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  console.log(all_products);

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  // const colors = value(all_products,'colors')

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
            ></input>
          </div>
          <div className="form-control">
            <h3>Categories</h3>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  type="text"
                  name="category"
                  onClick={updateFilters}
                  className={`${category && category === c.toLowerCase() ? "active" : ""}`}

                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="form-control">
            <h3>Price</h3>
            <p className="price">${price}</p>
            <input
              type="range"
              name="price"
              value={price}
              max={max_price}
              min={min_price}
              onChange={updateFilters}
            ></input>
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            ></input>
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: #f0f0f0;
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
