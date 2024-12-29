import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Git branch where changes are committed
  clientId: process.env.TINA_CLIENT_ID || "", // Tina.io Client ID
  token: process.env.TINA_TOKEN || "", // Tina.io Token
  media: {
    tina: {
      mediaRoot: "public/images", // Path for media files
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "src/pages",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "rich-text", name: "body", label: "Content" },
        ],
      },
    ],
  },
});
