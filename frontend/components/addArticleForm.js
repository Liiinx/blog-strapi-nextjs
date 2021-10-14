import { useForm, ValidationError } from "@formspree/react";

export default function AddArticleForm() {
    const [state, handleSubmit] = useForm("YOUR_FORM_ID");

    if (state.succeeded) {
        return <p>Votre article a bien été ajouté!</p>;
    }

    return (
        /*<form onSubmit={article.create}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" />
            <ValidationError prefix="Title" field="email" errors={state.errors} />
            <textarea id="description" name="description" />
            <ValidationError prefix="Description" field="description" errors={state.errors} />
            <textarea id="content" name="content" />
            <ValidationError prefix="Content" field="content" errors={state.errors} />
            <label htmlFor="image">Title</label>
            <input id="image" type="text" name="image"/>
            <ValidationError prefix="Image" field="image" errors={state.errors} />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
            <ValidationError errors={state.errors} />
        </form>*/
        <form action="http://localhost:1337/articles" method="POST">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" />
            <textarea id="description" name="description" />
            <textarea id="content" name="content" />
            <button type="submit">Register</button>
        </form>
    );
}
