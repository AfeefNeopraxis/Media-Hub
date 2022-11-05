import s from '../Uploads/Uploads.module.css'


// Upload buttons clicks


const Apps = () => {
    return (
        <div>
            <div className={s.btncontainer}>
                <button className={s.uploadbtn}>CREATE NEW PAGE</button>
            </div>
            <div className={s.uploadcontainer}>
                <h1 className={s.uploadtitle}>PAGES</h1>
                <ul className={s.list}>
                    <li>American Video Hub</li>
                    <li>Chines Press Hub</li>
                    <li>Indian Press Page</li>
                    <li>Product Image Gallery</li>
                </ul>
            </div>
        </div>
    )
}

export default Apps

