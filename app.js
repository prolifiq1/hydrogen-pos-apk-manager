/* ============================================================
   APK Manager — Fully Interactive Prototype
   Hydrogen Design System · Global State · Live Simulation
   ============================================================ */

// ==================== GLOBAL STATE STORE ====================
const Store = {
  apks: [
    { id:"APK-0012", name:"Neo Core POS",       pkg:"com.neo.core.pos",        cat:"Core POS",           mandatory:true,  deprecated:false, created:"2025-09-12" },
    { id:"APK-0018", name:"Aba Power Merchant",  pkg:"com.neo.abapower",        cat:"Payment App",        mandatory:true,  deprecated:false, created:"2025-10-03" },
    { id:"APK-0019", name:"Ardova Fuel",         pkg:"com.neo.ardova.fuel",     cat:"Payment App",        mandatory:false, deprecated:false, created:"2025-10-14" },
    { id:"APK-0022", name:"Osun IGR",            pkg:"com.neo.osun.igr",        cat:"Payment App",        mandatory:true,  deprecated:false, created:"2025-11-05" },
    { id:"APK-0025", name:"Greatbrand Retail",   pkg:"com.neo.greatbrand",      cat:"Payment App",        mandatory:false, deprecated:false, created:"2025-11-22" },
    { id:"APK-0031", name:"Hypercity Kiosk",     pkg:"com.neo.hypercity.kiosk", cat:"Core POS",           mandatory:true,  deprecated:false, created:"2025-12-09" },
    { id:"APK-0036", name:"Neo Peripheral Svc",  pkg:"com.neo.peripheral",      cat:"Peripheral Service", mandatory:false, deprecated:false, created:"2026-01-18" },
    { id:"APK-0041", name:"TMS Support Agent",   pkg:"com.neo.support.agent",   cat:"Support App",        mandatory:false, deprecated:false, created:"2026-02-02" },
    { id:"APK-0045", name:"Firmware Companion",  pkg:"com.neo.fw.companion",    cat:"Firmware Companion", mandatory:true,  deprecated:false, created:"2026-03-11" },
  ],
  versions: [
    { vid:"V-4.2.1", code:421, name:"4.2.1", min:"4.0.0", active:true,  deprecated:false, size:"28.4 MB", created:"2026-04-02", apkId:"APK-0012", notes:"Fix crash when reconnecting after key exchange\nFaster cold start on H50 terminals\nSupport new Ardova SKUs" },
    { vid:"V-4.2.0", code:420, name:"4.2.0", min:"4.0.0", active:false, deprecated:false, size:"28.1 MB", created:"2026-03-14", apkId:"APK-0012", notes:"Performance improvements\nNew receipt layout" },
    { vid:"V-4.1.5", code:415, name:"4.1.5", min:"4.0.0", active:false, deprecated:false, size:"27.9 MB", created:"2026-02-21", apkId:"APK-0012", notes:"Bug fixes" },
    { vid:"V-4.1.2", code:412, name:"4.1.2", min:"3.9.0", active:false, deprecated:false, size:"27.6 MB", created:"2026-01-30", apkId:"APK-0012", notes:"Minor updates" },
    { vid:"V-4.0.9", code:409, name:"4.0.9", min:"3.9.0", active:false, deprecated:true,  size:"26.8 MB", created:"2025-12-15", apkId:"APK-0012", notes:"Legacy version" },
    { vid:"V-4.0.0", code:400, name:"4.0.0", min:"3.8.0", active:false, deprecated:true,  size:"26.2 MB", created:"2025-11-04", apkId:"APK-0012", notes:"Initial 4.x release" },
  ],
  terminals: [
    { tid:"T-20014521", sn:"H50-AB-00014521", bucket:"Ardova-Prod",      installed:6, sync:"2m ago",  status:"ok" },
    { tid:"T-20014522", sn:"H50-AB-00014522", bucket:"Ardova-Prod",      installed:6, sync:"5m ago",  status:"ok" },
    { tid:"T-20018834", sn:"P70-GM-00018834", bucket:"Merchant-General", installed:5, sync:"11m ago", status:"opt" },
    { tid:"T-20019001", sn:"P70-GM-00019001", bucket:"Merchant-General", installed:5, sync:"3m ago",  status:"ok" },
    { tid:"T-20022714", sn:"H50-OS-00022714", bucket:"Osun-IGR",         installed:4, sync:"18m ago", status:"force" },
    { tid:"T-20022891", sn:"H50-OS-00022891", bucket:"Osun-IGR",         installed:4, sync:"1h ago",  status:"force" },
    { tid:"T-20031154", sn:"A90-HY-00031154", bucket:"Hypercity",        installed:5, sync:"9m ago",  status:"ok" },
    { tid:"T-20031210", sn:"A90-HY-00031210", bucket:"Hypercity",        installed:5, sync:"22m ago", status:"opt" },
    { tid:"T-20044301", sn:"H50-GB-00044301", bucket:"Greatbrand",       installed:3, sync:"6m ago",  status:"ok" },
  ],
  keyExchanges: [
    { tid:"T-20014521", pkg:"com.neo.core.pos",       code:420, decision:"optional",      ts:"14:12:03" },
    { tid:"T-20022714", pkg:"com.neo.osun.igr",       code:112, decision:"force",         ts:"14:11:48" },
    { tid:"T-20018834", pkg:"com.neo.core.pos",       code:421, decision:"allow",         ts:"14:11:44" },
    { tid:"T-20019001", pkg:"com.neo.ardova.fuel",    code:305, decision:"optional",      ts:"14:11:30" },
    { tid:"T-20031154", pkg:"com.neo.hypercity.kiosk",code:198, decision:"force",         ts:"14:11:27" },
    { tid:"T-20044301", pkg:"com.neo.greatbrand",     code:77,  decision:"force-install", ts:"14:11:14" },
    { tid:"T-20022891", pkg:"com.neo.core.pos",       code:421, decision:"allow",         ts:"14:11:02" },
    { tid:"T-20014522", pkg:"com.neo.core.pos",       code:421, decision:"allow",         ts:"14:10:58" },
  ],
  logs: [
    { ts:"14:12:04.221", lvl:"ok",   tid:"T-20014521", pkg:"com.neo.core.pos v4.2.1",        msg:"Installation successful (checksum verified)" },
    { ts:"14:12:02.013", lvl:"info", tid:"T-20014521", pkg:"com.neo.core.pos v4.2.1",        msg:"Download 100% · 28.4 MB in 6.2s" },
    { ts:"14:11:58.903", lvl:"info", tid:"T-20014521", pkg:"com.neo.core.pos v4.2.1",        msg:"Signed URL issued, download started" },
    { ts:"14:11:48.117", lvl:"err",  tid:"T-20022714", pkg:"com.neo.osun.igr v1.2.3",        msg:"SHA-256 mismatch — retry 1/3" },
    { ts:"14:11:44.882", lvl:"ok",   tid:"T-20018834", pkg:"com.neo.core.pos v4.2.1",        msg:"Already at required version, no action" },
    { ts:"14:11:30.505", lvl:"warn", tid:"T-20019001", pkg:"com.neo.ardova.fuel v3.0.5",     msg:"Optional update available (user deferred)" },
    { ts:"14:11:27.110", lvl:"err",  tid:"T-20031154", pkg:"com.neo.hypercity.kiosk v1.9.8", msg:"Force update triggered — version below min" },
    { ts:"14:11:14.402", lvl:"err",  tid:"T-20044301", pkg:"com.neo.greatbrand v0.7.7",      msg:"Package missing on terminal — force install issued" },
    { ts:"14:11:02.771", lvl:"ok",   tid:"T-20022891", pkg:"com.neo.core.pos v4.2.1",        msg:"Handshake OK, version compliant" },
    { ts:"14:10:58.330", lvl:"ok",   tid:"T-20014522", pkg:"com.neo.core.pos v4.2.1",        msg:"Handshake OK, version compliant" },
    { ts:"14:10:45.998", lvl:"info", tid:"T-20031210", pkg:"com.neo.hypercity.kiosk v1.9.8", msg:"Key exchange initiated" },
    { ts:"14:10:22.514", lvl:"warn", tid:"T-20018834", pkg:"com.neo.peripheral v1.0.3",      msg:"Optional peripheral service behind by 1 minor" },
  ],
  buckets: [
    { name:"Ardova-Prod",      product:"Ardova Fuel",       apk:"com.neo.ardova.fuel",     ver:"3.1.0", terminals:312, rollout:100 },
    { name:"Merchant-General", product:"General Merchant",  apk:"com.neo.core.pos",        ver:"4.2.1", terminals:1248, rollout:62 },
    { name:"Osun-IGR",         product:"Osun IGR",          apk:"com.neo.osun.igr",        ver:"1.3.0", terminals:184, rollout:100 },
    { name:"Hypercity",        product:"Hypercity Kiosk",   apk:"com.neo.hypercity.kiosk", ver:"2.0.0", terminals:96,  rollout:45 },
    { name:"Greatbrand",       product:"Greatbrand Retail", apk:"com.neo.greatbrand",      ver:"1.0.2", terminals:73,  rollout:100 },
    { name:"Aba-Power",        product:"Aba Power",         apk:"com.neo.abapower",        ver:"2.4.0", terminals:128, rollout:90 },
  ],
  reassignHistory: [
    { tid:"T-20018834", from:"Ardova-Prod",      to:"Merchant-General", when:"2026-04-09", reason:"Merchant re-onboarded to General product" },
    { tid:"T-20031154", from:"Greatbrand",        to:"Hypercity",        when:"2026-04-08", reason:"Terminal SN matched Hypercity deployment" },
    { tid:"T-20044301", from:"Merchant-General",  to:"Greatbrand",       when:"2026-04-05", reason:"Manual reassignment by Ifeanyi" },
    { tid:"T-20022891", from:"Ardova-Prod",       to:"Osun-IGR",         when:"2026-04-02", reason:"IGR rollout cut-over (Osun State)" },
  ],
  rollouts: [
    { name:"Neo Core POS", ver:"4.2.1", pct:62,  stage:3, done:1264, total:2041, fail:11, pend:766, state:"active" },
    { name:"Ardova Fuel",  ver:"3.1.0", pct:100, stage:5, done:312,  total:312,  fail:2,  pend:0,   state:"active" },
    { name:"Hypercity",    ver:"2.0.0", pct:45,  stage:2, done:43,   total:96,   fail:4,  pend:49,  state:"active" },
    { name:"Osun IGR",     ver:"1.3.0", pct:100, stage:5, done:184,  total:184,  fail:1,  pend:0,   state:"active" },
  ],
  selectedApkId: "APK-0012",
  pendingUpdates: 341,
  nextApkNum: 49,
  liveTailActive: false,
  logFeedPaused: false,
};

