import React from 'react'
import { useState, useEffect }  from 'react'
import { linkIcon, loader } from './assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons' 
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useLazyGetSummaryQuery } from './services/article';


const Demo = () => {
  const[article,setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setcopied] = useState("");

  useEffect( ( ) => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem( 'articles'))
    if(articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }
  }, [])
  const[getSummary, {error, isFetching}] = useLazyGetSummaryQuery();
  const handleSubmit = async (e) => { 
    e.preventDefault();
    const { data } = await getSummary({articleUrl : article.url});
    if( data?.summary) {
      const newArticle = { ...article, summary: data.summary};
      setArticle(newArticle);
      const updatedAllArticles = [newArticle, ...allArticles];
      setAllArticles(updatedAllArticles);
       
      localStorage.setItem( 'articles', JSON.stringify(updatedAllArticles))
    }
  }
  const copy = (copyUrl) => {
    setcopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setcopied(false), 4000 );
  }
  return (
    <section className="mt-16  w-full max-w-5xl">
      <div className="flex flex-col w-full gap-2">
        <form onSubmit = {handleSubmit} className="relative flex justify-center item-center">
        <img src={linkIcon} alt="link-icon" className='absolute left-0 my-2 ml-3 w-5' />

        <input 
          type="url" placeholder='Enter a URL' value={article.url} name="" id="" onChange = {(e)=>setArticle({...article,url: e.target.value})}
          required
          className='url_input peer'
          />
          <button type="submit" className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
          <FontAwesomeIcon icon={faArrowLeft} />
          </button>

        </form>
        {/**Browsed Url */}
        <div className="flex flex-col gap-1 max-h-60    overflow-y-auto">
          {allArticles.map((item,index) => (
          <div
            key ={`link-${index}`}
            onClick={() => setArticle(item)}
            className="link_card">
              <div className="copy_btn" onClick = {() => copy(item.url)}>
                <FontAwesomeIcon icon={copied === item.url? faCheckDouble : faCopy} 
                alt="copy_icon" className='w-[40%] h-[40%] object-contain' />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>

          </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items center">
        {isFetching ? ( <img src = {loader} alt = "loader" className="w-20 h-20 object-contain" />) :error ? (<p className="font-inter font-bold text-black text-center">
          Oooppss...!!<br/>
          Something went Wrong!
          <span>
           {error?.data?.data}
          </span>
        </p>
        ) : (
          article.summary &&(
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between w-full">
                <h2><span className="blue_gradient"> Article Summary</span></h2>
                <div className="copy_btn" onClick = {() => copy(article.summary)}>
                <FontAwesomeIcon icon={copied === article.summary? faCheckDouble : faCopy} 
                alt="copy_icon" className='w-[40%] h-[40%] object-contain' />
              </div>
              </div>
              <div className="summary_box">
                <p className= "font-inter font-medium text-sm text-gray-700">
                  {article.summary}
                  </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo;