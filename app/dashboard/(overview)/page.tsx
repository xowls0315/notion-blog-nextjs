export default async function DashBoardPage() {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(5000); // 5초 대기
  return <div>Dashboard</div>;
}
