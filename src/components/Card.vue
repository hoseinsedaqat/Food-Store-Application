<template>
  <v-app>
    <div v-if="spinner" id="spinner">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-if="content">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Food</th>
            <th class="text-left">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="my-2">
          <tr v-for="(shop, index) in card" :key="index">
            <td>{{ shop.name }}</td>
            <td><img :src="shop.img" alt="food-Image" width="100px" height="70px" /></td>
            <td>{{ shop.price }} $</td>
            <td>
              <i
                @click="dCard(index)"
                class="fa fa-remove"
                style="font-size: 24px; color: red; cursor: pointer"
              ></i>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-card elevation="4" class="my-4 py-4 text-center">
        <div class="d-flex flex-column">
          <b>Total Price: {{ totalPrice }}$</b>
          <v-btn color="red" dark class="mt-3">Payment</v-btn>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Card",
  data() {
    return {
      spinner: true,
      content: false,
    };
  },
  computed: {
    ...mapState(["card"]),
    ...mapMutations(["dataShop"]),
    totalPrice() {
      let price = 0;
      for (let tprice in this.card) {
        let myallPrice = this.card[tprice]["price"];
        price += parseInt(myallPrice);
      }
      return price;
    },
  },
  methods: {
    ...mapActions(["dCard"]),
  },
  mounted() {
    this.card;
    this.dataShop;
    setTimeout(() => {
      this.spinner = false;
      this.content = true;
    }, 1500);
  },
};
</script>
