import "@/styles/inputField.scss";

import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFormProps {
  form: unknown;
  name: string;
  placeholder: string;
  options: { value: string }[];
}

const SelectForm = (props: SelectFormProps) => {
  return (
    <div className="field">
      <FormField
        control={props.form as Control}
        name={props.name}
        render={() => (
          <FormItem>
            <FormControl>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {props.options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="field"
                    >
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SelectForm;
