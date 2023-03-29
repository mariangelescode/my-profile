import { useLoaderData, useParams } from "react-router-dom"


export const loader = async() => {
    // console.log('hola', params.repoId);
    const detail = await (await fetch('https://api.github.com/users/mariangelescode/repos')).json();
    

    return detail;
}



export default function RepoDetail(){

    let { repoId } = useParams();
    // console.log()
    


    const detail = useLoaderData();
    console.log(detail);

    return(
        <>
            b
            {detail.map(r=> (
                    // <p>
                    //     <p key={r.id} >{r.id}</p>
                    // </p>
                r.id == repoId && <p>{r.id}</p>
                
            ))}
        </>
    )
}