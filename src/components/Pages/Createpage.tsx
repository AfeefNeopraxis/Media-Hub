import p from './Pages.module.css'

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

                <div>
                    <table className="table-fixed w-full h-36">
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
            </form>
            <button className='bg-amber-400 font-medium mt-5 py-2 px-4 rounded hover:bg-amber-500'>Save page</button>
        </div>
    )
}



export default Pages