<template>
  <div class="container-fluid">
    <b-nav>
      <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
      <b-nav-item :to="{ name: 'search', params:{keyword: 'test'} }">Search</b-nav-item>
      <b-nav-item :to="{ name: 'weather', params:{woeid:'123'} }">Weather</b-nav-item>
    </b-nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
