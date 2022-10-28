import { Routes,Route } from 'react-router-dom'
import s from './Uploads.module.css'
import Apps from '../Apps/Apps'
// Upload buttons clicks
const uploadbtn = () => {
    alert('Button is clicked')
}


const Uploads = () => {
    return (
        <div>
            <div className={s.btncontainer}>
                <button className={s.uploadbtn} onClick={uploadbtn}>NEW UPLOAD</button>
            </div>
            <div className={s.uploadcontainer}>
                <h1 className={s.uploadtitle}>UPLOADS</h1>
                <ul className={s.list}>
                    <li>Images</li>
                    <li>Videos</li>
                    <li>Press pages</li>
                    <li>Pdf ,Docs</li>
                </ul>
            </div>
        </div>
    )
}

export default Uploads

