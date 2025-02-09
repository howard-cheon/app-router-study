const someAsyncFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "loaded";
};

const AsyncComponent = async () => {
  const data = await someAsyncFunction();

  return <p>{data}</p>;
};

export default AsyncComponent;
