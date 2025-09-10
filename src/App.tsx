import { useState } from "react";
import Home from "./Home";
import { TabListWrapper } from "./utils/tab";
//import { labels } from "./utils/utils";

//const states: string[] = labels.concat('Home');
//["Code", "Research", "Design", "Hobbies & More!", "Home"];

function App() {
  // authentication

  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "Code":
        return <div className="text-center text-2xl">Code Page (Coming Soon!)</div>;
      case "Research":
        return <div className="text-center text-2xl">Research Page (Coming Soon!)</div>;
      case "Design":
        return <div className="text-center text-2xl">Design Page (Coming Soon!)</div>;
      case "Hobbies & More!":
        return <div className="text-center text-2xl">Hobbies & More! Page (Coming Soon!)</div>;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {/* Top bar */}
      <div className="min-h-screen bg-neutral-100 text-gray-900">
        <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-gray-600">var</span>
                <h1 className="font-mono text-lg md:text-xl font-semibold">Jacob Seaman :</h1>
              </div>

              <nav className="flex items-center gap-2 md:gap-3">
                {/* Simple social icon placeholders */}
                <a href="#" aria-label="Email">✉️</a>
                <a href="#" aria-label="GitHub">🐙</a>
                <a href="#" aria-label="LinkedIn">in</a>
              </nav>
            </div>
          </div>
          <div className="flex-auto items-center justify-center pt-[5%] px-0">
            {/* Tabs */}
            <div className="mt-3 flex flex-wrap gap-2 md:gap-3">
              <TabListWrapper currentPage={currentPage} onSelect={setCurrentPage} />
            </div>
          </div>
        </header>
        <div>
        </div>
        {renderPage()}
      </div>
      {/* Footer */}
      <footer className="text-center mt-8 text-xs text-gray-600">
        Website both designed and programmed by Jacob Seaman
      </footer>
    </div>
  );
}

export default App;