const SCREEN_META = {
  s1: { title:"Dashboard",                  sub:"Overview of APK distribution health" },
  s2: { title:"APK Registry",               sub:"Manage registered applications" },
  s3: { title:"Version Management",         sub:"" },
  s4: { title:"Terminal Management",         sub:"Fleet of connected POS terminals" },
  s5: { title:"Key Exchange Validation",     sub:"Recent handshake decisions from terminals" },
  s6: { title:"Distribution & Rollout",      sub:"Staged rollout controls" },
  s7: { title:"Monitoring & Logs",           sub:"Real-time download & install events" },
  s8: { title:"Terminal Profiling & Buckets", sub:"Group terminals into rollout buckets" },
};

let currentScreen = "s1";

// ==================== UTILITY FUNCTIONS ====================
const esc = s => String(s).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const today = () => new Date().toISOString().slice(0,10);
const nowTime = () => { const d=new Date(); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`; };
const nowTimeMs = () => nowTime()+"."+String(Date.now()%1000).padStart(3,'0');
const randItem = arr => arr[Math.floor(Math.random()*arr.length)];
const genId = () => `APK-${String(Store.nextApkNum++).padStart(4,'0')}`;

// ==================== TOAST SYSTEM ====================
function toast(msg, type="success") {
  const c = document.getElementById("toastContainer");
  const icons = { success:"✓", error:"✕", info:"ℹ", warn:"!" };
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type]||"✓"}</span><span class="toast-msg">${msg}</span><span class="toast-close" onclick="this.parentElement.remove()">✕</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 300); }, 3000);
  addLog("info", "SYSTEM", "system", msg);
}

// ==================== CONFIRM DIALOG ====================
function confirm2(title, msg, onConfirm, destructive=false) {
  const bd = document.createElement("div");
  bd.className = "confirm-backdrop";
  bd.innerHTML = `
    <div class="confirm-dialog">
      <div class="cd-body">
        <div class="cd-title">${title}</div>
        <div class="cd-msg">${msg}</div>
      </div>
      <div class="cd-foot">
        <button class="btn btn-tertiary cd-cancel">Cancel</button>
        <button class="btn ${destructive?'btn-danger':'btn-primary'} cd-ok">${destructive?'Confirm':'Confirm'}</button>
      </div>
    </div>`;
  bd.querySelector(".cd-cancel").onclick = () => bd.remove();
  bd.querySelector(".cd-ok").onclick = () => { bd.remove(); onConfirm(); };
  bd.addEventListener("click", e => { if (e.target === bd) bd.remove(); });
  document.body.appendChild(bd);
}

// ==================== MODAL SYSTEM ====================
function openModal(titleHtml, bodyHtml, footHtml) {
  const bd = document.createElement("div");
  bd.className = "modal-backdrop open";
  bd.id = "dynModal";
  bd.innerHTML = `<div class="modal">
    <div class="modal-head">
      <div>${titleHtml}</div>
      <button class="btn btn-ghost btn-icon modal-close">✕</button>
    </div>
    <div class="modal-body">${bodyHtml}</div>
    ${footHtml ? `<div class="modal-foot">${footHtml}</div>` : ''}
  </div>`;
  bd.querySelector(".modal-close").onclick = () => bd.remove();
  bd.addEventListener("click", e => { if (e.target === bd) bd.remove(); });
  document.body.appendChild(bd);
  return bd;
}
function closeAllModals() { document.querySelectorAll(".modal-backdrop, .confirm-backdrop, .search-overlay").forEach(e => e.remove()); }

// ==================== GLOBAL SEARCH ====================
function openGlobalSearch() {
  const ov = document.createElement("div");
  ov.className = "search-overlay";
  ov.innerHTML = `<div class="search-panel">
    <input type="text" placeholder="Search APKs, terminals, versions…" id="gsInput" autofocus />
    <div class="search-results" id="gsResults"><div class="search-empty">Type to search across APKs, terminals, and versions</div></div>
  </div>`;
  ov.addEventListener("click", e => { if (e.target === ov) ov.remove(); });
  document.body.appendChild(ov);
  const inp = ov.querySelector("#gsInput");
  inp.focus();
  inp.addEventListener("input", () => runGlobalSearch(inp.value));
  inp.addEventListener("keydown", e => { if (e.key === "Escape") ov.remove(); });
}
function runGlobalSearch(q) {
  const res = document.getElementById("gsResults");
  if (!q.trim()) { res.innerHTML = '<div class="search-empty">Type to search across APKs, terminals, and versions</div>'; return; }
  const ql = q.toLowerCase();
  let html = "";
  Store.apks.filter(a => a.name.toLowerCase().includes(ql) || a.pkg.toLowerCase().includes(ql) || a.id.toLowerCase().includes(ql)).forEach(a => {
    html += `<div class="search-result" onclick="document.querySelector('.search-overlay').remove();showScreen('s2')"><span class="sr-type">APK</span><span class="sr-name">${esc(a.name)}</span><span class="sr-sub">${esc(a.pkg)}</span></div>`;
  });
  Store.terminals.filter(t => t.tid.toLowerCase().includes(ql) || t.sn.toLowerCase().includes(ql)).forEach(t => {
    html += `<div class="search-result" onclick="document.querySelector('.search-overlay').remove();showScreen('s4')"><span class="sr-type">Terminal</span><span class="sr-name">${esc(t.tid)}</span><span class="sr-sub">${esc(t.sn)} · ${esc(t.bucket)}</span></div>`;
  });
  Store.versions.filter(v => v.name.includes(ql) || v.vid.toLowerCase().includes(ql)).forEach(v => {
    html += `<div class="search-result" onclick="document.querySelector('.search-overlay').remove();showScreen('s3')"><span class="sr-type">Version</span><span class="sr-name">${esc(v.vid)}</span><span class="sr-sub">${esc(v.name)} · ${esc(v.size)}</span></div>`;
  });
  res.innerHTML = html || '<div class="search-empty">No results found</div>';
}

// ==================== LOG HELPER ====================
function addLog(lvl, tid, pkg, msg) {
  Store.logs.unshift({ ts: nowTimeMs(), lvl, tid, pkg, msg });
  if (Store.logs.length > 100) Store.logs.pop();
}

// ==================== CSV EXPORT ====================
function downloadCSV(filename, rows) {
  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type:"text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  toast(`${filename} downloaded`, "info");
}

// ==================== BADGE HELPERS ====================
function statusBadge(s) {
  if (s==="ok")    return '<span class="badge success">Up to date</span>';
  if (s==="opt")   return '<span class="badge warning">Optional update</span>';
  if (s==="force") return '<span class="badge error">Force update required</span>';
  return '<span class="badge neutral">Unknown</span>';
}
function decisionBadge(d) {
  if (d==="allow")         return '<span class="badge success">Allow</span>';
  if (d==="optional")      return '<span class="badge warning">Optional Update</span>';
  if (d==="force")         return '<span class="badge error">Force Update</span>';
  if (d==="force-install") return '<span class="badge error">Force Install</span>';
  return '<span class="badge neutral">—</span>';
}

// ==================== PAGINATION ====================
const paginationHTML = (total) => `
  <div class="pagination">
    <div>Showing <b>1</b>–<b>${total}</b> of <b>${total}</b> results</div>
    <div class="page-nums">
      <button class="page-btn">‹</button>
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">…</button>
      <button class="page-btn">›</button>
    </div>
    <select class="input" style="height:32px;font-size:12px;min-width:120px;">
      <option>10 per page</option><option>25 per page</option><option>50 per page</option>
    </select>
  </div>`;

// ==================== SCREEN 1: DASHBOARD ====================
function screen1() {
  const el = document.createElement("section");
  el.className = "screen active"; el.id = "s1";
  const feedItems = [
    { col:"g", ch:"✓", t:'<b>Neo Core POS 4.2.1</b> installed on T-20014521', time:"2 minutes ago", screen:"s7" },
    { col:"r", ch:"✕", t:'<b>Osun IGR 1.2.3</b> install failed on T-20022714 · checksum mismatch', time:"4 minutes ago", screen:"s7" },
    { col:"b", ch:"↓", t:'<b>Ardova Fuel 3.1.0</b> downloaded by 48 terminals', time:"8 minutes ago", screen:"s6" },
    { col:"y", ch:"!", t:'<b>Hypercity 2.0.0</b> pending user confirmation', time:"14 minutes ago", screen:"s6" },
    { col:"g", ch:"✓", t:'Version <b>4.2.1</b> promoted to Active', time:"22 minutes ago", screen:"s3" },
    { col:"b", ch:"↓", t:'New APK <b>Firmware Companion</b> registered', time:"1 hour ago", screen:"s2" },
  ];
  const barRow = (name,cls,pct,count) => `<div class="bar-row"><div class="name">${name}</div><div class="track"><div class="bar ${cls}" style="width:${pct}%"></div></div><div class="count">${count}</div></div>`;

  el.innerHTML = `
    <div class="page-head">
      <div><h1>Dashboard</h1><p>Overview of APK distribution health across all POS terminals.</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="showScreen('s4')">View Terminals</button>
        <button class="btn btn-tertiary" onclick="openRegisterModal()">Register APK</button>
        <button class="btn btn-primary" onclick="openUploadModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Upload Version
        </button>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="label">Total APKs <div class="stat-icon y">●</div></div><div class="value">${Store.apks.length}</div><div><span class="delta up">▲ 3 this month</span></div></div>
      <div class="stat-card"><div class="label">Active Versions <div class="stat-icon g">●</div></div><div class="value">${Store.versions.filter(v=>v.active).length}</div><div><span class="delta up">▲ 2 promoted</span></div></div>
      <div class="stat-card"><div class="label">Pending Updates <div class="stat-icon r">●</div></div><div class="value" id="pendingCount">${Store.pendingUpdates}</div><div><span class="delta down">▼ 58 since yesterday</span></div></div>
      <div class="stat-card"><div class="label">Connected Terminals <div class="stat-icon b">●</div></div><div class="value">2,041</div><div><span class="delta up">▲ 99.2% online</span></div></div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-head"><div><h3>Version distribution across terminals</h3><div class="sub">Top 5 APKs by install count · Live</div></div></div>
        <div class="card-body">
          <div class="chart">
            ${barRow("Neo Core POS 4.2.1","b1",72,"1,486")}
            ${barRow("Neo Core POS 4.2.0","b2",18,"371")}
            ${barRow("Ardova Fuel 3.1.0","b3",52,"312")}
            ${barRow("Osun IGR 1.3.0","b4",46,"184")}
            ${barRow("Hypercity 2.0.0","b5",24,"96")}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3>Recent activity</h3></div>
        <div class="card-body" style="padding-top:8px;">
          <div class="feed">
            ${feedItems.map(f => `<div class="feed-item" style="cursor:pointer" onclick="showScreen('${f.screen}')"><div class="feed-icon ${f.col}">${f.ch}</div><div class="feed-text"><div class="t">${f.t}</div><div class="time">${f.time}</div></div></div>`).join("")}
          </div>
        </div>
      </div>
    </div>`;
  return el;
}

// ==================== SCREEN 2: APK REGISTRY ====================
function screen2() {
  const el = document.createElement("section");
  el.className = "screen"; el.id = "s2";
  el.innerHTML = `
    <div class="page-head">
      <div><h1>APK Registry</h1><p>${Store.apks.length} applications registered</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="exportApksCSV()">Export CSV</button>
        <button class="btn btn-primary" onclick="openRegisterModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          Register New APK
        </button>
      </div>
    </div>
    <div class="table-wrap">
      <div class="table-head">
        <h3>Registered Applications</h3>
        <div class="filters">
          <select class="input" style="min-width:180px;" id="s2CatFilter" onchange="filterApkTable()">
            <option value="">All Categories</option>
            <option>Core POS</option><option>Payment App</option><option>Firmware Companion</option><option>Support App</option><option>Peripheral Service</option>
          </select>
          <input class="input" placeholder="Search by name or package…" style="min-width:260px;" id="s2Search" oninput="filterApkTable()" />
        </div>
      </div>
      <table><thead><tr>
        <th>App ID</th><th>App / Package</th><th>Category</th><th>Status</th><th>Created</th><th style="text-align:right">Actions</th>
      </tr></thead><tbody id="s2Body"></tbody></table>
      <div id="s2Pagination"></div>
    </div>`;
  renderApkTable(el);
  return el;
}
function renderApkTable(root) {
  const tbody = (root||document).querySelector("#s2Body");
  const pag = (root||document).querySelector("#s2Pagination");
  if (!tbody) return;
  const q = document.getElementById("s2Search")?.value?.toLowerCase() || "";
  const cat = document.getElementById("s2CatFilter")?.value || "";
  let filtered = Store.apks.filter(a => {
    if (cat && a.cat !== cat) return false;
    if (q && !a.name.toLowerCase().includes(q) && !a.pkg.toLowerCase().includes(q) && !a.id.toLowerCase().includes(q)) return false;
    return true;
  });
  tbody.innerHTML = filtered.map(a => `<tr>
    <td><span class="td-main">${esc(a.id)}</span></td>
    <td><div class="td-main">${esc(a.name)}</div><div class="td-sub">${esc(a.pkg)}</div></td>
    <td><span class="badge plain">${esc(a.cat)}</span></td>
    <td>${a.deprecated ? '<span class="badge error">Deprecated</span>' : (a.mandatory ? '<span class="badge error">Mandatory</span>' : '<span class="badge neutral">Optional</span>')}</td>
    <td><span class="td-sub" style="margin-top:0">${a.created}</span></td>
    <td><div class="row-actions">
      <button class="link-btn" onclick="Store.selectedApkId='${a.id}';showScreen('s3')">View Versions</button>
      <button class="btn btn-sm btn-ghost" onclick="openEditApkModal('${a.id}')">Edit</button>
      ${a.deprecated ? '' : `<button class="btn btn-sm btn-ghost" style="color:var(--error-fill)" onclick="deprecateApk('${a.id}')">Deprecate</button>`}
    </div></td>
  </tr>`).join("");
  if (pag) pag.innerHTML = paginationHTML(filtered.length);
}
function filterApkTable() { renderApkTable(); }
function exportApksCSV() {
  const rows = [["App ID","Name","Package","Category","Mandatory","Created"]];
  Store.apks.forEach(a => rows.push([a.id, a.name, a.pkg, a.cat, a.mandatory?"Yes":"No", a.created]));
  downloadCSV("apk-registry.csv", rows);
}
function deprecateApk(id) {
  const a = Store.apks.find(x=>x.id===id);
  if (!a) return;
  confirm2("Deprecate APK", `Are you sure you want to deprecate <b>${esc(a.name)}</b>? This action cannot be undone.`, () => {
    a.deprecated = true;
    renderApkTable();
    toast(`${a.name} has been deprecated`, "warn");
  }, true);
}

// ==================== REGISTER APK MODAL ====================
function openRegisterModal() {
  const cats = ["Core POS","Payment App","Firmware Companion","Support App","Peripheral Service"];
  const body = `
    <div class="input-group"><label>App Name</label><input class="input" id="regName" placeholder="e.g. Neo Core POS" /></div>
    <div class="input-group"><label>Package Name</label><input class="input" id="regPkg" placeholder="e.g. com.neo.core.pos" /></div>
    <div class="input-group"><label>Category</label><select class="input" id="regCat">${cats.map(c=>`<option>${c}</option>`).join("")}</select></div>
    <div class="input-group"><label>App ID (auto-generated)</label><input class="input" value="${genId()}" disabled id="regId" /></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;">
      <div><div style="font-size:13px;font-weight:500;color:var(--text-02)">Mark as Mandatory</div><div style="font-size:12px;color:var(--text-03)">Terminals will be forced to install latest version.</div></div>
      <label class="toggle"><input type="checkbox" id="regMandatory" /><span class="slider"></span></label>
    </div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitRegisterApk()">Register APK</button>`;
  openModal("<h2>Register New APK</h2><p>Create a new APK entry in the Registry Service.</p>", body, foot);
  // reset auto-gen id
  Store.nextApkNum--;
}
function submitRegisterApk() {
  const name = document.getElementById("regName").value.trim();
  const pkg = document.getElementById("regPkg").value.trim();
  if (!name || !pkg) { toast("Please fill in App Name and Package Name", "error"); return; }
  const id = genId();
  Store.apks.push({
    id, name, pkg,
    cat: document.getElementById("regCat").value,
    mandatory: document.getElementById("regMandatory").checked,
    deprecated: false,
    created: today()
  });
  closeAllModals();
  toast(`${name} registered as ${id}`, "success");
  if (currentScreen === "s2") renderApkTable();
  else if (currentScreen === "s1") showScreen("s1");
}

