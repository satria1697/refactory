<template>
  <transition class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Task</h4>
              <b-button-close type="button" v-on:click="closeModal">
              </b-button-close>
            </div>
            <div class="modal-body" v-if="!isLoading">
              <b-row>
                <b-col>
                  <h5>Title</h5>
                  <b-input v-model="dataAll.title"></b-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <h5>Description</h5>
                  <b-textarea
                    rows="4"
                    v-model="dataAll.description"
                  ></b-textarea>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <h5>Choose Date</h5>
                  <v-date-picker
                    title-position="left"
                    :attributes="attrs"
                    v-model="dataAll.date"
                  ></v-date-picker>
                </b-col>
              </b-row>
            </div>
            <div class="modal-footer">
              <b-button type="button" variant="info" @click="addData">
                Add Task
              </b-button>
              <b-button type="button" variant="info" @click="closeModal">
                Close
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import dayjs from "dayjs";

function initData() {
  return {
    title: "",
    description: "",
    date: null,
    complete: 0
  };
}
export default {
  props: {
    dataEdit: {
      type: Object
    }
  },
  data() {
    return {
      attrs: [
        {
          key: "today",
          highlight: true,
          dates: dayjs().toLocaleString()
        }
      ],
      dataAll: null,
      isLoading: true
    };
  },
  created() {
    this.eschandler();
  },
  mounted() {
    if (this.dataEdit !== null) {
      this.dataAll = this.dataEdit;
      this.isLoading = false;
    } else {
      this.dataAll = initData();
      this.isLoading = false;
    }
  },
  methods: {
    eschandler() {
      const escapeHandler = e => {
        if (e.key === "Escape") {
          this.closeModal();
        }
      };
      document.addEventListener("keydown", escapeHandler);
      this.$once("hook:destroyed", () => {
        document.removeEventListener("keydown", escapeHandler);
      });
    },
    addData() {
      let payload = {
        title: this.dataAll.title,
        description: this.dataAll.description,
        date: this.dataAll.date,
        complete: this.dataAll.complete
      };
      this.$emit("close-modal", payload);
    },
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style scoped lang="scss"></style>
