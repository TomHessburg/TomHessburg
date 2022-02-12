import Card from "../../../utilities/Card";
import ReactPlayer from "react-player";

export default function Music() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Music</h3>

      <ReactPlayer
        width="100%"
        height="300px"
        url={`https://soundcloud.com/baronfields/sets/discography?si=827d457220ac4c42a9b9335f2e1626c0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`}
      />
      <div className="h-12" />
      <ReactPlayer
        width="100%"
        height="300px"
        url={`https://soundcloud.com/baronfields/sets/pretty-words-ep-full-ep-out-8?si=eb8b01f0b34d4a5d944cfb08fa4db45a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`}
      />
    </Card>
  );
}
