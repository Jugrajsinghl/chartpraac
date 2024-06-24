'use client'

// import { CartesianGrid, YAxis } from "recharts";
import { AreaChart,Area,XAxis,YAxis,CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  
  export default function Line() {

    const customToolTip= ({active,payload,label})=>{
        if(active && payload && payload.length){
            return (
                <>
                <p>{label}</p>
                <p>uv</p>
                <p>{payload[0].value}</p>
                <p>pv</p>
                <p>{payload[1].value}</p>
                </>
            )
        }
    }
    return (
        <ResponsiveContainer>

      <AreaChart width={500} height={500} data={data}>
        <YAxis/>
        <XAxis dataKey='name'/>
        <CartesianGrid strokeDasharray='5 5'/>
        <Legend/>
        <Tooltip content={customToolTip}/>
        {/* <Tooltip /> */}
        <Area
         type='monotone'
         stroke="#2563eb"
         fill="#3b82f6"
          dataKey='uv'
          stackId='1'
          />
          <Area
         type='monotone'
         stroke="#7c3aed"
         fill="#8b5cf6"
          dataKey='pv'
          stackId='1'
          />
      </AreaChart>
        </ResponsiveContainer>
    )
  }
  