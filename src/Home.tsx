import { TAB, SUBHEADING, TEXT } from "./utils/utils";

function Home({ }: { setCurrentPage: (page: string) => void }) {
  return (
    <PortfolioMock />
  )
}


// ---- Small building blocks ----
const Tab = ({ children }: { children: React.ReactNode }) => (
  <button className={TAB} type="button">
    {children}
  </button>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={SUBHEADING}>{children}</h3>
);

// Reusable component for each grey info card
const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-gray-200 rounded-2xl border border-gray-300 p-4 md:p-5">
    <SectionTitle>{title}</SectionTitle>
    <div className={`${TEXT} mt-2`}>{children}</div>
  </section>
);

// Main container that groups all the big grey cards together
const MainPanel = () => (
  <div className="space-y-4 md:space-y-5">
    <InfoCard title="Coding:">
      <ul className="list-disc pl-6">
        <li>Explore My Open Source Coding Projects</li>
      </ul>
    </InfoCard>

    <InfoCard title="Research:">
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Gamification
          <ul className="list-disc pl-6">
            <li>User Interviews</li>
            <li>Big 5 Personality Test</li>
            <li>Multicultural Psychology</li>
          </ul>
        </li>
        <li>
          Sociological Forces around LLMs
          <ul className="list-disc pl-6">
            <li>Literature Review</li>
            <li>Historical Analysis</li>
          </ul>
        </li>
        <li>
          Using CNNs to Predict Gene Expression of Lung Tumors
          <ul className="list-disc pl-6">
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Biocomputation</li>
          </ul>
        </li>
      </ul>
    </InfoCard>

    <InfoCard title="Designer:">
      <ul className="list-disc pl-6 space-y-1">
        <li>Figma Prototyping</li>
        <li>Graphic Design Portfolio</li>
        <li>Posters and Presentations</li>
      </ul>
    </InfoCard>

    <InfoCard title="Hobbies and More:">
      <ul className="list-disc pl-6 space-y-1">
        <li>Hobbies</li>
        <li>Volunteering</li>
      </ul>
    </InfoCard>
  </div>
);

function PortfolioMock() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-gray-600">var</span>
              <h1 className="font-mono text-lg md:text-xl font-semibold">Jacob Seaman :</h1>
            </div>

            <nav className="flex items-center gap-2 md:gap-3">
              {/* Simple social icon placeholders */}
              <a className={TAB} href="#" aria-label="Email">✉️</a>
              <a className={TAB} href="#" aria-label="GitHub">🐙</a>
              <a className={TAB} href="#" aria-label="LinkedIn">in</a>
            </nav>
          </div>

          {/* Tabs */}
          <div className="mt-3 flex flex-wrap gap-2 md:gap-3">
            <Tab>Code</Tab>
            <Tab>Research</Tab>
            <Tab>Design</Tab>
            <Tab>
              <span>Hobbies &amp; </span>
              <span className="underline underline-offset-2">More!</span>
            </Tab>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-4 pb-16 pt-6 md:pt-8">
        {/* Portrait */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Jacob Seaman at a scenic overlook"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Big grey box container (separate component) */}
        <div className="mt-6 md:mt-8 bg-gray-300 rounded-3xl border border-gray-400 p-3 md:p-4">
          <MainPanel />
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-xs text-gray-600">
          Website both designed and programmed by Jacob Seaman
        </footer>
      </main>
    </div>
  );
}


export default Home;
