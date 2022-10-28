import s from './Card.module.css'

const Card = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {children}
        </div>
    )
}

export default Card