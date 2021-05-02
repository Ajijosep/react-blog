import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            history.push('/')
        })
    }

  return (
    <div className="create mx-5 px-5">
      <h2 className="my-3">Add a new blog</h2>
      <Form className="my-4" onSubmit={handleSubmit}>
        <Form.Group controlId="BlogTitle">
          <Form.Label>Blog title</Form.Label>
          <Form.Control type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
          <Form.Text className="text-muted">Keep it short.</Form.Text>
        </Form.Group>

        <Form.Group controlId="BlogBody">
          <Form.Label>Blog body</Form.Label>
          <Form.Control as="textarea" rows={9} required value={body} onChange={(e) => setBody(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="BlogAuthor">
          <Form.Label>Written by</Form.Label>
          <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </Form.Group>

        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
        {isPending && <Button variant="secondary" type="submit" disabled>Submitting..</Button>}
      </Form>
    </div>
  );
};

export default Create;
