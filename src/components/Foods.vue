<template>
  <v-container>
    <v-row>
      <div v-if="spinner" id="spinner">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <v-col cols="12" md="12" sm="6" class="mx-auto">
        <div v-if="content">
          <h3 class="text-center">Store:</h3>
          <div v-for="(food, index) in foodData" :key="index">
            <v-card class="mx-auto my-10" max-width="344">
              <v-img :src="food.img" height="200px"></v-img>
              <v-card-title> {{ food.name }} </v-card-title>
              <v-card-subtitle> {{ food.description }} </v-card-subtitle>
              <v-btn color="red" block dark @click="addtoCard(index)">Add</v-btn>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Food",
  data() {
    return {
      spinner: true,
      content: false,
    };
  },
  computed: {
    ...mapState(["foodData", "card"]),
  },
  methods: {
    ...mapActions(["aCard"]),
    addtoCard(index) {
      this.$swal("Add to Cart");
      const { name, description, img, price } = this.foodData[index];
      const food = {
        food: {
          name,
          description,
          img,
          price,
        },
      };
      if (this.card.length < 4) {
        this.aCard(food);
      } else {
        this.$swal("finish Food Thanks!");
        return;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.spinner = false;
      this.content = true;
    }, 2500);
  },
};
</script>
