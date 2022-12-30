import { cloneElement, useContext, useRef, useState } from "react";
// import { useRouter } from 'next/router';

import s from './PopUp.module.css'
import InputText from "../Common/FormInputs";
import { AppContext } from "../../helpers/context/appContext";


const PopUp = ({ trigger }: { trigger: JSX.Element }) => {
    const { createPage } = useContext(AppContext);
    const pageNameRef = useRef<HTMLInputElement>(null);

    const [isOpen, setOpen] = useState(false);

    const showPopUp = () => setOpen(true)
    const hidePopUp = () => setOpen(false)


    return (
        <>
            {cloneElement(trigger, { onClick: showPopUp, })}
            {
                isOpen && <div className={s.container} id="modal-id">
                    <div className={s.outside} onClick={hidePopUp}></div>
                    <form className={s.content}
                        onSubmit={async (e) => {
                            e.preventDefault();
                            createPage(pageNameRef.current!.value)
                            hidePopUp()
                        }}>
                        <div className="text-center p-5">
                            <InputText
                                label="Page Name"
                                inputRef={pageNameRef}
                                required
                            />
                            <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <button className={s.btnCancel} type={"reset"} onClick={hidePopUp}>
                                    Cancel
                                </button>
                                <button className={s.btnAccept} type={"submit"}>
                                    Accept
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default PopUp;