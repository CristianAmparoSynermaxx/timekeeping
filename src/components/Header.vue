<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const isActive = (path) => route.path === path;
</script>

<template>
  <header
    class="fixed top-0 z-50 left-0 text-primary right-0 flex items-center justify-between h-20 w-full md:px-12 px-5 shadow-md bg-white"
  >
    <div class="font-semibold lg:text-2xl md:text-xl text-lg">Time keeping</div>

    <nav class="flex items-center">
      <input type="checkbox" id="sidebar-active" class="opacity-0" />
      <label htmlFor="sidebar-active" class="cursor-pointer lg:hidden">
        <img class="size-7" src="/menu.svg" alt="" />
      </label>
      <nav
        v-if="route.path == '/personalrecord'"
        class="lg:flex hidden w-max items-center justify-center gap-12"
      >
        <RouterLink to="/personalrecord">
          <ul
            :class="[
              { 'border-b-2 border-primary': isActive('/personalrecord') },
              'px-3',
            ]"
          >
            <h3>My record</h3>
          </ul>
        </RouterLink>
        <RouterLink to="/records">
          <ul
            :class="[
              { 'border-b-2 border-primary': isActive('/records') },
              'px-3',
            ]"
          >
            <h3>Account</h3>
          </ul>
        </RouterLink>
        <RouterLink to="/">
          <ul class="px-8 py-2 bg-primary text-white rounded-md">
            <h3>Sign Out</h3>
          </ul>
        </RouterLink>
      </nav>
      <nav
        v-else
        class="lg:flex hidden w-max items-center justify-center gap-12"
      >
        <RouterLink to="/">
          <ul :class="[{ 'border-b-2 border-primary': isActive('/') }, 'px-3']">
            <h3>Log</h3>
          </ul>
        </RouterLink>
        <RouterLink to="/records">
          <ul
            :class="[
              { 'border-b-2 border-primary': isActive('/records') },
              'px-3',
            ]"
          >
            <h3>Records</h3>
          </ul>
        </RouterLink>
        <RouterLink to="/signin">
          <ul class="px-8 py-2 bg-primary text-white rounded-md">
            <h3>Sign In</h3>
          </ul>
        </RouterLink>
      </nav>

      <label id="overlay" htmlFor="sidebar-active"></label>
      <aside
        class="sidebar-container max-w-96 w-full bg-white fixed top-0 bottom-0 p-5"
      >
        <label htmlFor="sidebar-active" class="cursor-pointer bg-white">
          <img class="size-7" src="/close.svg" alt="" />
        </label>
        <nav>
          <div
            v-if="route.path == '/personalrecord'"
            class="flex flex-col w-full items-center justify-center gap-12 p-5"
          >
            <RouterLink to="/personalrecord">
              <ul
                :class="[
                  { 'border-b-2 border-primary': isActive('/personalrecord') },
                  'px-3',
                ]"
              >
                <h3>My record</h3>
              </ul>
            </RouterLink>
            <RouterLink to="/records">
              <ul
                :class="[
                  { 'border-b-2 border-primary': isActive('/records') },
                  'px-3',
                ]"
              >
                <h3>Account</h3>
              </ul>
            </RouterLink>
            <RouterLink to="/">
              <ul class="px-8 py-2 bg-primary text-white rounded-md">
                <h3>Sign Out</h3>
              </ul>
            </RouterLink>
          </div>
          <div
            v-else
            class="flex flex-col w-full items-center justify-center gap-12 p-5"
          >
            <RouterLink to="/">
              <ul
                :class="[
                  { 'border-b-2 border-primary': isActive('/') },
                  'px-3',
                ]"
              >
                <h3>Log</h3>
              </ul>
            </RouterLink>
            <RouterLink to="/records">
              <ul
                :class="[
                  { 'border-b-2 border-primary': isActive('/records') },
                  'px-3',
                ]"
              >
                <h3>Records</h3>
              </ul>
            </RouterLink>
            <RouterLink to="/signin">
              <ul class="px-8 py-2 bg-primary text-white rounded-md">
                <h3>Sign In</h3>
              </ul>
            </RouterLink>
          </div>
        </nav>
      </aside>
    </nav>
  </header>
</template>

<style scoped>
ul {
  @apply flex text-lg font-semibold items-center gap-1.5 cursor-pointer hover:border-b-2 border-primary;
}

ul img {
  width: 20px;
  height: 20px;
}

.sidebar-container {
  @apply -right-[400px] transition-all ease-out duration-300 lg:hidden;
  box-shadow: -8px 0 15px -5px rgba(40, 41, 57, 0.3);
}

#sidebar-active:checked ~ .sidebar-container {
  @apply right-0;
}

#sidebar-active:checked ~ #overlay {
  @apply lg:hidden backdrop-blur-sm bg-gray-100/10 fixed top-0 left-0 right-0 bottom-0;
}
</style>
