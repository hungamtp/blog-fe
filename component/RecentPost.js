import React, { useState } from 'react';
import ArrowRight from '../Icon/ArrowRight';
import Post from './Post';

function RecentPost({ title }) {
  const [posts, setPosts] = useState([
    {
      title: 'How apps is changing the IT world',
      heart: 33,
      comment: 8,
      image: '/asset/images/blog/04.jpg',
      author: 'Calvin Carlo',
      date: '25th June 2021',
    },
    {
      title: 'Design your apps in your own way',
      heart: 33,
      comment: 8,
      image: '/asset/images/blog/05.jpg',
      author: 'Calvin Carlo',
      date: '25th June 2021',
    },
    {
      title: 'Smartest Applications for Business',
      heart: 33,
      comment: 8,
      image: '/asset/images/blog/06.jpg',
      author: 'Calvin Carlo',
      date: '25th June 2021',
    },
  ]);
  return (
    <div>
      <div className="container mt-100 mt-60">
        <div className="row align-items-center mb-4 pb-2">
          <div className="col-md-8">
            <div className="section-title text-center text-md-start">
              <h4 className="mb-4">{title}</h4>
              <p className="text-muted mb-0 para-desc">
                Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate
                awareness, drive traffic, connect.
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 mt-sm-0">
            <div className="text-center text-md-end">
              <a href="javascript:void(0)" className="btn btn-soft-primary">
                See More <ArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {posts.map(post => {
            return <Post post={post} />;
          })}
        </div>
      </div>

      {/* <div className="container-fluid mt-100 mt-60">
        <div className="rounded-md shadow-md py-5 position-relative" style={{ background: "url('/asset/images/3.jpg') center center;" }}>
          <div className="bg-overlay rounded-md"></div>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="fw-bold text-white title-dark mb-4 pb-2">People are podcasting all over the world</h2>
                  <a href="javascript:void(0)" className="btn btn-primary">
                    Read More <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RecentPost;
