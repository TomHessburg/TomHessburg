import Card from "../../../utilities/Card";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contributions</h3>
      <div className="flex justify-center">
        <GitHubCalendar username="TomHessburg" />
      </div>
    </Card>
  );
}
