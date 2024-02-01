<template>
  <div class="min-w-full min-h-dvh bg-zinc-800">
    <slot />
  </div>
</template>

<style>
font-face {
  font-family: "b yekan";
  src: url("@/assets/fonts/B-Yekan.ttf");
}

*,
*::after,
*::before,
html {
  font-family: "b yekan";
  direction: rtl;
  scroll-behavior: smooth;
  letter-spacing: 0;
}
</style>
