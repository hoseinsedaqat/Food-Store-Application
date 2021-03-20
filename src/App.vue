<template>
  <v-app>
    <v-card>
      <v-card-title class="blue white--text text-center">
        <span class="headline"> Food Store </span>
      </v-card-title>
    </v-card>
    <router-view></router-view>
    <div class="mobile-header">
      <v-tabs class="mobile-icon p-15 fix">
        <v-tab to="/" style="cursor: pointer"
          ><i class="fas fa-store-alt" style="font-size: 24px"></i
        ></v-tab>
        <v-tab to="/Card" style="cursor: pointer">
          <i class="fa fa-shopping-cart" style="font-size: 24px"></i>
          <v-badge color="red" :content="shopLength == 0 ? '0' : shopLength"></v-badge>
        </v-tab>
        <v-tab to="/User" style="cursor: pointer"
          ><i class="fas fa-user-alt" style="font-size: 24px"></i>
        </v-tab>
      </v-tabs>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["card"]),
    ...mapMutations(["dataShop"]),
    shopLength() {
      var alllength = 0;
      alllength += this.card.length;
      return alllength;
    },
  },
  mounted() {
    this.dataShop;
  },
};
</script>
