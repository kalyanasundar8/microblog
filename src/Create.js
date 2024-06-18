import EditorJS from "@editorjs/editorjs";
// Tools
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CheckList from "@editorjs/checklist";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import Warning from "@editorjs/warning";
import Attaches from "@editorjs/attaches";
import Raw from "@editorjs/raw";

const Create = () => {
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: {
        class: Header,
        inlineToolbar: true,
      },
      list: List,
      checkList: CheckList,
      image: ImageTool,
      embed: Embed,
      table: Table,
      quote: Quote,
      marker: Marker,
      codetool: CodeTool,
      delimiter: Delimiter,
      inlinecode: InlineCode,
      linktool: LinkTool,
      warning: Warning,
      attaches: Attaches,
      raw: Raw,
    },
    data: {
      blocks: [
        {
          type: "header",
          data: {
            text: "New Heading",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Paragraph",
          },
        },
      ],
    },
    onReady: () => {
      console.log("Ready");
    },
    data: {},
  });

  return <div id="editorjs"></div>;
};

export default Create;
