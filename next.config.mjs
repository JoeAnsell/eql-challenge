/** @type {import('next').NextConfig} */
import { join } from "path";
import path from "path";
import { fileURLToPath } from "url";

// const __dirname = path.dirname(__filename); // get the name of the directory
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "src/styles/_sass-variables.scss"; @import "src/styles/_mixins.scss";`,
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

export default nextConfig;
