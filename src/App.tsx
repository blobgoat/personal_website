import { useState } from "react";
import Home from "./Home";
import { TabListWrapper } from "./components/tab";
//import { labels } from "./utils/utils";

//const states: string[] = labels.concat('Home');
//["Code", "Research", "Design", "Hobbies & More!", "Home"];

function App() {
  // authentication

  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} setPageToCoding={setPageToCoding} setPageToResearch={setPageToResearch} setPageToDesign={setPageToDesign} setPageToHobbies={setPageToHobbies} setPageToHome={setPageToHome} />;
      case "Code":
        return <div className="text-center text-2xl">Code Page (Coming Soon!)</div>;
      case "Research":
        return <div className="text-center text-2xl">Research Page (Coming Soon!)</div>;
      case "Design":
        return <div className="text-center text-2xl">Design Page (Coming Soon!)</div>;
      case "Hobbies &\n More!":
        return <div className="text-center text-2xl">Hobbies & More! Page (Coming Soon!)</div>;
      default:
        return <Home setCurrentPage={setCurrentPage} setPageToCoding={setPageToCoding} setPageToResearch={setPageToResearch} setPageToDesign={setPageToDesign} setPageToHobbies={setPageToHobbies} setPageToHome={setPageToHome} />;

    }
  };

  return (
    // need grey background that is exactly C1C1C1
    <div className="min-h-screen bg-[#C1C1C1]">


      {/* Top bar */}
      <div className="bg-[#C1C1C1] text-gray-900 ">

        <header className="sticky top-0 z-10 bg-[#202124]">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex items-left justify-between gap-3">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentPage("Home")}
              >
                <span className="font-['IBM Plex Mono'] text-[#569CD6] font-regular text-[18px] md:text-[30px]">var</span>
                <h1 className="font-['IBM Plex Mono'] text-[#7FB3CB] font-regular text-[18px] md:text-[30px]">
                  Jacob Seaman
                </h1>
                <h1 className="font-['IBM Plex Mono'] text-[#FFFFFF] font-regular text-[18px] md:text-[30px]">
                  :
                </h1>
              </div>

              <nav className="flex items-center gap-2 md:gap-3">
                {/* Social icons with images */}
                <a href="mailto:jacobaaronseaman@gmail.com" aria-label="Email" className="flex items-center" rel="noopener noreferrer">
                  <img src="/assets/images/icons/email_big.png" alt="Email" className="w-full h-full max-w-[24px] max-h-[24px]" />
                </a>
                <a href="https://www.instagram.com/jacobaaronseaman/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center">
                  <img src="/assets/images/icons/instagram_big.png" alt="Instagram" className="w-full h-full max-w-[24px] max-h-[24px]" />
                </a>
                <a href="https://www.linkedin.com/in/jacob-seaman-096536220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center">
                  <img src="/assets/images/icons/linked_in_big.png" alt="LinkedIn" className="w-full h-full max-w-[24px] max-h-[24px]" />
                </a>
                <a href="https://github.com/blobgoat" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center">
                  <img src="/assets/images/icons/github_big.png" alt="GitHub" className="w-full h-full max-w-[24px] max-h-[24px]" />
                </a>
              </nav>
            </div>
          </div>

        </header>
        <div>
          {/* Tabs */}
          <div className="bg-[#65676D] noise-25 flex flex-col">
            <div className="h-2" />
            <div className="flex-1">
              <TabListWrapper currentPage={currentPage} onSelect={setCurrentPage} />
            </div>
            {/* spacer */}
            <div className="h-2" />
          </div>
        </div>
        <div className="min-h-screen ">
          {renderPage()}
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center text-xs text-white bg-[#65676D] h-[72px] flex items-center justify-center mt-1">
        Website both designed and programmed by Jacob Seaman
      </footer>
    </div>
  );
}

export function setPageToCoding(setCurrentPage: (page: string) => void) {
  setCurrentPage("Code");
  window.scrollTo(0, 0);
}

export function setPageToResearch(setCurrentPage: (page: string) => void) {
  setCurrentPage("Research");
  window.scrollTo(0, 0);
}

export function setPageToDesign(setCurrentPage: (page: string) => void) {
  setCurrentPage("Design");
  window.scrollTo(0, 0);
}

export function setPageToHobbies(setCurrentPage: (page: string) => void) {
  setCurrentPage("Hobbies &\n More!");
  window.scrollTo(0, 0);
}

export function setPageToHome(setCurrentPage: (page: string) => void) {
  setCurrentPage("Home");
  window.scrollTo(0, 0);
}

export default App;
