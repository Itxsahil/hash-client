import React from "react";
import { Input } from "@/components/ui/input";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const GetStarted: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [shortLink, setShortLink] = React.useState<string>("");
  return (
    <div
      className={`flex flex-col items-center justify-center px-4 ${
        theme === "dark" ? "text-gray-100" : "text-gray-800"
      }`}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Welcome to <span className="text-cyan-500">HashVault</span>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-lg sm:max-w-3xl text-center mb-6">
        HashVault is a secure place to store your notes. It ensures your content
        is encrypted on the client-side using a unique key that is never stored
        anywhere. The encrypted data is then securely forwarded to the server for
        cloud storage.
      </p>
      <div className="mb-6 flex flex-col sm:flex-row sm:gap-4 items-center sm:justify-center text-center w-full max-w-md gap-2">
        <p className="mb-2 sm:mt-1 w-full sm:w-auto text-sm sm:text-base truncate">
          https://hashvault.novoworm.com/
        </p>
        <Input
          onChange={(e) => {
            setShortLink(e.target.value);
          }}
          type="text"
          placeholder="It will be unique globally"
          className="mb-4 sm:mb-0 w-full"
        />
        <Button onClick={() => {
          // console.log("clicked");
          navigate(`/${shortLink}`);
        }} className="w-full sm:w-auto">Get Started</Button>
      </div>
    </div>
  );
};

export default GetStarted;
