import React, {useState} from 'react'
import '../../css/app.css'
import Background from './Background'

const Contact = () => {
    // POST先のpathを管理
    const true_path = "/api/contact"
    const false_path = ""
    const [path, setPath] = useState(`${true_path}`)
    const [method, setMethod] = useState("POST")
    
    // 1つでもfalseがあれば、preventDefaultする
    const [active_name, setActive_name] = useState(true)
    const [active_mail, setActive_mail] = useState(true)
    const [active_title, setActive_title] = useState(true)
    const [active_content, setActive_content] = useState(true)

    // contactのinputのvalue
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // 入植した内容をstateで管理
    const handleChange = (event) => {
        switch (event.target.name) {
          case 'name':
            setName(event.target.value);
            break;
          case 'mail':
            setMail(event.target.value);
            break;
          case 'title':
            setTitle(event.target.value);
            break;
          case 'content':
            setContent(event.target.value);
            break;
          default:
            console.log('key not found');
        }
      };

    //   preventDefaultするかどうかの処理
      const check = (e) => {
          if(name == '' || mail == '' || title == '' || content == '') {
              setActive_name(false)
              setActive_mail(false)
              setActive_title(false)
              setActive_content(false)
              setMethod("")
              setPath(`${false_path}`)
              e.preventDefault();
          }
          
        }
                    
    return (
        <div className="bg-gray-200 mx-auto relative overflow-hidden pt-32 sm:pt-44">
            < Background />
            <div className="md:w-4/5 mx-auto px-4 pt-12">

                <form name="form1" action={path} method={method} onSubmit={check}>
                    <div className="mb-8 w-full">
                        <p className="mb-2 text-lg font-black">name</p>
                        <input type="text" name="name" className="block mx-auto rounded-xl w-full h-12" value={name} onChange={handleChange}></input>
                        <p className={active_name ? "hidden" : "text-red-400"}>※名前を入力してください</p>
                    </div>
                    <div className="mb-8 w-full">
                        <p className="mb-2 text-lg font-black">mail</p>
                        <input type="text" name="mail" className="block mx-auto rounded-xl w-full h-12" value={mail} onChange={handleChange}></input>
                        <p className={active_mail ? "hidden" : "text-red-400"}>※メールアドレスを入力してください</p>
                    </div>
                    <div className="mb-8 w-full">
                        <p className="mb-2 text-lg font-black">title</p>
                        <input type="text" name="title" className="block mx-auto rounded-xl w-full h-12" value={title} onChange={handleChange}></input>
                        <p className={active_title ? "hidden" : "text-red-400"}>※タイトルを入力してください</p>
                    </div>
                    <div className="pb-8 w-full">
                        <p className="mb-2 text-lg font-black">content</p>
                        <textarea name="content" className="block mx-auto rounded-xl w-full h-48" value={content} onChange={handleChange}></textarea>
                        <p className={active_content ? "hidden" : "text-red-400"}>※内容を入力してください</p>
                    </div>
                    <div className="pb-12">
                        <button type="submit" className="bg-white w-24 h-8 rounded-xl text-lg font-black">submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
