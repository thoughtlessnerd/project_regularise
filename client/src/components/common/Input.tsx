import { ReactNode } from "react"

type InputProps = {
    className?:string,
    placeHolder?:string,
    children?:ReactNode,
    type?:React.HTMLInputTypeAttribute,
    id?:string,
    value?:string,
    hasError?:boolean
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}
export default function Input(props:InputProps)
{
    return(
        <div className={props.className}>
            <h2 className="text-text/75 pb-2">{props.children}</h2>
            <input type={`${props.type}`} id={props.id} placeholder={props.placeHolder} value={props.value} onChange={props.onChange} className={`${props.hasError?"border-red":"focus:border-b-accent"} w-full p-2 md:p-3 text-sm bg-background focus:bg-background2 text-light/75 outline-none border-text/5 border-2 rounded-lg focus:rounded-none focus:rounded-t-lg  transition-all duration-500`}/>
        </div>    
    )
}