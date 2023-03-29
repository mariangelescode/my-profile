import { Link, useLoaderData } from "react-router-dom";

export const loader = async() => {
    const repos = await (await fetch('https://api.github.com/users/mariangelescode/repos')).json();

    return {repos};

}

export default function Repos(){
    const {repos} = useLoaderData();
    return(
        <>
            <h2>Los Repos</h2>
            <div style={{
                display: 'flex',
                gap: '2em',
                textAlign: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                {repos.map(r=> (
                    <Link to={`../repoDetail/${r.id}`}>
                        <p key={r.id} className="reposBtn">{r.name}</p>
                    </Link>
                ))}
            </div>
        
        </>
    )
}