import Navbar from "../comps/navbar"
import Image from 'next/image'

function Home() {
    return (
        <div className="logo">
        <Image src="/logo.png" width={250} height={250}/>
    </div>
    )
}

export default Home