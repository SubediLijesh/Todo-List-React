function Clock() {
  let time = new Date();
  return (
    <>
      the current time is {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </>
  );
}

export default Clock;
