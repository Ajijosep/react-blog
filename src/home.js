
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  
  const {data:blogs, showloading, errormsg} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <div className="container my-5 px-5">
        {showloading && (
          <div className="alert alert-info" role="alert">
            Fetching data...
          </div>
        )}

        {errormsg && (
          <div className="alert alert-danger" role="alert">
            {errormsg}
          </div>
        )}

        {blogs && (
          <Bloglist blogs={blogs} />
        )}
      </div>
    </div>
  );
};

export default Home;
