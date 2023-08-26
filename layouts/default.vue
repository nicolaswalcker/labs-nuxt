<template>
  <main>
    <header class="flex w-full justify-around items-center py-5 bg-zinc-700 text-white">
      <h1 class="text-2xl font-extrabold">
        Labs
      </h1>
      <nav class="w-auto">
        <ul class="flex items-center justify-center gap-4">
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/mail">
              Email
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </main>
</template>
