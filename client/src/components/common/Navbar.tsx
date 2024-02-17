import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import TextButton from './TextButton'
import { useAuth } from '../context/AuthContext'
import Timer from './Timer';
import { useState } from 'react';

function Navbar(props:{className?:string})
{
    const auth = useAuth();

    return (
        <>
            {
            (!auth?.isAuthorized)?(
                <nav className={`${props.className} container mx-auto p-8 flex justify-between items-center`}>
                    <h1>REGULARISE</h1>
                    <div className='flex gap-4'>
                        <Link to='/signin'><TextButton className=''>SIGN IN</TextButton></Link>
                        <Link to='/signup'><Button className='' color='primary'>SIGN UP</Button></Link>
                    </div>
                </nav>
            ):(
                <nav className={`${props.className} container mx-auto p-8 flex justify-between items-center`}>
                    <h1>REGULARISE</h1>
                    <Timer />
                </nav>
            )
        }
        </>
    )
}

export default Navbar