import React from "react";
import Pagination from "./Pagination";
import Content from "./Content";

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [formInput, setFormInput] = React.useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    rate: "monthly",
    online: false,
    storage: false,
    profile: false,
  });

  const paginationInfo = [
    { number: 1, title: "Your Info" },
    { number: 2, title: "Select Plan" },
    { number: 3, title: "Add-Ons" },
    { number: 4, title: "Summary" },
  ];

  const pageContent = [
    {
      number: 1,
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
    },
    {
      number: 2,
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
    },
    {
      number: 3,
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
    },
    {
      number: 4,
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming.",
    },
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

  function handleChange(e) {
    if (e.target.type === "checkbox") {
      const { name, checked } = e.target;
      setFormInput((prevInput) => {
        return {
          ...prevInput,
          [name]: checked,
        };
      });
    } else {
      const { value, name } = e.target;
      setFormInput((prevInput) => {
        return {
          ...prevInput,
          [name]: value,
        };
      });
    }
  }

  const paginationElement = paginationInfo.map((page) => {
    return (
      <Pagination
        key={page.number}
        number={page.number}
        title={page.title}
        currentPage={currentPage}
      />
    );
  });

  const contentEl = pageContent.map((page) => {
    return (
      <Content
        key={page.number}
        number={page.number}
        title={page.title}
        description={page.description}
        handleChange={(e) => handleChange(e)}
        formInput={formInput}
      />
    );
  });

  return (
    <section className="form-section">
      <header className="form-section__header">
        <ul className="header__pagination">{paginationElement}</ul>
      </header>
      <div>
        <main className="form-section__main">
          {contentEl.filter((content) => content.props.number === currentPage)}
        </main>
      </div>
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
