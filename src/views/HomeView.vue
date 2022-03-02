<template>
  <div class="max-w-5xl mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-20 lg:grid-cols-2 pt-12 pb-12 items-center">
    <div>
      <h1 class="mb-8 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 whitespace-pre">{{ $t("main.title") }}</h1>
      <p class="mb-8 dark:text-neutral-400 text-neutral-600 font-bold text-xl">{{ $t("main.subtitle") }}</p>
      <a href="https://github.com/siderealart/daruma/releases" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">{{ $t("main.download-btn") }}</a>
    </div>
    <img src="@/assets/main.png" class="overflow-hidden max-w-none shadow-2xl" />
  </div>
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 pt-20 mt-16">
    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse sm:bg-none sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-2xl font-bold sm:text-slate-900 md:text-5xl dark:sm:text-white">{{ $t("feature.title1") }}</h1>
    </div>
    <p class="mt-4 text-lg leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-2 lg:col-span-1 dark:text-slate-400">{{ $t("feature.desc1") }}</p>
    <div class="sm:mb-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="@/assets/upload.jpg" alt="" class="w-full h-80 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
    </div>
  </div>
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 pt-20 mt-16">
    <div class="relative p-3 col-start-7 row-start-1 flex flex-col-reverse sm:bg-none sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-2xl font-bold sm:text-slate-900 md:text-5xl dark:sm:text-white">{{ $t("feature.title2") }}</h1>
    </div>
    <div class="sm:mb-6 lg:col-start-1 lg:col-end-7 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="@/assets/adjust.jpg" alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
    </div>
    <p class="mt-4 text-lg leading-6 col-start-7 lg:row-start-2 dark:text-slate-400">{{ $t("feature.desc2") }}</p>
  </div>
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 pt-20 mt-16">
    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse sm:bg-none sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-2xl font-bold sm:text-slate-900 md:text-5xl dark:sm:text-white">{{ $t("feature.title3") }}</h1>
    </div>
    <p class="mt-4 text-lg leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-2 lg:col-span-1 dark:text-slate-400">{{ $t("feature.desc3") }}</p>
    <div class="sm:mb-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="@/assets/url.png" alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
    </div>
  </div>
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 pt-20 mt-16">
    <div class="relative p-3 col-start-7 row-start-1 flex flex-col-reverse sm:bg-none sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-2xl font-bold sm:text-slate-900 md:text-5xl dark:sm:text-white">{{ $t("feature.title4") }}</h1>
    </div>
    <div class="sm:mb-6 lg:col-start-1 lg:col-end-7 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="@/assets/aot.png" alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
    </div>
    <p class="mt-4 text-lg leading-6 col-start-7 lg:row-start-2 dark:text-slate-400">{{ $t("feature.desc4") }}</p>
  </div>
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 pt-20 mt-16">
    <div class="relative p-3 col-start-7 row-start-1 flex flex-col-reverse sm:bg-none sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-2xl font-bold sm:text-slate-900 md:text-5xl dark:sm:text-white">{{ $t("feature.title5") }}</h1>
    </div>
    <div class="sm:mb-6 lg:col-start-1 lg:col-end-7 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="@/assets/portable.png" alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
    </div>
    <p class="mt-4 text-lg leading-6 col-start-7 lg:row-start-2 dark:text-slate-400">{{ $t("feature.desc5") }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
