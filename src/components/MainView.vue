<template>
  <b-container>
    <b-button-group>
      <b-button variant="success">Show Image</b-button>
      <b-button variant="primary">Clear Image</b-button>
    </b-button-group>
    <b-jumbotron :lead="getTitle">
      <b-img :src="getHdurl" fluid alt="Nasa Picture Of The Day"></b-img>
      <p>{{ getExplanation }}</p>
    </b-jumbotron>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BJumbotron } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";
@Component({
  components: {
    BJumbotron
  },
  computed: {
    ...mapActions(["getInfoFromApi"]),
    ...mapGetters(["getHdurl", "getTitle", "getExplanation"])
  }
})
export default class MainView extends Vue {
  created() {
    this.$store.dispatch("getInfoFromApi");
  }
}
</script>

<style></style>
