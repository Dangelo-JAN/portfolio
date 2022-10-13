import React from 'react'
import Article from '../../components/article/Article'
import { project01, project02, project03 } from './imports'
import './blog.css'

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={project01} date="September, 2022" text="Home Stadium" tech="Ruby on Rails, React.js" projUrl="https://homestadium.netlify.app/login" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={project02} date="May, 2022" text="Space Travelers" tech="React.js" projUrl="https://space-hub-travelers.netlify.app/" />
        <Article imgUrl={project03} date="December, 2020" text="Haydee Castro's book" tech="PHP" projUrl="http://haydeecastro.com/" />
      </div>
    </div>
  </div>
);

export default Blog