// ==================== EDIT APK MODAL ====================
function openEditApkModal(id) {
  const a = Store.apks.find(x=>x.id===id);
  if (!a) return;
  const cats = ["Core POS","Payment App","Firmware Companion","Support App","Peripheral Service"];
  const body = `
    <div class="input-group"><label>App Name</label><input class="input" id="editName" value="${esc(a.name)}" /></div>
    <div class="input-group"><label>Package Name</label><input class="input" id="editPkg" value="${esc(a.pkg)}" /></div>
    <div class="input-group"><label>Category</label><select class="input" id="editCat">${cats.map(c=>`<option ${c===a.cat?'selected':''}>${c}</option>`).join("")}</select></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;">
      <div><div style="font-size:13px;font-weight:500;color:var(--text-02)">Mark as Mandatory</div></div>
      <label class="toggle"><input type="checkbox" id="editMandatory" ${a.mandatory?'checked':''} /><span class="slider"></span></label>
    </div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitEditApk('${id}')">Save Changes</button>`;
  openModal(`<h2>Edit APK</h2><p>${esc(a.id)}</p>`, body, foot);
}
function submitEditApk(id) {
  const a = Store.apks.find(x=>x.id===id);
  if (!a) return;
  a.name = document.getElementById("editName").value.trim() || a.name;
  a.pkg = document.getElementById("editPkg").value.trim() || a.pkg;
  a.cat = document.getElementById("editCat").value;
  a.mandatory = document.getElementById("editMandatory").checked;
  closeAllModals();
  toast(`${a.name} updated`, "success");
  renderApkTable();
}

