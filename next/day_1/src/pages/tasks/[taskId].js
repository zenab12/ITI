//dynamic routing 
import { useRouter } from "next/router";
import React from 'react'
import path from "path";
import fs from 'fs/promises'
import styles from "../../styles/Home.module.css"


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
  
export async function getStaticPaths() {
  const fileData = path.join(process.cwd(),"db",'data.json');
  const res = await fs.readFile(fileData);
  const data = await JSON.parse(res);
  const paths = data.todo.map(task => ({
    params: { taskId: task.id.toString() }
  }));

  return {
    paths,
    fallback: true
  };
}

const Task = ({tasks}) => {
    const router = useRouter();
    const {taskId} = router.query;
    //router.push doesn't work
    // router.push(`/${taskId}`);

  return (
    <div className={styles.tasks}>
    <h1>Task details</h1>
   <div className={styles.table}>
        <p>task #{taskId}</p>
        {(tasks.filter(task=>+task.id==+taskId)).map(task=>{return(<p>{task.title}</p>)})}

    </div>

    </div>
 
  )
}
export default Task;
