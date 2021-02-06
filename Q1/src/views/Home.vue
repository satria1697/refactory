<template>
  <b-container>
    <b-row>
      <h2>Aplikasi 1</h2>
    </b-row>
    <b-row>
      <b-input
        class="col-4"
        v-model="resto.name"
        :disabled="printNota"
      ></b-input>
    </b-row>
    <b-row>
      <b-input
        class="col-4"
        v-model="resto.date"
        type="datetime-local"
        :disabled="printNota"
      ></b-input>
    </b-row>
    <b-row>
      <b-input
        class="col-4"
        v-model="resto.cashier"
        :disabled="printNota"
      ></b-input>
    </b-row>
    <b-row>
      <b-input
        class="col-2"
        v-model="resto.item"
        @keydown.enter="pushItem"
        :disabled="printNota"
      ></b-input>
      <b-input
        class="col-2"
        v-model="resto.price"
        type="number"
        @keydown.enter="pushItem"
        :disabled="printNota"
      ></b-input>
    </b-row>
    <!--    <b-row class="my-2">-->
    <!--      <b-button-group class="col-4">-->
    <!--        <b-button @click="printNota = true">Submit</b-button>-->
    <!--        <b-button @click="printNota = false">Close</b-button>-->
    <!--      </b-button-group>-->
    <!--    </b-row>-->
    <b-container class="my-2" fluid v-if="printNota">
      <b-row>
        <b-col :style="{ maxWidth: maxWidth }">
          <span>{{ namaResto }}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col :style="{ maxWidth: maxWidth }">
          <span>{{ tanggalnota }}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col :style="{ maxWidth: maxWidth }">
          <span>{{ namakasir }}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col :style="{ maxWidth: maxWidth }">
          <span>=============================</span>
        </b-col>
      </b-row>
      <b-row v-for="(item, index) in items" :key="index">
        <b-col :style="{ maxWidth: maxWidth }">
          {{ changeFormat(item) }}
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      resto: {
        name: null,
        date: null,
        cashier: null,
        item: null,
        price: null
      },
      maxchar: 30,
      printNota: false,
      items: [],
      maxWidth: "27%"
    };
  },
  computed: {
    namaResto() {
      let span = this.resto.name;
      let char = span.length;
      let space = Math.floor((this.maxchar - char) / 2);
      if (space < 0) {
        space = 60 - char;
      }
      let spacing = "";
      for (let i = 0; i <= space; i++) {
        spacing += "\u00A0";
      }
      return spacing + span;
    },
    tanggalnota() {
      let constant = "Tanggal : ";
      let span = dayjs(this.resto.date).format("DD/MM/YYYY HH:mm");
      let char = span.length;
      let charconstant = constant.length;
      let space = this.maxchar - char - charconstant;
      let spacing = "";
      if (space < 0) {
        let newSubStr = "\u000a";
        span =
          span.slice(0, this.maxchar - charconstant) +
          newSubStr +
          span.slice(this.maxchar - charconstant + Math.abs(0));
      } else {
        for (let i = 0; i < space; i++) {
          spacing += "\u00A0";
        }
      }
      return constant + spacing + span;
    },
    namakasir() {
      let constant = "Nama Kasir : ";
      let span = this.resto.cashier;
      let char = span.length;
      let charconstant = constant.length;
      let space = this.maxchar - char - charconstant;
      let spacing = "";
      if (space < 0) {
        let newSubStr = "\u000a";
        span =
          span.slice(0, this.maxchar - charconstant) +
          newSubStr +
          span.slice(this.maxchar - charconstant + Math.abs(0));
      } else {
        for (let i = 0; i < space; i++) {
          spacing += "\u00A0";
        }
      }
      return constant + spacing + span;
    }
  },
  methods: {
    pushItem() {
      if (this.resto.item.toLowerCase() === "exit") {
        this.printNota = true;
      } else if (this.resto.item || this.resto.price) {
        let data = {
          item: this.resto.item,
          price: this.resto.price
        };
        this.items.push(data);
        this.resto.item = null;
        this.resto.price = null;
      }
    },
    changeFormat(data) {
      let constant = data.item;
      let span = "Rp. " + data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      let char = span.length;
      let charconstant = constant.length;
      let space = this.maxchar - char - charconstant;
      let spacing = "";
      if (space < 0) {
        let newSubStr = "\u000a";
        span =
          span.slice(0, this.maxchar - charconstant) +
          newSubStr +
          span.slice(this.maxchar - charconstant + Math.abs(0));
      } else {
        for (let i = 0; i < space; i++) {
          spacing += "\u002E";
        }
      }
      return constant + spacing + span;
    }
  }
};
</script>

<style scoped lang="scss"></style>
