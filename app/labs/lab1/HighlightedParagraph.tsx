type HighlightedParagraphProps = {
    text: string;
    backgroundColor: string;
    color: string;
  };
  
  export default function HighlightedParagraph({
    text,
    backgroundColor,
    color,
  }: HighlightedParagraphProps) {
    return (
      <p
        id="wd-highlighted-paragraph"
        style={{
          backgroundColor,
          color,
          padding: "10px",
        }}
      >
        {text}
      </p>
    );
  }