import React from 'react';

function Post({ post }) {
  return (
    <div className="col-lg-4 col-md-6 mt-4 pt-2">
      <div className="card blog rounded border-0 shadow overflow-hidden">
        <div className="position-relative">
          <img src={post.image} className="card-img-top" alt="..." />
          <div className="overlay rounded-top"></div>
        </div>
        <div className="card-body content">
          <h5>
            <a href="javascript:void(0)" className="card-title title text-dark">
              {post.title}
            </a>
          </h5>
          <div className="post-meta d-flex justify-content-between mt-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item me-2 mb-0">
                <a href="javascript:void(0)" className="text-muted like">
                  <i className="uil uil-heart me-1"></i>
                  {post.heart}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="text-muted comments">
                  <i className="uil uil-comment me-1"></i>
                  {post.comment}
                </a>
              </li>
            </ul>
            <a href="blog-detail.html" className="text-muted readmore">
              Read More <i className="uil uil-angle-right-b align-middle"></i>
            </a>
          </div>
        </div>
        <div className="author">
          <small className="text-light user d-block">
            <i className="uil uil-user"></i> {post.author}
          </small>
          <small className="text-light date">
            <i className="uil uil-calendar-alt"></i> {post.date}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Post;
