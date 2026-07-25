import { useState } from "react";
import { projectTypes } from "../data";

const initialValues = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name looks too short.";

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email.trim()) errors.email = "Enter your email.";
  else if (!emailRe.test(values.email.trim()))
    errors.email = "Enter a valid email address.";

  if (!values.projectType) errors.projectType = "Choose a project type.";

  if (!values.message.trim())
    errors.message = "Tell us a bit about the project.";
  else if (values.message.trim().length < 20)
    errors.message = "A few more details would help (20 characters minimum).";

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null); // null | "error" | "success"

  function handleChange(event) {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (touched[name]) {
      setErrors(validate(nextValues));
    }
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, projectType: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    // No backend in this exercise — simulate a successful hand-off.
    setStatus("success");
    setValues(initialValues);
    setTouched({});
  }

  return (
    <section className="section section-dark" id="contact">
      <div className="wrap contact-wrap">
        <div className="contact-intro">
          <p className="eyebrow">PLAN THE ROUTE</p>
          <h2>Tell us where you're trying to get to.</h2>
          <p className="hero-sub">
            We reply within one business day with next steps &mdash; no
            automated drip sequence.
          </p>
        </div>

        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className={"field" + (errors.name ? " has-error" : "")}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.name)}
            />
            <p className="field-error" role="alert">
              {errors.name || ""}
            </p>
          </div>

          <div className={"field" + (errors.email ? " has-error" : "")}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.email)}
            />
            <p className="field-error" role="alert">
              {errors.email || ""}
            </p>
          </div>

          <div className={"field" + (errors.projectType ? " has-error" : "")}>
            <label htmlFor="project-type">Project type</label>
            <select
              id="project-type"
              name="projectType"
              value={values.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.projectType)}
            >
              <option value="" disabled>
                Choose one
              </option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <p className="field-error" role="alert">
              {errors.projectType || ""}
            </p>
          </div>

          <div className={"field" + (errors.message ? " has-error" : "")}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.message)}
            />
            <p className="field-error" role="alert">
              {errors.message || ""}
            </p>
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            Send it up
          </button>
          <p
            className={"form-status" + (status === "success" ? " success" : "")}
            role="status"
            aria-live="polite"
          >
            {status === "success"
              ? "Thanks — we've got it and will reply within one business day."
              : status === "error"
              ? "Please fix the highlighted fields."
              : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
