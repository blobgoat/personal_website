import type { JSX } from "react";
import ProjectCarousel from "./Code";
import { BottomProjectInfoCard, RegularInfoTitleCard, RegularProjectInfoCard, TopProjectInfoCard } from "./components/projectInfoCard";
import rawconfig from "./data/design_projects.json";
import { typecheckProjects, type Project } from "./components/utils";


export function Design() {
    return (
        <><div className="text-center text-[50px] font-['BreeSerif'] font-semibold pt-10 pb-5">
            Designing Projects!
        </div>
            <div className="w-full max-w-4xl mx-auto" >
                <DesignList />
            </div>
        </>
    );
}

function DesignList() {

    //for each object in data/coding_projects.json, create a CodingProjectCard object to append to the list
    const projects: Project[] = typecheckProjects(rawconfig);

    const CodingCardsList: JSX.Element[] = projects
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((project: Project) => (
            <DesignProjectCard key={project.title} project={project} />
        ));

    return (<ul className="list-disc list-inside">{CodingCardsList}</ul>);
}

function DesignProjectCard({ project }: { project: Project }) {
    if (!project.skills) {
        throw new Error("Project skills is undefined");
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
            <RegularInfoTitleCard title="Skills:" handleClick={() => (project)} >
                {project.skills.join(", ")}
            </RegularInfoTitleCard>
            <BottomProjectInfoCard links={project.affiliatedLinks} handleClick={() => (project)} children={undefined} />
            {/* need to add a gap between each project card */}
            <div className="h-4"></div>
        </div>
    );
}
