import { FieldValues, Path, UseFormRegister } from "react-hook-form"

type LabelledInputProps<TFormValues extends FieldValues> = {
     label: Path<TFormValues>;
     register: UseFormRegister<TFormValues>;
     type?: string;
}

export const LabelledInput = <TFormValues extends FieldValues>({ label, register, type="text" }: LabelledInputProps<TFormValues>) => {
     return (
          <div className="grid grid-cols-4 gap-4 items-center">
               <label className="col-span-1 text-base font-medium">{label.charAt(0).toUpperCase() + label.slice(1)}</label>
               <input
                    type={type}
                    {...register(label)}
                    className="col-span-3 bg-dark-1 rounded-md px-2 py-1.5 border border-gray-500 text-white"
               />
          </div>
     )
}