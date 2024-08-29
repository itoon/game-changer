<template>
  <div class="bg-[#072462]">
    <nav
      class="absolute w-full p-4 z-10 flex items-center justify-center md:justify-between gap-x-1 lg:gap-x-10 md:px-[120px] px-4 py-2 transition-all"
    >
      <div class="flex w-full gap-x-2 lg:px-2">
        <div class="flex-1 flex gap-2 py-[20px] md:px-20">
          <div class="w-full overflow-hidden bg-[#01102E] rounded-full">
            <div
              class="h-2 transition-all bg-[#3C6AA5] rounded-full"
              style="width: 100%"
            ></div>
          </div>
        </div>
      </div>
    </nav>
    <div class="min-h-screen">
      <main
        class="container max-w-[1366px] px-4 xl:px-[103px] mx-auto gap-x-6 h-full pt-16 pb-4 flex flex-col"
      >
        <div class="px-4 py-6 bg-white rounded-3xl min-h-[75vh]">
          <div
            class="flex flex-col justify-between gap-2 col-span-full md:col-start-4 md:col-end-10 md:py-6 md:gap-4"
          >
            <p class="mt-5 mb-5 text-lg font-bold text-center md:text-xl">
              และตัวละครของคุณก็คือ....
            </p>
            <NuxtImg
              v-if="!loading"
              :src="'characters/' + $route.query.type + '.png'"
              class="w-full"
            />
          </div>
        </div>
      </main>
      <footer class="absolute bottom-0 w-full bg-white">
        <div class="container p-4 mx-auto md:flex md:justify-end">
          <button
            class="bg-black disabled:bg-[#b0bec5] rounded-lg text-white w-full z-10 text-center min-h-[40px] md:min-h-[59px] px-2 min-w-[100px] md:w-full md:max-w-[172px] md:min-w-[172px] md:!leading-[150%] md:!py-4 transition-all duration-75 disabled btn-primary md:!h-14 font-bold"
          >
            Save to Line
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);
</script>

<style lang="css" scoped>
.bg-main {
  background: linear-gradient(168.63deg, #4bb5e6 2.44%, #19c768 98.03%);
}
.border-choice {
  border: 2px solid var(--linear, #4bb5e6);
}
.choice-selected {
  background: linear-gradient(
    169deg,
    rgba(75, 181, 230, 0.4) 2.44%,
    rgba(25, 199, 104, 0.4) 98.03%
  );
}
</style>
