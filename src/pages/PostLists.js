import {Link} from "react-router-dom";

export function PostLists() {
    return (
        <ul>
            {BlogPosts.map((value, index) => (
                <li key={index}>
                    <Link to={`/posts/${index}`}>
                        <h3>{value.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const BlogPosts = [{
    title: 'First Blog Post', description: 'Lorem ipsum dolor sit amet, consectetur adip.'
}, {
    title: 'Second Blog Post', description: 'Hello React Router v6'
}];

