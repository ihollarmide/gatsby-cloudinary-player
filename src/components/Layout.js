import React from "react";
import "./Layout.css"
import "bulma/css/bulma.min.css"
import "@fortawesome/fontawesome-free/css/all.css";

const Layout = props => {
	return (
	  <> 
      <div
      	className="has-text-centered"
				style={{
					marginTop: "2rem",
					marginBottom: "2rem"
				}}
			>
				<h1 className="title is-3">
					Simple Gatsby Cloudinary Video Player
				</h1>
			</div>

      <div className="columns is-centered">
				<div
					className="column video-column is-8-widescreen is-10-desktop is-11-tablet is-11-mobile"
				>
					<div className="image">

            {props.children}
  

					</div>

					<br />
										
          <div className="box">
            <div 
              style={{
                fontSize: "1.5em",
                fontWeight: "500"
              }}
            >
              A sample video
            </div>
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

								<nav className="level">
									<p className="level-item has-text-left">
                    <a 
                      className="button is-default"
                      style={{
                        marginRight: "0.5rem"
                      }}
                    >
										  <span className="icon">
                        <i className="fa fa-plus"></i>
                      </span>
                      <span>Add to</span>
										</a>
										<a 
                      className="button is-default"
                      style={{
                        marginRight: "0.5rem"
                      }}
                    >
											<span className="icon">
                        <i className="fa fa-share"></i>
                      </span>
                      <span>Share</span>
										</a>
										<a 
                      className="button is-default"
                      style={{
                        marginRight: "0.5rem"
                      }}
                    >
											<span className="icon">
                        <i className="fa fa-ellipsis-h"></i>
                      </span>
                      <span>More</span>
										</a>
									</p>
									<p className="level-item has-text-right">
										<a 
                      className="button is-default"
                      style={{
                        marginRight: "0.5rem"
                      }}
                    >
                      <i className="fa fa-thumbs-up"></i>
                      &nbsp;5254
                    </a>
										<a 
                      className="button is-default"
                      style={{
                        marginRight: "0.5rem"
                      }}
                    >
                      <i className="fa fa-thumbs-down"></i>
                      &nbsp;1
                    </a>
								  </p>
								</nav>
							</div>
						</div>
					</article>
				</div>
        <div 
          className="box"
          style={{
            padding: "20px 20px 5px 20px"
          }}
        >
				  <p><strong>Uploaded on September 30, 2019</strong></p>
					<p>Lorum ipsum dolor sit amet condusplicing eliquaim</p>
				</div>
			</div>
		</div>
	</>
	)
}

export default Layout;