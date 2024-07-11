<template lang="pug">
svg(ref='graph')
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'
console.log('helloasdfdsfssss')
// const width = 300
// const height = 300
// const radius = 150
// const data = [2, 4, 8, 10]
// const p = d3.pie()
// const svg = d3
//   .select('graph')
//   .attr('width', width)
//   .attr('height', height)
//   .attr('fill', 'green')
//   .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')

// const arc = d3.arc().innerRadius(0).outerRadius(150)
// svg
//   .append('g')
//   .selectAll('path')
//   .data(data)
//   .join('path')
//   //@ts-ignore
//   .attr('d', arc)
//   .append('title')
const graph = ref()
onMounted(() => {

  console.log(graph)
  const svg = d3.select(graph.value)
  const g = svg.append('g')

  g.append('g')
    .selectAll('g')
    .data([5, 10, 20, 40])
    .enter()
    .append('rect')
    .attr('fill', 'green')
    .attr('x', (d) => d)
    .attr('y', (d) => d)
    .attr('height', (d) => d)
    .attr('width', (d) => d)
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
