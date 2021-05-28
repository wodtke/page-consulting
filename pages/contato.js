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
            <h1 className="center">Me mande um email: marcel [@] wodtke [.] com [.] br</h1>
        </div>
     );
}
 
export default Contato;