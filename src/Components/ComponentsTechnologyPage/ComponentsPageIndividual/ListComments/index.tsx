import { useNews } from "../../../../Context/Context";
import Comment from "../Comment";
import FormComponent from "../FormComment";
export default function ListComments() {
    const context = useNews();
    const { newsData, comments, title, comment, deleteCommentFnc, changeTitleFnc, changeCommentFnc, handleFormFnc } = context;

    if (!newsData || !newsData.items || newsData.items.length === 0) {
        return <div>Cargando...</div>;
    }
    const fncNewComments = newsData.items.filter((noticia) => noticia.category === "comment");
    
    return (
        <>
            <FormComponent
                title={title}
                comment={comment}
                changeTitleFnc={changeTitleFnc}
                changeCommentFnc={changeCommentFnc}
                handleFormFnc={handleFormFnc}
            />
            <div>
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        title={comment.title}
                        comment={comment.comment}
                        deleteCommentFnc={deleteCommentFnc}
                    />
                ))}
            </div>

            {fncNewComments.map((noticia) => (
            <div key={noticia.id}>
                <div>
                    <h1
                        onClick={() => {
                            window.location.href = `/Sports/:${noticia.id}`;
                        }}
                    >
                        {noticia.name}
                    </h1>
                    <p>{noticia.comment}</p>
                </div>
            </div>
        ))}
        </>
    );
}
