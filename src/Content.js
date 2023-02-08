import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";

import React from "react";
export default function Content(props) {
  const { title, description, number, handleChange, formInput } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <form>
        {number === 1 && (
          <>
            <label htmlFor="name">
              Name
              <input
                name="name"
                id="name"
                placeholder="e.g. Stephen King"
                value={formInput.name}
                onChange={handleChange}
                type="text"
              ></input>
            </label>
            <label htmlFor="email">
              Email Address
              <input
                name="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                value={formInput.email}
                onChange={handleChange}
                type="text"
              ></input>
            </label>
            <label htmlFor="name">
              Phone Number
              <input
                name="phone"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                value={formInput.phone}
                onChange={handleChange}
                type="text"
              ></input>
            </label>
          </>
        )}

        {number === 2 && (
          <>
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
                formInput.plan === "pro"
                  ? "radio-label selected"
                  : "radio-label"
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
              <div
                className={
                  formInput.rate === "monthly" ? "toggle" : "toggle yearly"
                }
              ></div>
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
          </>
        )}
      </form>
    </>
  );
}
