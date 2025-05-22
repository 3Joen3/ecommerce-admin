import Section from "../../components/Section";
import TextField from "../components/TextField";
import TextAreaField from "../components/TextAreaField";
import MediaField from "../components/MediaField/MediaField";

export default function DetailsFormSection() {
  return (
    <Section>
      <TextField label="Title" placeholder="Röd t-shirt" name="title" />
      <TextAreaField
        label="Description"
        placeholder="Supersnygg tisha i färgen röd!"
        name="description"
      />
      <MediaField name="media" />
    </Section>
  );
}
