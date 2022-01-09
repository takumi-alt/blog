import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../css/app.css';
import ReactMarkdown from 'react-markdown';
import {AiOutlineHistory} from 'react-icons/ai';
import ShareButton from './ShareButton';



const Blog = props => {
    const params = useParams();
    const[date, setDate] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
        axios.get(`/api/read/${params.id}`)
        .then(res => {
            setDate(res.data.date)
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
              <SyntaxHighlighter style={prism} language={match[1]} PreTag="div" {...props}>
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
        <main className="bg-gray-200">
            
                <div className="md:w-2/3 mx-auto pt-8 px-4 bg-gray-200">
                    <div className="flex text-gray-500"><AiOutlineHistory className="text-purple-500 mr-2 w-4 h-4" />{date}</div>
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
