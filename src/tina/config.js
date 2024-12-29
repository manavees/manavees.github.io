import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Branch where content changes are saved
  clientId: process.env.TINA_CLIENT_ID, // Tina.io Client ID
  token: process.env.TINA_TOKEN, // Tina.io Token
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