// ==================== SCREEN 3: VERSION MANAGEMENT ====================
function screen3() {
  const apk = Store.apks.find(a=>a.id===Store.selectedApkId) || Store.apks[0];
  const vers = Store.versions.filter(v=>v.apkId===apk.id);
  const activeV = vers.find(v=>v.active);
  SCREEN_META.s3.sub = `${apk.name} · ${apk.pkg}`;

  const el = document.createElement("section");
  el.className = "screen"; el.id = "s3";
  el.innerHTML = `
    <div class="page-head">
      <div>
        <div style="font-size:13px;color:var(--text-03);"><a href="#" onclick="showScreen('s2');return false;">APK Registry</a> / ${esc(apk.name)}</div>
        <h1 style="margin-top:4px;">Version Management</h1>
        <p>${esc(apk.pkg)} · ${esc(apk.cat)} · ${apk.mandatory?'Mandatory':'Optional'} · ${vers.length} versions</p>
      </div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="showReleaseNotes()">View Release Notes</button>
        <button class="btn btn-primary" onclick="openUploadModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          Upload New Version
        </button>
      </div>
    </div>
    ${activeV ? `<div class="alert info"><div class="icon">i</div><div><div class="t">Version ${activeV.name} is currently the Active version</div><div class="d">All terminals below the min supported version (${activeV.min}) will receive a Force Update decision at their next key exchange.</div></div></div>` : ''}
    <div class="table-wrap">
      <div class="table-head">
        <h3>All Versions</h3>
        <div class="filters">
          <select class="input" style="min-width:150px;" id="s3Filter" onchange="filterVersionTable()">
            <option value="">All statuses</option><option value="active">Active</option><option value="deprecated">Deprecated</option><option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <table><thead><tr>
        <th>Version ID</th><th>Code</th><th>Name</th><th>Min Supported</th><th>Is Active</th><th>Is Deprecated</th><th>File Size</th><th>Created</th><th style="text-align:right">Actions</th>
      </tr></thead><tbody id="s3Body"></tbody></table>
      <div id="s3Pagination"></div>
    </div>`;
  renderVersionTable(el);
  return el;
}
function renderVersionTable(root) {
  const apk = Store.apks.find(a=>a.id===Store.selectedApkId) || Store.apks[0];
  const tbody = (root||document).querySelector("#s3Body");
  if (!tbody) return;
  const f = document.getElementById("s3Filter")?.value || "";
  let vers = Store.versions.filter(v=>v.apkId===apk.id);
  if (f==="active") vers = vers.filter(v=>v.active);
  else if (f==="deprecated") vers = vers.filter(v=>v.deprecated);
  else if (f==="inactive") vers = vers.filter(v=>!v.active && !v.deprecated);
  tbody.innerHTML = vers.map(v => `<tr>
    <td><span class="td-main">${v.vid}</span></td><td>${v.code}</td><td><span class="td-main">${v.name}</span></td><td>${v.min}</td>
    <td>${v.active?'<span class="badge success">Active</span>':'<span class="badge neutral">Inactive</span>'}</td>
    <td>${v.deprecated?'<span class="badge error">Deprecated</span>':'<span class="badge plain">Live</span>'}</td>
    <td>${v.size}</td><td><span class="td-sub" style="margin-top:0">${v.created}</span></td>
    <td><div class="row-actions">
      ${!v.active && !v.deprecated ? `<button class="btn btn-sm btn-tertiary" onclick="setActiveVersion('${v.vid}')">Set Active</button>` : ''}
      <button class="btn btn-sm btn-ghost" onclick="showVersionNotes('${v.vid}')">Notes</button>
      ${!v.deprecated ? `<button class="btn btn-sm btn-ghost" style="color:var(--error-fill)" onclick="deprecateVersion('${v.vid}')">Deprecate</button>` : ''}
    </div></td>
  </tr>`).join("");
  const pag = (root||document).querySelector("#s3Pagination");
  if (pag) pag.innerHTML = paginationHTML(vers.length);
}
function filterVersionTable() { renderVersionTable(); }
function setActiveVersion(vid) {
  const v = Store.versions.find(x=>x.vid===vid);
  confirm2("Set Active Version", `Set version <b>${v.name}</b> as the active version? The current active version will become inactive.`, () => {
    Store.versions.forEach(x => { if (x.apkId === v.apkId) x.active = false; });
    v.active = true;
    toast(`Version ${v.name} is now the active version`, "success");
    showScreen("s3");
  });
}
function deprecateVersion(vid) {
  const v = Store.versions.find(x=>x.vid===vid);
  confirm2("Deprecate Version", `Deprecate version <b>${v.name}</b>? This cannot be undone.`, () => {
    v.deprecated = true;
    if (v.active) v.active = false;
    toast(`Version ${v.name} deprecated`, "warn");
    renderVersionTable();
  }, true);
}
function showReleaseNotes() {
  const apk = Store.apks.find(a=>a.id===Store.selectedApkId) || Store.apks[0];
  const vers = Store.versions.filter(v=>v.apkId===apk.id);
  const body = vers.map(v => `<div style="margin-bottom:16px;"><h3 style="font-size:14px;font-weight:600;">${v.vid} — ${v.name} ${v.active?'<span class="badge success" style="margin-left:6px">Active</span>':''}</h3><pre style="white-space:pre-wrap;font-size:13px;color:var(--text-02);margin-top:4px;line-height:1.6;">${esc(v.notes||'No release notes')}</pre></div>`).join("");
  openModal(`<h2>Release Notes</h2><p>${esc(apk.name)}</p>`, body, `<button class="btn btn-tertiary" onclick="closeAllModals()">Close</button>`);
}
function showVersionNotes(vid) {
  const v = Store.versions.find(x=>x.vid===vid);
  openModal(`<h2>Release Notes — ${v.name}</h2>`, `<pre style="white-space:pre-wrap;font-size:13px;color:var(--text-02);line-height:1.6;">${esc(v.notes||'No release notes')}</pre>`, `<button class="btn btn-tertiary" onclick="closeAllModals()">Close</button>`);
}

// ==================== UPLOAD VERSION MODAL ====================
function openUploadModal() {
  const apk = Store.apks.find(a=>a.id===Store.selectedApkId) || Store.apks[0];
  const body = `
    <div class="input-group"><label>APK File</label>
      <div class="drop-zone" id="uploadDZ" onclick="simulateFileSelect()" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();simulateFileSelect()">
        <div class="dz-icon">📦</div>
        <div class="dz-label">Drop APK file here, or click to browse</div>
        <div class="dz-hint">.apk only · max 500 MB</div>
      </div>
      <div id="uploadProgress" style="display:none;margin-top:8px;">
        <div class="progress"><div class="fill" id="uploadBar" style="width:0%"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-03);margin-top:4px;"><span id="uploadPct">0%</span><span id="uploadStatus">Uploading…</span></div>
      </div>
      <div id="uploadDone" style="display:none;margin-top:8px;padding:12px;background:var(--success-bg);border-radius:var(--r-md);">
        <div style="font-size:13px;font-weight:500;color:#038053;">✓ File ready — neo-core-pos-v<span id="uploadFileName">X.X.X</span>.apk · 28.4 MB</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div class="input-group"><label>Version Code</label><input class="input" id="uplCode" placeholder="e.g. 422" /></div>
      <div class="input-group"><label>Version Name</label><input class="input" id="uplName" placeholder="e.g. 4.2.2" /></div>
    </div>
    <div class="input-group"><label>Min Supported Version</label><input class="input" id="uplMin" value="4.0.0" /><span class="hint">Terminals below this will receive Force Update.</span></div>
    <div class="input-group"><label>Release Notes</label><textarea class="input" rows="4" style="height:auto;padding:12px 16px;resize:vertical;" id="uplNotes" placeholder="What changed in this version?"></textarea></div>
    <div id="uplAutoGen" style="display:none;display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 12px;background:var(--base-02);border-radius:var(--r-md);font-size:12px;color:var(--text-03)">
      <div><b style="color:var(--text-01)">Auto-generated:</b></div><div></div>
      <div>SHA-256</div><div style="font-family:ui-monospace,monospace;color:var(--text-01);word-break:break-all;" id="uplSha">—</div>
      <div>Download URL</div><div style="font-family:ui-monospace,monospace;color:var(--text-01);" id="uplUrl">—</div>
    </div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitUploadVersion()">Upload & Sign</button>`;
  openModal(`<h2>Upload New Version</h2><p>${esc(apk.name)} · ${esc(apk.pkg)}</p>`, body, foot);
}
function simulateFileSelect() {
  const dz = document.getElementById("uploadDZ");
  const prog = document.getElementById("uploadProgress");
  const done = document.getElementById("uploadDone");
  if (!dz) return;
  dz.style.display = "none";
  prog.style.display = "block";
  let pct = 0;
  const iv = setInterval(() => {
    pct += Math.random()*15+5;
    if (pct >= 100) { pct = 100; clearInterval(iv); }
    document.getElementById("uploadBar").style.width = pct+"%";
    document.getElementById("uploadPct").textContent = Math.round(pct)+"%";
    if (pct >= 100) {
      document.getElementById("uploadStatus").textContent = "Complete";
      setTimeout(() => {
        prog.style.display = "none";
        done.style.display = "block";
        const vn = document.getElementById("uplName")?.value || "X.X.X";
        document.getElementById("uploadFileName").textContent = vn;
        const ag = document.getElementById("uplAutoGen");
        if (ag) { ag.style.display = "grid"; }
        document.getElementById("uplSha").textContent = "a1f9c3d7e8b2…e4b8f1";
        const code = document.getElementById("uplCode")?.value || "000";
        document.getElementById("uplUrl").textContent = `cdn.tms/apk/${Store.selectedApkId.replace("APK-","")}/${code}`;
      }, 400);
    }
  }, 200);
}
function submitUploadVersion() {
  const code = parseInt(document.getElementById("uplCode")?.value);
  const name = document.getElementById("uplName")?.value?.trim();
  const min = document.getElementById("uplMin")?.value?.trim() || "4.0.0";
  const notes = document.getElementById("uplNotes")?.value?.trim() || "";
  if (!code || !name) { toast("Please fill in Version Code and Version Name","error"); return; }
  const apk = Store.apks.find(a=>a.id===Store.selectedApkId) || Store.apks[0];
  // Deactivate previous
  Store.versions.forEach(v => { if (v.apkId===apk.id) v.active = false; });
  const vid = `V-${name.replace(/\./g,'')}`;
  Store.versions.unshift({
    vid, code, name, min, active:true, deprecated:false,
    size: (25+Math.random()*5).toFixed(1)+" MB",
    created: today(), apkId: apk.id, notes
  });
  closeAllModals();
  toast(`Version ${name} uploaded and set as Active`, "success");
  if (currentScreen === "s3") showScreen("s3");
}

