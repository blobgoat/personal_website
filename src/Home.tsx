//import { TabListWrapper } from "./utils/tab";

import { homeBio } from "./components/utils";

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setPageToCoding: (setCurrentPage: (page: string) => void) => void;
  setPageToResearch: (setCurrentPage: (page: string) => void) => void;
  setPageToDesign: (setCurrentPage: (page: string) => void) => void;
  setPageToHobbies: (setCurrentPage: (page: string) => void) => void;
  setPageToHome: (setCurrentPage: (page: string) => void) => void;
}

function Home({
  setCurrentPage,
  setPageToCoding,
  setPageToResearch,
  setPageToDesign,
  setPageToHobbies,
  setPageToHome,
}: HomeProps) {
  return (
    <PortfolioMock
      setCurrentPage={setCurrentPage}
      setPageToCoding={setPageToCoding}
      setPageToResearch={setPageToResearch}
      setPageToDesign={setPageToDesign}
      setPageToHobbies={setPageToHobbies}
      setPageToHome={setPageToHome}
    />
  );
}


// ---- Small building blocks ----


// const SectionTitle = ({ children }: { children: React.ReactNode }) => (
//   <h3 className={SUBHEADING}>{children}</h3>
// );

/**
 * Top info card that is clickable
 * it should have rounded only top corners. On hover it should turn a slightly darker grey, and the cursor should turn to a pointer.
 * @returns JSX.Element
 */
const TopInfoCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
  <div className="rounded-t-2xl border border-black border-[1px] p-2 md:p-1 shadow-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
    <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
    <div className="text-sm text-gray-800 leading-[100%] space-y-2">
      {children}
    </div>
  </div>
);

/**
 * Bottom info card that is clickable
 * it should have rounded only bottom corners. On hover it should turn a slightly darker grey, and the cursor should turn to a pointer.
 * @returns JSX.Element
 */
const BottomInfoCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
  <div className="rounded-b-2xl border border-black border-[1px] p-2 md:p-1 shadow-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
    <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
    <div className="text-sm text-gray-800 leading-[100%] space-y-2">
      {children}
    </div>
  </div>
);

/**
 * same as topinfocard but with no rounded corners
 * @returns JSX.Element
 */
const RegularInfoCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
  <div className="border border-black border-[1px] p-1 md:p-2 shadow-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
    <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
    <div className="text-sm text-gray-800 leading-[100%] space-y-1">
      {children}
    </div>
  </div>
);

// Main container that groups all the big grey cards together
const MainPanel = ({ setCurrentPage, setPageToCoding, setPageToResearch, setPageToDesign, setPageToHobbies }: { setCurrentPage: (page: string) => void, setPageToCoding: (setCurrentPage: (page: string) => void) => void, setPageToResearch: (setCurrentPage: (page: string) => void) => void, setPageToDesign: (setCurrentPage: (page: string) => void) => void, setPageToHobbies: (setCurrentPage: (page: string) => void) => void, setPageToHome: (setCurrentPage: (page: string) => void) => void }) => (
  <div className="flex flex-col bg-[#D9D9D9] rounded-2xl text-[16px] leading-[100%]">
    <TopInfoCard title="Coding:" handleClick={() => setPageToCoding(setCurrentPage)}>
      <ul className="list-disc pl-6">
        <li>Explore My Open Source Coding Projects!</li>
      </ul>
    </TopInfoCard>

    <RegularInfoCard
      title="Research:"
      handleClick={() => setPageToResearch(setCurrentPage)}
    >
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Gamification
          <ul className="list-disc pl-6 space-y-0.5">
            <li>User Interviews</li>
            <li>Big 5 Personality Test</li>
            <li>Multicultural Psychology</li>
          </ul>
        </li>
        <li>
          Sociological Forces around LLMs
          <ul className="list-disc pl-6 space-y-0.5">
            <li>Literature Review</li>
            <li>Historical Analysis</li>
          </ul>
        </li>
        <li>
          Using CNNs to Predict Gene Expression of Lung Tumors
          <ul className="list-disc pl-6 space-y-0.5">
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Biocomputation</li>
          </ul>
        </li>
      </ul>
    </RegularInfoCard>

    <RegularInfoCard title="Designer:" handleClick={() => setPageToDesign(setCurrentPage)}>
      <ul className="list-disc pl-6">
        <li>Figma Prototyping</li>
        <li>Graphic Design Portfolio</li>
        <li>Posters and Presentations</li>
      </ul>
    </RegularInfoCard>

    <BottomInfoCard title="Hobbies & More:" handleClick={() => setPageToHobbies(setCurrentPage)}>
      <ul className="list-disc pl-6">
        <li>Backpacking</li>
        <li>Cooking</li>
        <li>Art</li>
        <li>Volunteering</li>
      </ul>
    </BottomInfoCard>
  </div>
);

function PortfolioMock({ setCurrentPage, setPageToCoding, setPageToResearch, setPageToDesign, setPageToHobbies, setPageToHome }: { setCurrentPage: (page: string) => void, setPageToCoding: (setCurrentPage: (page: string) => void) => void, setPageToResearch: (setCurrentPage: (page: string) => void) => void, setPageToDesign: (setCurrentPage: (page: string) => void) => void, setPageToHobbies: (setCurrentPage: (page: string) => void) => void, setPageToHome: (setCurrentPage: (page: string) => void) => void }) {
  return (
    <div className="text-gray-900">

      {/* Portrait */}
      {imageAndBio()}
      {/* Body */}
      <main className="max-w-4xl mx-auto px-4 pb-2 pt-1 md:pt-2">


        {/* Big grey box container (separate component) */}
        <div>
          <MainPanel setCurrentPage={setCurrentPage} setPageToCoding={setPageToCoding} setPageToResearch={setPageToResearch} setPageToDesign={setPageToDesign} setPageToHobbies={setPageToHobbies} setPageToHome={setPageToHome} />
        </div>
      </main>
    </div>
  );
}

/**
 * image and bio section at the top of home
 * @returns JSX.Element
 */
const imageAndBio = () => (
  <div className="flex justify-center bg-white">

    {/* need to add a row */}
    <div className="flex flex-col items-center gap-6 md:gap-10 p-4 md:p-6">
      {/*photo*/}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <img
          src="assets/images/photos/profile_picture.png"
          alt="Jacob Seaman cooking at a scenic overlook"
          className="w-full h-full object-cover"
        />
      </div>
      {/*bio*/}

      <div className="text-center md:text-left whitespace-pre-line text-sm md:text-[20px] leading-6 text-gray-800">
        {homeBio}
      </div>
    </div>
  </div>
);

export default Home;
