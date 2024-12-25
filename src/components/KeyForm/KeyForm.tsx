import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useKey } from "@/process/KeyProvider";
import { toast } from "sonner";
const KeyForm: React.FC = () => {
  const [showKey, setShowKey] = useState<boolean>(false);
  const [keyValue, setKeyValue] = useState<string>("");
  const { setKey } = useKey();

  const handleSubmitKey = () => {
    setKey(keyValue);
    toast.success("Key set successfully , dont forget your key there is no recovery methode as we are not storing it on our server");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 max-w-[400px] border border-gray-200 rounded-lg h-[400px] w-full shadow-lg p-6">
      <h1 className="text-2xl font-bold">Enter your key</h1>
      <p className="text-center text-sm leading-relaxed">
        Please don't lose your key. There is no way to recover your data if you
        lose your key.
      </p>
      <div className="w-full flex flex-col gap-4">
        <Input
          type={showKey ? "text" : "password"}
          value={keyValue}
          onChange={(e) => setKeyValue(e.target.value)}
          placeholder="Enter your key"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <div className="flex items-center gap-2">
          <Input
            type="checkbox"
            checked={showKey}
            onChange={() => setShowKey((prev) => !prev)}
            className="h-4 w-4"
          />
          <span className="text-sm">Show key</span>
        </div>
        <Button
          onClick={handleSubmitKey}
          className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default KeyForm;
