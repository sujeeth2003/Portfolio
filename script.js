// ===== Finance Table =====
const categories = ["Food","Groceries","Transport","Entertainment","Bills"];
let expenses = [
  {category:"Food",amount:120},
  {category:"Transport",amount:80},
  {category:"Entertainment",amount:60},
  {category:"Groceries",amount:150},
  {category:"Bills",amount:400}
];

const table = document.getElementById("expenseTable");
function renderExpenses() {
  table.innerHTML = expenses.map((e,i)=>`
    <tr>
      <td>
        <select onchange="expenses[${i}].category=this.value">
          ${categories.map(c=>`<option ${c===e.category?"selected":""}>${c}</option>`).join("")}
        </select>
      </td>
      <td>
        <input type="number" value="${e.amount}" onchange="expenses[${i}].amount=Number(this.value)">
      </td>
    </tr>
  `).join("");
}
renderExpenses();

// ===== AI Insight Function =====
async function getInsights(){
  const out = document.getElementById("output");
  const question = document.getElementById("question").value;
  out.textContent = "Analyzing...";
  try {
    const r = await fetch("https://spending-assistant.onrender.com/finance/manual-insights", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({expenses, question})
    });
    const d = await r.json();
    out.textContent = JSON.stringify(d.summary,null,2) + "\n\n" + d.answer;
  } catch(err) {
    out.textContent = "Error: " + err.message;
  }
}
