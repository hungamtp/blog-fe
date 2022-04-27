import React from 'react';
import PopularPost from '../component/PopularPost';
import PostDetail from '../component/PostDetail';
import Profile from '../component/Profile';
import RecentPost from '../component/RecentPost';
import SearchBar from '../component/SearchBar';
import Slide from '../component/Slides';

function HomePage() {
  const titleRecentPost = 'Recent Post';
  const titlePopularPost = 'Popular Post';
  return (
    <>
      {/* <Slide />
      <SearchBar />
      <PopularPost />
      <RecentPost title={titleRecentPost} /> */}
      {/* <Profile /> */}
      <PostDetail />
    </>
  );
}

export default HomePage;
