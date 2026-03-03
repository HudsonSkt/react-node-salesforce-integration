import {    useEffect, useState, type ReactNode } from "react"

interface Props {
        isTrue: boolean
        isSelected?: boolean
        label: string
        onDispatch: (value: boolean) => void
        children?: ReactNode
        colorButton: (value: string) => void
     }




export const CustomView = ({children, isTrue, onDispatch ,isSelected, label, colorButton}: Props )=> {
    const [color, setColor]= useState<"blue"|"green"|"red"|"#d6d0f5">("#d6d0f5")
    
 
        
    useEffect(() => {
        if (isSelected) {
            setColor('green');
            onDispatch(true);
            colorButton(color)
            return;
        }

        if (isTrue) {
            setColor("blue");
            onDispatch(true);
            colorButton(color)
            return;
        }
            colorButton(color)
        setColor("#d6d0f5");
    }  , [isTrue, isSelected, onDispatch]);

        
    

    
    return(
    <>
        <label style={{ color }}>
             <p>{label}</p>
             </label>

         {children}       
    </>

  )
}
