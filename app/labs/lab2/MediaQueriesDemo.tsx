import "./MediaQueriesDemo.css";
export default function MediaQueriesDemo() {
  return (
    <div className="wd-media-queries-demo">
      <h2>Media queries</h2>
      <ul>
        <li className="wd-mq-rule-default">
          Default green; visible only between 749px and 750px after adding the
          AI rule.
        </li>
        <li className="wd-mq-rule-750">
          750px to below 1000px: yellow with black text.
        </li>
        <li className="wd-mq-rule-1000">
          1000px to below 1250px: blue with white text.
        </li>
        <li className="wd-mq-rule-1250">
          1250px to below 1500px: red with white text.
        </li>
        <li className="wd-mq-rule-personal">
          Practice: 1500px and wider is teal with white text.
        </li>
        <li className="wd-mq-rule-ai">
          With AI: up to 749px is purple with white text.
        </li>
      </ul>
    </div>
  );
}
