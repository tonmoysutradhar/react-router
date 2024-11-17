import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title , body} = post ;

    // const params = useParams();
    // console.log(params);
    const {postId} = useParams();
    console.log(postId);
    

    const navigate = useNavigate();
    const handleGoBack = ()=> {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post Details</h3>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;