import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Micro-Blog</h1>
      <div className='links'>
        <a>Home</a>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
