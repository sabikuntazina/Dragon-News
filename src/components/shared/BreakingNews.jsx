import React from 'react';
import Marquee from 'react-fast-marquee';

const newses=[
  {
    id:"1",
    title: "Breaking News: Major Event Unfolds in the city",
  },
  {
    id:"2",
    title: "Breaking News: New Policy Announced by the government",
  },
  {
    id:"3",
    title: "Breaking News: Sports Team Wins Championship",
  }
]

const BreakingNews = () => {
  return (
    <div className='flex justify-between items-center py-2 px-4 my-2 bg-pink-100 rounded-lg max-w-7xl mx-auto'>
      <button className='btn bg-pink-800 text-white font-semibold'>Latest</button>
      <Marquee pauseOnHover={true} speed={30}>
{
  newses.map(news=><span key={news.id}>{news.title}</span>)
}
</Marquee>
    </div>
  );
};

export default BreakingNews;