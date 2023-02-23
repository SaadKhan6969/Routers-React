import {BrowserRouter,Route,Link,Routes} from "react-router-dom"
import About from "../screen/about"
import Post from "../screen/post"
import Comment from "../screen/comment"
import Album from "../screen/album"
import Image from "../screen/image"


 function AppRouter() {
return(
    <>
    <BrowserRouter>
    <nav>
        <Link className="iix" to="/about">About</Link>
        <Link className="iix" to="/post">Post</Link>
        <Link className="iix" to="/comment">Comment</Link>
        <Link className="iix" to="/album">album</Link>
        <Link className="iix" to="/image">Image</Link>
       
    </nav>
    <Routes>
        <Route path="about" element={<About/>} />
        <Route path="post" element={<Post/>} />
        <Route path="comment" element={<Comment/>} />
        <Route path="album" element={<Album/>} />
        <Route path="image" element={<Image/>} />
      
    </Routes>
    </BrowserRouter>
    
    </>
)
}
export default AppRouter