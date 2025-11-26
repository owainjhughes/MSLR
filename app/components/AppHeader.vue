<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
</script>

<template>
  <NavigationMenu :viewport="false" class="px-4">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/">Home</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/about">About</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/login">Log in</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
          <a href="/signup">Sign up</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
