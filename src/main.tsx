import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AccountingSection from './components/AccountingSection'
import MarketingSection from './components/MarketingSection'
import WebDevelopmentSection from './components/WebDevelopmentSection'
import ConsultationSection from './components/ConsultationSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeSection,
})
const accountingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/accounting',
  component: AccountingSection,
})
const marketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/marketing',
  component: MarketingSection,
})
const webDevelopmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/webdevelopment',
  component: WebDevelopmentSection,
})
const consultationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consultation',
  component: ConsultationSection,
})
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutSection,
})
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactSection,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  accountingRoute,
  marketingRoute,
  webDevelopmentRoute,
  consultationRoute,
  aboutRoute,
  contactRoute,
])

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

reportWebVitals()
