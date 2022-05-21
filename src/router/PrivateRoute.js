import {Navigate} from 'react-router-dom'
import {Suspense} from 'react'

const PrivateRoute = ({children, route}) => {
    // ** Hooks & Vars
    const user = JSON.parse(localStorage.getItem('userData'))

    if (route) {
        let restrictedRoute = false

        if (route.meta) {
            restrictedRoute = route.meta.restricted
        }
        if (!user) {
            return <Navigate to='/auth'/>
        }
        if (user && restrictedRoute) {
            return <Navigate to='/'/>
        }
    }

    return <Suspense fallback={null}>{children}</Suspense>
}

export default PrivateRoute