import "@/styles/inputField.scss";

import { Control, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const InputField = (props: {
  form: unknown;
  name: string;
  placeholder: string;
}) => {
  return (
    <div className="">
      <FormField
        control={props.form as Control<FieldValues>}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="field"
                placeholder={props.placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputField;
