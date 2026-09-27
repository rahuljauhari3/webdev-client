export default function AnchorTag() {
    return (
      <>
        <h4>Anchor tag</h4>
  
        Please{" "}
        <a href="https://www.lipsum.com" id="wd-lipsum">
          click here
        </a>{" "}
        to get dummy text
  
        <br />
  
        <a
          href="https://github.com/rahuljauhari3/"
          id="wd-github"
        >
          GitHub
        </a>
  
        <br />
  
        <a
          id="wd-your-link"
          href="https://www.northeastern.edu"
        >
          Northeastern University
        </a>
  
        <br />
  
        <a
          id="wd-your-github"
          href="https://github.com/rahuljauhari3/"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub
        </a>
  
        <br />
  
        <a
          id="wd-ai-link"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        >
          MDN: table element
        </a>
      </>
    );
  }