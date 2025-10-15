import path from "path";
import { readdirSync, statSync, writeFileSync } from "fs";

const iconsPathStr = "public/icons";
const iconListPathStr = "src/component/General/Icon/iconList.tsx";

const toCamelCase = (str) => {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^(.)/, (char) => char.toLowerCase());
};

const sanitizeImportName = (name) => {
  return name
    .replace(/[^a-zA-Z0-9_]/g, "_") // Replace invalid characters with underscores
    .replace(/^[^a-zA-Z_]+/, ""); // Ensure it starts with a letter or underscore
};

const getSvgFilesRecursively = (dir, parentFolder = "") => {
  let results = [];
  const list = readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(
        getSvgFilesRecursively(filePath, path.basename(filePath))
      );
    } else if (file.endsWith(".svg")) {
      const relativePath = path.relative("src", filePath).replace(/\\/g, "/");
      const iconName = path.basename(file, ".svg");
      const folderPrefix = parentFolder ? `${parentFolder}_` : "";
      results.push({ iconName, relativePath, folderPrefix });
    }
  });
  return results;
};

const generateIconListFile = () => {
  const iconsPath = path.resolve(iconsPathStr);
  const outputFilePath = path.resolve(iconListPathStr);

  const svgFiles = getSvgFilesRecursively(iconsPath);

  let imports = "";
  let iconListContent = "const iconList = {\n";

  svgFiles.forEach(({ iconName, relativePath, folderPrefix }) => {
    const prefixedIconName = `${folderPrefix}${iconName}`; // Add folder prefix to the icon name
    const importName = sanitizeImportName(
      prefixedIconName.replace(/[-\s]/g, "_")
    ); // Convert to snake case for import
    const camelCaseKey = toCamelCase(prefixedIconName); // Convert to camel case for the key
    imports += `import ${importName} from "@/${iconsPathStr}/${iconName}.svg";\n`;
    iconListContent += `  ${camelCaseKey}: ${importName},\n`;
  });

  iconListContent += "} as const;\n\nexport default iconList;\n";

  const finalContent = `${imports}\n${iconListContent}`;
  writeFileSync(outputFilePath, finalContent, "utf-8");
  console.log(`iconList.js has been generated at ${outputFilePath}`);
};

generateIconListFile();
