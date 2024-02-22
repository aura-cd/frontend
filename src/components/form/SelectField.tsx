import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import "@/styles/inputField.scss";
interface InputFieldProps {
  form: any;
  name: string;
  label: string;
  placeholder: string;
  option: string[];
}

const SelectField = (props: InputFieldProps) => {
  const { name, label, form, option } = props;

  return (
    <div className='container'>
      <FormField
        control={form}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <select {...field} className='select'>
                {option.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SelectField;
