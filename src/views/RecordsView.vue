<script setup>
import Tablerow from "@/components/Tablerow.vue";
import { ref } from "vue";

const reminder = ref(true);
const data = ref(true);
</script>

<template>
  <main
    class="container px-4 h-screen w-full flex flex-col gap-5 py-40 items-center mx-auto"
  >
    <div class="w-full max-h-full overflow-auto border-2 border-primary">
      <table
        class="w-full min-w-[700px] text-center md:text-sm text-xs relative"
      >
        <thead class="sticky top-0 z-10">
          <tr class="bg-primary text-white">
            <th class="py-2 sticky left-0 top-0 z-20 bg-primary">PROFILE</th>
            <th class="">TIME-IN</th>
            <th class="">BREAK-OUT</th>
            <th class="">BREAK-IN</th>
            <th class="">TIME-OUT</th>
          </tr>
        </thead>
        <tbody class="h-full overflow-auto text-primary">
          <tr v-if="!data" class="h-20 w-ful">
            <td class="text-center h-20" colspan="5">
              There is no record to display
            </td>
          </tr>
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
          <Tablerow />
        </tbody>
      </table>
    </div>
  </main>
</template>
