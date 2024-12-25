import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditorMenuBar from "./TextEditorMenu";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { encryptNote } from "@/process/hash";
import { useKey } from "@/process/KeyProvider";
import { useState } from "react";
import URI from "@/conf";

type TextEditorProps = {
  onChange: (content: string) => void;
  initialContent?: string | null;
};

export default function RichTextEditor({
  onChange,
  initialContent,
}: TextEditorProps) {
  const [editorContent] = useState<string | null | undefined>(initialContent);

  const { key } = useKey();
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: editorContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "cursor-text rounded-md border border-black p-5 ring-offset-background focus-within:outline-none min-h-[50vh] sm:min-h-[70vh]",
      },
    },
    immediatelyRender: false,
  });

  const handelHashAndSave = async () => {
    if (editor) {
      const content = editor.getHTML();
      const hash = encryptNote({ key, note: content });
      const response = await fetch(`${URI}/note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: id, note: hash }),
      });
      const data = await response.json();
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error("Something went wrong, please try again");
      }
    }
  };

  const handelDelete = async () => {
    if (editor) {
      try {
        if (!id) {
          toast.error("Error: Note ID is missing");
          return;
        }

        const response = await fetch(`${URI}/note/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorMessage = `Error: ${response.status} ${response.statusText}`;
          toast.error(errorMessage);
          throw new Error(errorMessage);
        }

        const data = await response.json();

        if (data.status === "success") {
          toast.success(data.message || "Note deleted successfully!");
          navigate("/");
        } else {
          toast.error(
            data.message || "Failed to delete the note. Please try again."
          );
        }
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } else {
      toast.error("Editor is not initialized");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col gap-4 items-center w-full lg:w-[95vh]">
        {/* Toolbar Section */}
        <div className="flex flex-wrap gap-2 items-center justify-between w-full">
          <div
            className={`flex flex-col gap-2 items-center ${
              theme === "dark"
                ? "border border-gray-200"
                : "border border-gray-900"
            } p-2 rounded-md`}
          >
            <TextEditorMenuBar editor={editor} />
          </div>
          <div className="flex gap-2 items-center justify-end">
            <Button
              variant="outline"
              onClick={() => editor?.commands.clearContent()}
            >
              Clear
            </Button>
            <Button variant="accept" onClick={handelHashAndSave}>
              Save
            </Button>
            <Button variant="destructive" onClick={handelDelete}>
              Delete
            </Button>
          </div>
        </div>
        {/* Editor Section */}
        <div
          className={`w-full flex-grow ${
            theme === "dark"
              ? "border border-gray-200"
              : "border border-gray-900"
          } rounded-md overflow-hidden`}
        >
          <EditorContent
            editor={editor}
            className="h-full w-full min-h-[50vh] sm:min-h-[70vh] p-4"
          />
        </div>
      </div>
    </div>
  );
}
