import "@/styles/inputField.scss";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
interface InputFieldProps {
  form: any;
  name: string;
  label: string;
  placeholder: string;
}

const InputField = (props: {
  form: any;
  name: string;
  placeholder: string;
}) => {
  return (
    <div className="">
      <FormField
        control={props.form}
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
