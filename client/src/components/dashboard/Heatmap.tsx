import { useEffect, useMemo, useRef, useState } from "react";

function Heatmap(props: {
  heatMapData: { [key: string]: number[] };
  className?: string;
  numberOfMonths: number;
}) {
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
    let res: number[][] = Array.from({ length: 13 }, () => Array(32).fill(0));
    if (!props.heatMapData) {
      setHeatMapData(res);
      return;
    }

    for (let fieldName in props.heatMapData) {
      let currentFieldData: number[][] = props.heatMapData[fieldName].map(
        (val) => convertNumToArray(val)
      );

      for (let i = 0; i < currentFieldData.length; i++) {
        for (let j = 0; j < currentFieldData[i].length; j++) {
          res[i][j] += currentFieldData[i][j];
        }
      }
    }
    // for (let index = 0; index < props.heatMapData.length; index++) {
    //   res.push(convertNumToArray(props.heatMapData[index]));
    // }
    setHeatMapData(res);
  }, [props.heatMapData]);

  useEffect(() => {
    scrollTo(1);
  }, [heatMapData]);

  function scrollTo(val: number) {
    if (scrollerRef.current)
      scrollerRef.current?.scrollTo({
        left: val * scrollerRef.current.scrollWidth,
        behavior: "smooth",
      });
  }

  const monthsFromCurrent = useMemo(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const isLeapYear = (year: number) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    const months = [
      { name: "January", number: 1, days: 31 },
      { name: "February", number: 2, days: 28 }, // Note: Leap year handling is not included for simplicity TODO
      { name: "March", number: 3, days: 31 },
      { name: "April", number: 4, days: 30 },
      { name: "May", number: 5, days: 31 },
      { name: "June", number: 6, days: 30 },
      { name: "July", number: 7, days: 31 },
      { name: "August", number: 8, days: 31 },
      { name: "September", number: 9, days: 30 },
      { name: "October", number: 10, days: 31 },
      { name: "November", number: 11, days: 30 },
      { name: "December", number: 12, days: 31 },
    ];
    let ring = months
      .slice(currentMonth)
      .concat(months.slice(0, currentMonth + 1));
    if (ring[12].name == "February") {
      ring[12] = { ...ring[12], days: isLeapYear(currentYear) ? 29 : 28 };
      ring[0] = { ...ring[0], days: isLeapYear(currentYear - 1) ? 29 : 28 };
    }
    return months.slice(currentMonth).concat(months.slice(0, currentMonth + 1));
  }, []);

  function getFirstDayOfPreviousYearMonth() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Calculate the previous year
    const previousYear = currentYear - 1;

    // Create a new Date object for the first day of the current month of the previous year
    const firstDayOfPreviousYearMonth = new Date(previousYear, currentMonth, 1);

    // getDay() returns the day of the week (0 = Sunday, 1 = Monday, ...)
    return firstDayOfPreviousYearMonth.getDay();
  }

  // return<></>

  const numberOfFields = useMemo<number>(() => {
    if (!props.heatMapData) return 0;
    return Object.keys(props.heatMapData).length;
  }, [props.heatMapData]);

  return (
    <div className={`${props.className} relative`}>
      {
        <div className="absolute pointer-events-none w-full h-full z-30 hidden md:flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="-translate-x-full w-6 h-6 duration-150 hover:text-primary hover:scale-105 active:scale-95 pointer-events-auto"
            onClick={() => {
              scrollTo(0);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="translate-x-full w-6 h-6 duration-150 hover:text-primary hover:scale-105 active:scale-95 pointer-events-auto"
            onClick={() => {
              scrollTo(1);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      }
      <div
        ref={scrollerRef}
        className={`overflow-x-auto overflow-y-visible p-4`}
      >
        <div className="h-full w-max flex gap-4 justify-center items-center">
          {(() => {
            let offsetterIndex = getFirstDayOfPreviousYearMonth() - 1;

            return heatMapData?.map((daysArray, monthIndex) => {
              if (monthIndex < heatMapData.length - props.numberOfMonths)
                return <></>;
              return (
                <div key={monthIndex} className="flex flex-col items-center">
                  <div className="gap-[1px] grid grid-rows-7 grid-flow-col">
                    {daysArray?.map((dayValue, dayIndex) => {
                      let today = new Date().getDate() - 1;
                      // let lastVal = 0;
                      // if (monthIndex != 0)
                      //   lastVal = monthsFromCurrent[monthIndex - 1].days % 7;
                      // console.log(lastVal);
                      let putCross =
                        dayIndex != 0 &&
                        daysArray[dayIndex - 1] != 0 &&
                        daysArray[dayIndex] == 0 &&
                        dayIndex != today;
                      if (
                        (monthIndex == 12 && dayIndex >= today) ||
                        dayIndex >= monthsFromCurrent[monthIndex].days
                      )
                        return (
                          <div
                            key={dayIndex}
                            className={`${
                              dayIndex == today && monthIndex == 12
                                ? "bg-green-600"
                                : ""
                            } rounded w-[12px] md:w-[16px] xl:w-[12px] 2xl:w-[16px] aspect-square`}
                          ></div>
                        );
                      offsetterIndex++;
                      return (
                        <div
                          style={{
                            gridRowStart:
                              dayIndex == 0 ? (offsetterIndex % 7) + 1 : "",
                          }}
                          key={dayIndex}
                          className={
                            "bg-background2 border duration-100 hover:border-text/50 border-text/5 rounded w-[12px] md:w-[16px] xl:w-[12px] 2xl:w-[16px] aspect-square group relative flex justify-center items-center"
                          }
                        >
                          <span
                            className={`absolute select-none p-4 origin-center transition-all duration-100 z-50 bg-primary rounded-sm group-hover:opacity-100 group-hover:scale-100 scale-0 pointer-events-none opacity-0 h-full w-full text-center flex justify-center items-center ${
                              offsetterIndex % 7 >= 3
                                ? "-translate-y-full"
                                : "translate-y-full"
                            }`}
                          >
                            <span className="">{dayIndex + 1}</span>
                          </span>
                          <div
                            style={{
                              opacity:
                                (dayValue ? dayValue : 0) / numberOfFields
                                  ? numberOfFields
                                  : 1,
                            }}
                            className={`h-full w-full ${
                              dayValue != 0 ? "bg-primary" : "hidden"
                            } rounded`}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={` ${
                              !putCross ? "hidden" : ""
                            } w-full h-full scale-[2] text-red`}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18 6L6 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 6L18 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                  <h1 className="text-xs mt-4 opacity-70 uppercase hidden lg:block">
                    {monthsFromCurrent[monthIndex].name}
                  </h1>
                  <h1 className="text-xs mt-4 opacity-70 uppercase lg:hidden">
                    {monthsFromCurrent[monthIndex].name.slice(0, 3)}
                  </h1>
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}

export default Heatmap;
