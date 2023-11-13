import { Flex, Card, Button } from "@tremor/react";
import HistoricalElectionResults from "./components/HistoricalElectionResults";
import CandidateInformation from "./components/CandidateInformation";

const cardData = [
  {
    title: "Historical Election Results",
    component: HistoricalElectionResults,
    buttonText: "Click Here",
  },
  {
    title: "Candidate Information",
    component: CandidateInformation,
    buttonText: "Click Here",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: "100%", height: "100%" }}>
        <Flex className="gap-2">
          {cardData.map((card, index) => (
            <Card key={index} className="w-full h-full">
              <h2>{card.title}</h2>
              <card.component />
              <Button>{card.buttonText}</Button>
            </Card>
          ))}
        </Flex>
      </div>
    </main>
  );
}
