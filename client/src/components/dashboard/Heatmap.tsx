import { useEffect, useMemo, useRef, useState } from "react";

function Heatmap(props: { heatMapData: {[key:string]:number[]}, className?: string, numberOfMonths: number }) {
  const [heatMapData, setHeatMapData] = useState<number[][]>();
  const scrollerRef = useRef<HTMLDivElement>(null);

  function convertNumToArray(num: number) {
    // convert number to array of 0s and 1s
    let res = [];
    let idx = 0;
    while (idx < 32) {
      if (num & (1 << idx)) res.push(1);
      else res.push(0);
      idx++;
    }
    return res;
  }

  useEffect(() => {
    if(!props.heatMapData)return;
    let res: number[][] = Array.from({ length: 13 }, () => Array(32).fill(0));;

    for(let fieldName in props.heatMapData)
    {
      let currentFieldData: number[][] = props.heatMapData[fieldName].map(val=>convertNumToArray(val));

      for(let i = 0 ; i < 13 ; i++)
      {
        for(let j = 0 ; j < 32 ; j ++)
        {
          res[i][j] += currentFieldData[i][j];
        }
      }
    }
    // for (let index = 0; index < props.heatMapData.length; index++) {
    //   res.push(convertNumToArray(props.heatMapData[index]));
    // }
    setHeatMapData(res);
  }, [props.heatMapData])

  useEffect(()=>{
    scrollTo(1)
  },[heatMapData])

  function scrollTo(val:number)
  {
    if(scrollerRef.current)
    scrollerRef.current?.scrollTo({
      left: val*scrollerRef.current.scrollWidth,
      behavior: 'smooth'
    })
  }

  const monthsFromCurrent = useMemo(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const months = [
      { name: 'January', number: 1, days: 31 },
      { name: 'February', number: 2, days: 28 }, // Note: Leap year handling is not included for simplicity TODO
      { name: 'March', number: 3, days: 31 },
      { name: 'April', number: 4, days: 30 },
      { name: 'May', number: 5, days: 31 },
      { name: 'June', number: 6, days: 30 },
      { name: 'July', number: 7, days: 31 },
      { name: 'August', number: 8, days: 31 },
      { name: 'September', number: 9, days: 30 },
      { name: 'October', number: 10, days: 31 },
      { name: 'November', number: 11, days: 30 },
      { name: 'December', number: 12, days: 31 }
    ];

    return months.slice(currentMonth).concat(months.slice(0, currentMonth + 1));
  }, [])

  // return<></>

  const numberOfFields = useMemo<number>(()=>{
    if(!props.heatMapData)return 0;
    return Object.keys(props.heatMapData).length;
  },[props.heatMapData])


  return (
    <div className={`${props.className} relative`}>
      {
        <div className="absolute pointer-events-none w-full h-full z-30 hidden md:flex items-center justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-translate-x-full w-6 h-6 duration-150 hover:text-primary hover:scale-105 active:scale-95 pointer-events-auto" onClick={()=>{scrollTo(0)}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="translate-x-full w-6 h-6 duration-150 hover:text-primary hover:scale-105 active:scale-95 pointer-events-auto" onClick={()=>{scrollTo(1)}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      }
      <div ref={scrollerRef} className={`overflow-x-auto`}>
        <div className="h-full w-max flex gap-4 justify-center items-center">
          {
            heatMapData?.map((daysArray, monthIndex) => {
              if (monthIndex < heatMapData.length - props.numberOfMonths) return <></>;
              return (
                  <div key={monthIndex}  className="flex flex-col items-center">
                    <div className="gap-[1px] grid grid-rows-7 grid-flow-col">
                      {
                        daysArray?.map((dayValue, dayIndex) => {
                          let today = new Date().getDate();
                          let putCross = (dayIndex != 0 && daysArray[dayIndex - 1] == 1 && daysArray[dayIndex] == 0 && dayIndex != today - 1)
                          if ((monthIndex == 12 && dayIndex >= today) || dayIndex >= monthsFromCurrent[monthIndex].days)
                            return (
                                <div key={dayIndex} className={`${dayIndex==today?"bg-green-600":""} rounded w-[12px] md:w-[16px] xl:w-[12px] 2xl:w-[16px] aspect-square`}>
                                  
                                </div>
                            )
                          return (
                              <div key={dayIndex} className="bg-background2 border border-text/5 rounded w-[12px] md:w-[16px] xl:w-[12px] 2xl:w-[16px] aspect-square">
                                <div style={{opacity:(dayValue/numberOfFields)}} className={`h-full w-full ${(dayValue == 1) ? "bg-primary" : "hidden"} rounded`} />
                                <svg xmlns="http://www.w3.org/2000/svg" className={` ${(!putCross) ? "hidden" : ""} w-full h-full scale-[2] text-red`} viewBox="0 0 24 24" fill="none">
                                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                          )
                        })
                      }
                    </div>
                    <h1 className="text-xs mt-4 opacity-70 uppercase hidden lg:block">{monthsFromCurrent[monthIndex].name}</h1>
                    <h1 className="text-xs mt-4 opacity-70 uppercase lg:hidden">{monthsFromCurrent[monthIndex].name.slice(0, 3)}</h1>
                  </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Heatmap;
