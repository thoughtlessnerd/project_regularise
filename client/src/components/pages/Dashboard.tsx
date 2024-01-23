import Button from "../common/Button";
import Navbar from "../common/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Dashboard()
{
  const auth = useAuth();
  const gap = 'gap-4';
  return (
    <section className='container mx-auto px-2 md:px-8'>
        <Navbar className=''/>
        <div className={`flex h-96 flex-col md:flex-row ${gap}`}>
          <div className={`w-full md:w-96 h-full flex flex-col ${gap}`}>
            <div className="card p-4 flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="h-24 w-24 overflow-clip rounded-lg">
                  <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-xl font-bold">Abhay Chauhan</h1>
                  <h1 className="text-text/70">@thoughtlessnerd</h1>
                </div>
              </div>
              <Button className="w-full" color="primary">Primary</Button>
              <Button className="w-full" color="secondary">Secondary</Button>
            </div>
            <div className="grow card p-4 flex gap-2">
              <div className="h-full bg-primary grow rounded-lg grid place-content-center hover:grow-[2] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.52068 13.5V3.75M6.52068 13.5C6.90674 13.5 7.27698 13.658 7.54996 13.9393C7.82295 14.2206 7.97631 14.6022 7.97631 15C7.97631 15.3978 7.82295 15.7794 7.54996 16.0607C7.27698 16.342 6.90674 16.5 6.52068 16.5M6.52068 13.5C6.13463 13.5 5.76439 13.658 5.4914 13.9393C5.21842 14.2206 5.06506 14.6022 5.06506 15C5.06506 15.3978 5.21842 15.7794 5.4914 16.0607C5.76439 16.342 6.13463 16.5 6.52068 16.5M6.52068 16.5V20.25M18.1657 13.5V3.75M18.1657 13.5C18.5517 13.5 18.922 13.658 19.1949 13.9393C19.4679 14.2206 19.6213 14.6022 19.6213 15C19.6213 15.3978 19.4679 15.7794 19.1949 16.0607C18.922 16.342 18.5517 16.5 18.1657 16.5M18.1657 13.5C17.7796 13.5 17.4094 13.658 17.1364 13.9393C16.8634 14.2206 16.71 14.6022 16.71 15C16.71 15.3978 16.8634 15.7794 17.1364 16.0607C17.4094 16.342 17.7796 16.5 18.1657 16.5M18.1657 16.5V20.25M12.3432 7.5V3.75M12.3432 7.5C12.7292 7.5 13.0995 7.65804 13.3725 7.93934C13.6454 8.22064 13.7988 8.60218 13.7988 9C13.7988 9.39782 13.6454 9.77936 13.3725 10.0607C13.0995 10.342 12.7292 10.5 12.3432 10.5M12.3432 7.5C11.9571 7.5 11.5869 7.65804 11.3139 7.93934C11.0409 8.22064 10.8875 8.60218 10.8875 9C10.8875 9.39782 11.0409 9.77936 11.3139 10.0607C11.5869 10.342 11.9571 10.5 12.3432 10.5M12.3432 10.5V20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="h-full bg-secondary grow rounded-lg grid place-content-center hover:grow-[2] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.006 7.5L19.3995 18.132C19.3668 18.705 19.1228 19.2436 18.7175 19.6373C18.3121 20.031 17.7761 20.2502 17.219 20.25H6.78122C6.22417 20.2502 5.6881 20.031 5.28274 19.6373C4.87738 19.2436 4.63338 18.705 4.6007 18.132L3.9942 7.5M12.0001 10.5V17.25M12.0001 17.25L9.08887 14.25M12.0001 17.25L14.9114 14.25M3.63029 7.5H20.3699C20.9726 7.5 21.4616 6.996 21.4616 6.375V4.875C21.4616 4.254 20.9726 3.75 20.3699 3.75H3.63029C3.02766 3.75 2.53857 4.254 2.53857 4.875V6.375C2.53857 6.996 3.02766 7.5 3.63029 7.5Z" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div onClick={()=>{auth?.APIFunctions.SignOut()}} className="cursor-pointer h-full bg-red grow rounded-lg grid place-content-center hover:grow-[2] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.2958 9V5.25C15.2958 4.65326 15.0658 4.08097 14.6563 3.65901C14.2468 3.23705 13.6914 3 13.1124 3H7.28988C6.7108 3 6.15543 3.23705 5.74596 3.65901C5.33648 4.08097 5.10645 4.65326 5.10645 5.25V18.75C5.10645 19.3467 5.33648 19.919 5.74596 20.341C6.15543 20.7629 6.7108 21 7.28988 21H13.1124C13.6914 21 14.2468 20.7629 14.6563 20.341C15.0658 19.919 15.2958 19.3467 15.2958 18.75V15M11.6567 9L8.7455 12M8.7455 12L11.6567 15M8.7455 12H21.1183" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="grow w-full md:w-96 card p-4">
            Samaan
          </div>
        </div>
        <h1 className="text-6xl mt-10 font-semibold">Progress at a <span className="gradient-text">Glance</span></h1>
    </section>
  )
}