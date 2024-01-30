import Heatmap from "./Heatmap";

function FieldsBento(props:{fieldsData:any,AddFieldFunction:()=>void,DeleteField(fieldName: string): Promise<void>})
{
    const fieldCardClass = 'card w-full lg:w-128 grow';

    return (
        <div className="flex flex-wrap gap-4 mt-8 mb-24">
            {
                props.fieldsData && Object.keys(props.fieldsData.fields).map((key,index)=>{
                    return(
                        <div key={index} className={`${fieldCardClass} p-8 flex flex-col`}>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <h1 className="text-3xl font-bold">{key}</h1>
                                    <div className="flex items-center gap-2">
                                        <h1>{props.fieldsData.fields[key]}</h1>
                                        <svg className="scale-125 -translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path d="M5 0.5L9.33013 8H0.669873L5 0.5Z" fill="#31FF39"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`bg-background2 rounded-xl p-4 flex gap-2`}>
                                        <svg className="scale-125" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 13.9999C5 7.6423 9.11183 3.70813 9.80918 3.08663C9.8667 3.03536 9.95041 3.04152 10.0029 3.09794C10.4113 3.53693 12.0605 5.43726 13.1087 8.53777C13.1514 8.66414 13.3278 8.68 13.3939 8.56415C14.2072 7.13948 15.1277 6.30846 15.4118 6.07108C15.4633 6.02805 15.5365 6.02794 15.588 6.07098C16.1309 6.5245 19 9.14825 19 13.9411V13.9999C19 14.9192 18.8189 15.8294 18.4672 16.6787C18.1154 17.528 17.5998 18.2996 16.9497 18.9496C16.2997 19.5997 15.5281 20.1153 14.6788 20.4671C13.8295 20.8188 12.9193 20.9999 12 20.9999C11.0807 20.9999 10.1705 20.8188 9.32122 20.4671C8.47194 20.1153 7.70026 19.5997 7.05025 18.9496C6.40024 18.2996 5.88463 17.528 5.53284 16.6787C5.18106 15.8294 5 14.9192 5 13.9999Z" fill="#FFA41D"/>
                                            <path d="M18.4672 16.6787L18.9291 16.87L18.9291 16.87L18.4672 16.6787ZM16.9497 18.9496L16.5962 18.5961L16.5962 18.5961L16.9497 18.9496ZM14.6788 20.4671L14.8701 20.929L14.8701 20.929L14.6788 20.4671ZM9.32122 20.4671L9.12987 20.929L9.12987 20.929L9.32122 20.4671ZM7.05025 18.9496L7.40381 18.5961L7.40381 18.5961L7.05025 18.9496ZM5.53284 16.6787L5.99478 16.4873L5.99478 16.4873L5.53284 16.6787ZM15.4118 6.07108L15.0913 5.68736L15.4118 6.07108ZM15.588 6.07098L15.9086 5.68727L15.588 6.07098ZM13.1087 8.53777L12.6351 8.6979L13.1087 8.53777ZM13.3939 8.56415L13.8281 8.81204L13.3939 8.56415ZM9.80918 3.08663L9.47651 2.71336L9.80918 3.08663ZM10.0029 3.09794L9.63681 3.43849L10.0029 3.09794ZM9.47651 2.71336C8.74649 3.36398 4.5 7.42418 4.5 13.9999H5.5C5.5 7.86043 9.47717 4.05228 10.1419 3.4599L9.47651 2.71336ZM13.5824 8.37764C12.5041 5.18811 10.8068 3.22805 10.369 2.75738L9.63681 3.43849C10.0157 3.84582 11.617 5.68642 12.6351 8.6979L13.5824 8.37764ZM13.8281 8.81204C14.6035 7.45378 15.4788 6.66667 15.7324 6.4548L15.0913 5.68736C14.7766 5.95024 13.8109 6.82517 12.9597 8.31626L13.8281 8.81204ZM15.2675 6.45469C15.7604 6.86647 18.5 9.36314 18.5 13.9411H19.5C19.5 8.93335 16.5014 6.18253 15.9086 5.68727L15.2675 6.45469ZM18.5 13.9411V13.9999H19.5V13.9411H18.5ZM18.5 13.9999C18.5 14.8535 18.3319 15.6987 18.0052 16.4873L18.9291 16.87C19.306 15.9601 19.5 14.9848 19.5 13.9999H18.5ZM18.0052 16.4873C17.6786 17.276 17.1998 17.9925 16.5962 18.5961L17.3033 19.3032C17.9997 18.6068 18.5522 17.78 18.9291 16.87L18.0052 16.4873ZM16.5962 18.5961C15.9926 19.1997 15.2761 19.6785 14.4874 20.0051L14.8701 20.929C15.7801 20.5521 16.6069 19.9996 17.3033 19.3032L16.5962 18.5961ZM14.4874 20.0051C13.6988 20.3318 12.8536 20.4999 12 20.4999V21.4999C12.9849 21.4999 13.9602 21.3059 14.8701 20.929L14.4874 20.0051ZM12 20.4999C11.1464 20.4999 10.3012 20.3318 9.51256 20.0051L9.12987 20.929C10.0398 21.3059 11.0151 21.4999 12 21.4999V20.4999ZM9.51256 20.0051C8.72394 19.6785 8.00739 19.1997 7.40381 18.5961L6.6967 19.3032C7.39314 19.9996 8.21993 20.5521 9.12987 20.929L9.51256 20.0051ZM7.40381 18.5961C6.80022 17.9925 6.32144 17.276 5.99478 16.4873L5.0709 16.87C5.44781 17.78 6.00026 18.6068 6.6967 19.3032L7.40381 18.5961ZM5.99478 16.4873C5.66813 15.6987 5.5 14.8535 5.5 13.9999H4.5C4.5 14.9848 4.69399 15.9601 5.0709 16.87L5.99478 16.4873ZM15.7324 6.4548C15.5989 6.56633 15.4021 6.56719 15.2675 6.45469L15.9086 5.68727C15.6709 5.4887 15.3278 5.48977 15.0913 5.68736L15.7324 6.4548ZM12.6351 8.6979C12.8186 9.24068 13.5523 9.29524 13.8281 8.81204L12.9597 8.31626C13.1033 8.06476 13.4843 8.0876 13.5824 8.37764L12.6351 8.6979ZM10.1419 3.4599C9.98521 3.5995 9.75927 3.57014 9.63681 3.43849L10.369 2.75738C10.1416 2.5129 9.7482 2.47122 9.47651 2.71336L10.1419 3.4599Z" fill="#FF7C1D"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.04628 16.3844C8.3817 14.1306 10.4553 12.2172 11.4581 11.4102C11.7785 11.1523 12.2216 11.1523 12.5421 11.4102C13.5448 12.2172 15.6183 14.1306 15.9537 16.3844C15.9554 16.3958 15.9569 16.4071 15.958 16.4184C15.9857 16.6083 16 16.8025 16 17C16 19.2091 14.2091 21 12 21C9.79086 21 8 19.2091 8 17C8 16.8024 8.01432 16.6083 8.04197 16.4184C8.04315 16.4071 8.04459 16.3958 8.04628 16.3844Z" fill="#FFCD1D"/>
                                        </svg>
                                        <h1 className="text-orange-500 font-bold text-xl">
                                            {props.fieldsData.streaks[key]}
                                        </h1>
                                    </div>
                                    <svg className="text-text/50 transition-all cursor-pointer hover:text-red hover:scale-105 active:scale-95" onClick={()=>{
                                        props.DeleteField(key);
                                    }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M21.0001 6H3.00006V9C4.10463 9 5.00006 9.89543 5.00006 11V15C5.00006 17.8284 5.00006 19.2426 5.87874 20.1213C6.75742 21 8.17163 21 11.0001 21H13.0001C15.8285 21 17.2427 21 18.1214 20.1213C19.0001 19.2426 19.0001 17.8284 19.0001 15V11C19.0001 9.89543 19.8955 9 21.0001 9V6ZM10.5001 11C10.5001 10.4477 10.0523 10 9.50006 10C8.94778 10 8.50006 10.4477 8.50006 11V16C8.50006 16.5523 8.94778 17 9.50006 17C10.0523 17 10.5001 16.5523 10.5001 16V11ZM15.5001 11C15.5001 10.4477 15.0523 10 14.5001 10C13.9478 10 13.5001 10.4477 13.5001 11V16C13.5001 16.5523 13.9478 17 14.5001 17C15.0523 17 15.5001 16.5523 15.5001 16V11Z" fill="currentColor"/>
                                        <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            </div>
                            <Heatmap className="mt-6" numberOfMonths={6} heatMapData={props?.fieldsData?.history[key]}/>
                        </div>
                    )
                })
            }
            <div onClick={()=>{props.AddFieldFunction()}} className={`${fieldCardClass} grid place-items-center group cursor-pointer`}>
            <div className="flex justify-center items-center gap-2 group-hover:scale-125 group-active:scale-100 duration-300 h-64">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h1 className="text-xl">Add Field</h1>
            </div>
            </div>
        </div>
    )
}

export default FieldsBento