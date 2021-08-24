import Link from "next/link"

const Navigation = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/"><a className="nav-link">Home</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
    
            <li className="nav-item">
              <Link className="nav-link" href="/about"><a className="nav-link">About</a></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services"><a className="nav-link">Services</a></Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
