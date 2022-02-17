import Layout from '../components/layout'
import Container from '../components/container'

export default function About() {
    return (
        <>
        <Layout>
            <Container>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Ali Ismail's Next.js Blog with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
                <div>
                    <h1>About this Blog</h1>
                    <p>This is the best blog ever</p>
                </div>
            </article>
         
            </Container>
        </Layout>
        </>
    );
}