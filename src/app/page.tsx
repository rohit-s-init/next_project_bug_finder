import prisma from "../../lib/prisma";

export default async function Home() {

  const data = prisma.issue.findMany();

  return (
    <div>
{(await data).map(val=>{
  return <div>{JSON.stringify(val)}</div>
})}
    </div>
  );
}
