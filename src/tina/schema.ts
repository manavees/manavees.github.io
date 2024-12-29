import { defineSchema } from "tinacms";

export const schema = defineSchema({
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
});
