<template>
  <div class="bg-[#2961e2]">
    <nav
      class="absolute w-full p-4 z-10 flex items-center justify-center md:justify-between gap-x-1 lg:gap-x-10 md:px-[120px] px-4 py-2 transition-all"
    >
      <div class="w-full flex gap-x-2 lg:px-2">
        <div class="flex justify-center items-center text-white md:gap-4">
          <NuxtImg
            src="https://www.think-digital.app/icons/icon-arrow-small-left-white.svg"
            class="w-6"
          />
          <p class="md:text-lg">กลับ</p>
        </div>
        <div class="flex-1 flex gap-2 py-[20px] md:px-20">
          <div
            class="w-full overflow-hidden bg-[#00216c] rounded-full"
            v-for="x in 8"
          >
            <div
              class="h-2 transition-all bg-white rounded-full"
              style="width: 25%"
            ></div>
          </div>
        </div>
        <div class="flex justify-center items-center text-white md:text-lg">
          1/30
        </div>
      </div>
    </nav>
    <div class="min-h-screen">
      <main
        class="container max-w-[1366px] px-4 xl:px-[103px] mx-auto gap-x-6 h-full pt-16 pb-4 flex flex-col"
      >
        <div
          class="inline-flex flex-col gap-2 h-fit col-span-full md:col-start-4 md:col-end-10 py-4 md:py-6 md:gap-4"
        >
          <img
            :src="renderQuestion.image"
            class="object-contain w-auto h-20 mx-auto"
          />
          <p class="text-center font-bold text-white text-lg md:text-xl">
            {{ renderQuestion.text }}
          </p>
        </div>
        <div class="grid grid-cols-12 gap-4 w-full max-w-3xl mx-auto md:gap-6">
          <div
            class="col-span-6 md:col-span-3"
            v-for="(choice, index) in renderQuestion.choices"
            :key="index"
          >
            <button
              class="relative flex flex-col items-center w-full gap-2 p-4 transition-all rounded-lg cursor-pointer select-none blank"
              @click="selected(choice)"
              :class="{
                'bg-[#dde6fd]': select === choice,
                'bg-white': select !== choice,
              }"
            >
              <NuxtImg
                v-if="choice.image"
                :src="choice.image"
                class="w-20 h-20"
              />
              <p>{{ choice.text }}</p>

              <div
                class="w-6 h-6 rounded-full bg-[#dde6fd] absolute top-2 right-2"
                v-if="select !== choice"
              ></div>
              <div class="w-6 h-6 absolute top-1 right-3" v-else>
                <Icon
                  name="ph:check-circle-fill"
                  size="32"
                  class="text-[#2961e2]"
                />
              </div>
            </button>
          </div>
        </div>
      </main>
      <footer class="bg-white absolute bottom-0 w-full">
        <div class="container p-4 mx-auto md:flex md:justify-end">
          <button
            class="bg-[#2961e2] disabled:bg-[#b0bec5] rounded-lg text-white w-full z-10 text-center min-h-[40px] md:min-h-[59px] px-2 min-w-[100px] md:w-full md:max-w-[172px] md:min-w-[172px] md:!leading-[150%] md:!py-4 transition-all duration-75 disabled btn-primary md:!h-14 font-bold"
            :disabled="select === null"
            @click="next"
          >
            ต่อไป
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const select = ref(null);
const index = ref(0);
const choices = [
  {
    image:
      "https://storage.googleapis.com/third-apex-370513.appspot.com/images/assessment/E-yDSNMvxE0o8pMXSSekn.png",
    text: "เห็นด้วยที่สุด",
  },
  {
    image:
      "https://storage.googleapis.com/third-apex-370513.appspot.com/images/assessment/E-yDSNMvxE0o8pMXSSekn.png",
    text: "ไม่เห็นด้วยที่สุด",
  },
  {
    image:
      "https://storage.googleapis.com/third-apex-370513.appspot.com/images/assessment/E-yDSNMvxE0o8pMXSSekn.png",
    text: "เห็นด้วยที่สุด",
  },
  {
    image:
      "https://storage.googleapis.com/third-apex-370513.appspot.com/images/assessment/E-yDSNMvxE0o8pMXSSekn.png",
    text: "ไม่เห็นด้วยที่สุด",
  },
];
const question = ref([
  {
    image:
      "https://storage.googleapis.com/third-apex-370513.appspot.com/images/assessment/W-yeqJAIbRMwTKGX4Kx8b.png",
    text: "ฉันกล้าจะทำสิ่งที่ไม่น่ารักบนโลกออนไลน์มากกว่าในชีวิตจริง",
    choices: choices,
  },
  {
    image:
      "https://storage.googleapis.com/third-apex-370513.appspot.com/images/assessment/W-yeqJAIbRMwTKGX4Kx8b.png",
    text: "ฉันกล้าจะทำสิ่งที่ไม่น่ารักบนโลกออนไลน์มากกว่าในชีวิตจริง",
    choices: choices,
  },
]);
const renderQuestion = computed(() => question.value[index.value]);
const answers = ref(new Array(question.value.length).fill(null));

const selected = (choice: any) => {
  select.value = choice;
};

const next = () => {
  answers.value[index.value] = select.value;
  index.value++;
  select.value = null;
};
</script>
