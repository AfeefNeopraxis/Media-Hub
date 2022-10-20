import HeadSection from '../HeadSection'
import Navbar from '../Navbar'
import s from './Body.module.css'

const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            <HeadSection></HeadSection>
            <hr></hr>
            <div>
                This is the body
            </div>
        </div>
    )
}

export default Body