import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import TextFields from "./forms/TextFields";
import Forms from "./forms/Forms";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBoxLab from "./HighlightedBox";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      <HeadingTags />
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <TextFields />
      <Forms />
      <h4>Highlighted Paragraphs</h4>

        <HighlightedParagraph
        text="This paragraph has a yellow background and black text."
        backgroundColor="yellow"
        color="black"
        />

        <HighlightedParagraph
        text="I am interested in AI systems, performance optimization, and building scalable software."
        backgroundColor="lightblue"
        color="darkblue"
        />

        <HighlightedParagraph
        text="Reusable components let us render the same structure with different data."
        backgroundColor="lightgreen"
        color="darkgreen"
        />
        <HighlightedBoxLab />
        <AnchorTag />
       </div>
  );
}