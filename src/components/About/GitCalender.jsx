import GitHubCalendar from "react-github-calendar";
import Strong from "../../UI/Strong";
import { theme } from "../../UI/ChangeThemeBtn";

function GitCalender() {
  function GitColors() {
    if (localStorage.getItem("theme") === "dark")
      return ["#0f172b", "#024452", "#008c86", "#00d5be", "#43edd5"];
    else return ["#cad5e2", "#43edd5", "#00d5be", "#07988c", "#00786f"];
  }
  const gitColors = GitColors();
  return (
    <div
      className={`flex flex-col gap-10 ${theme.bg} ${theme.text} items-center p-20`}
    >
      <h1 className="text-3xl">
        Days I <Strong>Code</Strong>
      </h1>
      <GitHubCalendar
        username="AleksandaPrpa"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          dark: [
            gitColors[0],
            gitColors[1],
            gitColors[2],
            gitColors[3],
            gitColors[4],
          ],
        }}
      />
    </div>
  );
}

// colorScheme="#00d5be"
export default GitCalender;
