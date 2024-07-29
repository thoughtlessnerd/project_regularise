import { useState, useEffect } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../context/ModalContext";

export default function TodoList(props: { className?: string }) {
  const [taskList, setTaskList] = useState<{ [key: string]: boolean }>({});
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  const auth = useAuth();
  const modal = useModal();
  const [timeoutId, setTimeoutId] = useState<number>(-1);
  const [newTask, setNewTask] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    GetChecklist();
  }, []);

  useEffect(() => {
    if (!hasFetched) return;
    if (timeoutId != -1) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      Number(
        setTimeout(() => {
          UploadChecklist();
          setTimeoutId(-1);
        }, 1000)
      )
    );
  }, [taskList]);

  async function GetChecklist() {
    let response = await auth?.APIFunctions.GetRequest("/user", true);
    console.log(response);
    if (response?.data?.data?.tasks) {
      setTaskList(response.data.data.tasks);
    }
    setHasFetched(true);
  }

  async function UploadChecklist() {
    await auth?.APIFunctions.PostRequest("/task", { tasks: taskList }, true);
    console.log("Uploaded Checklist");
  }

  function addTask() {
    if (!newTask.match(/[\S\s]+[\S]+/)) {
      toast.error("Please enter a valid task name", {
        position: "bottom-right",
      });
      setHasError(true);
      return;
    }
    if (Object.keys(taskList).includes(newTask)) {
      toast.error("Task already exists", {
        position: "bottom-right",
      });
      setHasError(true);
      return;
    }
    if (newTask.length > 120) {
      toast.error("Task name too long", {
        position: "bottom-right",
      });
      setHasError(true);
      return;
    }
    setTaskList((prev) => {
      let result = { ...prev };
      result[newTask] = false;
      return { ...result };
    });
    setNewTask("");
  }
  async function removeTask(task: string) {
    if (
      !(await modal?.CreateModal(
        "Delete this task?",
        "This action cannot be undone",
        "Delete",
        "Cancel"
      ))
    ) {
      return;
    }
    setTaskList((prev) => {
      let result = { ...prev };
      delete result[task];
      return { ...result };
    });
  }
  async function removeCompletedTasks() {
    if (
      !(await modal?.CreateModal(
        "Delete all completed tasks?",
        "This action cannot be undone",
        "Delete",
        "Cancel"
      ))
    ) {
      return;
    }
    setTaskList((prev) => {
      let result = { ...prev };
      for (let task in result) {
        if (result[task]) {
          delete result[task];
        }
      }
      return { ...result };
    });
  }

  return (
    <div className={`${props.className} flex flex-col justify-between`}>
      <h1 className="text-2xl font-bold text-center flex justify-between items-center">
        TODO LIST
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
        {Object.keys(taskList).map((task, index) => {
          return (
            <div
              key={index}
              className="flex items-center mt-4 gap-2 justify-between"
            >
              <div className="h-full flex gap-4 items-center">
                <input
                  id={`${task}`}
                  className="appearance-none flex-shrink-0 rounded-full outline outline-1 checked:outline-none outline-primary checked:bg-primary h-6 w-6 relative after:w-[50%] after:h-[90%] after:absolute after:translate-x-[90%] after:-translate-y-1/4 after:scale-110 after:rotate-45 after:duration-100 after:border-transparent checked:after:border-text after:border-b-4 after:border-r-4"
                  type="checkbox"
                  checked={taskList[task]}
                  onChange={(e) => {
                    setTaskList((prev) => {
                      let result = { ...prev };
                      result[task] = e.target.checked;
                      return { ...result };
                    });
                  }}
                />
                <label
                  htmlFor={`${task}`}
                  className={`${
                    taskList[task]
                      ? "after:origin-left after:scale-100 opacity-50"
                      : "after:origin-right after:scale-0"
                  } after:transition-transform transition-all relative after:bg-text after:absolute after:w-full after:h-[2px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:duration-300`}
                >
                  {task}
                </label>
              </div>
              <svg
                className="text-text/50 transition-all cursor-pointer hover:text-red hover:scale-105 active:scale-95 flex-shrink-0"
                onClick={() => {
                  removeTask(task);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.0001 6H3.00006V9C4.10463 9 5.00006 9.89543 5.00006 11V15C5.00006 17.8284 5.00006 19.2426 5.87874 20.1213C6.75742 21 8.17163 21 11.0001 21H13.0001C15.8285 21 17.2427 21 18.1214 20.1213C19.0001 19.2426 19.0001 17.8284 19.0001 15V11C19.0001 9.89543 19.8955 9 21.0001 9V6ZM10.5001 11C10.5001 10.4477 10.0523 10 9.50006 10C8.94778 10 8.50006 10.4477 8.50006 11V16C8.50006 16.5523 8.94778 17 9.50006 17C10.0523 17 10.5001 16.5523 10.5001 16V11ZM15.5001 11C15.5001 10.4477 15.0523 10 14.5001 10C13.9478 10 13.5001 10.4477 13.5001 11V16C13.5001 16.5523 13.9478 17 14.5001 17C15.0523 17 15.5001 16.5523 15.5001 16V11Z"
                  fill="currentColor"
                />
                <path
                  d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1">
        <Input
          className="w-full"
          placeHolder="Task"
          value={newTask}
          hasError={hasError}
          onChange={(e) => {
            setHasError(false);
            setNewTask(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            addTask();
          }}
          color={"primary"}
        >
          Add
        </Button>
        <button
          className="bg-red rounded-md p-2 md:p-2.5 text-xs md:text-sm hover:scale-[1.02] transition-transform active:scale-95"
          onClick={() => {
            removeCompletedTasks();
          }}
        >
          <svg
            className="text-text/70 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.0001 6H3.00006V9C4.10463 9 5.00006 9.89543 5.00006 11V15C5.00006 17.8284 5.00006 19.2426 5.87874 20.1213C6.75742 21 8.17163 21 11.0001 21H13.0001C15.8285 21 17.2427 21 18.1214 20.1213C19.0001 19.2426 19.0001 17.8284 19.0001 15V11C19.0001 9.89543 19.8955 9 21.0001 9V6ZM10.5001 11C10.5001 10.4477 10.0523 10 9.50006 10C8.94778 10 8.50006 10.4477 8.50006 11V16C8.50006 16.5523 8.94778 17 9.50006 17C10.0523 17 10.5001 16.5523 10.5001 16V11ZM15.5001 11C15.5001 10.4477 15.0523 10 14.5001 10C13.9478 10 13.5001 10.4477 13.5001 11V16C13.5001 16.5523 13.9478 17 14.5001 17C15.0523 17 15.5001 16.5523 15.5001 16V11Z"
              fill="currentColor"
            />
            <path
              d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
