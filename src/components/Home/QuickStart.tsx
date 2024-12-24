import React from "react";
// import { useTheme } from "../theme-provider";

const QuickStart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Quick <span className="text-cyan-500">Start</span>
      </h1>
      <div className="flex sm:flex-row flex-col gap-6 items-center justify-center">
      <Card
        title="Step 1"
        content="Give a name to your vault, then click on Get Started."
      />
      <Card
        title="Step 2"
        content="Ener a key that will be used to encrypt your notes."
      />
      <Card
        title="Step 3"
        content="Now write your notes and click on Save, it will be encrypted and saved."
      />
      </div>
    </div>
  );
};

export default QuickStart;

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center mb-6 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-semibold mb-2 text-cyan-500">{title}</h2>
      <p className="text-center leading-relaxed">{content}</p>
    </div>
  );
};
