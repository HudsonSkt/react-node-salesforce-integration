import { useTheme } from "../../Contexts/ThemeContext";

type Props = {
    label: string;
    onClick: () => void;
}
export const ButtonContext = ({label, onClick}: Props)=>{
    const themeCtx = useTheme();
    return(
        <button
        className={`border px-4 py-3 rounded-md
            ${themeCtx?.theme === 'dark' ? 'background-Color: white, color: white' : 'bg-black text-black'}
            `}
        onClick={onClick}
        >
            {label}

        </button>
    )

}