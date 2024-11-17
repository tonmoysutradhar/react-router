import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title , body} = post ;
    return (
        <div>
            <h3>Post Details</h3>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;