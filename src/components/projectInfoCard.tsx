import React from "react";

/**
 * Top info card that is clickable
 * it should have rounded only top corners. On hover it should turn a slightly darker grey, and the cursor should turn to a pointer.
 * @returns JSX.Element
 */
export const TopProjectInfoCard: React.FC<{ date: string; title: string; children: React.ReactNode; handleClick?: () => void }> = ({ date, title, children, handleClick = () => { } }) => (
    <div className=" border border-black border-[1px] p-2 md:p-1 shadow-sm bg-[#D9D9D9] w-full" onClick={handleClick}>
        <div className="flex justify-between items-center mb-1">
            <h4 className="text-[30px] font-bold text-gray-900 flex flex-wrap items-center">
                {title}
            </h4>
            <span className="text-sm font-normal text-gray-700 whitespace-nowrap">
                {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
        </div>
        <div className="text-[20px] text-gray-800 leading-[100%] space-y-2">
            {children}
        </div>
    </div>
);

/**
 * Bottom info card that is clickable
 * it should have rounded only bottom corners. On hover it should turn a slightly darker grey, and the cursor should turn to a pointer.
 * @returns JSX.Element
 */
export const BottomProjectInfoCard: React.FC<{ links: { label: string; link: string }[]; children: React.ReactNode; handleClick?: () => void }> = ({ links, children, handleClick = () => { } }) => (
    <div className=" border border-black bg-[#D9D9D9] border-[1px] p-2 md:p-1 shadow-sm w-full" onClick={handleClick}>
        <div className="flex flex-wrap justify-start items-center space-x-2">
            {links.map((link, index) => (
                <React.Fragment key={link.label}>
                    <a href={link.link} className="text-blue-500 hover:underline px-2">
                        {link.label}
                    </a>
                    {index < links.length - 1 && <span className="text-gray-500">|</span>}
                </React.Fragment>
            ))}
        </div>
        <div className="text-[20px] text-gray-800 leading-5 space-y-2">
            {children}
        </div>
    </div>
);

/**
 * same as topinfocard but with no rounded corners
 * @returns JSX.Element
 */
export const RegularProjectInfoCard: React.FC<{ children: React.ReactNode, handleClick?: () => void }> = ({ children, handleClick = () => { } }) => (
    <div className="border border-black border-[1px] p-1 md:p-2 shadow-sm bg-[#D9D9D9] w-full" onClick={handleClick}>
        <h4 className="text-[24px] font-semibold text-gray-900 mb-1">{ }</h4>
        <div className="text-[20px] text-gray-800 leading-5 space-y-1">
            {children}
        </div>
    </div>
);

/**
 * same as topinfocard but with no rounded corners
 * @returns JSX.Element
 */
export const RegularInfoTitleCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
    <div className="border border-black border-[1px] p-1 md:p-2 shadow-sm bg-[#D9D9D9] w-full" onClick={handleClick}>
        <h4 className="text-[24px] font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="text-[20px] text-gray-800 leading-5 space-y-1">
            {children}
        </div>
    </div>
);