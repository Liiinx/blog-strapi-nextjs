import React from "react"
import Moment from "react-moment";

const Comments = ({ comments }) => {
    console.log(comments);
    return(
        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div className="uk-width-expand">
                <h2>Les commentaires : </h2>
                {comments.map((comment) => {
                    console.log("users_permissions_user", comment.users_permissions_user);

                    return (
                        <div key={comment.id}>
                            <span>{comment.username}</span>
                            <span>{comment.text}</span>
                            <p className="uk-text-meta uk-margin-remove-top">
                                <Moment format="MMM Do YYYY">{comment.published_at}</Moment>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
/*
export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/writers/2`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    console.log("data", data);
    return {
        props: { data }, // will be passed to the page component as props
    }
}*/

/*Comments.getInitialProps = async props => {
    console.log("props", props);
    const res = await fetch(
        `http://localhost:1337/writers/${comment.users_permissions_user}`
    );
    const userName = await res.json();
    console.log("username", userName);
    return { userName };
};*/


export default Comments
