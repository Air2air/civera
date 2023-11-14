"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
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
  Title,
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

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  tooltip?: string;
  showAnimation?: boolean;
  bgcolor?: string | undefined;
}

export default function Contests() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLocation = selectedIndex === 0 ? "A" : "B";

  return (
    <Card>
      <Flex alignItems="start">
        <Text>Recent Contests</Text>
        <BadgeDelta deltaType="moderateIncrease">2.3%</BadgeDelta>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="space-x-3 truncate"
      >
        <Metric>15,778</Metric>
        <Text>from 15,023</Text>
      </Flex>
      <Flex justifyContent="between" alignItems="baseline" className="my-2">
        <Card className="m-2 w-1/4">
          <Title>Trending stat</Title>
        </Card>

        <Card className="m-2 w-1/4">
          <Title>Trending stat</Title>
        </Card>

        <Card className="m-2 w-1/4">
          <Title>Trending stat</Title>
        </Card>

        <Card className="m-2 w-1/4">
          <Title>Trending stat</Title>
        </Card>
      </Flex>
      Pertinent notifications
    </Card>
  );
}
