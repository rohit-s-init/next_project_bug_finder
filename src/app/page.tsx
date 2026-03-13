import prisma from "../../lib/prisma";

export default async function Home() {

  const data = prisma.issue.findMany();
  data.then(val=>{
    console.log(val);
  })

  return (
    <div>

    </div>
  );
}
