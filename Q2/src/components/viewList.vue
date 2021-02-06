<template>
  <div>
    <h2>{{ title }}</h2>
    <b-list-group class="mb-2">
      <b-list-group-item v-for="(item, index) in data" :key="index">
        {{ getOptionLabel(item) }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    data: {
      type: Array
    },
    label: {
      type: String
    }
  },
  methods: {
    getOptionLabel(option) {
      return option[this.label];
    }
  }
};
</script>

<style scoped lang="scss"></style>
