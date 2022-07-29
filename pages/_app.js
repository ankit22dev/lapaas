import DefaultLayout from '../components/layouts'
import AdminLayout from '../components/layouts/admin'
import '../styles/globals.css'

const layouts = {
    default : DefaultLayout,
    admin : AdminLayout
}

function MyApp({ Component, pageProps }) {

    const Layout = layouts[Component.layout] || (({children}) => <>{children}</>);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
