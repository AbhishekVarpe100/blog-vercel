import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import axios from "axios";
import "./Shadow.css";
function AllBlogs({ username }) {
  const [data, setBlog] = useState([]);
  const [likes, likeCount] = useState(0);
  var [user,setUser]=useState('');
  var [blog,setblogName]=useState('');
  const blogData = () => {
    axios
      .get("http://localhost:5000/getblogs")
      .then((blog) => {
        setBlog(blog.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    blogData();
  }, []);

  const handleDelete = (id, username) => {
    axios
      .post("http://localhost:5000/deleteblog", { id, username })
      .then((res) => {
        if (res.data == "deleted") {
          alert("Deleted");
          setTimeout(() => {
            blogData();
          }, 2000);
        }
      });
  };


  const like=(userName,blogname)=>{
    axios.post("http://localhost:5000/getlikes",{userName,blogname})
          .then((res) => {
            likeCount(res.data.likeCount);
            // setUser(res.data.userName);
            // setblogName(res.data.blogname);

            alert(`${likes} likes for this post `);
            // alert(`${user} likes for this post `);
            // alert(`${blog} likes for this post `);
          })
          .catch((err) => console.log(err));
  }





  const handleLike = async (userName, blogname) => {
    await axios
      .post("http://localhost:5000/like", { username, userName, blogname });
  };

//   const getCount = () => {
//     axios
//       .get("http://localhost:3000/cartcount")
//       .then((count) => {
//         cartCount(count.data.cartCount);
//       })
//       .catch((err) => console.log(err));
//   };

  return (
    <div className="m-2">
      {username}
      <center>
        <h2 className="heading rounded text-white w-100 p-2 m-2">All Blogs</h2>
      </center>

      <div className="row">
      
        {data.length != 0 ? (

          data.map((item) => (
            
            <div
              className=" col-md-3 col-lg-3 myimagetemplate1 bl"
              key={item.id}
            >
            
              <hr />
              <div className="card-body">
                <p className="card-title w-100">
                  <b className="text-primary">
                    {" "}
                    <i> Blog Creator : </i>{" "}
                  </b>
                  {item.username}{" "}
                  {username == item.username ? (
                    <span className="text-dark bg-warning">You</span>
                  ) : (
                    <></>
                  )}{" "}
                </p>
                <p className="card-title w-100">
                  <b className="text-primary">
                    {" "}
                    <i> Blog Name : </i>{" "}
                  </b>
                  {item.blogname}
                </p>
                <p className="card-text w-100">
                  <b className="text-primary">
                    {" "}
                    <i> Blog description : </i>{" "}
                  </b>
                  {item.description}
                </p>
                <h3 onClick={() => handleLike(item.username, item.blogname)}>
                  <span>
                    <i
                      title="Like"
                      className="fa-solid fa-thumbs-up"
                      id="like"
                    ></i>
                  </span>
                </h3>{" "}
                <span>like</span>
                <p className="">
                  how many likes ?{" "}
                  <u>
                     <span className="text-primary btn btn-sm " onClick={()=>like(item.username,item.blogname)}>see <i class="fa fa-eye" aria-hidden="true"></i></span>
                  </u>{" "}
                </p>
              </div>
              <hr />
              <div className="card-body">
                {username == item.username ? (
                  <Link
                    className="btn btn-primary w-100"
                    to={`/edit/${item.id}`}
                  >
                    Edit
                  </Link>
                ) : (
                  <></>
                )}
                {username == item.username ? (
                  <button
                    onClick={() => handleDelete(item.id, item.username)}
                    className="btn btn-danger w-100 my-2"
                  >
                    Delete
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-warning">🙁 Nobody posted a blog</div>
        )}
      </div>

      <footer>
        <center>
          &copy;{" "}
          <small>
            All rights reserved by{" "}
            <i>
              <b>Abhishek Varpe</b>
            </i>
          </small>{" "}
        </center>
      </footer>
    </div>
  );
}

export default AllBlogs;
