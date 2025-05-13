"use client";

import Section from "../components/Section";
import Form from "./components/Form";
import PriceField from "./components/PriceField";
import TextAreaField from "./components/TextAreaField";
import TextField from "./components/TextField";
import MediaField from "./components/MediaField";

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
    <Form onSubmit={onSubmit} className="grid grid-cols-2 gap-10">
      <Section>
        <TextField label="Title" placeholder="Röd t-shirt" name="title" />
        <TextAreaField
          label="Description"
          placeholder="Supersnygg tisha i färgen röd!"
          name="description"
        />
        <div className="grid grid-cols-2 gap-8">
          <PriceField
            label="Price"
            name="price"
            placeholder="299"
            currency="SEK"
          />
          <PriceField
            label="Compare price"
            name="comparePrice"
            placeholder="499"
            currency="SEK"
          />
        </div>
      </Section>

      <Section>
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
