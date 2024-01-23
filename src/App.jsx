import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImgHoc from './components/HOC/LikeImgHoc';
import LikePostsHoc from './components/HOC/LikePostsHoc';

function App() {
  return (
    <div>
      <h3>So</h3>
      <div className='buttons'>
     <LikeImgHoc/>
     <LikePostsHoc/>
      </div>
    </div>
  );
}

export default App;
