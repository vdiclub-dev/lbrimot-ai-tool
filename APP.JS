function calculer() {
  let m2 = document.getElementById("m2").value;
  let type = document.getElementById("type").value;

  let prix = 0;

  if (type === "standard") prix = m2 * 10;
  if (type === "diogene") prix = m2 * 20;
  if (type === "finbail") prix = m2 * 12;

  if (document.getElementById("urgence").checked) {
    prix *= 1.3;
  }

  document.getElementById("result").innerText =
    "💰 " + prix.toFixed(2) + " CHF";
}
