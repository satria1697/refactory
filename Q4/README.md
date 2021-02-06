# Q4

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Fixing
store.js
1. variable for state is wrong, it should be lists, not list.
2. on getters getCountData should be return state.lists.length not return 0, because it return the length of lists
3. on actions it should be commit('setDatas') not commit('setData')

mutation-types.js
1. because change from 'setData' to 'setData' on actions at store.js, const for SET_DATA should be 'setDatas' not 'SET_DATA'

users.vue
1. at import change INCREMENT to SET_DATA because we doesnt have variable at mutation-types.js called INCREMENT
2. after change methods change from 'setData' to SET_DATA
3. import mapState at computed
4. catch(error), all variables should be used.
5. we should wait data to loading, so we put loading on data and set it on true, so we wont get any data problem.
6. fixing some CSS to make website a bit better