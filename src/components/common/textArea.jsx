import { Textarea } from "@material-tailwind/react";
 
export function TextareaDefault({label}) {
  return (
    <div className="min-w-[300px] px-2">
      <Textarea className="bg-white" label={`${label}`} />
    </div>
  );
}