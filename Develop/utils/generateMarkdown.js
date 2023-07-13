function licensedBadge(license){
  switch (license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

module.exports = generateMarkdown;
