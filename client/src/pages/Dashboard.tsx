import { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import { useAuth } from "../components/context/AuthContext";
import FieldsBento from "../components/dashboard/FieldsBento";
import Input from "../components/common/Input";
import { useModal } from "../components/context/ModalContext";
import Heatmap from "../components/dashboard/Heatmap";
import Checklist from "../components/dashboard/Checklist";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const auth = useAuth();

  const [fieldsData, setFieldsData] = useState<any>();
  const [addFieldModalOpen, setAddFieldModalOpen] = useState<boolean>(false);
  const [newFieldName, setNewFieldName] = useState<InputState>({
    value: "",
    hasError: false,
  });

  const modal = useModal();

  useEffect(() => {
    GetFields();
  }, []);

  const GetFields = async () => {
    try {
      const response: AuthResponseType = await auth?.APIFunctions.GetRequest(
        "/field",
        true
      );
      if (response.status == 200) {
        if (response.data.data) {
          setFieldsData(response.data.data);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  const CreateField = async (e: any) => {
    e.preventDefault();
    if (!newFieldName.value.match(/[\S\s]+[\S]+/)) {
      setNewFieldName((prev) => ({ ...prev, hasError: true }));
      return;
    }
    try {
      const response: AuthResponseType = await auth?.APIFunctions.PostRequest(
        "/field/create",
        { fieldName: newFieldName.value },
        true
      );
      if (response.status == 201) {
        setFieldsData(response.data.data);
        setNewFieldName((prev) => ({ ...prev, value: "" }));
        setAddFieldModalOpen(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const DeleteField = async (fieldName: string) => {
    const modalRes = await modal?.CreateModal("Delete Field", <h1>Are you sure you want to delete this field?<br />This action is permanent</h1>, "Yes", "No");
    if (!modalRes) return;
    try {
      const response: AuthResponseType = await auth?.APIFunctions.DeleteRequest(
        "/field",
        { fieldName: fieldName },
        true
      );
      // console.log(response);
      if (response.status == 200) {
        setFieldsData(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const gap = "gap-4";
  return (
    <>
      <div
        className={`${addFieldModalOpen
          ? "bg-black/80"
          : "pointer-events-none"
          } duration-500 fixed h-screen w-screen top-0 left-0 z-50 grid place-items-center`}
      >
        <div
          onClick={() => {
            setAddFieldModalOpen(false);
          }}
          className={`absolute w-full h-full -z-10`}
        ></div>
        <div
          className={`card max-w-lg w-full p-4 lg:p-8 ${addFieldModalOpen ? "" : "scale-125 opacity-0"
            }`}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-medium">Add Field</h1>
            <svg
              onClick={() => {
                setAddFieldModalOpen(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-text/70 hover:text-primary hover:scale-105 active:scale-95 duration-100 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <form
            onSubmit={CreateField}
            action=""
            className="flex flex-col gap-4 mt-4"
          >
            <Input
              value={newFieldName.value}
              hasError={newFieldName.hasError}
              onChange={(e) =>
                setNewFieldName({ value: e.target.value, hasError: false })
              }
              placeHolder="Nevgon"
            >
              Field Title
            </Input>
            <Button className="w-full" color={"primary"}>
              Create Field
            </Button>
          </form>
        </div>
      </div>
      <section className="container mx-auto px-2 md:px-8">
        <Navbar className="" />
        <div className={`flex flex-col lg:flex-row ${gap}`}>
          <div className={`w-full h-96 lg:w-96 flex flex-col ${gap}`}>
            <div className="card p-4 flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="h-24 w-24 overflow-clip rounded-lg">
                  <img
                    className="h-full w-full object-cover"
                    src="https://s.yimg.com/ny/api/res/1.2/yaTedpbcw4UXmvfZFFKQJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTgwMA--/https://media.zenfs.com/en/globenewswire.com/31aca83a1e85b36a57bd93da2fc4e624"
                    alt=""
                  />
                </div>
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-xl font-bold">{auth?.userdata?.name}</h1>
                  <h1 className="text-text/70">@{auth?.userdata?.username}</h1>
                </div>
                <div className="grid place-items-center">
                  <svg
                    className="duration-150 hover:text-red cursor-pointer hover:scale-110 active:scale-95"
                    onClick={async () => {
                      if (await modal?.CreateModal("Sign Out", <h1>Are you sure you want to Sign Out?</h1>, "Yes", "No"))
                        auth?.APIFunctions.SignOut();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.2958 9V5.25C15.2958 4.65326 15.0658 4.08097 14.6563 3.65901C14.2468 3.23705 13.6914 3 13.1124 3H7.28988C6.7108 3 6.15543 3.23705 5.74596 3.65901C5.33648 4.08097 5.10645 4.65326 5.10645 5.25V18.75C5.10645 19.3467 5.33648 19.919 5.74596 20.341C6.15543 20.7629 6.7108 21 7.28988 21H13.1124C13.6914 21 14.2468 20.7629 14.6563 20.341C15.0658 19.919 15.2958 19.3467 15.2958 18.75V15M11.6567 9L8.7455 12M8.7455 12L11.6567 15M8.7455 12H21.1183"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <Link className="w-full" to={"/settings"}>
                <Button className="w-full" color={"primary"}>User Settings</Button>
              </Link>
            </div>
            <div className="grow card p-4 flex flex-col justify-between">
              <h1 className="font-bold">Today's Daily Quote</h1>
              <p className="opacity-90 text-pretty text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolore perspiciatis reprehenderit inventore iusto doloribus aperiam ipsam perferendis a iste.
              </p>
              <h1 className="text-bold text-xs">~Lorem wala insaan</h1>
            </div>
          </div>
          {/* <Checklist fieldsData={fieldsData} className="grow w-full lg:w-48 h-96 card p-4"/> */}
          <Checklist fieldsData={fieldsData} className="grow w-full lg:w-48 h-96 card p-4" />
          {/* {
            !breakpoints.isXl && <Heatmap fieldsData={fieldsData} className="grow w-full lg:w-96 card p-4"/>
          } */}
        </div>
        <div className="grow w-full mt-4 card p-8">
          <Heatmap className="mt-6" numberOfMonths={13} heatMapData={[546, 468, 446544646, 1234669, 6641239, 665439, 63456639, 634634569, 634534569, 6634569, 6634569, 634669, 634569]}/>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl mt-10 font-semibold">
          Progress at a <span className="gradient-text">Glance</span>
        </h1>
        <div className="h-px md:h-1 bg-gradient-to-r from-primary to-accent max-w-96 mt-1 md:mt-4"></div>
        <FieldsBento
          DeleteField={DeleteField}
          AddFieldFunction={() => {
            setAddFieldModalOpen(true);
          }}
          fieldsData={fieldsData}
        />
      </section>
    </>
  );
}
