import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from '../Components/Pagination'
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";


export default function All({ language = 'all' }) {
  const [arr, setArr] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setloading] = useState(false)

  const getData = async ({ language, page }) => {
    return await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}+page=${page}&per_page=10`)
      .then((res) => res.json())
  }

  useEffect(() => {
    setloading(true)
    getData({ page, language })
      .then((res) => {
        setloading(false)
        setArr(res.items)
      })
  }, [page, language])


  return (<>
    <div>
      {loading ? <img className='loadingImg' src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' /> :
        <div className='mainContainer' >
          {
            arr.map((ele) =>
              <a href={ele.clone_url} target='_blank' key={ele.id} >
                <img src={ele.owner.avatar_url} alt={ele.name} />
                <p>{ele.name}</p>
                <p>{ele.language}</p>
                <div>
                  <p><AiFillStar color='gold' className='icons' />{ele.stargazers_count} stars</p>
                  <p><CgGitFork color='skyblue' className='icons' /> {ele.forks_count} forks</p>
                </div>
              </a>
            )
          }
        </div>
      }
    </div>
    <Pagination current={page} onchange={(value) => setPage(value)} />
  </>
  )
}
