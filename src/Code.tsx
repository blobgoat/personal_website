import { useCallback, useMemo, useState, type JSX } from "react";
import { typecheckProjects, type Project } from "./components/utils";
import rawconfig from "./data/coding_projects.json";
import { BottomProjectInfoCard, RegularInfoTitleCard, RegularProjectInfoCard, TopProjectInfoCard } from "./components/projectInfoCard";


export function Code() {
    return (
        <><div className="text-center text-[50px] font-['BreeSerif'] font-semibold pt-10 pb-5">
            Coding Projects!
        </div>
            <div className="w-full max-w-4xl mx-auto" >
                <MockCodeList />
            </div>
        </>
    );
}


function MockCodeList() {

    //for each object in data/coding_projects.json, create a CodingProjectCard object to append to the list
    const projects: Project[] = typecheckProjects(rawconfig);
    const CodingCardsList: JSX.Element[] = projects
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((project: Project) => (
            <CodingProjectCard key={project.title} project={project} />
        ));

    return (<ul className="list-disc list-inside">{CodingCardsList}</ul>);
}

function CodingProjectCard({ project }: { project: Project }) {
    if (!project.technologies) {
        throw new Error("Project technologies is undefined");
    }


    return (
        <div className="center">
            <TopProjectInfoCard title={project.title} date={project.date} handleClick={() => (project)} children={undefined} />
            <RegularProjectInfoCard handleClick={() => (project)} >
                <div className="flex justify-center">
                    <ProjectCarousel images={project.images} />
                </div>
            </RegularProjectInfoCard>
            <RegularInfoTitleCard title="Description:" description={project.description as { type: "tailwind"; content: { type: "text"; value: string; }[]; }} handleClick={() => (project)} children={undefined} >
            </RegularInfoTitleCard>
            <RegularInfoTitleCard title="Technologies:" handleClick={() => (project)} >
                {project.technologies.join(", ")}
            </RegularInfoTitleCard>
            <BottomProjectInfoCard links={project.affiliatedLinks} handleClick={() => (project)} children={undefined} />
            {/* need to add a gap between each project card */}
            <div className="h-4"></div>
        </div>
    );
}


type ImgItem = { url: string; alt: string };

export default function ProjectCarousel({
    images,
    height = 400, // px window size; set to 400 by default
    width = "100%", // default width set to 100%
}: {
    images: ImgItem[];
    height?: number;
    width?: string | number;
}) {
    const [i, setI] = useState(0);

    // Robust URL resolver for Vite base paths and absolute URLs
    const resolveUrl = useCallback((url: string) => {
        const BASE = import.meta.env.BASE_URL ?? "/";
        if (/^(https?:|data:|blob:)/i.test(url)) return url;             // absolute
        if (url.startsWith(BASE)) return url;                            // already based
        if (url.startsWith("/")) return BASE + url.slice(1);             // root → base-root
        return BASE + url;                                               // relative → base-relative
    }, []);

    const total: number = images.length;
    const show: ImgItem | null = useMemo(() => images[i] ?? null, [images, i]);

    const prev: () => void = () => setI((n) => (n - 1 + total) % total);
    const next: () => void = () => setI((n) => (n + 1) % total);

    if (!total) return null;

    return (
        <div
            className="justify-center inline-flex items-center gap-1 select-none"
            onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
            }}
            tabIndex={0}
            aria-label="Image carousel"
            style={{ height: height, width: width }}
        >
            {total > 1 && (
                <button
                    type="button"
                    onClick={prev}
                    className={`h-full w-10 bg-[#4C4848] hover:bg-black text-white disabled:bg-[#B5B1B1] disabled:cursor-not-allowed`}
                    aria-label="Previous image"
                    disabled={i === 0}
                >
                    ‹
                </button>
            )}

            <div
                className="relative overflow-hidden rounded"
                style={{ height: height, width: width }}
            >
                {show && (
                    <img
                        key={i}
                        src={resolveUrl(show.url)}
                        alt={show.alt}
                        className="absolute inset-0 w-full h-full object-contain"
                        draggable={false}
                    />
                )}
            </div>

            {total > 1 && (
                <button
                    type="button"
                    onClick={next}
                    className={`h-full w-10 bg-[#4C4848] hover:bg-black text-white disabled:bg-[#B5B1B1] disabled:cursor-not-allowed`}
                    aria-label="Next image"
                    disabled={i === total - 1}
                >
                    ›
                </button>
            )}
        </div>
    );
}
