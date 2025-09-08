import { useState } from "react";
import Home from "./Home";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  // authentication
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <></>
  }

  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex-auto items-center justify-center pt-[5%] px-0">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
