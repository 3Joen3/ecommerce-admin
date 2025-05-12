"use client";

import Section from "../components/Section";
import Form from "./components/Form";
import TextAreaField from "./components/TextAreaField";
import TextField from "./components/TextField";

interface FormValues {
  title: string;
  description: string;
}

export default function ProductForm() {
  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Form onSubmit={onSubmit} className="w-2/3 space-y-5">
      <Section>
        <TextField label="Title" placeholder="Röd t-shirt" name="title" />
        <TextAreaField
          label="Description"
          placeholder="Supersnygg tisha i färgen röd!"
          name="description"
        />
      </Section>

      <Section>
        <button type="submit" className="btn primary">
          Save
        </button>
      </Section>
    </Form>
  );
}
