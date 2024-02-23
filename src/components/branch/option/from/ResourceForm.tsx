"use client";
import "./style/form.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { resourceSchema } from "@/components/branch/option/from/formSchema";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

function ResourceForm() {
  function onSubmit(values: z.infer<typeof resourceSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      replicas: 0,
      minCpu: 0,
      maxCpu: 0,
      minMemory: 0,
      maxMemory: 0,
      minReplicas: 0,
      maxReplicas: 0,
      targetPercentage: 0,
      container: 0,
      state: 0,
      target: 0,
    },
  });

  return (
    <div className="wrap">
      <Form {...form}>
        <form onSubmit={() => form.handleSubmit(onSubmit)} className="form">
          <div className="form-container">
            <div>
              <label className="form-label">Replicas</label>
            </div>

            <InputField
              form={form.control}
              name="replicas"
              placeholder="replicas"
            />
          </div>

          <div className="form-container">
            <div>
              <label className="form-label">cpu</label>
            </div>
            <div className="mulch-form-container">
              <InputField
                form={form.control}
                name="maxCpu"
                placeholder="maxCpu"
              />
              <div className="hyphen"> - </div>
              <InputField
                form={form.control}
                name="minCpu"
                placeholder="minCpu"
              />
            </div>
          </div>
          <div className="form-container">
            <div>
              <label className="form-label">Memory</label>
            </div>
            <div className="mulch-form-container">
              <InputField
                form={form.control}
                name="minMemory"
                placeholder="minMemory"
              />
              <div className="hyphen"> - </div>
              <InputField
                form={form.control}
                name="maxMemory"
                placeholder="maxMemory"
              />
            </div>
          </div>

          <div className="form-container">
            <div>
              <label className="form-label">targetPercentage</label>
            </div>
            <InputField
              form={form.control}
              name="targetPercentage"
              placeholder="targetPercentage"
            />
          </div>

          <div className="form-container">
            <div>
              <label className="form-label">Container</label>
            </div>
            <SelectField
              form={form.control}
              name="container"
              placeholder="container"
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
          </div>

          <div className="form-container">
            <div>
              <label className="form-label">State</label>
            </div>
            <SelectField
              form={form.control}
              name="state"
              placeholder="state"
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
          </div>

          <div className="form-container">
            <div>
              <label className="form-label">Resource</label>
            </div>
            <SelectField
              form={form.control}
              name="resource"
              placeholder="resource"
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
          </div>

          <div className="form-container">
            <div>
              <label className="form-label">Target</label>
            </div>
            <SelectField
              form={form.control}
              name="target"
              placeholder="target"
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
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
        </form>
      </Form>
    </div>
  );
}

export default ResourceForm;
