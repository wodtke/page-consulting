import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
    },[] )

    return ( 
        <div className="not-found">
            <h1>Opss...</h1>
            <h1>Esta página não existe</h1>
        </div>
     );
}
 
export default NotFound;