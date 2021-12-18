import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
