import Navbar from '../components/common/Navbar';

function LandingPage()
{
  return (
    <>
        <video className='fixed top-0 left-0 w-screen h-screen blur-md -z-10 object-cover opacity-10' src="https://vod-progressive.akamaized.net/exp=1707499201~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2842%2F12%2F314214609%2F1212268643.mp4~hmac=f5e3b7ac8f58f1576b48c61ab0502239acc135d043ebd68476e2d194a5ae8af5/vimeo-prod-skyfire-std-us/01/2842/12/314214609/1212268643.mp4" autoPlay muted loop></video>
        <section className='min-h-screen container mx-auto px-2 md:px-8 flex flex-col justify-between'>
            <Navbar className='absolute'/>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='font-bold tracking-tighter opacity-90 uppercase text-9xl'>Get Stuff Done.</h1>
            </div>
        </section>
        <div className="h-screen bg-background">TEST</div>
    </>
  )
}

export default LandingPage