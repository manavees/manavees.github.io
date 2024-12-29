import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // The branch where TinaCMS commits changes
  clientId: process.env.TINA_CLIENT_ID || "", // Your Tina.io Client ID
  token: process.env.TINA_TOKEN || "", // Your Tina.io Token
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "content/blogs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
            templates: [
              {
                name: "HeaderLink",
                label: "HeaderLink",
                fields: [
                  {
                    name: "children",
                    label: "children",
                    type: "rich-text",
                  },
                  {
                    name: "href",
                    label: "href",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Published date",
            required: true,
            ui: {
              dateFormat: "YY-MM-DD",
            },
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated date",
            ui: {
              dateFormat: "YY-MM-DD",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero image",
          },
        ],
      },
    ],
  },
});
