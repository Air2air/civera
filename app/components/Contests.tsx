"use client";

import { useState } from "react";
import { Card, Text, Flex, Metric, BadgeDelta, Title } from "@tremor/react";

const Contests = () => {
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
      <Flex
        justifyContent="between"
        alignItems="baseline"
        className="mx-2 my-4"
      >
        <Card className="mr-2 w-1/4 flex justify-center items-center bg-slate-100">
          <Text>Trending contest stat</Text>
        </Card>

        <Card className="mx-2 w-1/4 flex justify-center items-center bg-slate-100">
          <Text>Trending contest stat</Text>
        </Card>

        <Card className="mx-2 w-1/4 flex justify-center items-center bg-slate-100">
          <Text>Trending contest stat</Text>
        </Card>

        <Card className="ml-2 w-1/4 flex justify-center items-center bg-slate-100">
          <Text>Trending contest stat</Text>
        </Card>
      </Flex>

      <Card className="m-2 my-4 flex flex-col justify-center items-between bg-slate-100">
        <Flex
          justifyContent="between"
          alignItems="baseline"
          className="mx-2 my-4"
        >
          <Card className="p-2 mr-2 w-1/4 flex justify-center items-center bg-white">
            <Text>Insights filter/sort</Text>
          </Card>
          <Card className="p-2 mx-2 w-1/4 flex justify-center items-center bg-white">
            <Text>Insights filter/sort</Text>
          </Card>
          <Card className="p-2 mx-2 w-1/4 flex justify-center items-center bg-white">
            <Text>Insights filter/sort</Text>
          </Card>
          <Card className="p-2 ml-2 w-1/4 flex justify-center items-center bg-white">
            <Text>Insights filter/sort</Text>
          </Card>
        </Flex>
        <Title className="h-28 flex justify-center items-center ">
          Contest Insights Chart
        </Title>
      </Card>

      <Card className="m-2 my-4 flex flex-col justify-center items-between bg-slate-100">
        <Flex
          justifyContent="between"
          alignItems="baseline"
          className="mx-2 my-4"
        >
          <Card className="p-2 mr-2 w-1/4 flex justify-center items-center bg-white">
            <Text>List filter/sort</Text>
          </Card>
          <Card className="p-2 mx-2 w-1/4 flex justify-center items-center bg-white">
            <Text>List filter/sort</Text>
          </Card>
          <Card className="p-2 mx-2 w-1/4 flex justify-center items-center bg-white">
            <Text>List filter/sort</Text>
          </Card>

          <Card className="p-2 ml-2 w-1/4 flex justify-center items-center bg-white">
            <Text>List filter/sort</Text>
          </Card>
        </Flex>
        <Title className="h-64 flex justify-center items-center ">
          Contest Results List
        </Title>
      </Card>
    </Card>
  );
};

export default Contests;
