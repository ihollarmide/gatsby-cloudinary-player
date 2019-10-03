import React from "react";
import "./Layout.css"

const Layout = props => {
    return (
        <>
            <div class="has-text-centered margin-bottom-large margin-top-large">
                <h1 class="title is-3">Simple Gatsby Cloudinary Video Player</h1>
            </div>
            <div class="columns is-centered">
                <div class="column video-column is-8-widescreen is-10-desktop is-11-tablet is-11-mobile">
                    <div class="image">
                        {props.children}
                    </div>
                    <br />
                    <div class="box video-meta">
                        <div class="video-title">A sample video</div>
                        <br />
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img src="http://placehold.it/128x128" alt="Image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <div class="columns">
                                        <div class="column is-6">
                                            <p>
                                            <strong>JOHN DOE</strong>
                                            <br />
                                            <a href="#" class="button is-primary">Subscribe</a>
                                            </p>
                                        </div>
                                        <div class="column is-6">
                                            <nav class="nav">
                                                <div class="container">
                                                    <div class="nav-right">
                                                        <a class="nav-item is-tab is-active">
                                                            <span class="title is-4">124,304 views</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <nav class="level">
                                        <p class="level-item has-text-left">
                                            <a class="button is-default button-margin-right">
                                            <span class="icon"><i class="fa fa-plus"></i></span> <span>Add to</span>
                                            </a>
                                            <a class="button is-default button-margin-right">
                                            <span class="icon"><i class="fa fa-share"></i></span> <span>Share</span>
                                            </a>
                                            <a class="button is-default button-margin-right">
                                            <span class="icon"><i class="fa fa-ellipsis-h"></i></span> <span>More</span>
                                            </a>
                                        </p>
                                        <p class="level-item has-text-right">
                                            <a class="button is-default button-margin-right"><i class="fa fa-thumbs-up"></i>&nbsp;5254</a>
                                            <a class="button is-default button-margin-right"><i class="fa fa-thumbs-down"></i>&nbsp;1</a>
                                        </p>
                                    </nav>
                                </div>
                            </div>
                        </article>
                        </div>
                        <div class="box video-description">
                        <p><strong>Uploaded on September 30, 2019</strong></p>
                        <p>Lorum ipsum and friends at MTV unplugged playing Long May You Run.</p>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Layout;