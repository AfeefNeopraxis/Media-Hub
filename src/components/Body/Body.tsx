import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import Pages from '../Pages/Createpage'

const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            <HeadSection></HeadSection>
            <hr></hr>
            <Pages />
        </div>
    )
}

export default Body