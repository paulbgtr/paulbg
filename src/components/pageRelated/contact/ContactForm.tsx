import { useState, useEffect } from "react";

import { isEmailValid } from "@/utilts/isEmailValid";

const FORMSPARK_ACTION_URL = "https://submit-form.com/Rh5Ht4IY";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const isValid = () => {
    if (!name || !email || !subject || !message) {
      return false;
    }
    if (!isEmailValid(email)) {
      return false;
    }
    return true;
  };

  const handleSendMessage = async () => {
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
  };

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid()) {
      setIsError(true);
      return;
    }
    handleSendMessage();
    handleClearForm();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  }, [isSubmitted, isError]);

  return (
    <section className="mt-3">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full max-w-sm gap-2">
          <input
            type="text"
            maxLength={50}
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input input-bordered input-md"
          />
          <input
            type="email"
            maxLength={50}
            minLength={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered input-md"
          />
          <input
            type="text"
            maxLength={50}
            minLength={2}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="input input-bordered input-md"
          />
          <textarea
            value={message}
            maxLength={500}
            minLength={2}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="textarea textarea-bordered textarea-md"
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      {isError && (
        <p className="mt-3 text-center text-error">
          Something went wrong. Please try again.
        </p>
      )}
      {isSubmitted && (
        <p className="mt-3 text-center text-success">
          Your message has been sent!
        </p>
      )}
    </section>
  );
};
