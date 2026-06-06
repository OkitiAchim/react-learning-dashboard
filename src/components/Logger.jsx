function Logger() {
  function handleClick(message) {
    console.log("Logged:", message);
    alert(message);
  }

  return (
    <div style={{ margin: "10px" }}>
      <h2>Event Handling Example</h2>

      <button onClick={() => handleClick("Hello React!")}>Click Me</button>
    </div>
  );
}

export default Logger;
