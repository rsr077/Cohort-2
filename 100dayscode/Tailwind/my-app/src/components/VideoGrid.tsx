import { VideoCard } from "./VideoCard"
const VIDEOS = [{
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}, {
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
},{
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}, {
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}, {
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
},{
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
},{
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}, {
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
},{
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}, {
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}, {
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
},{
  title:"How to learn coding in30 days | 30 day plan | Code with me",
  image:"thumb.jpg",
   thumImage:"thumb.jpg",
   author:"rajeev singh",
   views:"100k",
   timestamp:"2 days go "
}]


export const VideoGrid= ()=>  {
   return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
   {VIDEOS.map(video => <div>
    <VideoCard 

title={video.title}
image={video.image}
 thumImage={video.thumImage}
 author={video.author}
 views= {video.views}
 timestamp={video.timestamp}
></VideoCard>

    </div>)}
   </div>
}