<template>
  <div class="hello">
    <!-- 调用接口 -->
    <h1>{{ msg }}</h1>
    <!-- 打印环境 -->
    <h2>{{ env }}</h2>
  </div>
</template>

<script>
// 引入接口
import { getComeCounts } from '@/api/base'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
      env: process.env.NODE_ENV
    }
  },

  created() {
    // 调用接口
    this.comeCounts()
  },

  mounted() {},

  methods: {
    // 调用接口
    comeCounts() {
      getComeCounts().then(res => {
        // 打印结果
        console.log('HelloWorld: ' + res)
        // 设值
        this.msg = res.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
