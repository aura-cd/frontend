import { Input } from "@/components/ui/input";
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
}

const InputField = (props: {
  form: any;
  name: string;
  placeholder: string;
}) => {
  return (
    <div className='field'>
      <FormField
        control={props.form}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className='field'
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
