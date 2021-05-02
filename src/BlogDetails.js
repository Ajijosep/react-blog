import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import Button from "react-bootstrap/Button";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, showloading, errormsg } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
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
      {data && (
        <div className="full-blog fluid text-center mx-5 my-3">
          <article>
            <h2>{data.title}</h2>
            <p className="font-weight-light font-italic">Written by {data.author}</p>
            <hr />
            <div className="blog-body text-justify px-5 mx-2">
              <p>{data.body}</p>
            </div>
            <Button variant="outline-danger" onClick={handleDelete}>Delete Blog</Button>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
