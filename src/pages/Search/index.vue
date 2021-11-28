<template>
  <div>
    <h1>Search</h1>
    <h1>params.keyword: {{ $route.params.keyword }}</h1>
    <h1>query.keyword: {{ $route.query.keyword2 }}</h1>
    <h1>props.keyword: {{ keyword3 }}</h1>
    <h1>props.keyword2: {{ keyword4 }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  /* props: ["keyword", "keyword2"], */
  props: ["keyword3", "keyword4"],
};
</script>

<style lang="less" scoped>
</style>
