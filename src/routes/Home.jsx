import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
export const loader = async() => {
    const data = await (await fetch('https://api.github.com/users/mariangelescode')).json();
    // const repos = await (await fetch('https://api.github.com/users/mariangelescode/repos')).json();

    return {data}
}
    // try{
    //     returnawait (await(fetch('https://api.github.com/users/mariangelescode'))).json();
    // }catch(e){
    //     return null // redireccionar
    // }
    // return await (await fetch('https://api.github.com/users/mariangelescode')).json();


export default function Home(){

    // const location = useLocation();
    // console.log(location);
    //Te trae información de donde estás etc.
    const {pathname} = useLocation();

    const { data } = useLoaderData();
    console.log(data);

    const activeStyles = {background: 'var(--secondary)'};
    return(
        <section style={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '768px',
            margin: '0 auto'
        }}>
            <img src="{data.avatar_url}" width="200px" alt="avatar" />
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
            <div style={{display: 'flex', gap: '2em'}}>
                <Link to="repos">
                    <button style={pathname.includes('repos') ? activeStyles : undefined}>Repos</button>
                </Link>
                <Link to="gists">
                    <button style={pathname.includes('gists') ? activeStyles : undefined}>Gists</button>
                </Link>
                <Link to="orgs">
                    <button>Orgs</button>
                </Link>
            </div>

            {/* //aquí se renderiza la ruta hija */}
            <Outlet />

        </section>
    )
}