// ==================== SCREEN 4: TERMINAL MANAGEMENT ====================
function screen4() {
  const el = document.createElement("section");
  el.className = "screen"; el.id = "s4";
  const okCount = Store.terminals.filter(t=>t.status==="ok").length;
  const optCount = Store.terminals.filter(t=>t.status==="opt").length;
  const forceCount = Store.terminals.filter(t=>t.status==="force").length;
  el.innerHTML = `
    <div class="page-head">
      <div><h1>Terminal Management</h1><p>2,041 connected terminals · 1,698 up to date · 343 require attention</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="exportTerminalsCSV()">Export</button>
        <button class="btn btn-primary" onclick="forceSyncAll()">Force Sync All</button>
      </div>
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="stat-card"><div class="label">Up to date</div><div class="value" style="color:#038053">1,698</div><div><span class="delta up">83.2% of fleet</span></div></div>
      <div class="stat-card"><div class="label">Optional updates</div><div class="value" style="color:#7a5a00">252</div><div><span class="badge warning">12.3%</span></div></div>
      <div class="stat-card"><div class="label">Force update required</div><div class="value" style="color:#b5151a">91</div><div><span class="badge error">4.5%</span></div></div>
    </div>
    <div class="table-wrap">
      <div class="table-head">
        <h3>Terminals</h3>
        <div class="filters">
          <select class="input" style="min-width:160px;" id="s4StatusFilter" onchange="filterTerminals()"><option value="">All statuses</option><option value="ok">Up to date</option><option value="opt">Optional</option><option value="force">Force</option></select>
          <select class="input" style="min-width:160px;" id="s4BucketFilter" onchange="filterTerminals()"><option value="">All buckets</option>${[...new Set(Store.terminals.map(t=>t.bucket))].map(b=>`<option>${b}</option>`).join("")}</select>
          <input class="input" placeholder="Search TID / Serial…" style="min-width:220px;" id="s4Search" oninput="filterTerminals()" />
        </div>
      </div>
      <table><thead><tr>
        <th>Terminal ID</th><th>Serial Number</th><th>Bucket</th><th>Installed APKs</th><th>Last Sync</th><th>Update Status</th><th style="text-align:right">Actions</th>
      </tr></thead><tbody id="s4Body"></tbody></table>
      <div id="s4Pagination"></div>
    </div>`;
  renderTerminalTable(el);
  return el;
}
function renderTerminalTable(root) {
  const tbody = (root||document).querySelector("#s4Body");
  if (!tbody) return;
  const q = document.getElementById("s4Search")?.value?.toLowerCase() || "";
  const sf = document.getElementById("s4StatusFilter")?.value || "";
  const bf = document.getElementById("s4BucketFilter")?.value || "";
  let filtered = Store.terminals.filter(t => {
    if (sf && t.status !== sf) return false;
    if (bf && t.bucket !== bf) return false;
    if (q && !t.tid.toLowerCase().includes(q) && !t.sn.toLowerCase().includes(q)) return false;
    return true;
  });
  tbody.innerHTML = filtered.map((t,i) => `
    <tr class="term-row" data-tid="${t.tid}">
      <td><span class="td-main">${t.tid}</span></td>
      <td><div class="td-main">${t.sn}</div><div class="td-sub">POS Hardware</div></td>
      <td><span class="badge plain">${t.bucket}</span></td>
      <td><span class="td-sub" style="margin-top:0">${t.installed} apps installed</span></td>
      <td>${t.sync}</td>
      <td>${statusBadge(t.status)}</td>
      <td><div class="row-actions">
        <button class="link-btn" onclick="toggleTerminalExpand(this,'${t.tid}')">Expand</button>
        <button class="btn btn-sm btn-ghost" onclick="forceSyncTerminal('${t.tid}',this)">Force Sync</button>
      </div></td>
    </tr>
    <tr class="detail-row" id="detail-${t.tid}">
      <td colspan="7"><div class="detail-grid">
        <div class="kv"><div class="k">Core POS</div><div class="v">v4.2.1 · ok</div></div>
        <div class="kv"><div class="k">Payment App</div><div class="v">v3.1.0 · ok</div></div>
        <div class="kv"><div class="k">Peripheral Svc</div><div class="v">v1.0.3 · ok</div></div>
        <div class="kv"><div class="k">Support Agent</div><div class="v">v2.0.1 · ok</div></div>
        <div class="kv"><div class="k">Firmware Comp</div><div class="v">v5.0.9 · opt update</div></div>
        <div class="kv"><div class="k">Profile</div><div class="v">${t.bucket}</div></div>
      </div></td>
    </tr>`).join("");
  const pag = (root||document).querySelector("#s4Pagination");
  if (pag) pag.innerHTML = paginationHTML(filtered.length);
}
function filterTerminals() { renderTerminalTable(); }
function toggleTerminalExpand(btn, tid) {
  const row = document.getElementById("detail-"+tid);
  if (!row) return;
  const open = row.style.display === "table-row";
  row.style.display = open ? "none" : "table-row";
  btn.textContent = open ? "Expand" : "Collapse";
}
function forceSyncTerminal(tid, btn) {
  const orig = btn.innerHTML;
  btn.innerHTML = '<span class="spinner"></span>';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.disabled = false;
    toast(`Force sync initiated for ${tid}`, "success");
    addLog("info", tid, "system", `Force sync initiated for ${tid}`);
  }, 2000);
}
function forceSyncAll() {
  confirm2("Force Sync All", "Force sync all 2,041 terminals? This will trigger immediate check-in for every terminal.", () => {
    toast("Force sync initiated for all 2,041 terminals", "info");
    addLog("info", "ALL", "system", "Force sync initiated for all terminals");
  }, true);
}
function exportTerminalsCSV() {
  const rows = [["Terminal ID","Serial","Bucket","Installed","Last Sync","Status"]];
  Store.terminals.forEach(t => rows.push([t.tid, t.sn, t.bucket, t.installed, t.sync, t.status]));
  downloadCSV("terminals.csv", rows);
}

// ==================== SCREEN 5: KEY EXCHANGE ====================
function screen5() {
  const el = document.createElement("section");
  el.className = "screen"; el.id = "s5";
  el.innerHTML = `
    <div class="page-head">
      <div><h1>Key Exchange Validation</h1><p>Live terminal handshake decisions issued by the Version Validation Service.</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" id="s5FilterBtn" onclick="toggleS5Filter()" style="position:relative;">Filter</button>
        <button class="btn btn-primary" id="s5LiveBtn" onclick="toggleLiveTail()">${Store.liveTailActive?'Stop Live Tail':'Live Tail'}</button>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="label">Allow decisions</div><div class="value">2,184</div></div>
      <div class="stat-card"><div class="label">Optional updates</div><div class="value">312</div></div>
      <div class="stat-card"><div class="label">Force updates</div><div class="value">91</div></div>
      <div class="stat-card"><div class="label">Force installs</div><div class="value">14</div></div>
    </div>
    <div class="table-wrap">
      <div class="table-head">
        <h3>Recent Handshakes</h3>
        <div class="filters">
          <select class="input" style="min-width:160px;" id="s5DecFilter" onchange="renderKETable()"><option value="">All decisions</option><option value="allow">Allow</option><option value="optional">Optional Update</option><option value="force">Force Update</option><option value="force-install">Force Install</option></select>
          <input class="input" placeholder="Search TID or package…" style="min-width:260px;" id="s5Search" oninput="renderKETable()" />
        </div>
      </div>
      <table><thead><tr>
        <th>Terminal ID</th><th>Package</th><th>Version Sent</th><th>Decision</th><th>Timestamp</th><th style="text-align:right">Payload</th>
      </tr></thead><tbody id="s5Body"></tbody></table>
      <div id="s5Pagination"></div>
    </div>`;
  renderKETable(el);
  return el;
}
function renderKETable(root) {
  const tbody = (root||document).querySelector("#s5Body");
  if (!tbody) return;
  const q = document.getElementById("s5Search")?.value?.toLowerCase() || "";
  const df = document.getElementById("s5DecFilter")?.value || "";
  let filtered = Store.keyExchanges.filter(k => {
    if (df && k.decision !== df) return false;
    if (q && !k.tid.toLowerCase().includes(q) && !k.pkg.toLowerCase().includes(q)) return false;
    return true;
  });
  tbody.innerHTML = filtered.slice(0,20).map(k => `<tr>
    <td><span class="td-main">${k.tid}</span></td>
    <td><span class="td-sub" style="margin-top:0">${k.pkg}</span></td>
    <td>${k.code}</td>
    <td>${decisionBadge(k.decision)}</td>
    <td><span class="td-sub" style="margin-top:0">${k.ts}</span></td>
    <td style="text-align:right"><button class="link-btn" onclick="viewPayload('${k.tid}','${k.pkg}',${k.code},'${k.decision}','${k.ts}')">View Payload</button></td>
  </tr>`).join("");
  const pag = (root||document).querySelector("#s5Pagination");
  if (pag) pag.innerHTML = paginationHTML(filtered.length);
}
function viewPayload(tid,pkg,code,dec,ts) {
  const payload = JSON.stringify({
    terminalId: tid, packageName: pkg, versionCode: code,
    decision: dec.replace(/-/g,"_").toUpperCase(),
    latestVersion: { code:421, name:"4.2.1", downloadUrl:`https://cdn.tms/apk/0012/421`, checksum:"sha256:a1f9c3d7...e4b8f1" },
    isMandatory: Store.apks.find(a=>a.pkg===pkg)?.mandatory || false,
    minSupported: "4.0.0",
    timestamp: `2026-04-11T${ts}Z`
  }, null, 2);
  openModal(`<h2>Key Exchange Payload</h2><p>${tid} · ${pkg}</p>`,
    `<pre style="background:var(--base-09);color:#e6e6e6;padding:16px;border-radius:var(--r-md);font-family:ui-monospace,monospace;font-size:12px;line-height:1.8;overflow:auto;white-space:pre-wrap;">${esc(payload)}</pre>`,
    `<button class="btn btn-tertiary" onclick="closeAllModals()">Close</button>`);
}
function toggleLiveTail() {
  Store.liveTailActive = !Store.liveTailActive;
  const btn = document.getElementById("s5LiveBtn");
  if (btn) btn.textContent = Store.liveTailActive ? "Stop Live Tail" : "Live Tail";
  if (Store.liveTailActive) toast("Live tail started — new events every 4s", "info");
  else toast("Live tail stopped", "info");
}
function toggleS5Filter() {
  const existing = document.querySelector(".filter-panel");
  if (existing) { existing.remove(); return; }
  const btn = document.getElementById("s5FilterBtn");
  const panel = document.createElement("div");
  panel.className = "filter-panel";
  panel.innerHTML = `
    <div class="fp-title">Filter by Decision</div>
    <label><input type="checkbox" value="allow" checked /> Allow</label>
    <label><input type="checkbox" value="optional" checked /> Optional Update</label>
    <label><input type="checkbox" value="force" checked /> Force Update</label>
    <label><input type="checkbox" value="force-install" checked /> Force Install</label>
    <div style="margin-top:12px;"><button class="btn btn-primary btn-sm" onclick="this.closest('.filter-panel').remove()">Apply</button></div>`;
  btn.style.position = "relative";
  btn.parentElement.style.position = "relative";
  btn.parentElement.appendChild(panel);
}

