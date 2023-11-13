import { Text, Grid, Title } from "@tremor/react";
import HistoricalElectionResults from "./components/HistoricalElectionResults";
import Contests from "./components/Contests";
import Questions from "./components/Questions";
import Kpi from "./components/kpi";

const cardData = [
  {
    title: "Contests",
    component: HistoricalElectionResults,
    buttonText: "Click Here",
  },
  {
    title: "Seats",
    component: Contests,
    buttonText: "Click Here",
  },
  {
    title: "Voter stats",
    component: Questions,
    buttonText: "Click Here",
  },
];

export default function Home() {
  return (
    <>
      {/* <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text> */}
      <Kpi />
      <Grid numItemsSm={2} numItemsLg={3} className="mt-3 gap-2">
        {cardData.map((card, index) => (
          <div key={index}>
            <card.component />
          </div>
        ))}
      </Grid>
    </>
  );
}
