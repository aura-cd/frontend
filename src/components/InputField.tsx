import { Input } from "@/components/ui/input";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import "@/styles/inputField.scss";
interface InputFieldProps {
  form: any;
  name: string;
  label: string;
  placeholder: string;
}

const InputField = (props: InputFieldProps) => {
  const { name, label, form, placeholder } = props;

  return (
    <div className='container'>
      <FormField
        control={form}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputField;
