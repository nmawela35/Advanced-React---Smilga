const ErrorExample = () => {
  let count = 0;

  const handleIncrease = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h2>useState error example</h2>
      <div>{count}</div>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
