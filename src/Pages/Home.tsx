import GetStarted from "@/components/Home/GetStarted";
import QuickStart from "@/components/Home/QuickStart";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-16">
            <div className="mt-20">
            <GetStarted />
            </div>
            <div className="mb-20">
            <QuickStart />
            </div>
        </div>
    );
};


export default Home