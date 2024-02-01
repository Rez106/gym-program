<template>
  <div class="w-full min-h-full flex flex-col justify-center p-5">
    <h1 class="text-white text-2xl mb-5 font-semibold">
      {{ "حرکات شماره " + data?.id }}
    </h1>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="act in data.activities"
        :key="act.id"
        bg-color="#3f3f46"
        rounded="xl"
      >
        <v-expansion-panel-title>
          <h1 class="font-semibold max-sm:text-xs">{{ act.name }}</h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <span
            v-if="!act.pyramidical && !act.single"
            class="flex items-center gap-3"
          >
            <span class="text-sm font-semibold">
              <span class="text-xl">{{ act.sets }}</span>
              ست
            </span>
            <span class="text-sm font-semibold">
              <span class="text-xl">{{ act.counts }}</span>
              {{ typeof act?.counts === "string" ? "ای" : "تایی" }}
            </span>
          </span>
          <p v-if="act.pyramidical" class="flex flex-col">
            <span v-for="(set, index) in act.sets" :key="index">
              <span class="text-sm font-semibold">
                ست
                <span class="text-xl text-zinc-100">{{ index + 1 }}</span>
                -
                <span class="text-xl">{{ set }}</span>
                تایی
              </span>
            </span>
          </p>
          <span v-if="act.single" class="font-semibold">
            <span class="text-xl">{{ act.minutes }}</span>
            دقیقه
          </span>
          <div
            v-if="act?.is_super"
            class="flex flex-col items-start mr-10 text-red-300"
          >
            <h1 class="font-semibold max-sm:text-xs">
              <v-icon icon="mdi-arrow-left-bold" />
              <span class="text-lg">{{ act?.super?.name }}</span>
            </h1>
            <span
              v-if="!act?.super?.pyramidical && !act?.super?.single"
              class="flex items-center gap-3"
            >
              <span class="text-sm font-semibold">
                <span class="text-xl">{{ act?.super?.sets }}</span>
                ست
              </span>
              <span class="text-sm font-semibold">
                <span class="text-xl">{{ act?.super?.counts }}</span>
                {{ typeof act?.super?.counts === "string" ? "ای" : "تایی" }}
              </span>
            </span>
            <p v-if="act?.super?.pyramidical" class="flex flex-col">
              <span v-for="(set, index) in act?.super?.sets" :key="index">
                <span class="text-sm font-semibold">
                  ست
                  <span class="text-xl">{{ index + 1 }}</span>
                  -
                  <span class="text-xl">{{ set }}</span>
                  تایی
                </span>
              </span>
            </p>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
const route = useRoute();

const { data, error } = useAsyncData(
  "program",
  async () => {
    try {
      const response = await $fetch(`/api/program/${route.params.id}`);
      return response;
    } catch (error) {
      throw createError({
        statusCode: 402,
        message: "Bad Request. Failed to load data",
      });
    }
  },
  [route.params.id]
);
</script>

<style scoped></style>
