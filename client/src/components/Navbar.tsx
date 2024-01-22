import Button from './common/Button'
import TextButton from './common/TextButton'

function Navbar(props:{className?:string})
{
    return (
        <nav className={`${props.className} container mx-auto p-8 flex justify-between items-center`}>
            <h1>LOGO HERE</h1>
            <div className='flex gap-4'>
                <TextButton className=''>SIGN IN</TextButton>
                <Button className='' color='primary'>SIGN UP</Button>
            </div>
        </nav>
    )
}

export default Navbar