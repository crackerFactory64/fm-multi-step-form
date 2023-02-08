import React from "react";
import Pagination from "./Pagination";
function App() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const paginationInfo = [
    { number: 1, title: "Your Info" },
    { number: 2, title: "Select Plan" },
    { number: 3, title: "Add-Ons" },
    { number: 4, title: "Summary" },
  ];

  function next() {
    if (currentPage <= 3) {
      setCurrentPage(currentPage + 1);
    } else {
      window.location.reload();
    }
  }

  function back() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <section className="form-section">
      <header className="form-section__header">
        <ul className="header__pagination">
          {paginationInfo.map((page) => {
            return (
              <Pagination
                key={page.number}
                number={page.number}
                title={page.title}
                currentPage={currentPage}
              />
            );
          })}
        </ul>
      </header>
      <main className="form-section__main"></main>
      <footer className="form-section__footer">
        <button
          className={currentPage > 1 ? "footer__back" : "footer__back hidden"}
          onClick={back}
        >
          Go Back
        </button>
        <button
          className={currentPage <= 3 ? "footer__next" : "footer__next submit"}
          onClick={next}
        >
          {currentPage <= 3 ? "Next Step" : "Confirm"}
        </button>
      </footer>
    </section>
  );
}

export default App;
