"use client";
import "./style/form.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { environmentSchema } from "@/components/branch/option/from/formSchema";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// 3. Define your form schema.

function EnviromentsForm() {
  function onSubmit(values: z.infer<typeof environmentSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof environmentSchema>>({
    resolver: zodResolver(environmentSchema),
    defaultValues: {
      kye: "",
      value: "",
      config: false,
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="form">
          <div className="wrap">
            <div className="form-container">
              <div>
                <label className="form-label">Kye</label>
              </div>
              <InputField form={form.control} name="kye" placeholder="kye" />
            </div>

            <div className="form-container">
              <div>
                <label className="form-label">Value</label>
              </div>
              <InputField
                form={form.control}
                name="value"
                placeholder="value"
              />
            </div>

            <div className="form-container">
              <div>
                <label className="form-label">Config</label>
              </div>
              <SelectField
                form={form.control}
                name="config"
                placeholder="config"
                options={[{ value: "true" }, { value: "false" }]}
              />
            </div>
            <div className="button-area">
              <div>
                <Button className="button" variant={"secondary"}>
                  Cansell
                </Button>
              </div>
              <div>
                <Button className="submit-button" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

export default EnviromentsForm;
