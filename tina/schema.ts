import { defineSchema } from "tinacms";

export const schema = defineSchema({
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
});
