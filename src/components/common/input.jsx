
import { Input } from "@material-tailwind/react";
 
export function InputDefault({label}) {
  return (
    <div className="min-w-[300px] px-2">
      <Input className="bg-white" label={`${label}`} />
    </div>
  );
}