import { useEffect, useMemo, useState } from "react";

function Heatmap(props: { heatMapData: number[], className?: string,numberOfMonths:number })
{
  const [heatMapData,setHeatMapData] = useState<number[][]>();

  function convertNumToArray(num: number)
  {
    // convert number to array of 0s and 1s
    let res = [];
    let idx = 0;
    while (idx < 32) {
      if (num & (1 << idx))res.push(1);
      else res.push(0);
      idx++;
    }
    return res;
  }

  useEffect(()=>{
    // if(!props.heatMapData)return;
    let res:number[][] = [];

    for(let index = 0 ; index < props.heatMapData.length ; index++)
    {
      res.push(convertNumToArray(props.heatMapData[index]));
    }

    setHeatMapData(res);
  },[props.heatMapData])
  
  
  
  const monthsFromCurrent = useMemo(()=>{
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    return months.slice(currentMonth).concat(months.slice(0, currentMonth + 1));
  },[])


  return (
    <div className={`${props.className} overflow-x-auto`}>
      <div className="h-full w-full flex gap-4 justify-center items-center">
        {
          heatMapData?.map((daysArray,monthIndex)=>{
            if(monthIndex < heatMapData.length - props.numberOfMonths)return<></>;
            return(
              <>
                <div key={monthIndex} className="flex flex-col items-center">
                  <div className="gap-[1px] grid grid-rows-7 grid-flow-col">
                    {
                      daysArray?.map((dayValue,dayIndex)=>{
                        let putCross = (dayIndex!= 0 && daysArray[dayIndex - 1] == 1 && daysArray[dayIndex] == 0 && dayIndex != new Date().getDate() - 1)
                        return(
                          <div key={dayIndex} className="bg-background2 border border-text/5 rounded w-[12px] md:w-[16px] xl:w-[12px] 2xl:w-[16px] aspect-square">
                            <div className={`h-full w-full ${(dayValue==1)?"bg-primary":"hidden"} rounded`}/>
                            <svg xmlns="http://www.w3.org/2000/svg" className={` ${(!putCross)?"hidden":""} w-full h-full scale-[2] text-red`} viewBox="0 0 24 24" fill="none">
                              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )
                      })
                    }
                  </div>
                  <h1 className="text-xs mt-4 opacity-70 uppercase hidden lg:block">{monthsFromCurrent[monthIndex]}</h1>
                  <h1 className="text-xs mt-4 opacity-70 uppercase lg:hidden">{monthsFromCurrent[monthIndex].slice(0,3)}</h1>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default Heatmap;
