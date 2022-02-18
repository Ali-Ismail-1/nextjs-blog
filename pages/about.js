import Layout from '../components/layout'
import Container from '../components/container'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


export default function About(){
    return (
        <Layout>
            <Container>
                <div className="max-w-2xl mx-auto">
                <div>
                  <div className='align-center'>
                    This is the best blog ever.
                  </div>
                  </div>
                
                </div>
                <article className="mb-32">
              <Head>
                <title>
                  About | Next.js Blog Example with {CMS_NAME}
                </title>                
              </Head>             
            </article>
            </Container>
        </Layout>

    )
};