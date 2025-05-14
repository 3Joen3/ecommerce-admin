"use client";

import Section from "../components/Section";
import Form from "./components/Form";
import TextAreaField from "./components/TextAreaField";
import TextField from "./components/TextField";
import MediaField from "./components/MediaField/MediaField";

interface FormValues {
  title: string;
  description: string;
  comparePrice: string;
  price: string;
  media: File[];
}

export default function ProductForm() {
  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-10 w-3/5">
      <Section>
        <TextField label="Title" placeholder="Röd t-shirt" name="title" />
        <TextAreaField
          label="Description"
          placeholder="Supersnygg tisha i färgen röd!"
          name="description"
        />
        <MediaField name="media" />
      </Section>

      <Section>
        <button type="submit" className="btn primary">
          Save
        </button>
      </Section>
    </Form>
  );
}
