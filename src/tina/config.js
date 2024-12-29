import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // The branch where content changes are committed
  clientId: process.env.TINA_CLIENT_ID || "", // Ensure this is a valid string
  token: process.env.TINA_TOKEN || "", // Ensure this is a valid string
  media: {
    tina: {
      mediaRoot: "public/images",
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
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "rich-text",
            label: "Content",
            name: "body",
          },
        ],
      },
    ],
  },
});
