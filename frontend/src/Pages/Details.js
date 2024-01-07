import React, { useEffect, useState } from 'react';
import { blog } from '../assets/data/data';
import { useParams } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

export default function Details() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));

    if (blogs) {
      setBlogs(blogs);
    }
  }, []);
  return (
    <>
      {blogs ? (
        <section className="singlePost">
          <div className="container">
            <div className="left">
              <h1 className="title">{blogs.title}</h1>
            </div>
            <section className="allarticle">
              <div className="small-container">
                <div className="row">
                  <div className="col-12">
                    <img src={blogs.cover} alt="" />
                    <div className="right">
                      <p>{blogs.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
}
