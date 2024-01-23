import { ReactNode } from 'react'

function Button(props:{
    children?:ReactNode,
    className?:string,
    color:"primary"|"secondary"|"accent",
    onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined
})
{

    let color:{[key: string]: string;} = {
        "primary":"bg-primary",
        "secondary":"bg-secondary",
        "accent":"bg-accent",
    }
    return (
        <button onClick={props.onClick} className={`${props.className} ${color[props.color]} rounded-md px-4 py-2 md:py-2.5 md:px-6 text-xs md:text-sm hover:scale-[1.02] transition-transform active:scale-95`}>{props.children}</button>
    )
}

export default Button;