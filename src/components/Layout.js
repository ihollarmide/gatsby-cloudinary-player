import React from "react";
import "./Layout.css"
import "bulma/css/bulma.min.css"
import "@fortawesome/fontawesome-free/css/all.css";

const Layout = props => {
	return (
	  <> 
      <div className="has-text-centered" 
          style={{marginTop: "2rem",marginBottom: "2rem"}}
      >
				<h1 className="title is-3">Simple Gatsby Cloudinary Video Player</h1>
			</div>

      <div className="columns is-centered">
				<div className="column video-column is-8-widescreen is-10-desktop is-11-tablet">
					<div className="image">
            {props.children}
					</div>

					<br />
          <div className="box">
            <div style={{ fontSize: "1.5em", fontWeight: "500"}}>A sample video</div>
						<br />
						  <article className="media">
								<div className="media-left">
									<figure className="image is-64x64">
										<img src="http://placehold.it/128x128" alt="Image" />
									</figure>
								</div>
                <div className="media-content">
                  <div className="content">
                    <div className="columns">
                      <div className="column is-6">
                        <p>
                          <strong>JOHN DOE</strong>
                          <br />
                          <a href="#" className="button is-primary">Subscribe</a>
                        </p>
                      </div>
                      <div className="column is-6">
                        <nav className="nav">
                          <div className="container">
                            <div className="nav-right">
                              <a className="nav-item is-tab is-active">
                                <span className="title is-4">124,304 views</span>
                              </a>
                            </div>
                          </div>
                        </nav>
                      </div>
                  </div>
							  </div>
						  </div>
					  </article>
				  </div>
			  </div>
		  </div>
	  </>
	)
}

export default Layout;