// ==================== SCREEN 6: DISTRIBUTION & ROLLOUT ====================
function screen6() {
  const el = document.createElement("section");
  el.className = "screen"; el.id = "s6";
  const stageEl = (pct,done,active) => `<div class="stage ${done&&!active?'done':''} ${active?'active':''}"><div class="pct">${pct}</div><div class="lbl">${active?'Current':done?'Completed':'Queued'}</div></div>`;
  const cards = Store.rollouts.map((r,ri) => `
    <div class="rollout-card ${r.state==='paused'?'paused':''} ${r.state==='rolled-back'?'rolled-back':''}" id="rollout-${ri}">
      <div class="rollout-head">
        <div>
          <h4>${r.name} <span class="badge brand" style="margin-left:6px">v${r.ver}</span> ${r.state==='paused'?'<span class="badge warning" style="margin-left:4px">Paused</span>':''} ${r.state==='rolled-back'?'<span class="badge error" style="margin-left:4px">Rolled Back</span>':''}</h4>
          <div class="sub">${r.done.toLocaleString()} / ${r.total.toLocaleString()} terminals · ${r.fail} failures · ${r.pend} pending</div>
        </div>
        <div style="display:flex;gap:8px;">
          ${r.state==='active' && r.pct<100 ? `<button class="btn btn-sm btn-primary" onclick="expandRollout(${ri})">Expand Rollout</button>` : ''}
          ${r.pct>=100 && r.state==='active' ? '<button class="btn btn-sm btn-tertiary" disabled>Complete</button>' : ''}
          ${r.state==='active' ? `<button class="btn btn-sm btn-tertiary" onclick="pauseRollout(${ri})">Pause</button>` : ''}
          ${r.state==='paused' ? `<button class="btn btn-sm btn-primary" onclick="resumeRollout(${ri})">Resume</button>` : ''}
          ${r.state!=='rolled-back' ? `<button class="btn btn-sm btn-ghost" style="color:var(--error-fill)" onclick="rollbackRollout(${ri})">Rollback</button>` : ''}
        </div>
      </div>
      <div class="progress ${r.pct===100?'g':'y'}"><div class="fill" style="width:${r.pct}%"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-03);margin-top:6px;"><span>Current rollout</span><span><b style="color:var(--text-01)">${r.pct}%</b> of fleet</span></div>
      <div class="rollout-stages">
        ${stageEl("10%",r.stage>=1,r.stage===1)}
        ${stageEl("30%",r.stage>=2,r.stage===2)}
        ${stageEl("60%",r.stage>=3,r.stage===3)}
        ${stageEl("90%",r.stage>=4,r.stage===4)}
        ${stageEl("100%",r.stage>=5,r.stage===5)}
      </div>
      <div class="rollout-metrics">
        <div class="metric"><div class="k">Success rate</div><div class="v">${(Math.round((r.done-r.fail)/(r.done||1)*1000)/10)}%</div></div>
        <div class="metric"><div class="k">Failures</div><div class="v" style="color:var(--error-fill)">${r.fail}</div></div>
        <div class="metric"><div class="k">Pending</div><div class="v">${r.pend}</div></div>
      </div>
    </div>`).join("");

  el.innerHTML = `
    <div class="page-head">
      <div><h1>Distribution & Rollout</h1><p>Manage staged rollouts for active APK versions.</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="openScheduleModal()">Schedule</button>
        <button class="btn btn-primary" onclick="openNewRolloutModal()">New Rollout</button>
      </div>
    </div>
    ${cards}`;
  return el;
}
function expandRollout(ri) {
  const r = Store.rollouts[ri];
  const stages = [10,30,60,90,100];
  const nextStage = r.stage + 1;
  if (nextStage > 5) return;
  const nextPct = stages[nextStage-1];
  confirm2("Expand Rollout", `Expand <b>${r.name}</b> rollout to next stage (${nextPct}%)?`, () => {
    r.stage = nextStage;
    r.pct = nextPct;
    r.done = Math.round(r.total * nextPct / 100);
    r.pend = r.total - r.done;
    toast(`${r.name} rollout expanded to ${nextPct}%`, "success");
    showScreen("s6");
  });
}
function pauseRollout(ri) {
  Store.rollouts[ri].state = "paused";
  toast(`${Store.rollouts[ri].name} rollout paused`, "warn");
  showScreen("s6");
}
function resumeRollout(ri) {
  Store.rollouts[ri].state = "active";
  toast(`${Store.rollouts[ri].name} rollout resumed`, "success");
  showScreen("s6");
}
function rollbackRollout(ri) {
  const r = Store.rollouts[ri];
  confirm2("Rollback", `Roll back <b>${r.name}</b> to previous version? This will force all terminals to revert.`, () => {
    r.state = "rolled-back";
    toast(`${r.name} rolled back`, "error");
    addLog("err", "SYSTEM", r.name, `Rollout for ${r.name} v${r.ver} rolled back`);
    showScreen("s6");
  }, true);
}
function openNewRolloutModal() {
  const body = `
    <div class="input-group"><label>Select APK</label><select class="input" id="nrApk" onchange="populateNRVersions()"><option value="">Choose APK…</option>${Store.apks.filter(a=>!a.deprecated).map(a=>`<option value="${a.id}">${esc(a.name)}</option>`).join("")}</select></div>
    <div class="input-group"><label>Select Version</label><select class="input" id="nrVer"><option value="">Choose version…</option></select></div>
    <div class="input-group"><label>Rollout Strategy</label><select class="input" id="nrStrategy"><option value="staged">Staged (10→30→60→90→100%)</option><option value="immediate">Immediate (100%)</option></select></div>
    <div class="input-group"><label>Schedule (optional)</label><input class="input" type="datetime-local" id="nrSchedule" /></div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitNewRollout()">Create Rollout</button>`;
  openModal("<h2>New Rollout</h2><p>Create a new staged rollout</p>", body, foot);
}
function populateNRVersions() {
  const apkId = document.getElementById("nrApk").value;
  const sel = document.getElementById("nrVer");
  sel.innerHTML = '<option value="">Choose version…</option>';
  Store.versions.filter(v=>v.apkId===apkId && !v.deprecated).forEach(v => {
    sel.innerHTML += `<option value="${v.vid}">${v.name} (${v.vid})</option>`;
  });
}
function submitNewRollout() {
  const apkId = document.getElementById("nrApk").value;
  const ver = document.getElementById("nrVer");
  const strategy = document.getElementById("nrStrategy").value;
  if (!apkId || !ver.value) { toast("Please select APK and Version", "error"); return; }
  const apk = Store.apks.find(a=>a.id===apkId);
  const v = Store.versions.find(x=>x.vid===ver.value);
  Store.rollouts.push({
    name: apk.name, ver: v.name, pct: strategy==="immediate"?100:10,
    stage: strategy==="immediate"?5:1, done: strategy==="immediate"?200:20,
    total: 200, fail: 0, pend: strategy==="immediate"?0:180, state:"active"
  });
  closeAllModals();
  toast(`Rollout created for ${apk.name} v${v.name}`, "success");
  showScreen("s6");
}
function openScheduleModal() {
  openModal("<h2>Schedule Rollout</h2><p>Plan a future rollout</p>",
    `<div class="input-group"><label>Date & Time</label><input class="input" type="datetime-local" id="schedDate" /></div>
     <div class="input-group"><label>Notes</label><textarea class="input" rows="3" style="height:auto;padding:12px;resize:vertical;" placeholder="Optional notes…"></textarea></div>`,
    `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="closeAllModals();toast('Rollout scheduled','success')">Schedule</button>`);
}

