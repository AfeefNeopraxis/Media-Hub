import { Link } from 'react-router-dom'
import HeadSection from '../HeadSection'
import s from './Navbar.module.css'

const Navbar = ({ children }: any) => {
    return (
        <div className='w-16'>
        <div className={s.rootContainer}>
            <HeadSection>
                <div className={s.logo}>LOGO</div>
            </HeadSection>
            <div className={s.navbody}>
                {/* <Link to='/'>
                  <NavItem name="Home" iconUrl="./Icons/navbar/home.svg" />
                </Link>
                <Link to='/upload'>
                    <NavItem name="Upload" iconUrl="./Icons/navbar/documentupload.svg" />
                </Link>
                <Link to='/apps'>
                   <NavItem name="Apps" iconUrl="./Icons/navbar/book.svg" />
                </Link>
                <Link to='/theme'>
                    <NavItem name="Theme" iconUrl="./Icons/navbar/colorswatch.svg" />
                </Link>
                <Link to='/settings'>
                    <NavItem name="Settings" iconUrl="./Icons/navbar/settings.svg" /> 
                </Link>
                <Link to='/users'>
                    <NavItem name="Users" iconUrl="./Icons/navbar/user.svg" />
                </Link> */}
            </div>
        </div>
        </div>
    )
}

export default Navbar

const NavItem = ({ name, iconUrl }: any) => {
    return (
        <div className={s.navItem}>
            <img src={iconUrl} alt={name} />
            <div>{name}</div>
        </div>
    )
}