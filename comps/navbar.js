import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
           <Link href="/"><a>Home</a></Link>
           <Link href="/contato"><a>Contato</a></Link>
        </nav>
      );
}
 
export default Navbar;