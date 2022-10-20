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
                <NavItem name="Home" iconUrl="./Icons/navbar/home.svg" />
                <NavItem name="Upload" iconUrl="./Icons/navbar/documentupload.svg" />
                <NavItem name="Apps" iconUrl="./Icons/navbar/book.svg" />
                <NavItem name="Theme" iconUrl="./Icons/navbar/colorswatch.svg" />
                <NavItem name="Settings" iconUrl="./Icons/navbar/settings.svg" />
                <NavItem name="Users" iconUrl="./Icons/navbar/user.svg" />
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