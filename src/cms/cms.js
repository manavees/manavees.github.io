import { TinaCMS } from "tinacms";
import { defineConfig } from "./tina/config";

export const cms = new TinaCMS(defineConfig());
