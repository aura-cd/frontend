import "@/styles/inputField.scss";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
  form: any;
  name: string;
  placeholder: string;
  options: { value: string }[];
}

const SelectForm = (props: SelectFormProps) => {
  return (
    <div className="field">
      <FormField
        control={props.form}
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
