interface Props {
  currentSection: string;
  setCurrentSection: (id: string) => void;
}

interface FormSection {
  id: string;
  name: string;
}

const sections: FormSection[] = [
  { id: "details", name: "Details" },
  { id: "variants", name: "Variants" },
];

export default function FormSectionSelector({
  currentSection,
  setCurrentSection,
}: Props) {
  function isSelected(id: string) {
    return id === currentSection;
  }

  return (
    <div className="flex">
      {sections.map((section) => (
        <div key={section.id} className="w-full">
          <button
            className={`font-bold hover:cursor-pointer w-full ${
              isSelected(section.id) ? "bg-neutral-800 text-white" : ""
            }`}
            onClick={() => setCurrentSection(section.id)}
            type="button"
          >
            {section.name}
          </button>
        </div>
      ))}
    </div>
  );
}
