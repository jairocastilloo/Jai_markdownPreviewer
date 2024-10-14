import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import { Container, Form, Card } from "react-bootstrap";

const defaultMarkDown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkDown);
  return (
    <>
      <div style={{ backgroundColor: "#eae2b7" }}>
        <Container>
          <Container className="p-5 mt-3 mb-3 pb-1 pt-0">
            <Form
              className="p-4 py-2 rounded"
              style={{ backgroundColor: "#fcbf49" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bold fs-3">Editor</Form.Label>
                <Form.Control
                  as="textarea"
                  name="editor"
                  id="editor"
                  rows={10}
                  value={markdownText}
                  onChange={(e) => setMarkdownText(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>
          <Container className="overflow-auto">
            <Card
              className="p-4 rounded text-white"
              style={{ backgroundColor: "#f77f00" }}
              id="preview">
              <ReactMarkdown>{markdownText}</ReactMarkdown>
            </Card>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default App;
