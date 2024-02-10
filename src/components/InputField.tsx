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

interface InputFieldProps {
  form: any;
  name: string;
  label: string;
  placeholder: string;
  description: string;
}

const InputField = (props: InputFieldProps) => {
  const { name, label, form, placeholder, description } = props;

  return (
    <div>
      <FormField
        control={form}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputField;
