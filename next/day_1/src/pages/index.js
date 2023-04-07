import styles from '@/styles/Home.module.css'
import path from 'path'
import fs from 'fs/promises';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';



export async function getStaticProps() {
const fileData = path.join(process.cwd(),"db",'data.json');
  const res = await fs.readFile(fileData);
  const data = await JSON.parse(res);

  if(!data){
  return 
  {
    redirect:{
      destination:'/no-data'
    }
  }
}
  // Pass data as props to the page component
  if(!data.todo.length)
  {
    return{
        notFound:true
    }
  }
  return {
    props: {
    tasks:data.todo,
    },
    revalidate: 20
  }
}



export default function Home({tasks}) {
  
  return (
    <ul className={styles.container}>
        {tasks?.map(task =>{
          return(
          <li className={styles.item} key={task.id}>
            <Link className={styles.link} href={`tasks/${task.id}`}> to do #{task.id} </Link>
          </li>
          )
        })}
    </ul>
  )
}
