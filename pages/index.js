import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import JokeService from '../services/services'
export default function Home() {
  const [titleButton, setTitleButton] = React.useState("Load Jokes")
  const [jokesData, SetJokesData] = React.useState({})

  const getJokesHandler = () => {
    JokeService.getJokes().then(res => {
      setTitleButton("Next Jokes")
      SetJokesData(res?.data)
    })
      .catch(err => console.log(err))
  }

  const clearJokes = () => {
    setTitleButton("Load Jokes")
    SetJokesData({})
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to chuck norris jokes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Load Jokes</h3>

      <div className={styles.container}>
        {
          jokesData?.value === null ?
            <h1></h1> : <h1>{jokesData?.value}</h1>
        }
        <button onClick={() => getJokesHandler()}>{titleButton}</button>
        <button onClick={() => clearJokes()}>Clear Jokes</button>
      </div>

    </div>
  )
}
