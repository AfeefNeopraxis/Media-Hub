import { useContext } from "react";
import InputText, { InputTextArea } from "../../components/Common/FormInputs";
import { AppContext } from "../../helpers/context/appContext";
import p from "./EditPage.module.css";

const Pages = () => {
  const { currentPage } = useContext(AppContext);

  return (
    <div className={p.container}>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <InputText
          label="Title"
          value={currentPage?.name} />
        <InputTextArea
          label="Description"
          placeholder="Describe your page here,these will shown for your users while they are browsing these page......"
          value={currentPage?.description}
        />
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        </div>
        <button className="bg-amber-400 font-medium mt-5 py-2 px-4 rounded hover:bg-amber-500" >
        Save page
      </button>
      </form>
    </div>
  );
};

export default Pages;
