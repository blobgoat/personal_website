import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import { TabListWrapper } from "./components/tab";
import { useEffect, useState } from "react";
import { Code } from "./Code";
import { Research } from "./Research";
import { Design } from "./Design";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case "/code":
        setCurrentPage("Code");
        break;
      case "/research":
        setCurrentPage("Research");
        break;
      case "/design":
        setCurrentPage("Design");
        break;
      case "/hobbies":
        setCurrentPage("Hobbies &\n More!");
        break;
      case "/":
        setCurrentPage("Home");
        break;
      default:
        setCurrentPage("Home");
    }
  }, [location.pathname]);

  // Page setters
  const setPageToCoding = () => {
    setCurrentPage("Code");
    navigate("/code");
    window.scrollTo(0, 0);
  };

  const setPageToResearch = () => {
    setCurrentPage("Research");
    navigate("/research");
    window.scrollTo(0, 0);
  };

  const setPageToDesign = () => {
    setCurrentPage("Design");
    navigate("/design");
    window.scrollTo(0, 0);
  };

  const setPageToHobbies = () => {
    setCurrentPage("Hobbies & More!");
    navigate("/hobbies");
    window.scrollTo(0, 0);
  };

  const setPageToHome = () => {
    setCurrentPage("Home");
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#C1C1C1]">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-[#202124]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-left justify-between gap-3">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => (setPageToHome(), window.scrollTo(0, 0))}
            >
              <span className="font-['IBM Plex Mono'] text-[#569CD6] text-[18px] md:text-[30px]">
                var
              </span>
              <h1 className="font-['IBM Plex Mono'] text-[#7FB3CB] text-[18px] md:text-[30px]">
                Jacob Seaman
              </h1>
              <h1 className="font-['IBM Plex Mono'] text-white text-[18px] md:text-[30px]">
                :
              </h1>
            </div>

            <nav className="flex items-center gap-2 md:gap-3">
              <a
                href="mailto:jacobaaronseaman@gmail.com"
                aria-label="Email"
                className="flex items-center"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/images/icons/email_big.png"
                  alt="Email"
                  className="w-full h-full max-w-[24px] max-h-[24px]"
                />
              </a>
              <a
                href="https://www.instagram.com/jacobaaronseaman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center"
              >
                <img
                  src="assets/images/icons/instagram_big.png"
                  alt="Instagram"
                  className="w-full h-full max-w-[24px] max-h-[24px]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jacob-seaman-096536220/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center"
              >
                <img
                  src="assets/images/icons/linked_in_big.png"
                  alt="LinkedIn"
                  className="w-full h-full max-w-[24px] max-h-[24px]"
                />
              </a>
              <a
                href="https://github.com/blobgoat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center"
              >
                <img
                  src="assets/images/icons/github_big.png"
                  alt="GitHub"
                  className="w-full h-full max-w-[24px] max-h-[24px]"
                />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-[#65676D] noise-25 flex flex-col">
        <div className="h-2" />
        <div className="flex-1">
          <TabListWrapper
            currentPage={currentPage}
            onSelect={(page) => setCurrentPage(page)}
            setPageToResearch={setPageToResearch}
            setPageToCoding={setPageToCoding}
            setPageToDesign={setPageToDesign}
            setPageToHome={setPageToHome}
            setPageToHobbies={setPageToHobbies}
          />
        </div>
        <div className="h-2" />
      </div>

      {/* Routes */}
      <div className="min-h-screen flex justify-center">
        <div className="w-full max-w-4xl px-4">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setCurrentPage={setCurrentPage}
                  setPageToResearch={setPageToResearch}
                  setPageToCoding={setPageToCoding}
                  setPageToDesign={setPageToDesign}
                  setPageToHome={setPageToHome}
                  setPageToHobbies={setPageToHobbies}
                />
              }
            />
            <Route
              path="/code"
              element={
                <Code />
              }
            />
            <Route
              path="/research"
              element={
                <Research />
              }
            />
            <Route
              path="/design"
              element={
                <Design />
              }
            />
            <Route
              path="/hobbies"
              element={
                <div className="text-center text-2xl">
                  Hobbies & More! Page (Coming Soon!)
                </div>
              }
            />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-white bg-[#65676D] h-[72px] flex items-center justify-center mt-1">
        Website both designed and programmed by Jacob Seaman
      </footer>
    </div>
  );
}

export default App;
