import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../../css/app.css';
import ReactMarkdown from 'react-markdown';
import {AiOutlineHistory} from 'react-icons/ai';
import { AiFillFolderOpen } from "react-icons/ai";
import ShareButton from './ShareButton';



const Blog = () => {
    const params = useParams();
    const[date, setDate] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [img, setImg] = useState();
    const [category, setCategory] = useState();

    useEffect(() => {
        axios.get(`/api/read/${params.id}`)
        .then(res => {
            setDate(res.data.date)
            setCategory(res.data.category);
            setTitle(res.data.posts.title);
            setContent(res.data.posts.content);
            setImg(res.data.posts.filepath);
        })
    }, []);

    useEffect(() => {
        const path = `/storage/${img}`;
        const element = <img src={path} width="600" className="mx-auto"></img>
        ReactDOM.render(element, document.getElementById('image'));
    }, [img])

    const components = {
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
              <SyntaxHighlighter style={atelierCaveLight} language={match[1]} PreTag="div" {...props}>
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
        <main className="bg-regal-beige">
            
                <div className="md:w-2/3 mx-auto py-6 px-4 bg-regal-beige">
                    <div className="text-gray-500">
                        <span className="p-1">
                            <AiOutlineHistory className="text-regal-green mr-2 w-4 h-4 inline" />{date}
                        </span>
                        <span className="ml-4 rounded-lg p-1">
                            <AiFillFolderOpen className="mr-2 w-4 h-4 inline text-regal-green" />{category}
                        </span>
                    </div>
                    <ReactMarkdown className="text-regal-black">
                        {title}
                    </ReactMarkdown>
                    <div id="image" className="mb-4"></div>
                    <ShareButton url={`https://engineeeer.site/blog/article/${params.id}`} title={title}/>
                    <ReactMarkdown components={components} className="text-regal-black">
                        {content}
                    </ReactMarkdown>
                    <div className="m-0 h-4"></div>
                </div>

        </main>
    )
}
    
export default Blog
