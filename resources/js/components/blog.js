import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../css/app.css';
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/github.css';
import ReactMarkdown from 'react-markdown';

const Blog = props => {
    const params = useParams();
    // const codeString = '(num) => num + 1';

    const [recode, setRecode] = useState([]);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/read/${params.id}`)
        .then(res => {
            setRecode(res.data.posts);
            setTitle(res.data.posts.title);
            setContent(res.data.posts.content);
        })
    }, []);
    console.log(recode);

    const components = {
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props} >
              {children}
            </code>
          )
        },
      }
    
   
    return (
        <main className="bg-regal-white">
            <div className="w-1/2 mx-auto bg-regal-white">
                <ReactMarkdown className="text-regal-black">
                    {title}
                </ReactMarkdown>
                <ReactMarkdown components={components} className="text-regal-black">{content}</ReactMarkdown>
            </div>

        </main>
    )
}

export default Blog
