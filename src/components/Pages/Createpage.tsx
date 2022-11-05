import p from './Pages.module.css'
import s from '../../components/Uploads/Uploads.module.css'

const Pages = () => {
    return (
        <div className={p.container}>
            <form>
                <label className="block">
                    <span className={p.inputlabel}>Title</span>
                    <input type="text" name="title" className={p.inputbox} placeholder="Enter your title" />
                </label>
                <label className={p.inputlabel}>Description</label>
                <textarea rows={8} className={p.textarea} placeholder="Describe your page here,these will shown for your users while they are browsing these page......"></textarea>
                {/* <div className='flex justify-between'>
                    <h2 className='font-bold text-sm'>Content type</h2>
                    <div className="flex items-center mr-4 mb-2.5">
                        <input type="checkbox" className="w-4 h-4" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Video</label>
                    </div>
                    <div>
                        <input type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Image</label>
                    </div>
                    <div>
                        <input type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Docs</label>
                    </div>
                </div> */}
                {/* <div className='flex justify-between mb-2.5'>
                    <h2 className='font-bold text-sm'>Choose who can upload</h2>
                    <div className="flex items-center mr-4">
                        <input type="checkbox" className="w-4 h-4" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">My users</label>
                    </div>
                    <div>
                        <input type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Only me</label>
                    </div>
                    <div>
                        <input disabled type="checkbox" className="w-4 h-4  bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">My staff</label>
                    </div>
                </div> */}
                {/* <div className='flex justify-between mb-2.5'>
                    <h2 className='font-bold text-sm'>Choose template</h2>
                    <div className="flex items-center mr-4">
                        <input checked type="checkbox" className="w-4 h-4" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Default</label>
                    </div>
                    <div>
                        <input disabled type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Template 1</label>
                    </div>
                    <div>
                        <input disabled type="checkbox" className="w-4 h-4  bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Template 2</label>
                    </div>
                </div> */}
                <div>
                    <table className="table-fixed">
                        <tbody>
                                <tr>
                                    <td><h2 className='font-bold text-sm'>Content type</h2></td>
                                    <td>
                                        <input type="checkbox" className="w-4 h-4" />
                                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Video</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Image</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="ml-2 text-sm font-medium  dark:text-slate-700">Docs</label>
                                    </td>
                                </tr>
                            <tr>
                                <td><h2 className='font-bold text-sm'>Choose who can upload</h2></td>
                                <td>
                                    <input type="checkbox" className="w-4 h-4" />
                                    <label className="ml-2 text-sm font-medium  dark:text-slate-700">My users</label>
                                </td>
                                <td><input type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label className="ml-2 text-sm font-medium  dark:text-slate-700">Only me</label></td>
                                <td><input disabled type="checkbox" className="w-4 h-4  bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label className="ml-2 text-sm font-medium  dark:text-slate-700">My staff</label></td>
                            </tr>
                            <tr>
                                <td><h2 className='font-bold text-sm'>Choose template</h2></td>
                                <td> <input checked type="checkbox" className="w-4 h-4" />
                                    <label className="ml-2 text-sm font-medium  dark:text-slate-700">Default</label></td>
                                <td><input disabled type="checkbox" className="w-4 h-4 bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label className="ml-2 text-sm font-medium  dark:text-slate-700">Template 1</label></td>
                                <td> <input disabled type="checkbox" className="w-4 h-4  bg-gray-100 rounded border-gray-300   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label className="ml-2 text-sm font-medium  dark:text-slate-700">Template 2</label></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className={s.uploadbtn}>Save page</button>
            </form>
        </div>
    )
}



export default Pages