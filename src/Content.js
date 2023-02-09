import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import checkmark from "./images/icon-checkmark.svg";

import React from "react";
export default function Content(props) {
  const { title, description, number, handleChange, formInput } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <form>
        {/*STEP ONE*/}

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
        {/*STEP TWO*/}

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
              <div className="input-contain">
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
              <div className="input-contain">
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
              <div className="input-contain">
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

        {/*STEP THREE*/}
        {number === 3 && (
          <>
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
          </>
        )}
        {/*STEP FOUR */}
      </form>
    </>
  );
}
