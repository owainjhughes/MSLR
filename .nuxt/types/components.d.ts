
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

interface _GlobalComponents {
  'AppFooter': typeof import("../../app/components/AppFooter.vue")['default']
  'AppHeader': typeof import("../../app/components/AppHeader.vue")['default']
  'LoginForm': typeof import("../../app/components/LoginForm.vue")['default']
  'SignUpForm': typeof import("../../app/components/SignUpForm.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'Button': typeof import("../../app/components/ui/button/index")['Button']
  'Field': typeof import("../../app/components/ui/field/index")['Field']
  'FieldContent': typeof import("../../app/components/ui/field/index")['FieldContent']
  'FieldDescription': typeof import("../../app/components/ui/field/index")['FieldDescription']
  'FieldError': typeof import("../../app/components/ui/field/index")['FieldError']
  'FieldGroup': typeof import("../../app/components/ui/field/index")['FieldGroup']
  'FieldLabel': typeof import("../../app/components/ui/field/index")['FieldLabel']
  'FieldLegend': typeof import("../../app/components/ui/field/index")['FieldLegend']
  'FieldSeparator': typeof import("../../app/components/ui/field/index")['FieldSeparator']
  'FieldSet': typeof import("../../app/components/ui/field/index")['FieldSet']
  'FieldTitle': typeof import("../../app/components/ui/field/index")['FieldTitle']
  'Carousel': typeof import("../../app/components/ui/carousel/index")['Carousel']
  'CarouselContent': typeof import("../../app/components/ui/carousel/index")['CarouselContent']
  'CarouselItem': typeof import("../../app/components/ui/carousel/index")['CarouselItem']
  'CarouselNext': typeof import("../../app/components/ui/carousel/index")['CarouselNext']
  'CarouselPrevious': typeof import("../../app/components/ui/carousel/index")['CarouselPrevious']
  'CarouselApi': typeof import("../../app/components/ui/carousel/index")['CarouselApi']
  'Card': typeof import("../../app/components/ui/card/index")['Card']
  'CardAction': typeof import("../../app/components/ui/card/index")['CardAction']
  'CardContent': typeof import("../../app/components/ui/card/index")['CardContent']
  'CardDescription': typeof import("../../app/components/ui/card/index")['CardDescription']
  'CardFooter': typeof import("../../app/components/ui/card/index")['CardFooter']
  'CardHeader': typeof import("../../app/components/ui/card/index")['CardHeader']
  'CardTitle': typeof import("../../app/components/ui/card/index")['CardTitle']
  'Input': typeof import("../../app/components/ui/input/index")['Input']
  'Label': typeof import("../../app/components/ui/label/index")['Label']
  'NavigationMenu': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenu']
  'NavigationMenuContent': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuContent']
  'NavigationMenuIndicator': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']
  'NavigationMenuItem': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuItem']
  'NavigationMenuLink': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuLink']
  'NavigationMenuList': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuList']
  'NavigationMenuTrigger': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']
  'NavigationMenuViewport': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuViewport']
  'Separator': typeof import("../../app/components/ui/separator/index")['Separator']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyAppFooter': LazyComponent<typeof import("../../app/components/AppFooter.vue")['default']>
  'LazyAppHeader': LazyComponent<typeof import("../../app/components/AppHeader.vue")['default']>
  'LazyLoginForm': LazyComponent<typeof import("../../app/components/LoginForm.vue")['default']>
  'LazySignUpForm': LazyComponent<typeof import("../../app/components/SignUpForm.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyButton': LazyComponent<typeof import("../../app/components/ui/button/index")['Button']>
  'LazyField': LazyComponent<typeof import("../../app/components/ui/field/index")['Field']>
  'LazyFieldContent': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldContent']>
  'LazyFieldDescription': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldDescription']>
  'LazyFieldError': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldError']>
  'LazyFieldGroup': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldGroup']>
  'LazyFieldLabel': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldLabel']>
  'LazyFieldLegend': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldLegend']>
  'LazyFieldSeparator': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldSeparator']>
  'LazyFieldSet': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldSet']>
  'LazyFieldTitle': LazyComponent<typeof import("../../app/components/ui/field/index")['FieldTitle']>
  'LazyCarousel': LazyComponent<typeof import("../../app/components/ui/carousel/index")['Carousel']>
  'LazyCarouselContent': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselContent']>
  'LazyCarouselItem': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselItem']>
  'LazyCarouselNext': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselNext']>
  'LazyCarouselPrevious': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselPrevious']>
  'LazyCarouselApi': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselApi']>
  'LazyCard': LazyComponent<typeof import("../../app/components/ui/card/index")['Card']>
  'LazyCardAction': LazyComponent<typeof import("../../app/components/ui/card/index")['CardAction']>
  'LazyCardContent': LazyComponent<typeof import("../../app/components/ui/card/index")['CardContent']>
  'LazyCardDescription': LazyComponent<typeof import("../../app/components/ui/card/index")['CardDescription']>
  'LazyCardFooter': LazyComponent<typeof import("../../app/components/ui/card/index")['CardFooter']>
  'LazyCardHeader': LazyComponent<typeof import("../../app/components/ui/card/index")['CardHeader']>
  'LazyCardTitle': LazyComponent<typeof import("../../app/components/ui/card/index")['CardTitle']>
  'LazyInput': LazyComponent<typeof import("../../app/components/ui/input/index")['Input']>
  'LazyLabel': LazyComponent<typeof import("../../app/components/ui/label/index")['Label']>
  'LazyNavigationMenu': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenu']>
  'LazyNavigationMenuContent': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuContent']>
  'LazyNavigationMenuIndicator': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']>
  'LazyNavigationMenuItem': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuItem']>
  'LazyNavigationMenuLink': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuLink']>
  'LazyNavigationMenuList': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuList']>
  'LazyNavigationMenuTrigger': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
  'LazyNavigationMenuViewport': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuViewport']>
  'LazySeparator': LazyComponent<typeof import("../../app/components/ui/separator/index")['Separator']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
