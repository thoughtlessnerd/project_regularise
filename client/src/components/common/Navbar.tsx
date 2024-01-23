import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import TextButton from './TextButton'
import { useAuth } from '../context/AuthContext'
import Timer from './Timer';

function Navbar(props:{className?:string})
{
    const auth = useAuth();
    const location = useLocation();

    return (
        <>
            {
            (!auth?.isAuthorized)?(
                <nav className={`${props.className} container mx-auto p-8 flex justify-between items-center`}>
                    <h1>LOGO HERE</h1>
                    <div className='flex gap-4'>
                        <Link to='/signin'><TextButton className=''>SIGN IN</TextButton></Link>
                        <Link to='/signup'><Button className='' color='primary'>SIGN UP</Button></Link>
                    </div>
                </nav>
            ):(
                <nav className={`${props.className} container mx-auto p-8 flex justify-between items-center`}>
                    <h1>LOGO HERE</h1>
                    <Timer />
                    <div className='gap-4 hidden md:flex'>
                        {
                            (location.pathname == '/')?(
                                <Link to='/landing'><Button className='' color='primary'>Landing Page</Button></Link>
                            ):(
                                <Link to='/'><Button className='' color='primary'>Dashboard</Button></Link>
                            )
                        }
                    </div>
                </nav>
            )
        }
        </>
    )
}

export default Navbar