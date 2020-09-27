import React from "react";

function FeedbackForm() {
  return (
    <form name="feedback" method="post" data-netlify="true" action="/thankyou">
      <input type="hidden" name="form-name" value="feedback" />
      <p>
        <label htmlFor="name">
          Your Name:
          <br />
          <input type="text" name="name" id="name" />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          Feedback:
          <br />
          <textarea name="name" id="message" rows={5} />
        </label>
      </p>
    </form>
  );
}

export default FeedbackForm;
