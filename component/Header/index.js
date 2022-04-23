import React from 'react';
import Image from 'next/image';
import SettingIcon from '../../Icon/SettingIcon';

function Header() {
  const toggleMenu = () => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  };

  const displayBoxSearch = () => {
    // const body = document.getElementsByTagName('body');
    // body.style.overflow = 'hiddent';
    // body.padding-right = 15px
  };
  return (
    <header id="topnav" className="defaultscroll sticky bg-white">
      <div className="container">
        <a className="logo" href="index.html">
          <img src="/asset/images/logo-dark.png" height={24} className="logo-light-mode" alt="Logo" />
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <div className="offcanvas bg-white offcanvas-top" tabIndex="-1" id="offcanvasTop">
          <div className="offcanvas-body d-flex align-items-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    <h4>Search now.....</h4>
                    <div className="subcribe-form mt-4">
                      <form>
                        <div className="mb-0">
                          <input
                            type="text"
                            id="help"
                            name="name"
                            className="border bg-white rounded-pill"
                            required=""
                            placeholder="Search"
                          />
                          <button type="submit" className="btn btn-pills btn-primary">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item mb-0 pe-1">
            <i onClick={displayBoxSearch} className="uil uil-search h5 text-dark align-middle"></i>
          </li>

          <li className="list-inline-item mb-0">
            <a>
              <div className="btn btn-icon btn-pills btn-soft-primary">
                <SettingIcon />
              </div>
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="index-blog.html" className="sub-menu-item">
                Home
              </a>
            </li>

            <li>
              <a href="blog-about.html" className="sub-menu-item">
                About
              </a>
            </li>

            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Post</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="blog-standard-post.html" className="sub-menu-item">
                    Standard Post
                  </a>
                </li>
                <li>
                  <a href="blog-slider-post.html" className="sub-menu-item">
                    Slider Post
                  </a>
                </li>
                <li>
                  <a href="blog-gallery-post.html" className="sub-menu-item">
                    Gallery Post
                  </a>
                </li>
                <li>
                  <a href="blog-youtube-post.html" className="sub-menu-item">
                    Youtube Post
                  </a>
                </li>
                <li>
                  <a href="blog-vimeo-post.html" className="sub-menu-item">
                    Vimeo Post
                  </a>
                </li>
                <li>
                  <a href="blog-audio-post.html" className="sub-menu-item">
                    Audio Post
                  </a>
                </li>
                <li>
                  <a href="blog-blockquote-post.html" className="sub-menu-item">
                    Blockquote
                  </a>
                </li>
                <li>
                  <a href="blog-left-sidebar-post.html" className="sub-menu-item">
                    Left Sidebar
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0)" className="sub-menu-item">
                Lifestyle
              </a>
            </li>

            <li>
              <a href="javascript:void(0)" className="sub-menu-item">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
