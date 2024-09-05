<script setup></script>

<template>
  <main
    class="h-screen w-full bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/public/bg.jpg')"
  >
    <div class="w-full flex max-w-[700px] h-max bg-white shadow-lg rounded-2xl">
      <div class="pl-12 h-full my-auto">
        <img class="w-96" src="/hero1.png" alt="" />
      </div>
      <div class="w-full h-full px-12 py-12">
        <form class="flex flex-col gap-7">
          <h2 class="text-primary font-bold w-full text-center">
            WELCOME TO TIMEKEEPING
          </h2>
          <div class="relative mt-4">
            <input
              type="text"
              class="form-input lg:py-3 py-2.5 px-5 block w-full leading-5 text-gray-700 border border-gray-300 focus:ring focus:ring-primary focus:ring-opacity-5 focus:outline-none rounded-md focus:border-primary peer"
              name="userId"
              placeholder=""
              required
            />
            <label for="userId" class="label">User Id</label>
          </div>
          <div class="relative">
            <input
              type="password"
              class="form-input lg:py-3 py-2.5 px-5 block w-full leading-5 text-gray-700 border border-gray-300 focus:ring focus:ring-primary focus:ring-opacity-5 focus:outline-none rounded-md focus:border-primary peer"
              name="password"
              placeholder=""
              required
            />
            <label for="password" class="label">Password</label>
          </div>
          <RouterLink to="personalrecord">
            <button
              type="submit"
              class="bg-primary hover:bg-primary/90 md:text-sm text-xs text-white font-bold w-full text-center py-3 rounded-md"
            >
              Sign In
            </button>
          </RouterLink>

          <p class="text-primary text-center w-full text-sm">
            “Please login with your correct username and password to access your
            timekeeping logs”.
          </p>
        </form>
      </div>
    </div>
  </main>
</template>
<style scoped>
/* Initial label styling */
.label {
  @apply absolute left-3 md:top-3.5 top-3 px-1.5 md:text-sm text-xs text-gray-400 transition-all ease-in-out duration-300;
}
input {
  @apply pl-4;
}

/* Apply style changes only when input is focused or not showing placeholder */
input:focus + .label,
textarea:focus + label,
textarea:not(:placeholder-shown) + .label,
input:not(:placeholder-shown) + .label {
  @apply -top-2 left-2 md:text-sm text-xs bg-white text-primary;
}
</style>
