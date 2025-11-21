<template>
  <header>
    <nav>
      <h2>MSLR</h2>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header { padding: 1px; background: #f5f5f5; }
nav { display:flex; align-items:center; justify-content:space-between }
ul { list-style:none; margin:0; padding:0; display:flex; gap:1rem }
a { text-decoration:none; color:inherit }
</style>
