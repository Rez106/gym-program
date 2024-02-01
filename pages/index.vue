<template>
  <div
    class="min-w-full min-h-full py-4 flex flex-col items-center justify-center"
  >
    <h1
      class="text-white 2xl:text-xl bg-red-500 py-2 px-3 rounded-xl font-semibold"
    >
      حرکات خود را از سمت راست انتخاب کنید
    </h1>
    <div class="text-center flex flex-col gap-1 text-white text-xl mt-5">
      <h1 class="font-semibold">
        {{ data?.firstName + " " + data?.lastName }}
      </h1>
      <span>{{ data?.age + " " + "سال" }}</span>
      <span>{{ data?.weight + " " + "کیلوگرم" }}</span>
      <span>{{ data?.height + " " + "سانتی‌متر" }}</span>
    </div>
  </div>
</template>

<script setup>
const { data, error } = await useFetch("/api/program");
</script>

<style scoped></style>
