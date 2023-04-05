import '../styles/globals.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <div className='lg:px-32'>
	<Layout>
		<Component {...pageProps} />
	</Layout>
	</div>
}

export default MyApp
