import InputText, {
  InputCheckbox,
  InputTextArea,
} from "../../components/Common/FormInputs";
import p from "./EditPage.module.css";

type MultipleSelection = {
  label: string;
  options: Options[];
};

type Options = {
  name: string;
  disabled?: boolean;
};

const Pages = () => {
  var choices: MultipleSelection[] = [
    {
      label: "Content type",
      options: [{ name: "Video" }, { name: "Image" }, { name: "Docs" }],
    },
    {
      label: "Choose who can upload",
      options: [
        { name: "My users" },
        { name: "Only me" },
        { name: "My staff", disabled: true },
      ],
    },
    {
      label: "Choose template",
      options: [
        { name: "Default" },
        { name: "Template 1", disabled: true },
        { name: "Template 2", disabled: true },
      ],
    },
  ];

  return (
    <div className={p.container}>
      <form>
        <InputText label="Title" />
        <InputTextArea
          label="Description"
          placeholder="Describe your page here,these will shown for your users while they are browsing these page......"
        />
        <div>
          <table className="table-fixed w-full h-36">
            <tbody>
              {choices.map((choice, choiceIndex) => (
                <tr key={"choice-" + choiceIndex}>
                  <td>
                    <h2 className="font-bold text-sm">{choice.label}</h2>
                  </td>
                  {choice.options.map((option, optionIndex) => (
                    <td key={"option-" + optionIndex}>
                      <InputCheckbox
                        label={option.name}
                        disabled={option.disabled}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
      <button className="bg-amber-400 font-medium mt-5 py-2 px-4 rounded hover:bg-amber-500">
        Save page
      </button>
    </div>
  );
};

export default Pages;
