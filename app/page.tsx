"use client";

import React, { useEffect, useState } from "react";
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
      <Kpi handleClick={handleClick} activeComponent={activeComponent} />
      <Grid numItems={1} className="mt-3 gap-4">
        {activeComponent === "Contests" && (
          <div className="transition-opacity duration-300">
            <Contests />
          </div>
        )}
        {activeComponent === "Ballots" && (
          <div className="transition-opacity duration-300">
            <Ballots />
          </div>
        )}
        {activeComponent === "Statistics" && (
          <div className="transition-opacity duration-300">
            <Statistics />
          </div>
        )}
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

function getCardClassName(
  initialized: boolean,
  activeComponent: string | null,
  itemTitle: string
) {
  if (!initialized) {
    return "hover:bg-blue-50 transition-all duration-400 cursor-pointer opacity-100";
  } else if (activeComponent === itemTitle) {
    return "hover:bg-blue-50 transition-all duration-400 cursor-pointer opacity-100";
  } else {
    return "hover:bg-blue-50 transition-all duration-400 cursor-pointer opacity-70";
  }
}

function Kpi({
  handleClick,
  activeComponent,
}: {
  handleClick: (component: string) => void;
  activeComponent: string | null;
}) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <Grid numItemsSm={2} numItemsLg={3} className="mt-3 gap-3">
      {categories.map((item) => (
        <Card
          key={item.title}
          onClick={() => handleClick(item.title)}
          className={getCardClassName(initialized, activeComponent, item.title)}
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
              colors={["rose", getColor(item.deltaType)]}
              data={data}
              index="month"
            />
          </div>
        </Card>
      ))}
    </Grid>
  );
}
