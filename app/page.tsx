import { Text, Grid, Title } from "@tremor/react";
import HistoricalElectionResults from "./components/HistoricalElectionResults";
import Contests from "./components/Contests";
import Ballots from "./components/Ballots";
import Kpi from "./components/kpi";
import Statistics from "./components/Statistics";

const cardData = [
  {
    title: "Contests",
    component: Contests,
    buttonText: "Click Here",
  },

  {
    title: "Ballots",
    component: Ballots,
    buttonText: "Click Here",
  },

  {
    title: "Statistics",
    component: Statistics,
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
