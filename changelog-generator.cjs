const fs = require("fs");
const path = require("path");

function log(message) {
  console.log(message);
  fs.appendFileSync("changelog-debug.log", message + "\n");
}

module.exports = {
  getReleaseLine: async (changeset, type) => {
    const [firstLine] = changeset.summary.split("\n");
    return `- ${firstLine} (${type})`;
  },
  getDependencyReleaseLine: async (changesets, dependenciesUpdated) => {
    return "";
  },
  updateChangelog: async ({ release, changelog }) => {
    const readmePath = path.resolve(__dirname, "README.md");
    log("哈哈哈大魔王-------readmePath", readmePath);

    const readmeContent = fs.readFileSync(readmePath, "utf8");
    log("哈哈哈大魔王-------readmeContent", readmeContent);

    const changelogSection = "## 哈哈哈大魔王----Changelog\n\n";
    const newEntry = `### ${release.newVersion}\n\n${changelog}\n`;

    let updatedContent;
    if (readmeContent.includes(changelogSection)) {
      updatedContent = readmeContent.replace(
        changelogSection,
        `${changelogSection}${newEntry}`
      );
    } else {
      updatedContent = `${readmeContent}\n\n${changelogSection}${newEntry}`;
    }

    fs.writeFileSync(readmePath, updatedContent);
  },
};
