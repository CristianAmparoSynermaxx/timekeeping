<script setup>
import { ref } from "vue";

const reminder = ref(true);
const data = ref(true);
</script>

<template>
  <main
    class="container px-4 h-screen w-full flex flex-col gap-5 pt-40 items-center mx-auto"
  >
    <!-- Reminder --->
    <div
      v-if="reminder"
      class="bg-secondary text-center h-max shadow-md text-primary w-full max-w-[600px] flex flex-col gap-1 lg:py-5 py-3 lg:px-12 md:px-8 px-5 rounded-xl items-center"
    >
      <img class="size-10" src="/warning.png" alt="" />
      <h2 class="md:text-xl text-lg font-semibold">Reminder</h2>
      <p class="md:text-base text-sm">
        Andrei Callebero, you are already time-in at 2024-09-05 08:05:23 am. You
        should time-out on or after 06:00:00 pm
      </p>
    </div>
    <!-- Reminder --->

    <!-- form card --->
    <div
      class="w-full max-w-[450px] bg-white rounded-lg h-max lg:px-10 px-5 lg:py-12 md:py-7 py-7 shadow-md border-t border-gray-50"
    >
      <div class="max-w-md mx-auto text-black space-y-5">
        <form class="space-y-5">
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
          <div class="relative">
            <textarea
              tabindex="-1"
              type="text"
              class="form-input lg:py-3 py-2.5 px-5 block w-full leading-5 text-gray-700 border border-gray-300 focus:ring focus:ring-primary focus:ring-opacity-5 focus:outline-none rounded-md focus:border-primary peer"
              name="reason"
              placeholder=""
              required
            ></textarea>

            <label for="reason" class="label">Reason if any</label>
          </div>

          <button
            type="submit"
            class="bg-primary hover:bg-primary/90 md:text-sm text-xs text-white font-bold w-full text-center py-3 rounded-md"
          >
            Time In
          </button>
        </form>
      </div>
    </div>

    <!-- form card --->

    <!-- Table Log Info --->
    <div class="w-full overflow-auto border-2 border-primary">
      <table class="w-full min-w-[700px] text-center md:text-sm text-xs">
        <thead>
          <tr class="bg-primary text-white">
            <th class="py-2">Profile</th>
            <th class="">TIME-IN</th>
            <th class="">BREAK-OUT</th>
            <th class="">BREAK-IN</th>
            <th class="">TIME-OUT</th>
          </tr>
        </thead>
        <tbody class="h-full overflow-auto">
          <tr v-if="!data" class="h-20 w-full">
            <td class="text-center h-20" colspan="5">
              There is no record to display
            </td>
          </tr>
          <tr>
            <td class="py-5 flex flex-col items-center px-4">
              <p>Andrei Callebero</p>
              <img class="size-20 rounded-full" src="/profile.png" alt="" />
            </td>
            <td>
              <p>September 04,2024</p>
              <p>09:08:13 AM</p>
            </td>
            <td>
              <p>September 04,2024</p>
              <p>09:08:13 AM</p>
            </td>
            <td>
              <p>September 04,2024</p>
              <p>09:08:13 AM</p>
            </td>
            <td>
              <p>September 04,2024</p>
              <p>09:08:13 AM</p>
            </td>
          </tr>
        </tbody>
      </table>
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
