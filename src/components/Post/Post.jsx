import { Link, Navigate, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const {id, title} = post ;

    const navigate = useNavigate();
    const handleShowDetails = ()=> {
        navigate(`/post/${id}`)
    }

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
                <button>Click Me</button>
            </Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;