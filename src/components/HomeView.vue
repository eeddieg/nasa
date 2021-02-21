<template>
  <div>
    <NavBar />
    <MainView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainView from "@/components/MainView.vue";
import NavBar from "@/components/NavBar.vue";
@Component({
  components: {
    MainView,
    NavBar
  }
})
export default class HomeView extends Vue {}
</script>

<style></style>
