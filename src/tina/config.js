import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Branch where content changes are saved
  clientId: process.env.TINA_CLIENT_ID, // From Tina.io dashboard
  token: process.env.TINA_TOKEN, // From Tina.io dashboard
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
            type: "string",
            label: "Content",
            name: "body",
          },
        ],
      },
    ],
  },
});
