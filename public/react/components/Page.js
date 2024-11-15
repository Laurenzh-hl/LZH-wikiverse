import React from 'react';

function Page(props) {
    return (
        <>
          <h1>{props.title}</h1>
          <p><b>Author:</b> {props.author.name}</p>
          <p><b>Published:</b> {new Date(props.createdAt).toLocaleDateString()}</p>
          <p>{props.content}</p>
          <p><b>Tags:</b></p>
          <ul>{props.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}</ul>
          <button onClick={props.goHome}>Back to Wiki List</button>
        </>
      )
}

export default Page