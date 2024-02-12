import Navbar from '../components/common/Navbar';

function LandingPage()
{
  return (
    <>
        <img className='fixed top-0 left-0 w-screen h-screen blur-md -z-10 object-cover opacity-10' src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <section className='min-h-screen container mx-auto px-2 md:px-8 flex flex-col justify-between'>
            <Navbar className='absolute'/>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='font-bold tracking-tighter opacity-90 uppercase text-9xl'>Get Stuff Done</h1>
                <h1 className='font-bold tracking-tighter opacity-90 uppercase text-8xl'>QUICKER</h1>
            </div>
        </section>
        <div className="h-screen bg-background">TEST</div>
    </>
  )
}

export default LandingPage