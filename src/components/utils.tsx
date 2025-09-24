
//globally relevant variables
export const labels: string[] = ["Code", "Research", "Design", "Hobbies &\n More!"];


//home
export const homeBio: string = "B.S. in Computer Science, University of Washington (Paul G. Allen School, Class of 2025) \n \n Passionate about bridging technology with people I have worked as a programmer, researcher, writer, collaborative leader, and designer."

//tab specific styles


export const tabColorActive: string = "#362F27";
// pressed is 444240 50% saturation and internal drop shadow
export const tabColorPressed: string =
    "#444240"; // 50% saturation & drop shadow
export const tabText: string = "font-[Inter] text-[16px] md:text-[25px] underline text-[#4EC9B0]";
export const tabColorActiveHover: string = "#362F27";
export const tabColorPressedHover: string = "#362F27";
export const tabminWidth: string = "69px";
export const tabminHeight: string = "88.59px";
export const tabminPaddingX: string = "16px";
export const tabminPaddingY: string = "10px";

// ---- Global typography tokens (className presets) ----
export const SUBHEADING = "text-base md:text-lg font-semibold tracking-wide text-gray-900";

export const TEXT = "text-sm md:text-[15px] leading-6 text-gray-800";

/**
 * interface for data objects, should fit everything within data folder, must have every item in here
 * should have either technologies or skills but not both
 */
export interface Project {
    date: string;
    title: string;
    description: string;
    images: { url: string; alt: string }[];
    affiliatedLinks: { label: string; link: string }[];
    technologies?: string[];
    skills?: string[];
}

import { z } from "zod";

const ProjectSchema = z.object({
    date: z.string(),
    title: z.string(),
    description: z.string(),
    images: z.array(z.object({ url: z.string(), alt: z.string() })),
    affiliatedLinks: z.array(z.object({ label: z.string(), link: z.string() })),
    // exactly one of the two
    technologies: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
}).refine(
    (p) => (p.technologies ? 1 : 0) + (p.skills ? 1 : 0) === 1,
    { message: "Project must have exactly one of technologies or skills" }
);

/**
 * Typecheck the projects in the raw JSON string
 * @param rawconfig - raw JSON string from data file
 * @returns array of type-checked projects
 */
export function typecheckProjects(rawconfig: unknown): Project[] {
    return z.array(ProjectSchema).parse(rawconfig);
}