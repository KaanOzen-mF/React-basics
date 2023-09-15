import React from "react";

export default function App() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    checked: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (form.password === form.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      alert("Passwords do not match");
      return;
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleJoin(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      alert("Thanks for joining newsletter");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="form--input"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form--input"
          value={form.password}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          className="form--input"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="checked"
            onChange={handleChange}
            checked={form.checked}
            onClick={handleJoin}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
