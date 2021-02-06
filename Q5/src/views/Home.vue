<template>
  <b-container fluid class="mt-4">
    <add-task
      v-if="add.modal"
      @close-modal="checkModal"
      :dataEdit="add.data"
    ></add-task>
    <b-row>
      <b-col cols="4">
        <b-row>
          <b-col>
            <b-card
              bg-variant="info"
              text-variant="white"
              no-body
              class="overflow-hidden"
              style="max-width: 360px;"
            >
              <b-row no-gutters>
                <b-col md="4" class="text-center my-auto">
                  <b-card-img
                    :src="image"
                    alt="Image"
                    class="rounded-0"
                    style="max-width: 100px"
                  ></b-card-img>
                </b-col>
                <b-col md="8">
                  <b-card-body title="Hello, Sam!">
                    <b-card-text v-if="taskLeft">
                      You have {{ taskLeft }} task left for today, Already
                      completed task today?
                    </b-card-text>
                    <b-card-text v-else>
                      You have completed all task, Add more task?
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-3 ml-5">
            <v-calendar title-position="left" :attributes="attrs"></v-calendar>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="8">
        <b-row>
          <b-col>
            <h2>Task for Today</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="2" class="my-auto mx-auto">
            <b-button
              variant="info"
              pill
              size="sm"
              v-on:click="add.modal = true"
              ><b-icon-plus></b-icon-plus>Create New</b-button
            >
          </b-col>
          <b-col md="10">
            <b-input-group>
              <b-input type="search"></b-input>
              <template #prepend>
                <b-input-group-text
                  ><b-icon-search></b-icon-search
                  >&nbsp;Search</b-input-group-text
                >
              </template>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row v-for="(item, idx) in dataAll" :key="idx" class="mt-3">
          <b-list-group class="col">
            <b-list-group-item>
              <span class="font-weight-bold" style="font-size: 1.5rem">{{
                item.title
              }}</span>
              <b-icon-pencil
                class="h3 my-auto ml-2 edit pointer-event"
                @click="openModal(item)"
              ></b-icon-pencil>
              <b-icon-trash
                class="h3 my-auto ml-2 edit pointer-event"
                @click="deleteData(item)"
              ></b-icon-trash>
              <h5>
                <b-badge
                  class="float-right pointer-event"
                  variant="danger"
                  v-if="item.complete"
                  @click="item.complete = 0"
                  ><b-icon-check></b-icon-check> Complete</b-badge
                ><b-badge
                  class="float-right pointer-event"
                  v-else
                  @click="item.complete = 1"
                  ><b-icon-check></b-icon-check> Set As Complete</b-badge
                >
              </h5>
            </b-list-group-item>
            <b-list-group-item>
              <span>{{ item.description }}</span>
            </b-list-group-item>
          </b-list-group>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import image from "../assets/images/papernpen.png";
import dayjs from "dayjs";
import AddTask from "../components/addTask";
export default {
  components: { AddTask },
  data() {
    return {
      add: {
        modal: false,
        data: null
      },
      image: image,
      attrs: [
        {
          key: "today",
          highlight: true,
          dates: dayjs().toLocaleString()
        }
      ],
      dataAll: [
        {
          title: "Daily Stand Up",
          description:
            "1. Dont forget prepare your report and any blocker in front end 2. Telling Project Manager new Assignment",
          complete: 1
        },
        {
          title: "Meeting with client A",
          description: "1. Loream Ipsum Dolor Amet 2.Loream Ipsum Dolor Amet",
          complete: 0
        },
        {
          title: "Meeting with client B",
          description: "1. Loream Ipsum Dolor Amet 2.Loream Ipsum Dolor Amet",
          complete: 0
        }
      ]
    };
  },
  computed: {
    taskLeft() {
      return this.dataAll.filter(x => x.complete === 0).length;
    }
  },
  methods: {
    checkModal(payload) {
      if (payload) {
        let idx = this.dataAll.findIndex(x => x.title === payload.title);
        console.log(idx);
        if (idx > -1) {
          this.dataAll[idx] = payload;
        } else {
          this.dataAll.push(payload);
        }
      }
      this.add.data = null;
      this.add.modal = false;
    },
    openModal(data) {
      this.add.modal = true;
      this.add.data = data;
    },
    deleteData(data) {
      let idx = this.dataAll.findIndex(x => x.title === data.title);
      this.dataAll.splice(idx, 1);
    }
  }
};
</script>

<style scoped lang="scss">
.list-group-item {
  .edit {
    display: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    .edit {
      display: inline-block;
    }
  }
}
</style>
