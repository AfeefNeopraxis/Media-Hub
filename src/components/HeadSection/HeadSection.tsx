import s from './HeadSection.module.css'

const HeadSection = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {children}
        </div>
    )
}

export default HeadSection