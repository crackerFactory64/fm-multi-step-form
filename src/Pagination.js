import React from "react";
export default function Pagination({ number, title, currentPage }) {
  return (
    <li>
      <span
        className={
          number === currentPage
            ? "pagination__number selected"
            : "pagination__number"
        }
      >
        {number}
      </span>
      <div className="pagination__label">
        <p>Step {number}</p>
        <p>{title}</p>
      </div>
    </li>
  );
}
