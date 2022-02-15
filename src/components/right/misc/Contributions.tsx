import Card from "../../../utilities/Card";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contributions</h3>
      <p className="font-light leading-7 mb-4">
        GitHub:{" "}
        <a
          href="https://github.com/TomHessburg"
          target="_blank"
          className="text-brand font-bold hover:underline"
        >
          @TomHessburg
        </a>
      </p>
      <div className="flex justify-center">
        <GitHubCalendar username="TomHessburg" />
      </div>
    </Card>
  );
}
