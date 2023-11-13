import { Text, Card, Button, Grid, Title } from "@tremor/react";
import HistoricalElectionResults from "./components/HistoricalElectionResults";
import Contests from "./components/Contests";
import Questions from "./components/Questions";
import Kpi from "./components/kpi";

const cardData = [
  {
    title: "Historical Election Results",
    component: HistoricalElectionResults,
    buttonText: "Click Here",
  },
  {
    title: "Candidate Information",
    component: Contests,
    buttonText: "Click Here",
  },
  {
    title: "Candidate Information",
    component: Questions,
    buttonText: "Click Here",
  },
];

export default function Home() {
  return (
    <main>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Kpi />
      <Grid numItemsMd={3} numItemsSm={2} className="mt-6 gap-6" >
        {cardData.map((card, index) => (
          <Card key={index} className="w-full h-full">
            <h2>{card.title}</h2>
            <card.component />
            <Button>{card.buttonText}</Button>
          </Card>
        ))}
      </Grid>
    </main>
  );
}
