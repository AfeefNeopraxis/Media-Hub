import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'

const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {/* <HeadSection></HeadSection> */}
            {/* <hr></hr> */}
            {/* <div className='bg-red-500 w-1/2 h-1/2 overflow-hidden'> */}
                {/* <p>This is body</p> */}
                <img src={img}  className='h-full aspect-video m-auto overflow-hidden object-cover' />

            {/* </div> */}
        </div>
    )
}

export default Body