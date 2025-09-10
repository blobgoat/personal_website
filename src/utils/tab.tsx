//import { useState } from "react";
import React from "react";
import { tabColorActive, tabColorPressed, tabText, tabColorActiveHover, tabColorPressedHover, tabSize, tabPadding, labels } from "./utils";

// ---- Tab color tokens ----




// ---- Small building blocks ----
/**
 * Tab button component
 * takes in children as label. Also takes in label to render text on the tab button
 * Manages its own active state for styling purposes 
 */
// export const Tab: React.FC = () => {
//     //if any color components are not a # and 6 characters long, throw an error
//     if (!/^#([0-9A-Fa-f]{6})$/.test(tabColorActive)) {
//         throw new Error("tabColorActive must be a hex color code of the form #RRGGBB");
//     }
//     // if (!/^#([0-9A-Fa-f]{6})$/.test(textColor)) {
//     //     throw new Error("textColor must be a hex color code of the form #RRGGBB");
//     // }
//     if (!/^#([0-9A-Fa-f]{6})$/.test(tabColorActiveHover)) {
//         throw new Error("hoverColor must be a hex color code of the form #RRGGBB");
//     }
//     if (!/^#([0-9A-Fa-f]{6})$/.test(tabColorPressed)) {
//         throw new Error("activeColor must be a hex color code of the form #RRGGBB");
//     }
//     if (!/^#([0-9A-Fa-f]{6})$/.test(tabColorPressedHover)) {
//         throw new Error("activeColor must be a hex color code of the form #RRGGBB");
//     }
//     return (
//         <button
//             className={`
//         rounded-md ${tabPadding} ${tabSize} font-medium transition
//         bg-[${tabColorActive}] ${tabText}             /* default color */
//         hover:bg-[${tabColorActiveHover}]                       /* hover color */
//         active:bg-[${tabColorPressed}] active:shadow-inner  /* pressed color + drop shadow */
//           `}
//         >
//         </button>
//     );
// };


type TabProps = {
    children?: React.ReactNode;        // label/content inside the tab
    className?: string;

    // Controlled/uncontrolled active state
    active?: boolean;                  // if provided → controlled
    defaultActive?: boolean;           // initial state when uncontrolled
    onActiveChange?: (next: boolean) => void;

    disabled?: boolean;

    // Colors: are static gloabls

    // Layout tokens

} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">;

const hex6 = /^#([0-9A-Fa-f]{6})$/;

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(function Tab(
    {
        children,
        className = "",
        active,                      // controlled value if defined
        defaultActive = false,       // uncontrolled initial
        onActiveChange,
        disabled = false,
        ...rest
    },
    ref
) {
    // Validate colors once (throws in dev if wrong)
    if (![tabColorActive, tabColorActiveHover, tabColorPressed, tabColorPressedHover].every(c => hex6.test(c))) {
        throw new Error("All tab colors must be hex of form #RRGGBB");
    }

    // Controlled–uncontrolled
    const [internal, setInternal] = React.useState(defaultActive);
    const isControlled = active !== undefined;
    const isActive = isControlled ? !!active : internal;

    const setActive = (next: boolean) => {
        if (!isControlled) setInternal(next);
        onActiveChange?.(next);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        //need to know label of e
        const label: string = (e.target as HTMLElement).innerText;
        rest.onClick?.(e);
        if (disabled) return;
        if (!isActive) {
            setActive(true);
            //set the page to the tab label
            setCurrentPage(label);
        } else {
            setActive(false);

            setCurrentPage("Home");

        } // in a tablist, clicking selects this tab
    };

    return (
        <button
            ref={ref}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-disabled={disabled || undefined}
            disabled={disabled}
            onClick={handleClick}
            // Provide CSS variables for colors
            style={
                {
                    ["--tab-bg" as any]: isActive ? tabColorPressed : tabColorActive,
                    ["--tab-hover" as any]: isActive ? tabColorPressedHover : tabColorActiveHover,
                } as React.CSSProperties
            }
            className={`
        rounded-md ${tabPadding} ${tabSize} font-medium transition
        ${tabText}
        bg-[var(--tab-bg)] hover:bg-[var(--tab-hover)]/50 active:shadow-inner
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
            {...rest}
        >
            {children}
        </button>
    );
});

export function TabList({ currentPage, onSelect }: { currentPage: string; onSelect: (label: string) => void }) {
    return (
        <div role="tablist" aria-label="Example">
            {labels.map((label) => (
                <Tab
                    key={label}
                    active={currentPage === label}                // controlled
                    onActiveChange={() => currentPage !== label ? onSelect(label) : onSelect("Home")}  // will switch to home if clicked again
                    className={label === currentPage ? "ring-1 ring-indigo-300" : ""}
                >
                    {label}
                </Tab>
            ))}
        </div>
    );
}

export function TabListWrapper({ currentPage, onSelect }: { currentPage: string; onSelect: (label: string) => void }) {
    return (
        <div>
            <TabList currentPage={currentPage} onSelect={onSelect} />
        </div>
    );
}

export function setCurrentPage(label: any) {
    console.log(`Current page set to: ${label}`);
}

