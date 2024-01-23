import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImgHoc from './components/HOC/LikeImgHoc';
import LikePostsHoc from './components/HOC/LikePostsHoc';
import LikeImageProps from './components/RenderProps/LikeImgProp';
import LikePostProps from './components/RenderProps/LikePostProp';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
        <h1>Using Code Duplicity</h1>
        <LikePost/>
        <LikeImage/>
        <h1>Using HOC</h1>
        <LikeImgHoc/>
        <LikePostsHoc/>
        <h1>Using Renderprops</h1>
        <LikeImageProps/>
        <LikePostProps/>
        
    </div>
  );
}

export default App;
