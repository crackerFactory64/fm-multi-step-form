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
  const [isComplete, setIsComplete] = React.useState(false);

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

  function validateStepOne() {
    const inputs = [...document.querySelectorAll("input")];

    inputs.forEach((input) => {
      if (input.value === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    const inputsWithErrors = inputs.filter((input) =>
      input.classList.contains("error")
    );

    return inputsWithErrors.length === 0;
  }

  function next() {
    if (currentPage === 1) {
      if (validateStepOne()) {
        setCurrentPage(2);
      }
    }

    if (currentPage > 1 && currentPage <= 3) {
      setCurrentPage(currentPage + 1);
    }
  }

  function back() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function confirm() {
    setIsComplete(true);
  }

  function backToPlanSelect() {
    setCurrentPage(2);
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
    } else if (e.target.type === "button") {
      const newRate = formInput.rate === "monthly" ? "yearly" : "monthly";
      setFormInput((prevInput) => {
        return {
          ...prevInput,
          rate: newRate,
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

  const contentElement = pageContent.map((page) => {
    return (
      <Content
        key={page.number}
        number={page.number}
        title={page.title}
        description={page.description}
        handleChange={(e) => handleChange(e)}
        formInput={formInput}
        isComplete={isComplete}
        backToPlanSelect={backToPlanSelect}
      />
    );
  });

  return (
    <main className="form-section">
      <header className="form-section__header">
        <ul className="header__pagination">{paginationElement}</ul>
      </header>
      <div>
        <section className="form-section__main">
          {contentElement.filter(
            (content) => content.props.number === currentPage
          )}
        </section>
      </div>
      {!isComplete && (
        <footer className="form-section__footer">
          <button
            className={currentPage > 1 ? "footer__back" : "footer__back hidden"}
            onClick={back}
          >
            Go Back
          </button>
          <button
            className={
              currentPage <= 3 ? "footer__next" : "footer__next submit"
            }
            onClick={currentPage === 4 ? confirm : next}
          >
            {currentPage <= 3 ? "Next Step" : "Confirm"}
          </button>
        </footer>
      )}
    </main>
  );
}

export default App;
