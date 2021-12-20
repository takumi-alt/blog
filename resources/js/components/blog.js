import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../css/app.css';
import ReactMarkdown from 'react-markdown';

const Blog = props => {
    const params = useParams();
    
    const [recode, setRecode] = useState([]);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [img, setImg] = useState();
    useEffect(() => {
        axios.get(`/api/read/${params.id}`)
        .then(res => {
            setRecode(res.data.posts);
            setTitle(res.data.posts.title);
            setContent(res.data.posts.content);
            setImg(res.data.posts.filepath);
        })
    }, []);
    console.log(recode);
    console.log(img);
    useEffect(() => {
        const path = `/storage/${img}`;
        const element = <img src={path} width="600" height="500" class="mx-auto"></img>
        ReactDOM.render(element, document.getElementById('image'));
        console.log(path);
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
                    <ReactMarkdown className="text-regal-black">
                        {title}
                    </ReactMarkdown>
                    <div id="image"></div>
                    <ReactMarkdown components={components} className="text-regal-black">
                        {content}
                    </ReactMarkdown>
                </div>

        </main>
    )
}
    
export default Blog
