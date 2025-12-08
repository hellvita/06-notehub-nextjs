"use client";
import css from "./Error.module.css";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <p className={css.text}>
      Sorry, there was an error loading your notes, please try again... <br />
      Details: <i>{error.message}</i>
    </p>
  );
}
