import React from 'react';

import MailIcon from '../Icon/MailIcon';
import HomeIcon from '../Icon/HomeIcon';
import PersonIcon from '../Icon/PersonIcon';
import Message from '../Icon/Message';
import Facebook from '../Icon/FaceBook';
import InstagramIcon from '../Icon/InstagramIcon';

function PostDetail() {
  return (
    <section class="bg-half-170 d-table w-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7">
            <div class="card border-0 shadow rounded overflow-hidden">
              <img src="/asset/images/blog/standard.jpg" class="img-fluid" alt="" />

              <div class="card-body">
                <div class="text-center">
                  <span class="badge bg-primary">Travel</span>
                  <h4 class="mt-3">
                    A lifestyle you always being <br /> the focal point is innately unhealthy.
                  </h4>

                  <ul class="list-unstyled mt-3">
                    <li class="list-inline-item user text-muted me-2">
                      <i class="mdi mdi-account"></i> Cristina Jota
                    </li>
                    <li class="list-inline-item date text-muted">
                      <i class="mdi mdi-calendar-check"></i> 26th June, 2021
                    </li>
                  </ul>
                </div>

                <p class="text-muted mt-3">
                  The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin
                  words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin
                  script.{' '}
                </p>
                <blockquote class="blockquote mt-3 p-3">
                  <p class="text-muted mb-0 fst-italic">
                    " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look even slightly believable. "
                  </p>
                </blockquote>
                <p class="text-muted">
                  The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract
                  attention to itself or distract the viewer's attention from the layout.
                </p>
                <div class="post-meta mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item me-2 mb-0">
                      <a href="javascript:void(0)" class="text-muted like">
                        <i class="uil uil-heart me-1"></i>33
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="text-muted comments">
                        <i class="uil uil-comment me-1"></i>08
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="card shadow rounded border-0 mt-4">
              <div class="card-body">
                <h5 class="card-title mb-0">Comments :</h5>

                <ul class="media-list list-unstyled mb-0">
                  <li class="mt-4">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <a class="pe-3" href="#">
                          <img src="/asset/images/client/01.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                        </a>
                        <div class="commentor-detail">
                          <h6 class="mb-0">
                            <a href="javascript:void(0)" class="text-dark media-heading">
                              Lorenzo Peterson
                            </a>
                          </h6>
                          <small class="text-muted">15th August, 2021 at 01:25 pm</small>
                        </div>
                      </div>
                      <a href="#" class="text-muted">
                        <i class="mdi mdi-reply"></i> Reply
                      </a>
                    </div>
                    <div class="mt-3">
                      <p class="text-muted fst-italic p-3 bg-light rounded">
                        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                        form, by injected humour "
                      </p>
                    </div>
                  </li>

                  <li class="mt-4">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <a class="pe-3" href="#">
                          <img src="/asset/images/client/02.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                        </a>
                        <div class="commentor-detail">
                          <h6 class="mb-0">
                            <a href="javascript:void(0)" class="media-heading text-dark">
                              Tammy Camacho
                            </a>
                          </h6>
                          <small class="text-muted">15th August, 2021 at 05:44 pm</small>
                        </div>
                      </div>
                      <a href="#" class="text-muted">
                        <i class="mdi mdi-reply"></i> Reply
                      </a>
                    </div>
                    <div class="mt-3">
                      <p class="text-muted fst-italic p-3 bg-light rounded">
                        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                        form, by injected humour "
                      </p>
                    </div>
                  </li>

                  <li class="mt-4">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <a class="pe-3" href="#">
                          <img src="/asset/images/client/03.jpg" class="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                        </a>
                        <div class="commentor-detail">
                          <h6 class="mb-0">
                            <a href="javascript:void(0)" class="media-heading text-dark">
                              Tammy Camacho
                            </a>
                          </h6>
                          <small class="text-muted">16th August, 2021 at 03:44 pm</small>
                        </div>
                      </div>
                      <a href="#" class="text-muted">
                        <i class="mdi mdi-reply"></i> Reply
                      </a>
                    </div>
                    <div class="mt-3">
                      <p class="text-muted fst-italic p-3 bg-light rounded">
                        " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                        form, by injected humour "
                      </p>
                    </div>

                    <ul class="list-unstyled ps-4 ps-md-5 sub-comment">
                      <li class="mt-4">
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <a class="pe-3" href="#">
                              <img
                                src="/asset/images/client/01.jpg"
                                class="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                alt="img"
                              />
                            </a>
                            <div class="commentor-detail">
                              <h6 class="mb-0">
                                <a href="javascript:void(0)" class="text-dark media-heading">
                                  Lorenzo Peterson
                                </a>
                              </h6>
                              <small class="text-muted">17th August, 2021 at 01:25 pm</small>
                            </div>
                          </div>
                          <a href="#" class="text-muted">
                            <i class="mdi mdi-reply"></i> Reply
                          </a>
                        </div>
                        <div class="mt-3">
                          <p class="text-muted fst-italic p-3 bg-light rounded">
                            " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                            some form, by injected humour "
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card shadow rounded border-0 mt-4">
              <div class="card-body">
                <h5 class="card-title mb-0">Leave A Comment :</h5>

                <form class="mt-3">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">Your Comment</label>
                        <div class="form-icon position-relative">
                          <i class="fea icon-sm icons">
                            <Message />
                          </i>
                          <textarea
                            id="message"
                            placeholder="Your Comment"
                            rows="5"
                            name="message"
                            class="form-control ps-5"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">
                          Name <span class="text-danger">*</span>
                        </label>
                        <div class="form-icon position-relative">
                          <i class="fea icon-sm icons">
                            <PersonIcon />
                          </i>
                          <input id="name2" name="name" type="text" placeholder="Name" class="form-control ps-5" required="" />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">
                          Your Email <span class="text-danger">*</span>
                        </label>
                        <div class="form-icon position-relative">
                          <i class="fea icon-sm icons">
                            <MailIcon />
                          </i>
                          <input id="email2" type="email" placeholder="Email" name="email" class="form-control ps-5" required="" />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="send d-grid">
                        <button type="submit" class="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="card shadow rounded border-0 mt-4">
              <div class="card-body">
                <h5 class="card-title mb-0">Related Posts :</h5>

                <div class="row">
                  <div class="col-lg-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                      <div class="position-relative">
                        <img src="/asset/images/blog/01.jpg" class="card-img-top rounded-top" alt="..." />
                        <div class="overlay rounded-top"></div>
                      </div>
                      <div class="card-body content">
                        <h5>
                          <a href="javascript:void(0)" class="card-title title text-dark">
                            Design your apps in your own way
                          </a>
                        </h5>
                        <div class="post-meta d-flex justify-content-between mt-3">
                          <ul class="list-unstyled mb-0">
                            <li class="list-inline-item me-2 mb-0">
                              <a href="javascript:void(0)" class="text-muted like">
                                <i class="uil uil-heart me-1"></i>33
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="javascript:void(0)" class="text-muted comments">
                                <i class="uil uil-comment me-1"></i>08
                              </a>
                            </li>
                          </ul>
                          <a href="blog-standard-post.html" class="text-muted readmore">
                            Read More <i class="uil uil-angle-right-b align-middle"></i>
                          </a>
                        </div>
                      </div>
                      <div class="author">
                        <small class="text-light user d-block">
                          <i class="uil uil-user"></i> Calvin Carlo
                        </small>
                        <small class="text-light date">
                          <i class="uil uil-calendar-alt"></i> 25th June 2021
                        </small>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 mt-4 pt-2">
                    <div class="card blog rounded border-0 shadow">
                      <div class="position-relative">
                        <img src="/asset/images/blog/02.jpg" class="card-img-top rounded-top" alt="..." />
                        <div class="overlay rounded-top"></div>
                      </div>
                      <div class="card-body content">
                        <h5>
                          <a href="javascript:void(0)" class="card-title title text-dark">
                            How apps is changing the IT world
                          </a>
                        </h5>
                        <div class="post-meta d-flex justify-content-between mt-3">
                          <ul class="list-unstyled mb-0">
                            <li class="list-inline-item me-2 mb-0">
                              <a href="javascript:void(0)" class="text-muted like">
                                <i class="uil uil-heart me-1"></i>33
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a href="javascript:void(0)" class="text-muted comments">
                                <i class="uil uil-comment me-1"></i>08
                              </a>
                            </li>
                          </ul>
                          <a href="blog-standard-post.html" class="text-muted readmore">
                            Read More <i class="uil uil-angle-right-b align-middle"></i>
                          </a>
                        </div>
                      </div>
                      <div class="author">
                        <small class="text-light user d-block">
                          <i class="uil uil-user"></i> Calvin Carlo
                        </small>
                        <small class="text-light date">
                          <i class="uil uil-calendar-alt"></i> 25th June 2021
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-5">
              <a href="blog-standard-post.html" class="bg-soft-primary px-2 rounded">
                <i class="uil uil-arrow-left h5 mb-0 align-middle"></i> Prev{' '}
              </a>

              <a href="index-blog.html" class="btn btn-pills btn-icon btn-soft-primary">
                <i class="icons">
                  <HomeIcon />
                </i>
              </a>

              <a href="blog-standard-post.html" class="bg-soft-primary px-2 rounded">
                {' '}
                Next <i class="uil uil-arrow-right h5 mb-0 align-middle"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card border-0 sidebar sticky-bar ms-lg-4">
              <div class="card-body p-0">
                <div class="text-center">
                  <span class="bg-light d-block py-2 rounded shadow text-center h6 mb-0">Author</span>

                  <div class="mt-4">
                    <img
                      src="/asset/images/client/03.jpg"
                      class="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto"
                      alt=""
                    />

                    <a href="blog-about.html" class="text-primary h5 mt-4 mb-0 d-block">
                      Cristina Jota
                    </a>
                    <small class="text-muted d-block">Photographer & Blogger</small>
                  </div>
                </div>

                <div class="widget mt-4">
                  <span class="bg-light d-block py-2 rounded shadow text-center h6 mb-0">Recent Post</span>

                  <div class="mt-4">
                    <div class="d-flex align-items-center">
                      <img src="/asset/images/blog/01.jpg" class="avatar avatar-small rounded" style={{ width: 'auto' }} alt="" />
                      <div class="flex-1 ms-3">
                        <a href="javascript:void(0)" class="d-block title text-dark">
                          Consultant Business
                        </a>
                        <span class="text-muted">15th April 2021</span>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mt-3">
                      <img src="/asset/images/blog/02.jpg" class="avatar avatar-small rounded" style={{ width: 'auto' }} alt="" />
                      <div class="flex-1 ms-3">
                        <a href="javascript:void(0)" class="d-block title text-dark">
                          Grow Your Business
                        </a>
                        <span class="text-muted">15th April 2021</span>
                      </div>
                    </div>

                    <div class="d-flex align-items-center mt-3">
                      <img src="/asset/images/blog/03.jpg" class="avatar avatar-small rounded" style={{ width: 'auto' }} alt="" />
                      <div class="flex-1 ms-3">
                        <a href="javascript:void(0)" class="d-block title text-dark">
                          Look On The Glorious Balance
                        </a>
                        <span class="text-muted">15th April 2021</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="widget mt-4">
                  <span class="bg-light d-block py-2 rounded shadow text-center h6 mb-0">Tagclouds</span>

                  <div class="tagcloud text-center mt-4">
                    <a href="jvascript:void(0)" class="rounded">
                      Business
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Finance
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Marketing
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Fashion
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Bride
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Lifestyle
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Travel
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Beauty
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Video
                    </a>
                    <a href="jvascript:void(0)" class="rounded">
                      Audio
                    </a>
                  </div>
                </div>

                <div class="widget mt-4">
                  <span class="bg-light d-block py-2 rounded shadow text-center h6 mb-0">Social Media</span>

                  <ul class="list-unstyled social-icon text-center mb-0 mt-4">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i class="fea icon-sm fea-social">
                          <Facebook />
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i class="fea icon-sm fea-social">
                          <InstagramIcon />
                        </i>
                      </a>
                    </li>
                    {/* <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="twitter" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="linkedin" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="github" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="youtube" class="fea icon-sm fea-social"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="rounded">
                        <i data-feather="gitlab" class="fea icon-sm fea-social"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PostDetail;
