// This file contains the Inputs for all forms

import { LegacyRef } from "react";

// Inclues
// Text, TextArea, Checkbox,

const InputText = ({
  label,
  inputRef,
  required = false,
}: {
  label: string;
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
  required?: boolean;
}) => (
  <div className="block">
    <label className={"block text-sm text-slate-700 font-bold"}>{label}</label>
    <input
      type="text"
      name="title"
      className={
        "mt-1 px-3 py-2 w-full rounded-md  bg-white border border-slate-300 placeholder-slate-400  sm:text-sm  mb-2.5"
      }
      placeholder={`Enter your ${label}`}
      required={required}
      ref={inputRef}
    />
  </div>
);

export default InputText;

export const InputTextArea = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) => (
  <div className="block">
    <label className={"block text-sm text-slate-700 font-bold"}>{label}</label>
    <textarea
      rows={8}
      className={
        "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:border-slate-300 placeholder-slate-400 dark:text-black mb-2.5 resize-none;"
      }
      placeholder={placeholder}
    ></textarea>
  </div>
);

export const InputCheckbox = ({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) => (
  <>
    <input type="checkbox" className="w-4 h-4" disabled={disabled} />
    <label className="ml-2 text-sm font-medium  dark:text-slate-700">
      {label}
    </label>
  </>
);
