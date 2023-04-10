import { Router, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Home from '../../../styles/Home.module.css';
import styles from '../../../styles/Comment.module.css';
import Image from 'next/image';

async function postData(data) {
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    // console.log(req.body)
    const result = await res.json();
    console.log(result);
    return result;
  }

const Comment = () => {

  const [username,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [content,setContent]=useState('');
  const router =useRouter();
  const product_id = router.query.id;
  const date = new Date;
  const [comments,setComments]=useState([]);
  const [isAdded,setIsAdded]=useState(false)
  const [isLoading,setLoading]=useState(false);

useEffect(()=>{
setLoading(true);
fetch("/api/comments")
.then(response => response.json())
.then(data => {(setComments(data.data));setLoading(false)});
console.log(isAdded)

},[isAdded])

const handleSubmit = (e)=>{
    e.preventDefault();
    postData({username,email,content,product_id,date});
    setEmail("");
    setUserName("");
    setContent("");
    setIsAdded(!isAdded);
    
  }

//   if(isLoading)
//   {
//     return(
//         <div className={Home.loader}>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>    )
//   }else 
//   {

    return(
        <section className={styles.commentSection}>
        <h2 className={styles.heading}>Create Comment</h2>
    <form  className={styles['comment-form']} onSubmit={handleSubmit}>
    <label htmlFor="name" className={styles.label}>Name</label>
      <input type="text" id="name" className={styles.input} name="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>

      <label htmlFor="email" className={styles.label}>Email</label>
      <input type="email" id="email" className={styles.input}  name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

      <label htmlFor="comment" className={styles.label}>Comment</label>
      <textarea id="comment" className={styles.textarea} value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>

      <button type="submit" className={styles.button}>Comment</button>
   
    </form>  

    <div className={styles.commentSection}>
    <h2 className={styles.heading}>Comments</h2>

      {comments?.map(comment => (
        <div key={comment._id} className={styles.comment}>
            <div className={styles.userInfo}>
           <Image src="../n.svg" alt={comment.email}  width="40" height="40"/>
                <div className={styles.info}>
                <div className={styles.commentAuthor}>{comment.username}</div>
                <div className={styles.commentDate}>{comment.date}</div>
                </div>
            </div>
       
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
    
    </section>
    )
  }  
   
  
  export default Comment;
