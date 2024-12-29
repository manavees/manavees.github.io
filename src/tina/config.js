import { defineConfig, TinaCMSConfig } from "tinacms";

const tinaConfig: TinaCMSConfig = defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
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
          { type: "string", label: "Title", name: "title" },
          { type: "rich-text", label: "Content", name: "body" },
        ],
      },
    ],
  },
});

export default tinaConfig;
