export interface commentProps {
    id: string;
    title:string;
    comment:string;
    deleteCommentFnc: (id: string) => void;
  }

export default function Comment ({id,title,comment,deleteCommentFnc}:commentProps){
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>{comment}</p>
                <i onClick={()=>deleteCommentFnc(id)} className="bi bi-x-lg"></i>
            </div>
        </div>
    )
}