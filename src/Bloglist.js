import { Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Bloglist = ({ blogs }) => {
  //   const blogs = props.blogs;
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Card className="mx-5 my-3 text-center">
            <Card.Body>
              {/* <Link to="/create">
                <h3>{blog.title}</h3>
                <p className="fw-lighter">-{blog.author}</p>
              </Link> */}
              <Nav.Link as={NavLink} to={`/blogs/${blog.id}`}>
                <h3 className="text-dark">{blog.title}</h3>
                <p className="fw-lighter text-secondary">-{blog.author}</p>
              </Nav.Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
