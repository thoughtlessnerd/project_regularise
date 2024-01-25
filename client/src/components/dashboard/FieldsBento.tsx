function FieldsBento(props:{fieldsData:any,AddFieldFunction:()=>void})
{
    const fieldCardClass = 'card h-48 md:h-64 w-128 grow';

    return (
        <div className="flex flex-wrap gap-4 mt-8 mb-24">
            {
                props.fieldsData && Object.keys(props.fieldsData.fields).map((key,index)=>{
                    return <div key={index} className={`${fieldCardClass} flex flex-col justify-center items-center`}>
                        <h1 className="text-4xl font-bold">
                            {props.fieldsData.fields[key]}
                        </h1>
                        <h1 className="text-2xl">
                            {key}
                        </h1>
                    </div>
                })
            }
            <div onClick={()=>{props.AddFieldFunction()}} className={`${fieldCardClass} grid place-items-center group cursor-pointer`}>
            <div className="flex justify-center items-center gap-2 group-hover:scale-125 group-active:scale-100 duration-300">
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