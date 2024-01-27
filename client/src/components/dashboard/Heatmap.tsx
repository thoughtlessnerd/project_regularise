import { useEffect } from "react";

function Heatmap(props: { fieldsData: any; className?: string }) {
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
    let res: any = {}; // will contain array of arrays of 0s and 1s for each month
    if (!props.fieldsData) return;
    for (let key in props.fieldsData?.history) {
      let curr = props.fieldsData?.history[key];
      res[key] = [];

      for (let i = 0; i < curr.length; i++) {
        let currArr = convertNumToArray(curr[i]);

        res[key].push(currArr);
      }
    }
    console.log(res);
  }, [props.fieldsData]);
  return <div className={`${props.className}`}></div>;
}

export default Heatmap;
