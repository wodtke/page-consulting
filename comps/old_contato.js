export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Contato = ({ users }) => {
    return ( 
        <div>
            <h1>Usuários</h1>
            {users.map(users =>(
                <div key={users.id}>
                    <a>
                        <h3>{ users.name }</h3>
                    </a>
                </div> 
            ))}
        </div>
     );
}
 
export default Contato;