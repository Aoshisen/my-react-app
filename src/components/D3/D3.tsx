import {
  D3DragEvent,
  SimulationNodeDatum,
  create,
  drag,
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  scaleOrdinal,
  schemeCategory10,
} from "d3";
import { FC } from "react";

import { data } from "./data";
import { cloneDeep } from "lodash";
import { useD3ContainerRef } from "@/hooks/useD3Container";

export const D3Test: FC<unknown> = () => {
  const width = 928;
  const height = 600;
  const color = scaleOrdinal(schemeCategory10);
  const links = cloneDeep(data.links);
  const nodes = cloneDeep(data.nodes);
  //create svg Element
  const svg = create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  //add link element line
  const link = svg
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
    .attr("stroke-width", (d) => Math.sqrt(d.value));

  //add node element circle
  const node = svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("circle")
    .attr("r", 5)
    .attr("fill", (d) => color(d.group.toString()));

  // append title from node element
  node.append("title").text((d) => d.id);

  // Add a drag event .
  const dragBehavior = drag()
    .on("start", dragStart)
    .on("drag", dragging)
    .on("end", dragEnd);

  node.call(dragBehavior);

  type Event = D3DragEvent<
    SVGCircleElement,
    (typeof data)["nodes"][number],
    SimulationNodeDatum
  >;


  // for drag  to create simulation node add force 
  const simulation = forceSimulation(nodes)
    .force(
      "link",
      forceLink(links).id((d) => d.id)
    )
    .force("charge", forceManyBody())
    .force("center", forceCenter(width / 2, height / 2))
    .on("tick", ticked);

    // calculate link distance and node position
  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  }
  // define drag start function
  function dragStart(event: Event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  // define dragging function
  function dragging(event: Event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  //define dragEnd function
  function dragEnd(event: Event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  const D3Node = useD3ContainerRef<SVGSVGElement>(svg.node()!);
  return <div ref={D3Node}></div>;
};
