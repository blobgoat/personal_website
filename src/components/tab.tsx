//import { useState } from "react";
import React from "react";
import { tabColorActive, tabColorPressed, tabText, tabColorActiveHover, tabColorPressedHover, labels, tabminHeight, tabminPaddingX, tabminWidth, tabminPaddingY } from "./utils";

// ---- Tab color tokens ----


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
        //scroll to the top:
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex flex-col flex-grow">
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-disabled={disabled || undefined}
                disabled={disabled}
                onClick={handleClick}
                style={{
                    ["--tab-bg" as any]: isActive ? tabColorPressed : tabColorActive,
                    ["--tab-hover" as any]: isActive ? tabColorPressedHover : tabColorActiveHover,
                    minWidth: tabminWidth,
                    minHeight: tabminHeight,
                    padding: `${tabminPaddingY} ${tabminPaddingX}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row", // Ensure horizontal alignment
                    flexGrow: 1, // Allow the button to expand in size
                } as React.CSSProperties}
                className={`
                    w-full h-full
        rounded-md font-medium transition
        ${tabText + '\n'}
        bg-[var(--tab-bg)] ${isActive ? "shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] ring-inset ring-1 ring-black/10" : ""} hover:bg-[var(--tab-hover)]/50
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
                {...rest}
            >
                {children}
            </button>
        </div>
    );
});

export function TabList({ currentPage, onSelect }: { currentPage: string; onSelect: (label: string) => void }) {
    return (
        <div role="tablist" aria-label="Example" className="flex w-full h-full gap-2 md:gap-10 flex-nowrap justify-center">
            {labels.map((label) => (
                <div className="flex-grow">
                    <Tab
                        key={label}
                        active={currentPage === label}                // controlled
                        onActiveChange={() => currentPage !== label ? onSelect(label) : onSelect("Home")}  // will switch to home if clicked again
                    >
                        {label}
                    </Tab>
                </div>
            ))}
        </div>
    );
}

export function TabListWrapper({ currentPage, onSelect }: { currentPage: string; onSelect: (label: string) => void }) {
    return (
        <TabList currentPage={currentPage} onSelect={onSelect} />

    );
}

export function setCurrentPage(label: any) {
    console.log(`Current page set to: ${label}`);
}