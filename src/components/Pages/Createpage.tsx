import p from "./Pages.module.css";

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
        <label className="block">
          <span className={p.inputlabel}>Title</span>
          <input
            type="text"
            name="title"
            className={p.inputbox}
            placeholder="Enter your title"
          />
        </label>
        <label className={p.inputlabel}>Description</label>
        <textarea
          rows={8}
          className={p.textarea}
          placeholder="Describe your page here,these will shown for your users while they are browsing these page......"
        ></textarea>

        <div>
          <table className="table-fixed w-full h-36">
            <tbody>
              {choices.map((choice, choiceIndex) => {
                return (
                  <tr key={"choice-" + choiceIndex}>
                    <td>
                      <h2 className="font-bold text-sm">{choice.label}</h2>
                    </td>
                    {choice.options.map((option, optionIndex) => {
                      return (
                        <td key={"option-" + optionIndex}>
                          <input
                            type="checkbox"
                            className="w-4 h-4"
                            disabled={option.disabled}
                          />
                          <label className="ml-2 text-sm font-medium  dark:text-slate-700">
                            {option.name}
                          </label>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
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
