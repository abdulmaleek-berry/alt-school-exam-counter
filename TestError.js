import { useState } from "react";

 function TestError() {
  const [countError, setCountError] = useState(0);

  function handleError() {
      setCountError(prev => prev + 1);
  }
  if (countError >= 3) {
    throw new Error("Error Boundary. Checked.");
  }
  return (
    <div className="test-error">
      <h2>Increase count to be equal to or greater than 3 to 
        test Error Boundary.
      </h2>
      <h2>Count : {countError}</h2>
      <button onClick={handleError} className="error-btn">increase</button>
    </div>
  );
}
export default TestError