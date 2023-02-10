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
            <div className="text-label__row">
              <p>Name</p>
              <p className="text-label__error-msg">This field is required</p>
            </div>
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
            <div className="text-label__row">
              <p>Email Address</p>
              <p className="text-label__error-msg">This field is required</p>
            </div>
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
            <div className="text-label__row">
              <p>Phone Number</p>
              <p className="text-label__error-msg">This field is required</p>
            </div>
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
            <div className="radio-label__content">
              <p className="radio-label__name">Arcade</p>
              <p className="radio-label__price">
                {formInput.rate === "monthly" ? "$9/mo" : "$90/yr"}
              </p>
              {formInput.rate === "yearly" && <small>2 months free</small>}
            </div>
            <div className="radio-container">
              <img src={arcade} />
              <input
                type="radio"
                name="plan"
                value="arcade"
                id="arcade"
                onChange={handleChange}
              ></input>
            </div>
          </label>

          <label
            htmlFor="advanced"
            className={
              formInput.plan === "advanced"
                ? "radio-label selected"
                : "radio-label"
            }
          >
            <div className="radio-label__content">
              <p className="radio-label__name">Advanced</p>
              <p className="radio-label__price">
                {formInput.rate === "monthly" ? "$12/mo" : "$120/yr"}
              </p>
              {formInput.rate === "yearly" && <small>2 months free</small>}
            </div>
            <div className="radio-container">
              <img src={advanced} />
              <input
                type="radio"
                name="plan"
                value="advanced"
                id="advanced"
                onChange={handleChange}
              ></input>
            </div>
          </label>

          <label
            htmlFor="pro"
            className={
              formInput.plan === "pro" ? "radio-label selected" : "radio-label"
            }
          >
            <div className="radio-label__content">
              <p className="radio-label__name">Pro</p>
              <p className="radio-label__price">
                {formInput.rate === "monthly" ? "$15/mo" : "$150/yr"}
              </p>
              {formInput.rate === "yearly" && <small>2 months free</small>}
            </div>
            <div className="radio-container">
              <img src={pro} />
              <input
                type="radio"
                name="plan"
                value="pro"
                id="pro"
                onChange={handleChange}
              ></input>
            </div>
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
            <div className="checkmark">
              <input
                type="checkbox"
                name="online"
                id="online"
                onChange={handleChange}
              />
              <div className="checkmark__checkbox">
                <img src={checkmark} alt="" />
              </div>
            </div>
            <div>
              <p className="checkbox-label__name">Online service</p>
              <p className="checkbox-label__desc">
                Access to multiplayer games
              </p>
            </div>
            <p className="checkbox-label__price">
              {formInput.rate === "monthly" ? "+$1/mo" : "+$10/yr"}
            </p>
          </label>

          <label
            htmlFor="storage"
            className={
              formInput.storage ? "checkbox-label selected" : "checkbox-label"
            }
          >
            <div className="checkmark">
              <input
                type="checkbox"
                name="storage"
                id="storage"
                onChange={handleChange}
              />
              <div className="checkmark__checkbox">
                <img src={checkmark} alt="" />
              </div>
            </div>
            <div>
              <p className="checkbox-label__name">Larger storage</p>
              <p className="checkbox-label__desc">Extra 1TB of cloud save</p>
            </div>
            <p className="checkbox-label__price">
              {formInput.rate === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </label>

          <label
            htmlFor="profile"
            className={
              formInput.profile ? "checkbox-label selected" : "checkbox-label"
            }
          >
            <div className="checkmark">
              <input
                type="checkbox"
                name="profile"
                id="profile"
                onChange={handleChange}
              />
              <div className="checkmark__checkbox">
                <img src={checkmark} alt="" />
              </div>
            </div>
            <div>
              <p className="checkbox-label__name">Customizable profile</p>
              <p className="checkbox-label__desc">
                Custom theme on your profile
              </p>
            </div>
            <p className="checkbox-label__price">
              {formInput.rate === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
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
          <img src={complete} />
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
