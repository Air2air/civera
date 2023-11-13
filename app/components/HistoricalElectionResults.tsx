// components/HistoricalElectionResults.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    year: '2016',
    CandidateA: 4000,
    CandidateB: 2400,
  },
  {
    year: '2017',
    CandidateA: 3000,
    CandidateB: 1398,
  },
  {
    year: '2018',
    CandidateA: 2000,
    CandidateB: 9800,
  },
  {
    year: '2019',
    CandidateA: 2780,
    CandidateB: 3908,
  },
  {
    year: '2020',
    CandidateA: 1890,
    CandidateB: 4800,
  },
  {
    year: '2021',
    CandidateA: 2390,
    CandidateB: 3800,
  },
  {
    year: '2022',
    CandidateA: 3490,
    CandidateB: 4300,
  },
];

const HistoricalElectionResults: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="CandidateA" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="CandidateB" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HistoricalElectionResults;