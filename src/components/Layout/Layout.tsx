import s from './Layout.module.css'

const Layout = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {children}
        </div>
    )
}

export default Layout