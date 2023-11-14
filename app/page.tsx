"use client";

import React, { useState } from "react";
import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  Grid,
  AreaChart,
} from "@tremor/react";
import Contests from "./components/Contests";
import Ballots from "./components/Ballots";
import Statistics from "./components/Statistics";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<null | string>(null);

  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <>
      <Kpi handleClick={handleClick} />
      <Grid numItemsSm={2} numItemsLg={3} className="mt-3 gap-2">
        <div
          className={`${
            activeComponent === "Contests" ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <Contests />
        </div>
        <div
          className={`${
            activeComponent === "Ballots" ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <Ballots />
        </div>
        <div
          className={`${
            activeComponent === "Statistics" ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <Statistics />
        </div>
      </Grid>
    </>
  );
}

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
    title: "Statistics",
    metric: "18,726",
    metricPrev: "18,112",
    delta: "0.9%",
    deltaType: "moderateIncrease",
  },
];

const data = [
  {
    Votes: 3000,
    month: "Jan 21, 2023",
  },
  {
    Votes: 2000,
    month: "Feb 21, 2023",
  },
  {
    Votes: 1700,
    month: "Mar 21, 2023",
  },
  {
    Votes: 2500,
    month: "Apr 21, 2023",
  },
  {
    Votes: 1890,
    month: "May 21, 2023",
  },
  {
    Votes: 2000,
    month: "Jun 21, 2023",
  },
  {
    Votes: 3000,
    month: "Jul 21, 2023",
  },
];

const getColor = (deltaType: string) => {
  switch (deltaType) {
    case "moderateIncrease":
      return "teal" as "teal";
    case "moderateDecrease":
      return "rose" as "rose";
    default:
      return "teal"; // default color if deltaType is not recognized
  }
};

function Kpi({ handleClick }: { handleClick: (component: string) => void }) {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-2">
      {categories.map((item) => (
        <Card
          key={item.title}
          onClick={() => handleClick(item.title)}
          className="hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
        >
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex
            className="space-x-3 truncate"
            justifyContent="start"
            alignItems="baseline"
          >
            <Metric>{item.metric}</Metric>
            <Text>from {item.metricPrev}</Text>
          </Flex>
          <div style={{ height: 120, width: "100%", marginTop: 30 }}>
            <AreaChart
              categories={["Sales", "Votes"]}
              showGridLines={false}
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
              className="h-32"
              // colors={[getColor(item.deltaType)]}
              colors={['rose', getColor(item.deltaType)]}
              data={data}
              index="month"
            />
          </div>
        </Card>
      ))}
    </Grid>
  );
}
