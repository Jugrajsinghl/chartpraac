'use client'

// import { CartesianGrid, YAxis } from "recharts";
import { BarChart,Bar,XAxis,YAxis,CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts"

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

  
  export default function BarChartdd() {

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

      <BarChart margin={{right:30}} width={500} height={500} data={data}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey='name'/>
        <YAxis/>
        {/* <Tooltip content={customToolTip}/> */}
        <Tooltip />
        <Legend/>
        <Bar
         type='monotone'
         
         fill="#3b82f6"
          dataKey='uv'
        //   stackId='1'
          />
          <Bar
         type='monotone'
         fill="#8b5cf6"
          dataKey='pv'
        //   stackId='1'
          />
      </BarChart>
        </ResponsiveContainer>
    )
  }
  