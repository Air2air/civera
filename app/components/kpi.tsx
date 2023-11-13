import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  DeltaType,
  Grid,
} from "@tremor/react";

const categories = [
  {
    title: "Contests",
    metric: "15,778",
    metricPrev: "15,023",
    delta: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Ballots",
    metric: "231,532",
    metricPrev: "229,067",
    delta: "0.3%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Voter stats",
    metric: "18,726",
    metricPrev: "18,112",
    delta: "0.9%",
    deltaType: "moderateIncrease",
  },
];

export default function Kpi() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-2">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="start" className="space-x-2 mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="start" className="space-x-1 truncate">
              <Text>{item.delta}</Text>
              <Text className="truncate">from previous month</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
