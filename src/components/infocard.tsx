
/**
 * Top info card that is clickable
 * it should have rounded only top corners. On hover it should turn a slightly darker grey, and the cursor should turn to a pointer.
 * @returns JSX.Element
 */
export const TopInfoCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
    <div className="w-full rounded-t-2xl border border-black border-[1px] p-1 md:p-2 shadow-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        <h4 className="text-[24px] font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="text-[20px] text-gray-800 leading-5 space-y-2">
            {children}
        </div>
    </div>
);

/**
 * Bottom info card that is clickable
 * it should have rounded only bottom corners. On hover it should turn a slightly darker grey, and the cursor should turn to a pointer.
 * @returns JSX.Element
 */
export const BottomInfoCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
    <div className="w-full rounded-b-2xl border border-black border-[1px] p-1 md:p-2 shadow-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        <h4 className="text-[24px] font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="text-[20px] text-gray-800 leading-5 space-y-2">
            {children}
        </div>
    </div>
);

/**
 * same as topinfocard but with no rounded corners
 * @returns JSX.Element
 */
export const RegularInfoCard: React.FC<{ title: string; children: React.ReactNode, handleClick: () => void }> = ({ title, children, handleClick }) => (
    <div className="w-full border border-black border-[1px] p-1 md:p-2 shadow-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        <h4 className="text-[24px] font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="text-[20px] text-gray-800 leading-5 space-y-1">
            {children}
        </div>
    </div>
);