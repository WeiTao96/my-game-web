<template>
  <div>
    <div id="mynetwork"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as vis from "vis-network/peer/esm/vis-network";
@Component({
  name: "PeopleNetwork",
})
export default class PeopleNetwork extends Vue {
  draw(): void {
    const nodes: vis.Node[] = [
      { id: 1, label: "师傅" },
      { id: 2, label: "徒弟1" },
      { id: 3, label: "徒弟2" },
      { id: 4, label: "徒弟3" },
      { id: 5, label: "徒孙1" },
    ];

    const edges: vis.Edge[] = [
      { from: 1, to: 2, label: "师傅" },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 5 },
    ];

    const container = document.getElementById("mynetwork");
    const network = new vis.Network(
      container!,
      { nodes: nodes, edges: edges },
      {}
    );

    network.on("selectEdge", (props) => {
      network.updateEdge(props.edges[0], { color: "#FF0000" });
    });
  }

  mounted(): void {
    this.draw();
  }
}
</script>
<style lang="scss" scoped>
#mynetwork {
  width: 100%;
  height: 698px;
}
</style>
