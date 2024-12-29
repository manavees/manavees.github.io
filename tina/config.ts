import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // The branch where changes are committed
  clientId: process.env.TINA_CLIENT_ID || "", // Your Tina.io Client ID
  token: process.env.TINA_TOKEN || "", // Your Tina.io Token
  media: {
    tina: {
      publicFolder: "public", // Directory for static assets (e.g., images)
      mediaRoot: "images", // Subdirectory within the public folder for media files
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
          { type: "rich-text", label: "Body", name: "body" },
        ],
      },
    ],
  },
});
