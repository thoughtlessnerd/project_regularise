import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Checklist(props: {
  className?: string;
  fieldsData: any;
}) {
  const [doneFields, setDoneFields] = useState<string[]>([]);
  const auth = useAuth();
  const [timeoutId, setTimeoutId] = useState<number>(-1);

  useEffect(() => {
    if (!props.fieldsData) return;
    setDoneFields(props.fieldsData.lastDone);
  }, [props.fieldsData]);

  useEffect(() => {
    if (timeoutId != -1) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        // console.log("Uploaded Checklist");
        UploadChecklist();
        setTimeoutId(-1);
      }, 1000)
    );
  }, [doneFields]);

  function handleCheck(id: string) {
    setDoneFields((prev) => {
      let result = [...prev];
      if (result.includes(id)) {
        const index = result.indexOf(id);
        result.splice(index, 1);
        return [...result];
      } else {
        return [...result, id];
      }
    });
  }

  async function UploadChecklist() {
    let response;
    try {
      response = await auth?.APIFunctions.PostRequest(
        "/field/done",
        { fields: doneFields },
        true
      );
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={`${props.className} flex flex-col justify-between`}>
      <h1 className="text-2xl font-bold text-center flex justify-between items-center">
        CHECKLIST
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            timeoutId == -1 ? "opacity-0" : ""
          } w-6 h-6 transition-opacity duration-500 animate-spin`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </h1>
      <div className="grow h-full overflow-y-auto m-2 p-2">
        {props.fieldsData &&
          Object.keys(props.fieldsData.fields).map((key, index) => {
            return (
              <div key={index} className="flex gap-4 items-center mt-4">
                <input
                  id={`${key}`}
                  checked={doneFields.includes(key)}
                  onChange={() => handleCheck(key)}
                  type="checkbox"
                  name=""
                  className="appearance-none rounded-full outline outline-1 checked:outline-none outline-primary checked:bg-primary h-6 w-6"
                />
                <label
                  htmlFor={`${key}`}
                  className={`${doneFields.includes(key)?"after:origin-left after:scale-100 opacity-50":"after:origin-right after:scale-0"} after:transition-transform transition-all relative after:bg-text after:absolute after:w-full after:h-[2px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:duration-300`}
                >
                  {key}
                </label>
              </div>
            );
          })}
      </div>
      {/* <Button onClick={()=>UploadChecklist()} color={"primary"}>Update Checklist</Button> */}
    </div>
  );
}
