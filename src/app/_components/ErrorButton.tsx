"use client";

import { useEffect, useState } from "react";

const ErrorComponent = () => {
  const [error, setError] = useState(false);

  const onClickErrorButton = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error("Error");
    }
  }, [error]);

  return <button onClick={onClickErrorButton}>Show me error</button>;
};

export default ErrorComponent;
