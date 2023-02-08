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
              ></input>
            </label>
          </>
        )}

        {number === 2 && <></>}
      </form>
    </>
  );
}
