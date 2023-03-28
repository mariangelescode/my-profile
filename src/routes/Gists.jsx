import { useLoaderData, useNavigation } from "react-router-dom";

export const loader = async() => {
    const gists = await (await fetch('https://api.github.com/users/mariangelescode/gists')).json();

    return {gists};

}

export default function Gists(){
    const {gists} = useLoaderData();
    const transition = useNavigation();
    console.log('?', transition);
    return(
        <>
            <h2>Los gists</h2>
            {
                transition.state !== 'idle' ? 
                    <div>Cargando...</div> 
                : 
                    <h2>{gists.length}</h2>}
        
        </>
    )
}