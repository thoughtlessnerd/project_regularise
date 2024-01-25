import { useEffect } from "react"

function Heatmap(props:{fieldsData:any,className?:string})
{
  function convertNumToArray(num:number)
  {
    let res = [];
    while(num != 0)
    {
      res.push((num & 1));
      num = num >> 1;
    }
    return res;
  }
  useEffect(()=>{
    let res = [];
    if(!props.fieldsData)return;
    for(let key in props.fieldsData?.history)
    {
      let curr = props.fieldsData?.history[key];
      console.log(curr);
    } 
  },[props.fieldsData])
  return (
    <div className={`${props.className}`}>

    </div>
  )
}

export default Heatmap