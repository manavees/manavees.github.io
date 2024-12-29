import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // The branch where content changes are committed
  clientId: process.env.TINA_CLIENT_ID || "", // Tina.io Client ID
  token: process.env.TINA_TOKEN || "", // Tina.io Token
  media: {
    tina: {
      mediaRoot: "public/images", // Folder for media assets
      publicFolder: "public", // Root for public files
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "src/pages",
        fields: [
          { type: "string", label: "Title", name: "title" },
          { type: "rich-text", label: "Content", name: "body" },
        ],
      },
    ],
  },
});
