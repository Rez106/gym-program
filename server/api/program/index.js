import fs from "fs"
import path from "path";

export function buildPath() {
   return path.join(process.cwd(), "data", "program.json");
}

export function programData(filePath) {
   const jsonFile = fs.readFileSync(filePath);
   const data = JSON.parse(jsonFile);
   return data;
}

export default defineEventHandler(async (event) => {

   const filePath = buildPath();
   const data = programData(filePath);

   return data;
})