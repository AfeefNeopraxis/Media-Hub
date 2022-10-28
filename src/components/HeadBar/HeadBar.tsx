import s from './HeadBar.module.css'

const HeadBar = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            <div className={s.logo}>LOGO</div>
        </div>
    )
}

export default HeadBar