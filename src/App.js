import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PostDetails from "./pages/PostDetails";

import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import HeaderWithLogin from "./Components/HeaderWithLogin";
import HeaderNoLogin from "./Components/HeaderNoLogin";
import Changepassword from "./Components/Change-password";
import EditProfile from "./pages/EditProfile";
import Changeusername from "./Components/Change-username";
import Changephone from "./Components/Change-phone";
import Changeemail from "./Components/Change-email";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderWithLogin />}>
            <Route path="/" element={<Home />} />
            {
              // ---
            }
            <Route path="profile" element={<Profile />}>
              <Route path="edit-profile" element={<EditProfile />}>
                <Route path="change-password" element={<Changepassword />} />             
                <Route path="change-username" element={<Changeusername />} />             
                <Route path="change-phone-number" element={<Changephone />} />             
                <Route path="change-email" element={<Changeemail />} />             
              </Route>
              <Route path="posts" element={<Posts />} />
              <Route path="postDetails" element={<PostDetails />} />
            </Route>
            {
              // -----
            }
            <Route path="/post/:id" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
