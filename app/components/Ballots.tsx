"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import {
  Card,
  TabList,
  Tab,
  ProgressBar,
  Text,
  Flex,
  Button,
  Metric,
  BadgeDelta,
  TabGroup,
} from "@tremor/react";

const ballots = [
  {
    title: "Measure A",
    value: 68,
    metric: "Yes",
    location: "A",
    color: "teal" as "teal",
  },
  {
    title: "Measure B",
    value: 54,
    metric: "Yes",
    location: "A",
    color: "teal" as "teal",
  },
  {
    title: "Measure C",
    value: 68,
    metric: "No",
    location: "A",
    color: "rose" as "rose",
  },
  {
    title: "Measure D",
    value: 82,
    metric: "No",
    location: "B",
    color: "rose" as "rose",
  },
  {
    title: "Measure E",
    value: 60,
    metric: "Yes",
    location: "B",
    color: "teal" as "teal",
  },
  {
    title: "Measure F",
    value: 58,
    metric: "Yes",
    location: "B",
    color: "teal" as "teal",
  },
  {
    title: "Measure G",
    value: 64,
    metric: "No",
    location: "C",
    color: "rose" as "rose",
  },
  {
    title: "Measure H",
    value: 58,
    metric: "No",
    location: "C",
    color: "rose" as "rose",
  },
  {
    title: "Measure I",
    value: 62,
    metric: "Yes",
    location: "C",
    color: "teal" as "teal",
  },
];

export default function Ballots() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLocation = selectedIndex === 0 ? "A" : "B";

  return (
    <Card>
      <Flex alignItems="start">
        <Text>Recent Ballots</Text>
        <BadgeDelta deltaType="moderateDecrease">.3%</BadgeDelta>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="space-x-3 truncate"
      >
        <Metric>231,532</Metric>
        <Text>from 229,067</Text>
      </Flex>
      <TabGroup
        index={selectedIndex}
        onIndexChange={setSelectedIndex}
        className="mt-6"
      >
        <TabList>
          <Tab>Statutory</Tab>
          <Tab>Referendum</Tab>
          <Tab>Recall</Tab>
        </TabList>
      </TabGroup>
      {ballots
        .filter((item) => item.location === selectedLocation)
        .map((item) => (
          <div key={item.title} className="space-y-2 mt-4">
            <Flex>
              <Text>{item.title}</Text>
              <Text>{`${item.value}% ${item.metric}`}</Text>
            </Flex>
            <ProgressBar value={item.value} color={item.color} />
          </div>
        ))}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowUpRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
}