// ==================== SCREEN 7: MONITORING & LOGS ====================
function screen7() {
  const el = document.createElement("section");
  el.className = "screen"; el.id = "s7";
  el.innerHTML = `
    <div class="page-head">
      <div><h1>Monitoring & Logs</h1><p>Real-time feed of downloads, installs and failures.</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="exportLogsCSV()">Download CSV</button>
        <button class="btn btn-primary" id="s7PauseBtn" onclick="toggleLogFeed()">${Store.logFeedPaused?'Resume Feed':'Pause Feed'}</button>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="label">Download success</div><div class="value" style="color:#038053">98.4%</div><div><span class="delta up">▲ 1.2%</span></div></div>
      <div class="stat-card"><div class="label">Install success</div><div class="value" style="color:#038053">96.1%</div><div><span class="delta up">▲ 0.4%</span></div></div>
      <div class="stat-card"><div class="label">Avg download</div><div class="value">4.2 s</div><div><span class="delta down">▼ 0.6s</span></div></div>
      <div class="stat-card"><div class="label">Failures (24h)</div><div class="value" style="color:#b5151a">47</div><div><span class="delta down">▼ 12</span></div></div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div class="card-head">
          <h3>Live log feed</h3>
          <div class="filters" style="display:flex;gap:var(--sp-3);">
            <select class="input" style="height:36px;font-size:13px;min-width:120px;" id="s7LvlFilter" onchange="renderLogTable()"><option value="">All levels</option><option value="ok">OK</option><option value="info">Info</option><option value="warn">Warn</option><option value="err">Error</option></select>
            <input class="input" style="height:36px;font-size:13px;min-width:180px;" placeholder="Filter by TID…" id="s7Search" oninput="renderLogTable()" />
          </div>
        </div>
        <div style="max-height:520px;overflow:auto;">
          <div class="log-row" style="background:var(--base-02);font-weight:600;">
            <div>Timestamp</div><div>Lvl</div><div>Terminal</div><div>Message</div><div style="text-align:right">Package</div>
          </div>
          <div id="s7Body"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><h3>Version distribution</h3></div>
        <div class="card-body">
          <div class="donut-wrap">
            <div class="donut" title="52% v4.2.1 | 26% v4.2.0 | 14% v4.1.x | 8% < 4.0.0"></div>
            <div class="legend">
              <div class="li"><span class="dot" style="background:var(--base-09)"></span><span class="label">4.2.1</span><span class="val">52% (1,061)</span></div>
              <div class="li"><span class="dot" style="background:var(--primary-default)"></span><span class="label">4.2.0</span><span class="val">26% (530)</span></div>
              <div class="li"><span class="dot" style="background:var(--accent-default)"></span><span class="label">4.1.x</span><span class="val">14% (286)</span></div>
              <div class="li"><span class="dot" style="background:var(--sup-orange-2)"></span><span class="label">&lt; 4.0.0</span><span class="val">8% (163)</span></div>
            </div>
          </div>
          <div style="margin-top:var(--sp-6);">
            <h3 style="font-size:14px;font-weight:600;margin-bottom:8px;">Empty state example</h3>
            <div class="empty" style="padding:24px;border:1px dashed var(--base-03);border-radius:var(--r-md);">
              <div class="ill">⊘</div><h4>No failures in last 24h</h4><p>Your fleet is healthy. Check back later.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  renderLogTable(el);
  return el;
}
function renderLogTable(root) {
  const body = (root||document).querySelector("#s7Body");
  if (!body) return;
  const q = document.getElementById("s7Search")?.value?.toLowerCase() || "";
  const lf = document.getElementById("s7LvlFilter")?.value || "";
  let filtered = Store.logs.filter(l => {
    if (lf && l.lvl !== lf) return false;
    if (q && !l.tid.toLowerCase().includes(q)) return false;
    return true;
  });
  body.innerHTML = filtered.slice(0,30).map(l => `
    <div class="log-row ${l.lvl==='err'?'clickable':''}" ${l.lvl==='err'?`onclick="openErrorDetail('${esc(l.tid)}','${esc(l.pkg)}','${esc(l.msg)}')"`:''}>
      <div class="ts">${l.ts}</div>
      <div class="lvl ${l.lvl}">${l.lvl==='ok'?'OK':l.lvl}</div>
      <div class="tid">${l.tid}</div>
      <div class="msg">${l.msg}</div>
      <div class="pkg">${l.pkg}</div>
    </div>`).join("");
}
function toggleLogFeed() {
  Store.logFeedPaused = !Store.logFeedPaused;
  const btn = document.getElementById("s7PauseBtn");
  if (btn) btn.textContent = Store.logFeedPaused ? "Resume Feed" : "Pause Feed";
  toast(Store.logFeedPaused ? "Log feed paused" : "Log feed resumed", "info");
}
function exportLogsCSV() {
  const rows = [["Timestamp","Level","Terminal","Message","Package"]];
  Store.logs.forEach(l => rows.push([l.ts, l.lvl, l.tid, l.msg, l.pkg]));
  downloadCSV("monitoring-logs.csv", rows);
}
function openErrorDetail(tid,pkg,msg) {
  const remediations = {
    "SHA-256": "Re-upload the APK file and verify the checksum matches the CDN copy.",
    "Force update": "The terminal is running a version below minimum. It will auto-update on next check-in.",
    "Package missing": "The package was never installed. Force Install will push it on next sync.",
  };
  let remedy = "Check terminal connectivity and retry the operation.";
  for (const [k,v] of Object.entries(remediations)) { if (msg.includes(k)) { remedy = v; break; } }
  openModal(`<h2>Error Details</h2><p>${tid}</p>`,
    `<div class="alert" style="background:var(--error-bg);border-color:var(--error-fill);color:#b5151a;"><div class="icon" style="background:var(--error-fill);color:#fff;">!</div><div><div class="t">${esc(msg)}</div><div class="d">${esc(pkg)}</div></div></div>
     <div style="margin-top:12px;"><h3 style="font-size:14px;font-weight:600;">Suggested Remediation</h3><p style="font-size:13px;color:var(--text-02);margin-top:4px;line-height:1.6;">${remedy}</p></div>`,
    `<button class="btn btn-tertiary" onclick="closeAllModals()">Close</button><button class="btn btn-primary" onclick="closeAllModals();toast('Retry initiated','info')">Retry</button>`);
}

// ==================== SCREEN 8: BUCKETS ====================
function screen8() {
  const el = document.createElement("section");
  el.className = "screen"; el.id = "s8";
  const cards = Store.buckets.map((b,bi) => `
    <div class="bucket-card">
      <div class="top">
        <div><div class="name">${esc(b.name)}</div><div class="meta">${esc(b.product)}</div></div>
        <span class="badge ${b.rollout===100?'success':'warning'}">${b.rollout}% rolled out</span>
      </div>
      <div class="kv" style="background:var(--base-02);border:none;">
        <div class="k">APK Package</div><div class="v" style="font-family:ui-monospace,monospace;font-size:12px;">${esc(b.apk)}</div>
      </div>
      <div class="progress ${b.rollout===100?'g':'y'}" style="margin-top:10px;" title="${b.terminals} terminals at ${b.rollout}%"><div class="fill" style="width:${b.rollout}%"></div></div>
      <div class="stats">
        <div><span class="k">Version</span><span class="v">${b.ver}</span></div>
        <div><span class="k">Terminals</span><span class="v">${b.terminals.toLocaleString()}</span></div>
      </div>
      <div style="display:flex;gap:6px;margin-top:var(--sp-3);">
        <button class="btn btn-sm btn-tertiary" style="flex:1" onclick="openAssignTerminals(${bi})">Assign Terminals</button>
        <button class="btn btn-sm btn-ghost" onclick="openEditBucket(${bi})">Edit</button>
      </div>
    </div>`).join("");
  const history = Store.reassignHistory.map(r => `<tr>
    <td><span class="td-main">${r.tid}</span></td>
    <td><span class="badge plain">${esc(r.from)}</span></td>
    <td style="color:var(--text-03)">→</td>
    <td><span class="badge brand">${esc(r.to)}</span></td>
    <td>${r.when}</td>
    <td style="color:var(--text-03)">${esc(r.reason)}</td>
  </tr>`).join("");

  el.innerHTML = `
    <div class="page-head">
      <div><h1>Terminal Profiling & Buckets</h1><p>Group terminals into rollout buckets and control which APK version each receives.</p></div>
      <div class="actions">
        <button class="btn btn-tertiary" onclick="openImportAssignments()">Import Assignments</button>
        <button class="btn btn-primary" onclick="openCreateBucket()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          Create Bucket
        </button>
      </div>
    </div>
    <div class="alert warn">
      <div class="icon">!</div>
      <div>
        <div class="t">Edge case: 2 terminals found with mismatched Terminal IDs</div>
        <div class="d">Serials H50-OS-00022714 and H50-OS-00022891 exist in bucket <b>Osun-IGR</b> but report a different TerminalId than last sync.</div>
      </div>
      <button class="btn btn-sm btn-tertiary" style="margin-left:auto;flex-shrink:0;" onclick="openMismatchReview()">Review</button>
    </div>
    <h3 style="font-size:15px;font-weight:600;margin-bottom:var(--sp-4);">Active Buckets</h3>
    <div class="bucket-grid">${cards}</div>
    <div class="table-wrap" style="margin-top:var(--sp-8);">
      <div class="table-head"><h3>Reassignment History</h3></div>
      <table><thead><tr><th>Terminal ID</th><th>From Bucket</th><th></th><th>To Bucket</th><th>When</th><th>Reason</th></tr></thead><tbody>${history}</tbody></table>
    </div>`;
  return el;
}
function openCreateBucket() {
  const body = `
    <div class="input-group"><label>Bucket Name</label><input class="input" id="cbName" placeholder="e.g. Lagos-Prod" /></div>
    <div class="input-group"><label>Description</label><input class="input" id="cbDesc" placeholder="e.g. Production terminals in Lagos" /></div>
    <div class="input-group"><label>APK Package</label><select class="input" id="cbApk" onchange="populateCBVersions()"><option value="">Choose APK…</option>${Store.apks.filter(a=>!a.deprecated).map(a=>`<option value="${esc(a.pkg)}">${esc(a.name)} (${esc(a.pkg)})</option>`).join("")}</select></div>
    <div class="input-group"><label>Version</label><select class="input" id="cbVer"><option value="">Choose version…</option></select></div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitCreateBucket()">Create Bucket</button>`;
  openModal("<h2>Create Bucket</h2><p>Define a new terminal rollout group</p>", body, foot);
}
function populateCBVersions() {
  const pkg = document.getElementById("cbApk").value;
  const apk = Store.apks.find(a=>a.pkg===pkg);
  const sel = document.getElementById("cbVer");
  sel.innerHTML = '<option value="">Choose version…</option>';
  if (apk) Store.versions.filter(v=>v.apkId===apk.id && !v.deprecated).forEach(v => { sel.innerHTML += `<option>${v.name}</option>`; });
}
function submitCreateBucket() {
  const name = document.getElementById("cbName").value.trim();
  const apk = document.getElementById("cbApk").value;
  const ver = document.getElementById("cbVer").value;
  if (!name || !apk) { toast("Please fill in Bucket Name and APK", "error"); return; }
  Store.buckets.push({ name, product: name, apk, ver: ver || "1.0.0", terminals: 0, rollout: 0 });
  closeAllModals();
  toast(`Bucket "${name}" created`, "success");
  showScreen("s8");
}
function openEditBucket(bi) {
  const b = Store.buckets[bi];
  const body = `
    <div class="input-group"><label>Bucket Name</label><input class="input" id="ebName" value="${esc(b.name)}" /></div>
    <div class="input-group"><label>Product</label><input class="input" id="ebProduct" value="${esc(b.product)}" /></div>
    <div class="input-group"><label>APK Package</label><input class="input" value="${esc(b.apk)}" disabled /></div>
    <div class="input-group"><label>Version</label><input class="input" id="ebVer" value="${esc(b.ver)}" /></div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitEditBucket(${bi})">Save Changes</button>`;
  openModal(`<h2>Edit Bucket</h2><p>${esc(b.name)}</p>`, body, foot);
}
function submitEditBucket(bi) {
  Store.buckets[bi].name = document.getElementById("ebName").value.trim();
  Store.buckets[bi].product = document.getElementById("ebProduct").value.trim();
  Store.buckets[bi].ver = document.getElementById("ebVer").value.trim();
  closeAllModals();
  toast("Bucket updated", "success");
  showScreen("s8");
}
function openAssignTerminals(bi) {
  const b = Store.buckets[bi];
  const body = `
    <input class="input" placeholder="Search terminals by TID or Serial…" style="width:100%;margin-bottom:12px;" oninput="filterAssignList(this.value)" />
    <div class="checkbox-list" id="assignList">
      ${Store.terminals.map(t => `<label><input type="checkbox" value="${t.tid}" ${t.bucket===b.name?'checked':''} /> <span class="td-main">${t.tid}</span> <span class="td-sub" style="margin-top:0">${t.sn}</span></label>`).join("")}
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--text-03);" id="assignCount">Selected: ${Store.terminals.filter(t=>t.bucket===b.name).length}</div>`;
  const foot = `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button><button class="btn btn-primary" onclick="submitAssignTerminals(${bi})">Confirm Assignment</button>`;
  const modal = openModal(`<h2>Assign Terminals</h2><p>${esc(b.name)}</p>`, body, foot);
  modal.addEventListener("change", () => {
    const count = modal.querySelectorAll("#assignList input:checked").length;
    const countEl = modal.querySelector("#assignCount");
    if (countEl) countEl.textContent = `Selected: ${count}`;
  });
}
window.filterAssignList = function(q) {
  const ql = q.toLowerCase();
  document.querySelectorAll("#assignList label").forEach(l => {
    l.style.display = l.textContent.toLowerCase().includes(ql) ? "" : "none";
  });
};
function submitAssignTerminals(bi) {
  const b = Store.buckets[bi];
  const checked = document.querySelectorAll("#assignList input:checked");
  const tids = Array.from(checked).map(c => c.value);
  Store.terminals.forEach(t => {
    if (tids.includes(t.tid)) t.bucket = b.name;
  });
  b.terminals = tids.length;
  closeAllModals();
  toast(`${tids.length} terminals assigned to ${b.name}`, "success");
  showScreen("s8");
}
function openImportAssignments() {
  const body = `
    <div class="drop-zone" onclick="simulateImport()">
      <div class="dz-icon">📄</div>
      <div class="dz-label">Drop CSV file here, or click to browse</div>
      <div class="dz-hint">Columns: TerminalId, SerialNumber, BucketName</div>
    </div>
    <div id="importResult" style="display:none;margin-top:16px;"></div>`;
  openModal("<h2>Import Assignments</h2><p>Bulk assign terminals from CSV</p>", body, `<button class="btn btn-tertiary" onclick="closeAllModals()">Cancel</button>`);
}
function simulateImport() {
  const dz = document.querySelector("#dynModal .drop-zone");
  if (dz) dz.innerHTML = '<div class="spinner lg" style="margin:0 auto"></div><div style="margin-top:8px">Processing CSV…</div>';
  setTimeout(() => {
    const res = document.getElementById("importResult");
    if (res) {
      res.style.display = "block";
      res.innerHTML = `
        <div class="alert" style="background:var(--success-bg);border-color:var(--success-fill);color:#038053;"><div class="t">312 terminals assigned successfully</div><div class="d">4 conflicts found — terminals already assigned to different buckets.</div></div>
        <button class="btn btn-primary" style="margin-top:8px;width:100%;" onclick="closeAllModals();toast('Import completed','success')">Done</button>`;
    }
    if (dz) dz.style.display = "none";
  }, 2000);
}
function openMismatchReview() {
  const body = `
    <div style="margin-bottom:12px;font-size:13px;color:var(--text-03);">These terminals report Terminal IDs that don't match their last known values. Review and decide.</div>
    <div class="table-wrap" style="margin-bottom:0;">
      <table><thead><tr><th>Serial</th><th>Expected TID</th><th>Reported TID</th><th>Action</th></tr></thead><tbody>
        <tr><td>H50-OS-00022714</td><td>T-20022714</td><td>T-20099714</td><td><div class="row-actions"><button class="btn btn-sm btn-tertiary" onclick="toast('Terminal reassigned','success')">Reassign</button><button class="btn btn-sm btn-ghost" onclick="toast('Dismissed','info')">Dismiss</button></div></td></tr>
        <tr><td>H50-OS-00022891</td><td>T-20022891</td><td>T-20099891</td><td><div class="row-actions"><button class="btn btn-sm btn-tertiary" onclick="toast('Terminal reassigned','success')">Reassign</button><button class="btn btn-sm btn-ghost" onclick="toast('Dismissed','info')">Dismiss</button></div></td></tr>
      </tbody></table>
    </div>`;
  openModal("<h2>Mismatched Terminals</h2><p>Review terminals with changed IDs</p>", body, `<button class="btn btn-tertiary" onclick="closeAllModals()">Close</button>`);
}

