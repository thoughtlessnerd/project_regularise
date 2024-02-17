import { PresentationControls, Environment, Float, ContactShadows, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Button from '../components/common/Button';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';
import RocketModel from '../assets/Model.glb?url';
import Heatmap from '../assets/HeatMap..jpg'
import TextButton from '../components/common/TextButton';

function LandingPage()
{
  const char1 = useGLTF(RocketModel);

  return (
    <>
      <Navbar className='z-10 relative'/>
      <div className="-mt-16 container mx-auto pb-24">
        <section className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <h1 className="text-4xl md:text-7xl font-bold uppercase"><span className="gradient-text">Regularise</span></h1>
            <h1 className="text-1xl md:text-4xl font-medium">Get Stuff Done.</h1>
            <div className="mt-4 md:mt-8 flex gap-4">
              <Link to='/signup'><Button className='' color='primary'>SIGN UP</Button></Link>
              <Link to='/signin'><TextButton className=''>SIGN IN</TextButton></Link>
            </div>
          </div>
          <div className="w-full h-160">
            <Canvas camera={{ fov: 20, position: [4, 2, 6] }}>
              <PresentationControls global rotation={[0,.3,0]} polar={[0,0]} azimuth={[-2,2]} config={{mass:2,tension:400}} snap={{mass:4,tension:400}}>
                <hemisphereLight groundColor={0x3A5CD6} color={0xffffff} intensity={2.5}/>
                <Environment preset="city" />
                <Float speed={1} rotationIntensity={2} >
                  <primitive object={char1.scene}/>
                </Float>
              </PresentationControls>
              <ContactShadows opacity={.4} scale={5} blur={2.4} position-y={-1}/>
            </Canvas>
          </div>
        </section>
        <section className='py-24'>
          <div className="w-full md:w-160 text-xl">
            <h1 className="text-1xl md:text-4xl font-medium uppercase opacity-90">What is</h1>
            <h1 className="text-4xl md:text-7xl font-bold uppercase"><span className="gradient-text">Regularise?</span></h1>
            <p className='mt-8 opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque ratione, sint totam sit officia illum praesentium expedita voluptates accusantium quaerat voluptate dolor tempora nisi magni dolore quibusdam quos molestiae ea inventore!</p>
          </div>
        </section>
        <section className='py-24 flex justify-between'>
          <div className="md:w-160 text-xl">
            <h1 className="text-1xl md:text-4xl font-medium uppercase opacity-90">Consistency</h1>
            <h1 className="text-4xl md:text-7xl font-bold uppercase"><span className="gradient-text">HEATMAPs</span></h1>
            <p className='mt-8 opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque ratione, sint totam sit officia illum praesentium expedita voluptates accusantium quaerat voluptate dolor tempora nisi magni dolore quibusdam quos molestiae ea inventore!</p>
          </div>
            <img className='object-contain origin-right scale-75' src={Heatmap} alt="" />
        </section>
      </div>
    </>
  )
}

export default LandingPage