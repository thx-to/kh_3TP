import { ConsoleStyles as CssWrapper } from "../../../styles/codingtest/ConsoleStyles";

const Console = ({ message }) => {
  console.log(message);
  return (
    <CssWrapper>
      <div className="console-outputs" style={{ whiteSpace: "pre-wrap" }}>
        {message}
      </div>
    </CssWrapper>
  );
};

export default Console;
