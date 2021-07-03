import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SocialFollow from "../components/socialFollow"
import "@quasar/extras/ionicons-v4/ionicons-v4.css"
import "../styles/index.scss"
import "../components/bioAnimatedText"
import BioAnimatedText from "../components/bioAnimatedText"
import TwitterTimeLine from "../components/twitterTimeline"

const IndexPage = () => {
  const images = {
    hi: "images/hello.png",
    heart: "images/heart.png",
  }

  return (
    <Layout>
      <section className="hero">
        <br />
        <div id="light1"></div>
        <div id="light2"></div>
        <div id="light3"></div>
        <div id="light4"></div>
        <div id="light5"></div>

        <section className="introduction">
          <h1>Welcome to my home!</h1>
          <div className="bio">
            <BioAnimatedText />
          </div>
          <div id="briefIntro">
            So happy to host you here! <br />
            I'm a self-motivated person, always tried to reach goals by teaching
            myself to be dedicated and consistent.
            <br /> A day never comes to the end for me without a new learning or
            outcome. <br />I have working experiences for more than 18 years. If
            you're interested to know more about me, I invite you to check
            <Link to={"/about"}> My Profile. </Link>
            <br />
            <br />I sometimes write when kids are not around; here or elsewhere.
            <br /> But you can find them all in
            <Link to={"/posts"}> Posts </Link>. There are not many; but I try to
            write more from now on.
            <br />I have made this website in Gatsby and the source code is
            available in{" "}
            <a
              href={`https://github.com/siminmaleki/myWebsite_gatsby`}
              target="_blank"
            >
              {" "}
              my GitHub
            </a>
            .
            <br />
            <br />
            I'm also mentoring my wonderful daughter 'Diana Ashktorab' on her
            journey to learn programming. Don't forget to check her website @
            <a href={`https://www.dianash.dev`} target="_blank">
              dianash.dev
            </a>
            <br />
          </div>
          <SocialFollow />
        </section>
      </section>
      {/* 
      <section className="mycontent">
        <div className="twitterTimeline">
          <TwitterTimeLine />
        </div>
      </section> */}
      <br />
    </Layout>
  )
}

export default IndexPage
