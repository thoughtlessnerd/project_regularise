import { useEffect, useState } from "react";
import useBreakpoints from "../hooks/useBreakpoints";

function Heatmap(props: { fieldsData: any; className?: string })
{
  const [heatMapData,setHeatMapData] = useState<number[][]>();

  function convertNumToArray(num: number) {
    // convert number to array of 0s and 1s
    let res = [];
    let idx = 0;
    while (idx < 32) {
      if (num & (1 << idx)) {
        res.push(1);
      } else {
        res.push(0);
      }
      idx++;
    }
    return res;
  }

  useEffect(() => {
    if (!props.fieldsData) return;
    let result:number[][] = new Array(13).fill(0).map(() => new Array(32).fill(0));
    
    for (let key in props.fieldsData?.history) {
      let curr = props.fieldsData?.history[key];
      
      let toAdd:number[][] = [];

      for (let i = 0; i < curr.length; i++) {
        let currArr = convertNumToArray(curr[i]);
        toAdd.push(currArr);
      }
      for(let i = 0 ; i < 13 ; i++)
      {
        for(let j = 0 ; j < 32 ; j ++)
        {
          result[i][j] += toAdd[i][j].valueOf();
        }
      }
    }
    console.log(result);
    setHeatMapData(result);
  }, [props.fieldsData]);

  const currentMonthIndex = new Date().getMonth();
  const allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthStrings = Array.from({ length: 13 }, (_, index) => {
    const monthIndex = (currentMonthIndex + index) % 12;
    return allMonths[monthIndex];
  });

  
  function getColor(val:number)
  {
    if(val > 4)return "bg-primary";

    const colors:{[key:number]:string} = {
      0:"bg-primary/0",
      1:"bg-primary/20",
      2:"bg-primary/50",
      3:"bg-primary/70",
      4:"bg-primary/90",
    }
    return colors[val];
  }

  return (
    <div className={`${props.className} p-4`}>
      <div className="flex justify-between w-full p-4 gap-8 overflow-x-auto md:overflow-x-visible">
        {
          heatMapData?.map((monthArr,month)=>{
            return (
              <div key={month} className={`${(month < heatMapData.length/2)?"hidden 2xl:block":""}`}>
                <div className="grid grid-flow-col grid-rows-7 gap-1">
                  {
                    monthArr.map((val,date)=>{
                      let currentDate = new Date().getDate()
                      if(month == heatMapData.length-1 && date > currentDate)
                      {
                        return<></>
                      }
                      return (
                        <div key={date} className={`bg-background2 rounded-sm w-2 md:w-3 h-2 md:h-3 relative group`}>
                          <div className={`${getColor(val)} w-full h-full`}/>
                          <div
                            className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 z-10"
                          >
                            <span className="text-zinc-400 whitespace-nowrap">
                              {val} Task{val==1?"":"s"} done
                              <br />
                              <span className="text-xs">{date}-{month}</span>
                            </span>
                            <div
                              className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
                            ></div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <h1 className="text-xs opacity-50 mt-4">{monthStrings[month]}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Heatmap;
