import React from "react";
function App() {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <section className="form-section">
      <header className="form-section__header"></header>
      <main className="form-section__main"></main>
      <footer className="form-section__footer">
        <button className="footer__back">Go Back</button>
        <button className="footer__next">Next Step</button>
      </footer>
    </section>
  );
}

export default App;
