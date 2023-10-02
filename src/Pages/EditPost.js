import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';
import { useParams } from 'react-router-dom';


function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        fetch(`https://gravityunveiledapi-bete.onrender.com/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
            })
        })
    }, [id]);
    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }

        await fetch('https://gravityunveiledapi.onrender.com/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        setRedirect(true);
    }
    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }
    return (

        <form action="" onSubmit={updatePost}>
            <input type="title" placeholder={'Title'} value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="summary" placeholder={'Summary'} value={summary} onChange={(e) => setSummary(e.target.value)} />
            <input type="file" onChange={ev => setFiles(ev.target.files)} />
            <Editor onChange={setContent} value={content} />
            <button>Update Post</button>
        </form>
    )
}

export default EditPost