// ==================== ROUTER ====================
function showScreen(id) {
  currentScreen = id;
  const content = document.getElementById("content");
  content.innerHTML = "";
  const renderers = { s1:screen1, s2:screen2, s3:screen3, s4:screen4, s5:screen5, s6:screen6, s7:screen7, s8:screen8 };
  const el = renderers[id]();
  el.classList.add("active");
  content.append(el);
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.screen===id));
  const meta = SCREEN_META[id];
  document.getElementById("topTitle").textContent = meta.title;
  document.getElementById("topSub").textContent = meta.sub || "POS APK Management & Distribution";
  window.scrollTo(0, 0);
}

// ==================== LIVE SIMULATION ====================
// Key Exchange — new row every 4s when live tail is on
setInterval(() => {
  if (!Store.liveTailActive) return;
  const pkgs = Store.apks.map(a=>a.pkg);
  const tids = Store.terminals.map(t=>t.tid);
  const decisions = ["allow","allow","allow","optional","force","force-install"];
  Store.keyExchanges.unshift({
    tid: randItem(tids), pkg: randItem(pkgs),
    code: Math.floor(Math.random()*500)+1,
    decision: randItem(decisions), ts: nowTime()
  });
  if (Store.keyExchanges.length > 50) Store.keyExchanges.pop();
  if (currentScreen === "s5") renderKETable();
}, 4000);

// Monitoring logs — new entry every 5s
setInterval(() => {
  if (Store.logFeedPaused) return;
  const msgs = [
    { lvl:"ok",   msg:"Handshake OK, version compliant" },
    { lvl:"ok",   msg:"Installation successful (checksum verified)" },
    { lvl:"info", msg:"Download started — signed URL issued" },
    { lvl:"info", msg:"Key exchange initiated" },
    { lvl:"warn", msg:"Optional update available (user deferred)" },
    { lvl:"err",  msg:"SHA-256 mismatch — retry 1/3" },
  ];
  const m = randItem(msgs);
  const tid = randItem(Store.terminals).tid;
  const pkg = randItem(Store.apks).pkg + " v" + (Math.floor(Math.random()*4)+1)+"."+Math.floor(Math.random()*3)+"."+Math.floor(Math.random()*5);
  Store.logs.unshift({ ts: nowTimeMs(), lvl: m.lvl, tid, pkg, msg: m.msg });
  if (Store.logs.length > 100) Store.logs.pop();
  if (currentScreen === "s7") renderLogTable();
}, 5000);

// Dashboard pending updates — tick every 10s
setInterval(() => {
  Store.pendingUpdates += Math.floor(Math.random()*7) - 3;
  if (Store.pendingUpdates < 300) Store.pendingUpdates = 300;
  const el = document.getElementById("pendingCount");
  if (el) el.textContent = Store.pendingUpdates;
}, 10000);

// Terminal sync times — update every 30s
setInterval(() => {
  Store.terminals.forEach(t => {
    const min = parseInt(t.sync) || 1;
    t.sync = (min+1) + "m ago";
  });
}, 30000);

// ==================== INIT ====================
document.querySelectorAll(".nav-item").forEach(n => {
  n.addEventListener("click", () => showScreen(n.dataset.screen));
});

// Global search
document.getElementById("globalSearchInput").addEventListener("click", openGlobalSearch);
document.getElementById("globalSearchInput").addEventListener("focus", openGlobalSearch);

showScreen("s1");

// ==================== EXPOSE GLOBALS FOR ONCLICK HANDLERS ====================
Object.assign(window, {
  showScreen, openRegisterModal, openUploadModal, openEditApkModal, deprecateApk,
  submitRegisterApk, submitEditApk, exportApksCSV, filterApkTable,
  filterVersionTable, setActiveVersion, deprecateVersion, showReleaseNotes, showVersionNotes,
  submitUploadVersion, simulateFileSelect,
  filterTerminals, toggleTerminalExpand, forceSyncTerminal, forceSyncAll, exportTerminalsCSV,
  renderKETable, viewPayload, toggleLiveTail, toggleS5Filter,
  expandRollout, pauseRollout, resumeRollout, rollbackRollout,
  openNewRolloutModal, populateNRVersions, submitNewRollout, openScheduleModal,
  renderLogTable, toggleLogFeed, exportLogsCSV, openErrorDetail,
  openCreateBucket, populateCBVersions, submitCreateBucket,
  openEditBucket, submitEditBucket, openAssignTerminals, submitAssignTerminals,
  openImportAssignments, simulateImport, openMismatchReview,
  closeAllModals, openGlobalSearch, toast, confirm2,
  Store, filterAssignList
});
