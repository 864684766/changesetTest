const fs = require('fs');
const path = require('path');

module.exports = {
  getReleaseLine: async (changeset, type) => {
    const [firstLine] = changeset.summary.split('\n');
    return `- ${firstLine} (${type})`;
  },
  getDependencyReleaseLine: async (changesets, dependenciesUpdated) => {
    return '';
  },
  updateChangelog: async ({ release, changelog }) => {
    const readmePath = path.resolve(__dirname, 'README.md');
    const readmeContent = fs.readFileSync(readmePath, 'utf8');

    const changelogSection = '## Changelog\n\n';
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