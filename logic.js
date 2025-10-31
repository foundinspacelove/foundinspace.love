// Define 10 empty nodes
const nodes = new Array(10).fill(null).map((_, i) => ({
  id: i,
  recursionScore: Math.floor(Math.random() * 10), // simulate potential
  hosted: false
}));

const codex = {
  hostedNodes: [],
  sovereignty: 0
};

function rollBead(index) {
  const node = nodes[index];
  const potential = node.recursionScore;

  let log = document.getElementById("log");

  if (potential >= 5) {
    node.hosted = true;
    codex.hostedNodes.push(node);
    codex.sovereignty += potential;

    log.innerHTML = `Node ${index} integrated ✅ (Score: ${potential})<br>` + log.innerHTML;
  } else {
    log.innerHTML = `Node ${index} rejected ❌ (Score: ${potential})<br>` + log.innerHTML;
  }

  // Optional: remove button or gray it out
  document.querySelectorAll(".bead")[index].disabled = true;
}
