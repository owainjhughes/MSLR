
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AppFooter: typeof import("../app/components/AppFooter.vue")['default']
export const AppHeader: typeof import("../app/components/AppHeader.vue")['default']
export const LoginForm: typeof import("../app/components/LoginForm.vue")['default']
export const SignUpForm: typeof import("../app/components/SignUpForm.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Button: typeof import("../app/components/ui/button/index")['Button']
export const Field: typeof import("../app/components/ui/field/index")['Field']
export const FieldContent: typeof import("../app/components/ui/field/index")['FieldContent']
export const FieldDescription: typeof import("../app/components/ui/field/index")['FieldDescription']
export const FieldError: typeof import("../app/components/ui/field/index")['FieldError']
export const FieldGroup: typeof import("../app/components/ui/field/index")['FieldGroup']
export const FieldLabel: typeof import("../app/components/ui/field/index")['FieldLabel']
export const FieldLegend: typeof import("../app/components/ui/field/index")['FieldLegend']
export const FieldSeparator: typeof import("../app/components/ui/field/index")['FieldSeparator']
export const FieldSet: typeof import("../app/components/ui/field/index")['FieldSet']
export const FieldTitle: typeof import("../app/components/ui/field/index")['FieldTitle']
export const Carousel: typeof import("../app/components/ui/carousel/index")['Carousel']
export const CarouselContent: typeof import("../app/components/ui/carousel/index")['CarouselContent']
export const CarouselItem: typeof import("../app/components/ui/carousel/index")['CarouselItem']
export const CarouselNext: typeof import("../app/components/ui/carousel/index")['CarouselNext']
export const CarouselPrevious: typeof import("../app/components/ui/carousel/index")['CarouselPrevious']
export const CarouselApi: typeof import("../app/components/ui/carousel/index")['CarouselApi']
export const Card: typeof import("../app/components/ui/card/index")['Card']
export const CardAction: typeof import("../app/components/ui/card/index")['CardAction']
export const CardContent: typeof import("../app/components/ui/card/index")['CardContent']
export const CardDescription: typeof import("../app/components/ui/card/index")['CardDescription']
export const CardFooter: typeof import("../app/components/ui/card/index")['CardFooter']
export const CardHeader: typeof import("../app/components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../app/components/ui/card/index")['CardTitle']
export const Input: typeof import("../app/components/ui/input/index")['Input']
export const Label: typeof import("../app/components/ui/label/index")['Label']
export const NavigationMenu: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenu']
export const NavigationMenuContent: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuContent']
export const NavigationMenuIndicator: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']
export const NavigationMenuItem: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuItem']
export const NavigationMenuLink: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuLink']
export const NavigationMenuList: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuList']
export const NavigationMenuTrigger: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']
export const NavigationMenuViewport: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuViewport']
export const Separator: typeof import("../app/components/ui/separator/index")['Separator']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
export const LazyLoginForm: LazyComponent<typeof import("../app/components/LoginForm.vue")['default']>
export const LazySignUpForm: LazyComponent<typeof import("../app/components/SignUpForm.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyButton: LazyComponent<typeof import("../app/components/ui/button/index")['Button']>
export const LazyField: LazyComponent<typeof import("../app/components/ui/field/index")['Field']>
export const LazyFieldContent: LazyComponent<typeof import("../app/components/ui/field/index")['FieldContent']>
export const LazyFieldDescription: LazyComponent<typeof import("../app/components/ui/field/index")['FieldDescription']>
export const LazyFieldError: LazyComponent<typeof import("../app/components/ui/field/index")['FieldError']>
export const LazyFieldGroup: LazyComponent<typeof import("../app/components/ui/field/index")['FieldGroup']>
export const LazyFieldLabel: LazyComponent<typeof import("../app/components/ui/field/index")['FieldLabel']>
export const LazyFieldLegend: LazyComponent<typeof import("../app/components/ui/field/index")['FieldLegend']>
export const LazyFieldSeparator: LazyComponent<typeof import("../app/components/ui/field/index")['FieldSeparator']>
export const LazyFieldSet: LazyComponent<typeof import("../app/components/ui/field/index")['FieldSet']>
export const LazyFieldTitle: LazyComponent<typeof import("../app/components/ui/field/index")['FieldTitle']>
export const LazyCarousel: LazyComponent<typeof import("../app/components/ui/carousel/index")['Carousel']>
export const LazyCarouselContent: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselContent']>
export const LazyCarouselItem: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselItem']>
export const LazyCarouselNext: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselNext']>
export const LazyCarouselPrevious: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselPrevious']>
export const LazyCarouselApi: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselApi']>
export const LazyCard: LazyComponent<typeof import("../app/components/ui/card/index")['Card']>
export const LazyCardAction: LazyComponent<typeof import("../app/components/ui/card/index")['CardAction']>
export const LazyCardContent: LazyComponent<typeof import("../app/components/ui/card/index")['CardContent']>
export const LazyCardDescription: LazyComponent<typeof import("../app/components/ui/card/index")['CardDescription']>
export const LazyCardFooter: LazyComponent<typeof import("../app/components/ui/card/index")['CardFooter']>
export const LazyCardHeader: LazyComponent<typeof import("../app/components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../app/components/ui/card/index")['CardTitle']>
export const LazyInput: LazyComponent<typeof import("../app/components/ui/input/index")['Input']>
export const LazyLabel: LazyComponent<typeof import("../app/components/ui/label/index")['Label']>
export const LazyNavigationMenu: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenu']>
export const LazyNavigationMenuContent: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuContent']>
export const LazyNavigationMenuIndicator: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']>
export const LazyNavigationMenuItem: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuItem']>
export const LazyNavigationMenuLink: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuLink']>
export const LazyNavigationMenuList: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuList']>
export const LazyNavigationMenuTrigger: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
export const LazyNavigationMenuViewport: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuViewport']>
export const LazySeparator: LazyComponent<typeof import("../app/components/ui/separator/index")['Separator']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
