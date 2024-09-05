<script setup>
import Tablerow from "@/components/Tablerow.vue";
import Tablerow2 from "@/components/Tablerow2.vue";
import { ref } from "vue";

const data = ref(true);
</script>

<template>
  <main
    class="flex flex-col container w-full h-screen items-center gap-3 mx-auto py-32 px-4"
  >
    <div class="w-full flex justify-end">
      <div class="w-max px-4 py-2 border rounded-lg">
        <select name="" id="">
          <option value="">Select Month</option>
          <option value="">Sep 01-15 2024</option>
          <option value="">Aug 16-31 2024</option>
          <option value="">Aug 1-15 2024</option>
          <option value="">Jul 15-31 2024</option>
        </select>
      </div>
    </div>
    <!--Table -->
    <div class="w-full max-h-full h-max overflow-auto border-2 border-primary">
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
            <th class="">TOTAL</th>
          </tr>
        </thead>
        <tbody class="h-full overflow-auto">
          <tr v-if="!data" class="h-20 w-ful">
            <td class="text-center h-20" colspan="5">
              There is no record to display
            </td>
          </tr>
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
          <Tablerow2 />
        </tbody>
      </table>
    </div>
    <div
      class="w-full flex items-center justify-between px-5 font-bold text-primary"
    >
      <div>TOTAL ABSENT: 05</div>
      <div>TOTAL WORK HOURS: 35</div>
    </div>
  </main>
</template>
