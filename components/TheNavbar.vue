<template>
  <nav class="min-h-dvh flex items-center">
    <div
      class="rounded-full flex items-center justify-between gap-2 nav-btn z-50 cursor-pointer max-sm:fixed max-sm:right-3"
      :class="{ 'opacity-0 hidden': isShown, 'opacity-100 flex': !isShown }"
      :disabled="isShown"
    >
      <v-btn icon="mdi-dots-vertical-circle" @click="isShown = true" />
      <span
        class="nav-text open-nav text-center duration-500 bg-white py-3 rounded-full"
        >منوی حرکات</span
      >
    </div>
    <div
      class="w-fit flex flex-col gap-2 py-4 px-2 duration-300 z-50"
      :class="{
        'max-sm:fixed max-sm:-right-[200px] max-sm:opacity-0': !isShown,
        'max-sm:fixed max-sm:right-0 max-sm:opacity-100': isShown,
      }"
    >
      <nuxt-link
        to="/"
        v-if="isShown"
        class="rounded-full flex items-center justify-between gap-2 nav-btn cursor-pointer"
        @click="
          () => {
            isShown = false;
          }
        "
      >
        <v-btn icon="mdi-home-circle" />
        <span
          class="nav-text text-center duration-500 bg-white py-3 rounded-full"
          >خانه</span
        >
      </nuxt-link>
      <nuxt-link
        :to="`/${item.id}`"
        v-if="isShown"
        class="rounded-full flex items-center justify-between gap-2 nav-btn cursor-pointer"
        v-for="item in menuItems"
        :key="item.id"
        @click="
          () => {
            isShown = false;
          }
        "
      >
        <v-btn :icon="item.icon" />
        <span
          class="nav-text text-center duration-500 bg-white py-3 rounded-full"
          >{{ item.name }}</span
        >
      </nuxt-link>
      <v-btn
        v-if="isShown"
        icon="mdi-close-circle"
        color="red"
        class="close-btn"
        @click="isShown = false"
      />
    </div>
  </nav>
</template>

<script setup>
const isShown = ref(false);
const router = useRouter();
const menuItems = [
  {
    id: 1,
    name: "حرکات شماره 1",
    icon: "mdi-numeric-1-circle",
  },
  {
    id: 2,
    name: "حرکات شماره 2",
    icon: "mdi-numeric-2-circle",
  },
  {
    id: 3,
    name: "حرکات شماره 3",
    icon: "mdi-numeric-3-circle",
  },
  {
    id: 4,
    name: "حرکات شماره 4",
    icon: "mdi-numeric-4-circle",
  },
];
</script>

<style scoped>
.nav-text {
  @apply w-0 max-sm:w-[120px];
  overflow: hidden;
  white-space: nowrap;
}

.open-nav {
  @apply max-sm:w-0;
}

.nav-btn:hover .nav-text {
  @apply pr-2;
  width: 120px !important;
}

.nav-btn:active .nav-text {
  @apply pr-2;
  width: 120px !important;
}

.router-link-exact-active span {
  background-color: #52525b !important;
  color: white !important;
}
</style>
