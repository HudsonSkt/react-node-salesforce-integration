import type React from "react"
import * as S from "./ContactForcePage.style"

interface ContactPageProps{
    children: React.ReactNode;
}

export const ContactForcePage = ( {children}: ContactPageProps)=>{
 
   <S.MainContactForcePage >{children} </S.MainContactForcePage>

}