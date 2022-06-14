

export default function Home() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="mr-10">
          <h1>H1 Heading</h1>
          <h2>H2 Heading</h2>
          <h3>H3 Heading</h3>
          <h4>H4 Heading</h4>
          <h5>H5 Heading</h5>
          <h6>H6 Heading</h6>
        </div>
        <div className="mr-10">
          <p className="all-cap">ALL CAP</p>
          <p className="paragraph">paragraph</p>
          <p className="sub-heading-1">Sub-heading 1</p>
          <p className="sub-heading-2">Sub-heading 2</p>
          <p className="large-bold-text">Large Bold text</p>
          <p className="bold-text">bold text</p>
          <p className="form-text">Form Text</p>
          <p className="small-text">Small text</p>
        </div>
        <div>
          <p className="quote">quote</p>
          <p className="small-inline-bold-text">small inline bold text</p>
          <p className="small-inline-text">small inline text</p>
          <p className="placeholder">placeholder</p>
          <p className="nav-link">navlink</p>
          <p className="footer-link">footer link</p>
        </div>
      </div>
      <div className="flex flex-row mt-16">
        <div className="mr-10">
          <button className="mb-6 primary">Primary</button>
          <button className="mb-6 secondary">Secondary</button>
        </div>
        <div>
          <button className="mb-6 tetiary-1">Tetiary 1</button>
          <button className="mb-6 tetiary-2">Tetiary 2</button>
          <button className="mb-6 additional">Additional</button>
          <button className="mb-6 additional-forward">Additional</button>
          <button className="mb-6 additional-backward">Additional</button>
        </div>
      </div>
      <div>
    
      </div>
    </div>
  )
}