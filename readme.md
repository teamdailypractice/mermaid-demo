# Mermaid Markdown Support Utility

* Generate HTML file from Markdown files that contain mermaid specification
* Save the markdown files that contain mermaid specification to `markdown` directory
* Run the build
* **Output**: All html files are generated in `dist` directory
* Use **LiveServer** and browse through HTML files
* Generate PDF from the HTML

## Input

* `markdown` directory contains markdown files that contain mermaid specification
* Constraints
  * Each markdown should have only one mermaid diagram specification
  * First line must be title
  * Followed by the mermaid specification
  * see the existing sample file and adhere to the format
  
## Build steps

```bash
npm install
npm run build
```

## Output

* `dist` directory contains the output

## Post Build - PDF generation

* open two command prompts in the project root directory
* command prompt 1: `npm run postBuild:startServer`
* After success of above, in command prompt 2: `npm run postBuild:pdf`
* Output pdf files are generated in directory: **pdf**

