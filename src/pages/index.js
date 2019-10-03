import React from "react"
import Layout from "../components/Layout"
import VideoPlayer from "../components/VideoPlayer"

const IndexPage = () => {
    return (
        <Layout>
            <VideoPlayer publicId="fifa-trailer"/>
        </Layout>
    )
}

export default IndexPage;