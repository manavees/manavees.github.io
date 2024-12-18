import { defineConfig } from 'tinacms';

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
export default defineConfig({
  branch,
  clientId: '2a9e6685-ef4f-4038-9c55-acdc6c6b238a', // Replace with your TinaCMS Cloud Client ID
  token: '65dbf776027761e132ee03f5ee88f5247ccf3f08', // Replace with your TinaCMS Cloud Token
  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  schema: {
    collections: [
      {
        name: 'posts',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
          },
        ],
      },
    ],
  },
});
