import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import checkmark from "./images/icon-checkmark.svg";
import complete from "./images/icon-thank-you.svg";

import React from "react";
export default function Content(props) {
  const {
    isComplete,
    title,
    description,
    number,
    handleChange,
    formInput,
    backToPlanSelect,
  } = props;

  function toTitleCase(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function generatePrice(item) {
    switch (item) {
      case "arcade":
        return 9;
      case "advanced":
        return 12;
      case "pro":
        return 15;
      case "online":
        return 1;
      default:
        return 2;
    }
  }

  function generateTotal() {
    const { plan, online, storage, profile } = formInput;

    let total = generatePrice(plan);

    if (online) {
      total += 1;
    }

    [storage, profile].forEach((item) => {
      if (item) {
        total += 2;
      }
    });

    return total;
  }

  function generateOrderSummary() {
    const { plan, rate } = formInput;
    const isYearly = rate === "yearly";

    return {
      orderName: `${toTitleCase(plan)} (${toTitleCase(rate)})`,
      planPrice: isYearly
        ? `$${generatePrice(plan) * 10}/yr`
        : `$${generatePrice(plan)}/mo`,
      onlinePrice: isYearly
        ? `$${generatePrice("online") * 10}/yr`
        : `$${generatePrice("online")}/mo`,
      storagePrice: isYearly
        ? `$${generatePrice("storage") * 10}/yr`
        : `$${generatePrice("storage")}/mo`,
      profilePrice: isYearly
        ? `$${generatePrice("profile") * 10}/yr`
        : `$${generatePrice("profile")}/mo`,
      totalPrice: isYearly
        ? `$${generateTotal() * 10}/yr`
        : `$${generateTotal()}/mo`,
    };
  }

  const orderSummary = generateOrderSummary();

  return (
    <>
      {!isComplete && (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
        </>
      )}
      {/*STEP ONE*/}

      {!isComplete && number === 1 && (
        <form>
          <label htmlFor="name" className="text-label">
            <span className="text-label__row">
              <span>Name</span>
              <span className="text-label__error-msg">
                This field is required
              </span>
            </span>
            <input
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              value={formInput.name}
              onChange={handleChange}
              type="text"
            ></input>
          </label>
          <label htmlFor="email" className="text-label">
            <span className="text-label__row">
              <span>Email Address</span>
              <span className="text-label__error-msg">
                This field is required
              </span>
            </span>
            <input
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={formInput.email}
              onChange={handleChange}
              type="text"
            ></input>
          </label>
          <label htmlFor="phone" className="text-label">
            <span className="text-label__row">
              <span>Phone Number</span>
              <span className="text-label__error-msg">
                This field is required
              </span>
            </span>
            <input
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              value={formInput.phone}
              onChange={handleChange}
              type="text"
            ></input>
          </label>
        </form>
      )}
      {/*STEP TWO*/}

      {!isComplete && number === 2 && (
        <form className="plan-form">
          <label
            htmlFor="arcade"
            className={
              formInput.plan === "arcade"
                ? "radio-label selected"
                : "radio-label"
            }
          >
            <span className="radio-label__content">
              <span className="radio-label__name">Arcade</span>
              <span className="radio-label__price">
                {formInput.rate === "monthly" ? "$9/mo" : "$90/yr"}
              </span>
              {formInput.rate === "yearly" && <small>2 months free</small>}
            </span>
            <span className="radio-container">
              <img src={arcade} alt="" />
              <input
                type="radio"
                name="plan"
                value="arcade"
                id="arcade"
                onChange={handleChange}
              ></input>
            </span>
          </label>

          <label
            htmlFor="advanced"
            className={
              formInput.plan === "advanced"
                ? "radio-label selected"
                : "radio-label"
            }
          >
            <span className="radio-label__content">
              <span className="radio-label__name">Advanced</span>
              <span className="radio-label__price">
                {formInput.rate === "monthly" ? "$12/mo" : "$120/yr"}
              </span>
              {formInput.rate === "yearly" && <small>2 months free</small>}
            </span>
            <span className="radio-container">
              <img src={advanced} alt="" />
              <input
                type="radio"
                name="plan"
                value="advanced"
                id="advanced"
                onChange={handleChange}
              ></input>
            </span>
          </label>

          <label
            htmlFor="pro"
            className={
              formInput.plan === "pro" ? "radio-label selected" : "radio-label"
            }
          >
            <span className="radio-label__content">
              <span className="radio-label__name">Pro</span>
              <span className="radio-label__price">
                {formInput.rate === "monthly" ? "$15/mo" : "$150/yr"}
              </span>
              {formInput.rate === "yearly" && <small>2 months free</small>}
            </span>
            <span className="radio-container">
              <img src={pro} alt="" />
              <input
                type="radio"
                name="plan"
                value="pro"
                id="pro"
                onChange={handleChange}
              ></input>
            </span>
          </label>
          <div className="toggle-container">
            <label
              htmlFor="monthly"
              className={formInput.rate === "monthly" ? "selected" : ""}
            >
              Monthly
              <input
                type="radio"
                name="rate"
                value="monthly"
                id="monthly"
                onChange={handleChange}
              />
            </label>
            <button
              type="button"
              className={
                formInput.rate === "monthly" ? "toggle" : "toggle yearly"
              }
              onClick={handleChange}
            ></button>
            <label
              htmlFor="yearly"
              className={formInput.rate === "yearly" ? "selected" : ""}
            >
              Yearly
              <input
                type="radio"
                name="rate"
                value="yearly"
                id="yearly"
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      )}
      {/*STEP THREE*/}

      {!isComplete && number === 3 && (
        <form>
          <label
            htmlFor="online"
            className={
              formInput.online ? "checkbox-label selected" : "checkbox-label"
            }
          >
            <span className="checkmark">
              <input
                type="checkbox"
                name="online"
                id="online"
                onChange={handleChange}
              />
              <span className="checkmark__checkbox">
                <img src={checkmark} alt="" />
              </span>
            </span>
            <span>
              <span className="checkbox-label__name">Online service</span>
              <span className="checkbox-label__desc">
                Access to multiplayer games
              </span>
            </span>
            <span className="checkbox-label__price">
              {formInput.rate === "monthly" ? "+$1/mo" : "+$10/yr"}
            </span>
          </label>

          <label
            htmlFor="storage"
            className={
              formInput.storage ? "checkbox-label selected" : "checkbox-label"
            }
          >
            <span className="checkmark">
              <input
                type="checkbox"
                name="storage"
                id="storage"
                onChange={handleChange}
              />
              <span className="checkmark__checkbox">
                <img src={checkmark} alt="" />
              </span>
            </span>
            <span>
              <span className="checkbox-label__name">Larger storage</span>
              <span className="checkbox-label__desc">
                Extra 1TB of cloud save
              </span>
            </span>
            <span className="checkbox-label__price">
              {formInput.rate === "monthly" ? "+$2/mo" : "+$20/yr"}
            </span>
          </label>

          <label
            htmlFor="profile"
            className={
              formInput.profile ? "checkbox-label selected" : "checkbox-label"
            }
          >
            <span className="checkmark">
              <input
                type="checkbox"
                name="profile"
                id="profile"
                onChange={handleChange}
              />
              <span className="checkmark__checkbox">
                <img src={checkmark} alt="" />
              </span>
            </span>
            <span>
              <span className="checkbox-label__name">Customizable profile</span>
              <span className="checkbox-label__desc">
                Custom theme on your profile
              </span>
            </span>
            <span className="checkbox-label__price">
              {formInput.rate === "monthly" ? "+$2/mo" : "+$20/yr"}
            </span>
          </label>
        </form>
      )}
      {/*STEP FOUR */}
      {!isComplete && number === 4 && (
        <>
          <div className="order-summary">
            <p className="order-summary__name">{orderSummary.orderName}</p>
            <div className="order-summary__row">
              <button onClick={backToPlanSelect}>Change</button>
              <p>{orderSummary.planPrice}</p>
            </div>
            <hr></hr>
            {formInput.online && (
              <div className="order-summary__row">
                <p>Online service</p>
                <p>+{orderSummary.onlinePrice}</p>
              </div>
            )}
            {formInput.storage && (
              <div className="order-summary__row">
                <p>Larger storage</p>
                <p>+{orderSummary.storagePrice}</p>
              </div>
            )}
            {formInput.profile && (
              <div className="order-summary__row">
                <p>Customizable profile</p>
                <p>+{orderSummary.profilePrice}</p>
              </div>
            )}
          </div>
          <div className="order-summary__row order-summary__total">
            <p>Total (per {formInput.rate.slice(0, -2)})</p>
            <p>+{orderSummary.totalPrice}</p>
          </div>
        </>
      )}
      {/*COMPLETE*/}
      {isComplete && (
        <div className="complete">
          <img src={complete} alt="" />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      )}
    </>
  );
}
