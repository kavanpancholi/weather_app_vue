import Home from './Home'
import WeatherWoeid from './WeatherWoeid'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/search/:keyword',
        name: 'search',
        component: Home,
    },
    {
        path: '/weather/:woeid',
        name: 'WeatherWoeid',
        component: WeatherWoeid,
    }
]
