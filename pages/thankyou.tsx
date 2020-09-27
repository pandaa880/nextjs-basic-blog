import React from "react";
import Link from "next/link";

function ThankYou() {
  return (
    <h1>
      Thank you for the feedback. We have received your submission. <br />{" "}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </h1>
  );
}

export default ThankYou;
