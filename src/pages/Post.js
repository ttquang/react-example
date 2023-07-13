import {useParams} from 'react-router-dom';

export function Post() {
    const {slug} = useParams();
    const post = BlogPosts[slug];
    if (!post) {
        return <span>The blog post you've requested doesn't exist.</span>;
    }
    const {title, description} = post;
    return (
        <div style={{padding: 20}}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

const BlogPosts = [{
    title: 'First Blog Post', description: 'Lorem ipsum dolor sit amet, consectetur adip.'
}, {
    title: 'Second Blog Post', description: 'Hello React Router v6'
}];
