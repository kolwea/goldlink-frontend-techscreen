import Head from "next/head";
import Link from "next/link";

const cfg = {

}

const StrategyTable = () => {
  return <table className="table-auto border-zinc-800">
    <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
}

const LendingPieChart = () => {
  return (
    <>
    </>
  )
}

const LendingAllocationsComponent = () => {
  return (
    <div className="w-[425px] h-[440px] bg-white shadow-lg p-4 rounded-md">
      <div className="flex flex-row justify-between text-[18px]">
        <h1>Lending Allocation</h1>
        <div>$5000 USDC</div>
      </div>
      <LendingPieChart />
    </div>
  )
}

const StrategyPerformanceComponent = () => {
  return (
    <div className="w-[855px] h-[440px] bg-white shadow-lg p-4 rounded-md">
      <h1 className="text-[18px]">Strategy Performance</h1>
      <StrategyTable/>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>GoldLink Frontend Tech Screen</title>
        <meta name="description" content="Front-end tech screen for Goldlink Round 1 Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-row items-center justify-center gap-4 bg-slate-300">
        <LendingAllocationsComponent />
        <StrategyPerformanceComponent />
      </main>
    </>
  );
}
