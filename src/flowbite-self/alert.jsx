/* eslint-disable react/prop-types */
import { Alert } from "flowbite-react";

export function AlertFB({
    color = "info",
    title = "Info alert!",
    message = "Change a few things up and try submitting again.",
}) {
  return (
    <Alert color={color}>
      <span className="font-bold">{title}</span> {message}
    </Alert>
  );
}
