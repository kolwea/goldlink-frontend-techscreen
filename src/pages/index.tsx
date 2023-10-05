import { Chart } from "chart.js";
import Head from "next/head";
import React from "react";
import { Table } from "antd";

type Volitility = "Low" | "Medium" | "High"

const TABLE_DATA = [
  {
    key: '1',
    strategy: 'Strategy 1',
    tvl: 100000,
    volitility: 'Low',
    collateral: 100,
    pnl: 100.84
  },
  {
    key: '2',
    strategy: 'Strategy 2',
    tvl: 100000,
    volitility: 'Medium',
    collateral: 100,
    pnl: -84.23,
  }, {
    key: '3',
    strategy: 'Strategy 3',
    tvl: 100000,
    volitility: 'Medium',
    collateral: 100,
    pnl: 24.53
  }, {
    key: '4',
    strategy: 'Strategy 4',
    tvl: 100000,
    volitility: 'High',
    collateral: 100,
    pnl: 45.98
  },
]

const TABLE_COLUMNS = [
  {
    title: 'Strategy',
    dataIndex: 'strategy',
    key: 'name',
  },
  {
    title: 'TVL',
    dataIndex: 'tvl',
    key: 'tvl'
  },
  {
    title: 'Volitility',
    dataIndex: 'volitility',
    key: 'volitility',
    render: (e: any) => {
      return VoltilityChip(e)
    }
  },
  {
    title: 'Collateral',
    dataIndex: 'collateral',
    key: 'collateral',
    render: (e: number) => <>${e}</>
  }, {
    title: 'PNL',
    dataIndex: 'pnl',
    key: 'pnl',
    render: (pnl: number) => {
      return (pnl < 0) ?
        <div className="text-[color:var(--red)]">{`- $${Math.abs(pnl)}`}</div> :
        <div className="text-[color:var(--green)]">{`+ $${pnl}`}</div>
    }
  },
]

const VoltilityChip = (type: Volitility) => {
  let style = type.toLocaleLowerCase() + "-chip";
  return (
    <div className={`${style} chip`} >
      <div className="px-2">{type}</div>
    </div>)
}

const StrategyPerformanceComponent = () => {
  return (
    <div className="w-[855px] h-[440px] bg-white rounded-md p-[16px] text-[18px]">
      <h2 className="p-4">
        Strategy Performance
      </h2>
      <Table pagination={false} dataSource={TABLE_DATA} columns={TABLE_COLUMNS} />
    </div>)
}

const LendingAllocationComponent = () => {
  return (
    <div className="w-[425px] h-[440px] bg-white rounded-md p-[16px] text-[18px]">
      <div className="flex flex-row justify-between">
        <h1> Lending Allocations</h1>
        <div className="text-zinc-500"> $5000 USDC</div>
      </div>
      <div className="w-[400px] bg-red-300">Hello
        <canvas id="pieChart"></canvas>
      </div>
    </div>)
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-row items-center justify-center gap-8 bg-zinc-100">
        <LendingAllocationComponent />
        <StrategyPerformanceComponent />

        <div className="w-[500px]"><canvas id="acquisitions"></canvas></div>

        <script type="module" src="acquisitions.js"></script>

      </main>
    </>
  );
}
