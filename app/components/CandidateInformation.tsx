// components/CandidateInformation.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Michael Bennet',
    votes: 1400000,
    fill: '#4572A7',
  },
  {
    name: 'Joe O\'Dea',
    votes: 1030000,
    fill: '#AA4643',
  },
  {
    name: 'Brian Peotter',
    votes: 43500,
    fill: '#80699B',
  },
];

const CandidateInformation: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="votes"  />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CandidateInformation;
