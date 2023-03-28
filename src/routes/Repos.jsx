import { useLoaderData } from "react-router-dom";

export const loader = async() => {
    const repos = await (await fetch('https://api.github.com/users/mariangelescode/repos')).json();

    return {repos};

}

export default function Repos(){
    const {repos} = useLoaderData();
    return(
        <>
            <h2>Los Repos</h2>
            {repos.map(r=> (
                <p key={r.id}>{r.name}</p>
            ))}
        
        </>
    )
}