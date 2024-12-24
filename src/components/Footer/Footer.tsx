import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { X, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 ">
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="text-center">
          <p className="text-sm flex items-center justify-center gap-1">
            Built by{" "}
            <HoverCard>
              <HoverCardTrigger>
                <span className="text-cyan-400 font-semibold hover:underline">
                  @Sahil
                </span>
              </HoverCardTrigger>
              <HoverCardContent className=" p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pbs.twimg.com/profile_images/1815571686248398849/yCgJiUaF_400x400.jpg"
                    alt="Sahil's Twitter"
                    className="w-[40px] h-[40px] rounded-full border border-cyan-400"
                  />
                  <div>
                    <p className="text-sm">
                      Trust me, I'm a good developer.
                    </p>
                    <Socials />
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
        </div>
        {/* Second Section */}
        <div className="mt-6 text-sm  text-center">
          <p>
            This is a notes platform that ensures your data remains encrypted.
            It allows users to securely encrypt content on the client-side using
            a unique key, which is never stored anywhere. The encrypted data is
            then forwarded to the server to store in the cloud.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Socials: React.FC = () => {
  return (
    <div className="flex items-center justify-start gap-3 mt-2">
      <a
        href="https://github.com/itxSahil"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://twitter.com/SahilKh32102162"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/sahil-khan-545b5b227/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Footer;
