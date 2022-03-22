import type { NextPage } from 'next'
import Head from 'next/head'
import { styled } from 'linaria/react'


const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>App</title>
            </Head>
            <Header>
                Simple boilerplate of the app on next js + linaria + preact
            </Header>
            <main>

            </main>
        </>
    )
}

const Header = styled.header`
    background-color: #000;
    color: #fff;
    padding: 2rem;
    text-align: center;
    text-transform: uppercase;
`

export default Home
