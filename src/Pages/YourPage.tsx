import React, { useState, useEffect } from "react";
import RichEditor from "@/components/editor/RichEditor";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader/Loader";
import { useKey } from "@/process/KeyProvider";
import KeyForm from "@/components/KeyForm/KeyForm";
import { decryptNoteSync } from "@/process/hash";
import { toast } from "sonner";
import URI from "@/conf";

const YourPage: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { key } = useKey();

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  // Fetch the editor content (encrypted note)
  const fetchEditorContent = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${URI}/note/${id}`);
      const data = await response.json();
      if (data.message === "Note not found") {
        setIsLoading(false);
      } else if (data.message === "Note found successfully" ) {
        const data_ = decryptNoteSync({ key, note: data.note });
        if( !data_ ){
          toast.warning("Invalid key or corrupted note");
        }
        setEditorContent(data_);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching editor content:", error);
    }
  };

  useEffect(() => {
    if(key){
      // Fetch content on page load
    fetchEditorContent();
    }
  }, [id, key]);

  // If loading, show loader
  if (isLoading) {
    return <Loader />;
  }

  if (!key) {
    return (
      <div className="flex flex-col justify-center items-center h-screen ">
        <KeyForm />
      </div>
    );
  }

  // If no note exists, show the editor
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <RichEditor
        onChange={handleEditorChange}
        initialContent={editorContent}
      />
    </div>
  );
};

export default YourPage;
