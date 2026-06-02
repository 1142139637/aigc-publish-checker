const RULE_VERSION = "cn-aigc-publish-readiness-2026-05-v0";
const ANALYTICS_KEY = "aigc_checker_analytics_events_v1";
const SUBMISSIONS_KEY = "aigc_checker_submissions_v1";
const ADMIN_CONFIG_PATH = "./admin-config.json";
const ADMIN_SESSION_KEY = "aigc_checker_admin_authenticated_v1";
const LANGUAGE_KEY = "aigc_checker_language_v1";

const translations = {
  "zh-CN": {
    appTitle: "AI 内容发布前自查",
    languageLabel: "语言",
    step1: "Step 1",
    step2: "Step 2",
    submitContent: "提交内容",
    submitSummary: "本地生成元数据摘要、披露建议和可存档 Markdown 报告。",
    targetPlatform: "目标平台",
    platformGeneric: "通用中文平台",
    aiInvolvementLabel: "AI 参与程度",
    involvementNone: "未使用 AI",
    involvementAssisted: "AI 辅助润色",
    involvementDraft: "AI 生成初稿，人工修改",
    involvementMostly: "主要由 AI 生成",
    involvementUnknown: "不确定",
    clientCampaign: "这是品牌/客户发布内容",
    imageFile: "图片文件",
    publishCopy: "待发布文案",
    publishCopyPlaceholder: "粘贴准备发布的标题、正文或说明...",
    saveSubmission: "保存本次提交内容用于本地分析",
    privacyNote: "不上传数据。勾选后会在本机保存文案原文和图片元信息，用来分析用户行为与内容习惯；不保存图片文件本身。",
    generateReport: "生成报告",
    clear: "清空",
    checkResult: "检查结果",
    emptyState: "选择平台、上传图片或粘贴文案后生成报告。",
    pendingCheck: "待检查",
    beforePublish: "发布前要处理",
    suggestedDisclosure: "建议披露文案",
    copy: "复制",
    copied: "已复制",
    fileInfo: "文件信息",
    checklistTitle: "检查清单",
    downloadMarkdown: "下载 Markdown",
    adminEntry: "管理员入口",
    adminSummary: "输入管理员密码后查看用户行为和提交内容分析。",
    password: "密码",
    passwordError: "密码错误",
    adminConfigError: "管理员配置读取失败",
    adminApiError: "管理员接口不可用",
    enterAnalytics: "进入分析页",
    backToChecker: "返回自查工具",
    behaviorAnalytics: "用户行为分析",
    visits: "访问次数",
    reports: "生成报告",
    savedSubmissions: "保存提交",
    uniqueIp: "独立 IP",
    platformPreference: "平台偏好",
    trafficAnalytics: "访问来源分析",
    conversionRate: "转化率",
    ipVisits: "已识别 IP 访问",
    countryCount: "国家/地区数",
    cityCount: "城市数",
    ipDistribution: "IP 分布",
    recentIps: "最近访问 IP",
    contentAnalytics: "提交内容分析",
    avgCopyLength: "平均文案长度",
    clientRate: "客户内容占比",
    imageRate: "上传图片占比",
    riskRate: "高风险占比",
    keywords: "高频词",
    recentSubmissions: "最近提交",
    eventDetails: "事件明细",
    exportAnalytics: "导出埋点",
    exportSubmissions: "导出提交内容",
    clearAnalytics: "清空埋点",
    clearSubmissions: "清空提交内容",
    statusPass: "可发布前复核",
    statusReview: "需要补充后发布",
    statusHighRisk: "高风险，先别发布",
    checklistPass: "通过",
    checklistReview: "复核",
    checklistMissing: "缺失",
    checklistNA: "不适用",
    noImage: "未上传图片",
    textOnlyScope: "仅检查文案披露",
    detected: "检测到",
    notDetected: "未检测到",
    noCommonMarkers: "未检测到常见标记",
    fileName: "文件名",
    fileType: "类型",
    fileSize: "大小",
    image: "图片",
  },
  en: {
    appTitle: "AI Publish Readiness Checker",
    languageLabel: "Language",
    step1: "Step 1",
    step2: "Step 2",
    submitContent: "Submit Content",
    submitSummary: "Generate local metadata summary, disclosure suggestions, and an archivable Markdown report.",
    targetPlatform: "Target Platform",
    platformGeneric: "Generic Platform",
    aiInvolvementLabel: "AI Involvement",
    involvementNone: "No AI used",
    involvementAssisted: "AI-assisted editing",
    involvementDraft: "AI draft, human revised",
    involvementMostly: "Mostly AI-generated",
    involvementUnknown: "Not sure",
    clientCampaign: "This is brand/client content",
    imageFile: "Image File",
    publishCopy: "Publish Copy",
    publishCopyPlaceholder: "Paste the title, body, or description to publish...",
    saveSubmission: "Save this submission for local analysis",
    privacyNote: "No upload. If checked, copy text and image metadata are saved locally for behavior and content analysis; image files are not saved.",
    generateReport: "Generate Report",
    clear: "Clear",
    checkResult: "Check Result",
    emptyState: "Select a platform, upload an image, or paste copy to generate a report.",
    pendingCheck: "Pending",
    beforePublish: "Before Publishing",
    suggestedDisclosure: "Suggested Disclosure",
    copy: "Copy",
    copied: "Copied",
    fileInfo: "File Info",
    checklistTitle: "Checklist",
    downloadMarkdown: "Download Markdown",
    adminEntry: "Admin Entry",
    adminSummary: "Enter admin password to view behavior and submission analytics.",
    password: "Password",
    passwordError: "Incorrect password",
    adminConfigError: "Admin config failed to load",
    adminApiError: "Admin API unavailable",
    enterAnalytics: "Enter Analytics",
    backToChecker: "Back to Checker",
    behaviorAnalytics: "User Behavior Analytics",
    visits: "Visits",
    reports: "Reports",
    savedSubmissions: "Saved Submissions",
    uniqueIp: "Unique IPs",
    platformPreference: "Platform Preference",
    trafficAnalytics: "Traffic Analytics",
    conversionRate: "Conversion Rate",
    ipVisits: "Identified IP Visits",
    countryCount: "Countries/Regions",
    cityCount: "Cities",
    ipDistribution: "IP Distribution",
    recentIps: "Recent IP Visits",
    contentAnalytics: "Submission Analytics",
    avgCopyLength: "Avg Copy Length",
    clientRate: "Client Content Rate",
    imageRate: "Image Upload Rate",
    riskRate: "High Risk Rate",
    keywords: "Keywords",
    recentSubmissions: "Recent Submissions",
    eventDetails: "Event Details",
    exportAnalytics: "Export Events",
    exportSubmissions: "Export Submissions",
    clearAnalytics: "Clear Events",
    clearSubmissions: "Clear Submissions",
    statusPass: "Ready for final review",
    statusReview: "Needs fixes before publishing",
    statusHighRisk: "High risk, do not publish yet",
    checklistPass: "Pass",
    checklistReview: "Review",
    checklistMissing: "Missing",
    checklistNA: "N/A",
    noImage: "No image uploaded",
    textOnlyScope: "Text disclosure only",
    detected: "Detected",
    notDetected: "Not detected",
    noCommonMarkers: "No common markers detected",
    fileName: "Filename",
    fileType: "Type",
    fileSize: "Size",
    image: "Image",
  },
};

translations.ja = {
  ...translations.en,
  appTitle: "AI 公開前チェック",
  languageLabel: "言語",
  submitContent: "コンテンツを送信",
  submitSummary: "メタデータ概要、開示文案、保存用 Markdown レポートをローカルで生成します。",
  targetPlatform: "対象プラットフォーム",
  platformGeneric: "汎用プラットフォーム",
  aiInvolvementLabel: "AI の関与度",
  clientCampaign: "ブランド/クライアント向けコンテンツ",
  imageFile: "画像ファイル",
  publishCopy: "公開文案",
  generateReport: "レポート生成",
  clear: "クリア",
  checkResult: "チェック結果",
  suggestedDisclosure: "推奨開示文案",
  copy: "コピー",
  copied: "コピー済み",
  downloadMarkdown: "Markdown をダウンロード",
  password: "パスワード",
  passwordError: "パスワードが違います",
};

translations.ko = {
  ...translations.en,
  appTitle: "AI 게시 전 점검",
  languageLabel: "언어",
  submitContent: "콘텐츠 제출",
  submitSummary: "메타데이터 요약, 공개 문구, 보관용 Markdown 보고서를 로컬에서 생성합니다.",
  targetPlatform: "대상 플랫폼",
  platformGeneric: "일반 플랫폼",
  aiInvolvementLabel: "AI 참여 정도",
  clientCampaign: "브랜드/고객용 콘텐츠입니다",
  imageFile: "이미지 파일",
  publishCopy: "게시 문구",
  generateReport: "보고서 생성",
  clear: "초기화",
  checkResult: "점검 결과",
  suggestedDisclosure: "권장 공개 문구",
  copy: "복사",
  copied: "복사됨",
  downloadMarkdown: "Markdown 다운로드",
  password: "비밀번호",
  passwordError: "비밀번호가 올바르지 않습니다",
};

translations.es = {
  ...translations.en,
  appTitle: "Revisión previa de contenido con IA",
  languageLabel: "Idioma",
  submitContent: "Enviar contenido",
  submitSummary: "Genera un resumen de metadatos, sugerencias de divulgación y un informe Markdown local.",
  targetPlatform: "Plataforma objetivo",
  platformGeneric: "Plataforma genérica",
  aiInvolvementLabel: "Participación de IA",
  clientCampaign: "Contenido de marca/cliente",
  imageFile: "Archivo de imagen",
  publishCopy: "Texto a publicar",
  generateReport: "Generar informe",
  clear: "Limpiar",
  checkResult: "Resultado",
  suggestedDisclosure: "Divulgación sugerida",
  copy: "Copiar",
  copied: "Copiado",
  downloadMarkdown: "Descargar Markdown",
  password: "Contraseña",
  passwordError: "Contraseña incorrecta",
};

const platformNames = {
  generic_cn: "通用中文平台",
  xiaohongshu: "小红书",
  douyin: "抖音",
  wechat_official: "微信公众号",
  bilibili: "Bilibili",
};

const involvementNames = {
  none: "未使用 AI",
  assisted_editing: "AI 辅助润色",
  ai_draft_human_revised: "AI 生成初稿，人工修改",
  mostly_ai_generated: "主要由 AI 生成",
  unknown: "不确定",
};

const disclosureKeywords = ["AI", "人工智能", "AIGC", "AI辅助", "AI生成", "智能生成"];
const stopWords = new Set([
  "一个",
  "我们",
  "你们",
  "他们",
  "这个",
  "那个",
  "使用",
  "内容",
  "发布",
  "进行",
  "可以",
  "需要",
  "建议",
  "已经",
  "没有",
  "AI",
  "AIGC",
]);

const pages = document.querySelectorAll(".page");
const languageSelect = document.querySelector("#languageSelect");
const adminLoginForm = document.querySelector("#adminLoginForm");
const adminPasswordInput = document.querySelector("#adminPassword");
const adminLoginError = document.querySelector("#adminLoginError");
const backToCheckerButton = document.querySelector("#backToCheckerButton");
const form = document.querySelector("#checkForm");
const platformInput = document.querySelector("#platform");
const involvementInput = document.querySelector("#aiInvolvement");
const clientCampaignInput = document.querySelector("#clientCampaign");
const imageFileInput = document.querySelector("#imageFile");
const publishCopyInput = document.querySelector("#publishCopy");
const saveSubmissionInput = document.querySelector("#saveSubmission");
const clearButton = document.querySelector("#clearButton");
const emptyState = document.querySelector("#emptyState");
const reportView = document.querySelector("#reportView");
const statusStrip = document.querySelector("#statusStrip");
const statusText = document.querySelector("#statusText");
const reasonList = document.querySelector("#reasonList");
const disclosureText = document.querySelector("#disclosureText");
const metadataList = document.querySelector("#metadataList");
const checklistView = document.querySelector("#checklist");
const copyDisclosureButton = document.querySelector("#copyDisclosureButton");
const downloadButton = document.querySelector("#downloadButton");
const metricVisits = document.querySelector("#metricVisits");
const metricReports = document.querySelector("#metricReports");
const metricSubmissions = document.querySelector("#metricSubmissions");
const metricUniqueIps = document.querySelector("#metricUniqueIps");
const metricConversion = document.querySelector("#metricConversion");
const metricIpVisits = document.querySelector("#metricIpVisits");
const metricCountryCount = document.querySelector("#metricCountryCount");
const metricCityCount = document.querySelector("#metricCityCount");
const metricAvgCopyLength = document.querySelector("#metricAvgCopyLength");
const metricClientRate = document.querySelector("#metricClientRate");
const metricImageRate = document.querySelector("#metricImageRate");
const metricRiskRate = document.querySelector("#metricRiskRate");
const platformChart = document.querySelector("#platformChart");
const involvementChart = document.querySelector("#involvementChart");
const ipChart = document.querySelector("#ipChart");
const ipList = document.querySelector("#ipList");
const keywordChart = document.querySelector("#keywordChart");
const submissionList = document.querySelector("#submissionList");
const eventList = document.querySelector("#eventList");
const exportAnalyticsButton = document.querySelector("#exportAnalyticsButton");
const exportSubmissionsButton = document.querySelector("#exportSubmissionsButton");
const clearAnalyticsButton = document.querySelector("#clearAnalyticsButton");
const clearSubmissionsButton = document.querySelector("#clearSubmissionsButton");

let currentReport = null;
let adminPassword = "";
let currentLanguage = "zh-CN";
let clientInfo = {
  ip: "",
  country: "",
  region: "",
  city: "",
  userAgent: navigator.userAgent,
};

initApp();

async function initApp() {
  adminPassword = await loadAdminPassword();
  clientInfo = await loadClientInfo();
  currentLanguage = getInitialLanguage(clientInfo.country);
  applyLanguage(currentLanguage);
  initRoute();
  trackEvent("page_view", {
    ruleVersion: RULE_VERSION,
    adminEntry: isAdminEntry(),
    ...clientInfo,
  });
  syncVisit();
  renderAnalytics();
}

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  applyLanguage(currentLanguage);
  if (currentReport) renderReport(currentReport);
  renderAnalytics();
  trackEvent("language_changed", {
    language: currentLanguage,
    country: clientInfo.country,
  });
});

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  verifyAdminPassword(adminPasswordInput.value).then((isValid) => {
    if (!isValid) {
      adminLoginError.textContent = t("passwordError");
      adminLoginError.classList.remove("hidden");
      trackEvent("admin_login_failed");
      renderAnalytics();
      return;
    }

    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    adminPasswordInput.value = "";
    adminLoginError.classList.add("hidden");
    showPage("analyticsPage");
    trackEvent("admin_login_success");
    renderAnalytics();
  });
});

backToCheckerButton.addEventListener("click", () => {
  showPage("checkerPage");
  trackEvent("admin_back_to_checker");
  renderAnalytics();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  currentReport = await buildReport();
  renderReport(currentReport);
  if (saveSubmissionInput.checked) {
    saveSubmission(currentReport);
  }
  trackEvent("report_generated", {
    platform: currentReport.platform,
    aiInvolvement: currentReport.aiInvolvement,
    status: currentReport.status,
    hasImage: Boolean(currentReport.media),
    copyLength: currentReport.publishCopyLength,
    isClientCampaign: currentReport.isClientCampaign,
    savedSubmission: saveSubmissionInput.checked,
    ip: clientInfo.ip,
    country: clientInfo.country,
    region: clientInfo.region,
    city: clientInfo.city,
  });
  renderAnalytics();
});

clearButton.addEventListener("click", () => {
  form.reset();
  currentReport = null;
  emptyState.classList.remove("hidden");
  reportView.classList.add("hidden");
  trackEvent("form_cleared");
  renderAnalytics();
});

copyDisclosureButton.addEventListener("click", async () => {
  if (!currentReport) return;
  await navigator.clipboard.writeText(currentReport.suggestedDisclosure);
  trackEvent("disclosure_copied", {
    platform: currentReport.platform,
    aiInvolvement: currentReport.aiInvolvement,
    status: currentReport.status,
  });
  renderAnalytics();
  copyDisclosureButton.textContent = t("copied");
  window.setTimeout(() => {
    copyDisclosureButton.textContent = t("copy");
  }, 1200);
});

downloadButton.addEventListener("click", () => {
  if (!currentReport) return;
  downloadMarkdown(toMarkdown(currentReport), currentReport.reportId);
  trackEvent("report_downloaded", {
    platform: currentReport.platform,
    aiInvolvement: currentReport.aiInvolvement,
    status: currentReport.status,
  });
  renderAnalytics();
});

exportAnalyticsButton.addEventListener("click", () => {
  const events = getAnalyticsEvents();
  downloadJson(events, `aigc-checker-analytics-${new Date().toISOString().slice(0, 10)}.json`);
});

exportSubmissionsButton.addEventListener("click", () => {
  const submissions = getSubmissions();
  downloadJson(submissions, `aigc-checker-submissions-${new Date().toISOString().slice(0, 10)}.json`);
});

clearAnalyticsButton.addEventListener("click", () => {
  localStorage.removeItem(ANALYTICS_KEY);
  trackEvent("analytics_reset");
  renderAnalytics();
});

clearSubmissionsButton.addEventListener("click", () => {
  localStorage.removeItem(SUBMISSIONS_KEY);
  trackEvent("submissions_reset");
  renderAnalytics();
});

async function buildReport() {
  const file = imageFileInput.files[0];
  const copy = publishCopyInput.value.trim();
  const platform = platformInput.value;
  const aiInvolvement = involvementInput.value;
  const isClientCampaign = clientCampaignInput.checked;
  const media = file ? await inspectFile(file) : null;
  const hasDisclosure = containsDisclosure(copy);
  const suggestedDisclosure = getDisclosure(aiInvolvement);
  const checklist = buildChecklist({
    aiInvolvement,
    copy,
    hasDisclosure,
    media,
    isClientCampaign,
  });
  const status = getStatus({ aiInvolvement, hasDisclosure, media, isClientCampaign });
  const reasons = getReasons({ aiInvolvement, hasDisclosure, media, isClientCampaign, copy });

  return {
    reportId: `AIGC-${new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)}`,
    createdAt: new Date().toISOString(),
    ruleVersion: RULE_VERSION,
    platform,
    aiInvolvement,
    isClientCampaign,
    status,
    reasons,
    media,
    publishCopy: copy,
    publishCopyLength: copy.length,
    suggestedDisclosure,
    checklist,
    disclaimer: "本报告是发布前自查清单，不构成法律意见，也不保证平台审核结果。",
  };
}

async function inspectFile(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const textSample = new TextDecoder("latin1").decode(bytes.slice(0, Math.min(bytes.length, 512000)));
  const sha256 = await hashBuffer(buffer);
  const softwareMarkers = detectSoftwareMarkers(textSample);

  return {
    fileName: file.name,
    fileType: file.type || "unknown",
    fileSizeBytes: file.size,
    sha256,
    exifPresent: textSample.includes("Exif"),
    c2paPresent: textSample.toLowerCase().includes("c2pa") || textSample.includes("Content Credentials"),
    softwareMarkers,
    rawSummary: {
      localOnly: "true",
      parser: "browser-v0-lightweight",
    },
  };
}

async function hashBuffer(buffer) {
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function detectSoftwareMarkers(textSample) {
  const markers = [
    "Photoshop",
    "Adobe",
    "Canva",
    "Midjourney",
    "Stable Diffusion",
    "DALL",
    "ComfyUI",
    "NovelAI",
    "Firefly",
  ];

  return markers.filter((marker) => textSample.toLowerCase().includes(marker.toLowerCase()));
}

function containsDisclosure(copy) {
  const normalized = copy.toUpperCase();
  return disclosureKeywords.some((keyword) => normalized.includes(keyword.toUpperCase()));
}

function getDisclosure(aiInvolvement) {
  const disclosures = {
    none: "未检测到需要添加 AI 使用说明的自我声明；如实际使用了 AI，请按实际情况补充。",
    assisted_editing: "本内容使用 AI 工具辅助润色，已由人工审核修改。",
    ai_draft_human_revised: "本内容部分使用 AI 工具辅助生成，已由人工审核、修改和确认。",
    mostly_ai_generated: "本内容主要由 AI 工具生成，并已进行人工审核。",
    unknown: "本内容可能包含 AI 辅助生成部分，发布前建议进一步确认来源和标识要求。",
  };

  return disclosures[aiInvolvement];
}

function getStatus({ aiInvolvement, hasDisclosure, media, isClientCampaign }) {
  if (aiInvolvement === "mostly_ai_generated" && !hasDisclosure) return "high_risk";
  if (aiInvolvement === "unknown" && isClientCampaign) return "high_risk";
  if (aiInvolvement === "ai_draft_human_revised" && !hasDisclosure) return "needs_review";
  if (aiInvolvement === "assisted_editing" && !hasDisclosure) return "needs_review";
  if (media && !media.exifPresent && !media.c2paPresent) return "needs_review";
  return "pass";
}

function getReasons({ aiInvolvement, hasDisclosure, media, isClientCampaign, copy }) {
  const reasons = [];

  if (!copy) {
    reasons.push("未填写待发布文案；如果图片说明或标题会公开展示，建议补充后再检查。");
  }

  if (aiInvolvement !== "none" && !hasDisclosure) {
    reasons.push("文案里没有检测到明确的 AI 使用披露，可复制下方建议文案补充。");
  }

  if (aiInvolvement === "unknown" && isClientCampaign) {
    reasons.push("品牌/客户内容不建议使用“不确定”的 AI 参与声明，需要发布前确认素材来源。");
  }

  if (media && !media.exifPresent && !media.c2paPresent) {
    reasons.push("图片未检测到 EXIF 或 C2PA/Content Credentials 标记，建议保留原始素材和生成记录。");
  }

  if (!media) {
    reasons.push("未上传图片；报告只覆盖文案披露检查。");
  }

  if (reasons.length === 0) {
    reasons.push("当前信息未发现明显缺口，发布前仍建议按平台最新规则复核。");
  }

  return reasons;
}

function buildChecklist({ aiInvolvement, copy, hasDisclosure, media, isClientCampaign }) {
  const needsDisclosure = aiInvolvement !== "none";

  return [
    {
      label: "AI 参与程度已声明",
      result: aiInvolvement === "unknown" ? "review" : "pass",
      note: involvementNames[aiInvolvement],
    },
    {
      label: "公开文案包含 AI 披露",
      result: !needsDisclosure ? "not_applicable" : hasDisclosure ? "pass" : "missing",
      note: needsDisclosure ? "AI 参与内容建议加入明确披露。" : "用户声明未使用 AI。",
    },
    {
      label: "图片元数据已检查",
      result: media ? "pass" : "not_applicable",
      note: media ? "已生成文件 hash 并检查轻量元数据标记。" : "未上传图片。",
    },
    {
      label: "来源/留痕材料可归档",
      result: media && (media.exifPresent || media.c2paPresent) ? "pass" : "review",
      note: "建议保留原始文件、生成记录、客户确认记录。",
    },
    {
      label: "品牌/客户内容风险复核",
      result: isClientCampaign && aiInvolvement === "unknown" ? "missing" : "pass",
      note: isClientCampaign ? "客户内容建议确认授权、素材来源和披露口径。" : "非客户发布内容。",
    },
    {
      label: "报告包含规则版本",
      result: "pass",
      note: RULE_VERSION,
    },
  ];
}

function renderReport(report) {
  emptyState.classList.add("hidden");
  reportView.classList.remove("hidden");
  statusStrip.className = `status-strip ${report.status}`;
  statusText.textContent = getStatusLabel(report.status);
  reasonList.innerHTML = report.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("");
  disclosureText.textContent = report.suggestedDisclosure;
  metadataList.innerHTML = renderMetadata(report.media);
  checklistView.innerHTML = report.checklist
    .map(
      (item) => `
        <div class="check-item">
          <span class="badge ${item.result}">${getChecklistLabel(item.result)}</span>
          <div>
            <strong>${escapeHtml(item.label)}</strong>
            <div>${escapeHtml(item.note)}</div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderMetadata(media) {
  if (!media) {
    return `
      <dt>${t("image")}</dt><dd>${t("noImage")}</dd>
      <dt>${t("fileType")}</dt><dd>${t("textOnlyScope")}</dd>
    `;
  }

  const rows = [
    [t("fileName"), media.fileName],
    [t("fileType"), media.fileType],
    [t("fileSize"), formatBytes(media.fileSizeBytes)],
    ["SHA-256", media.sha256],
    ["EXIF", media.exifPresent ? t("detected") : t("notDetected")],
    ["C2PA", media.c2paPresent ? t("detected") : t("notDetected")],
    ["Tool markers", media.softwareMarkers.length ? media.softwareMarkers.join(", ") : t("noCommonMarkers")],
  ];

  return rows.map(([key, value]) => `<dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd>`).join("");
}

function toMarkdown(report) {
  const media = report.media;
  const checklist = report.checklist
    .map((item) => `| ${item.label} | ${getChecklistLabel(item.result)} | ${item.note} |`)
    .join("\n");

  return `# AI Content Publish-Readiness Report

Report ID: ${report.reportId}

Check date: ${report.createdAt}

Target platform: ${platformNames[report.platform]}

Rule version: ${report.ruleVersion}

## Result

Status: ${getStatusLabel(report.status)}

Main reason:

${report.reasons.map((reason) => `- ${reason}`).join("\n")}

## Detected File Information

- Filename: ${media?.fileName || "N/A"}
- File type: ${media?.fileType || "N/A"}
- File size: ${media ? formatBytes(media.fileSizeBytes) : "N/A"}
- SHA-256: ${media?.sha256 || "N/A"}
- EXIF metadata: ${media ? (media.exifPresent ? "Detected" : "Not detected") : "N/A"}
- C2PA/Content Credentials: ${media ? (media.c2paPresent ? "Detected" : "Not detected") : "N/A"}
- Software/tool markers: ${media?.softwareMarkers.length ? media.softwareMarkers.join(", ") : "N/A"}

## User Declaration

- AI involvement level: ${involvementNames[report.aiInvolvement]}
- Brand/client campaign: ${report.isClientCampaign ? "Yes" : "No"}
- Publish copy length: ${report.publishCopyLength}

## Disclosure Recommendation

${report.suggestedDisclosure}

## Checklist

| Check | Result | Notes |
|---|---|---|
${checklist}

## Risk Notes

- Metadata absence does not prove the content is not AI-generated.
- Metadata presence does not guarantee compliance.
- This report is a publishing checklist, not legal advice.
- Platform rules may change; use the latest rule version before publishing.
`;
}

function downloadMarkdown(markdown, reportId) {
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${reportId}.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getStatusLabel(status) {
  const labels = {
    pass: t("statusPass"),
    needs_review: t("statusReview"),
    high_risk: t("statusHighRisk"),
  };
  return labels[status];
}

function getChecklistLabel(result) {
  const labels = {
    pass: t("checklistPass"),
    review: t("checklistReview"),
    missing: t("checklistMissing"),
    not_applicable: t("checklistNA"),
  };
  return labels[result];
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showPage(pageId) {
  if (pageId === "analyticsPage" && !isAdminAuthenticated()) {
    showPage("adminPage");
    return;
  }
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });
}

function initRoute() {
  if (!isAdminEntry()) {
    showPage("checkerPage");
    return;
  }

  if (isAdminAuthenticated()) {
    showPage("analyticsPage");
    return;
  }

  showPage("adminPage");
}

async function loadAdminPassword() {
  if (isHostedHttp()) return "";

  try {
    const response = await fetch(ADMIN_CONFIG_PATH, { cache: "no-store" });
    if (!response.ok) throw new Error("Admin config not found");
    const config = await response.json();
    return String(config.adminPassword || "");
  } catch {
    adminLoginError.textContent = t("adminConfigError");
    adminLoginError.classList.remove("hidden");
    return "";
  }
}

async function loadClientInfo() {
  if (!isHostedHttp()) {
    return {
      ip: "local",
      country: "",
      region: "",
      city: "",
      userAgent: navigator.userAgent,
    };
  }

  try {
    const response = await fetch("/api/client-info", { cache: "no-store" });
    if (!response.ok) throw new Error("Client info unavailable");
    const data = await response.json();
    return {
      ip: data.ip || "",
      country: data.country || "",
      region: data.region || "",
      city: data.city || "",
      userAgent: data.userAgent || navigator.userAgent,
    };
  } catch {
    return {
      ip: "",
      country: "",
      region: "",
      city: "",
      userAgent: navigator.userAgent,
    };
  }
}

async function verifyAdminPassword(password) {
  if (isHostedHttp()) {
    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) return false;
      const result = await response.json();
      return result.ok === true;
    } catch {
      adminLoginError.textContent = t("adminApiError");
      return false;
    }
  }

  return password === adminPassword;
}

function isAdminEntry() {
  return new URLSearchParams(window.location.search).get("admin") === "1";
}

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function isHostedHttp() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

function getInitialLanguage(country) {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  if (translations[savedLanguage]) return savedLanguage;

  const countryLanguage = getLanguageFromCountry(country);
  if (countryLanguage) return countryLanguage;

  const browserLanguage = navigator.language || "";
  if (browserLanguage.startsWith("zh")) return "zh-CN";
  if (browserLanguage.startsWith("ja")) return "ja";
  if (browserLanguage.startsWith("ko")) return "ko";
  if (browserLanguage.startsWith("es")) return "es";
  return "en";
}

function getLanguageFromCountry(country) {
  const normalized = String(country || "").toUpperCase();
  if (["CN", "HK", "MO", "TW"].includes(normalized)) return "zh-CN";
  if (normalized === "JP") return "ja";
  if (normalized === "KR") return "ko";
  if (
    [
      "ES",
      "MX",
      "AR",
      "CO",
      "CL",
      "PE",
      "VE",
      "EC",
      "GT",
      "CU",
      "BO",
      "DO",
      "HN",
      "PY",
      "SV",
      "NI",
      "CR",
      "PA",
      "UY",
    ].includes(normalized)
  ) {
    return "es";
  }
  return "en";
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.title = t("appTitle");
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function trackEvent(name, properties = {}) {
  const events = getAnalyticsEvents();
  events.push({
    id: crypto.randomUUID(),
    name,
    timestamp: new Date().toISOString(),
    properties,
  });
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events.slice(-500)));
  syncEvent(name, properties);
}

function getAnalyticsEvents() {
  try {
    return JSON.parse(localStorage.getItem(ANALYTICS_KEY) || "[]");
  } catch {
    return [];
  }
}

function renderAnalytics() {
  const events = getAnalyticsEvents();
  const submissions = getSubmissions();
  const visitCount = countByName(events, "page_view");
  const reportCount = countByName(events, "report_generated");
  const conversion = visitCount ? Math.round((reportCount / visitCount) * 100) : 0;
  const ipVisits = events.filter((event) => event.properties.ip).length;
  const uniqueIps = new Set(events.map((event) => event.properties.ip).filter(Boolean));
  const uniqueCountries = new Set(events.map((event) => event.properties.country).filter(Boolean));
  const uniqueCities = new Set(events.map((event) => event.properties.city).filter(Boolean));
  const avgCopyLength = submissions.length
    ? Math.round(sum(submissions.map((item) => item.copyLength)) / submissions.length)
    : 0;
  const clientRate = percentage(submissions.filter((item) => item.isClientCampaign).length, submissions.length);
  const imageRate = percentage(submissions.filter((item) => item.hasImage).length, submissions.length);
  const riskRate = percentage(submissions.filter((item) => item.status === "high_risk").length, submissions.length);

  metricVisits.textContent = String(visitCount);
  metricReports.textContent = String(reportCount);
  metricSubmissions.textContent = String(submissions.length);
  metricUniqueIps.textContent = String(uniqueIps.size);
  metricConversion.textContent = `${conversion}%`;
  metricIpVisits.textContent = String(ipVisits);
  metricCountryCount.textContent = String(uniqueCountries.size);
  metricCityCount.textContent = String(uniqueCities.size);
  metricAvgCopyLength.textContent = String(avgCopyLength);
  metricClientRate.textContent = `${clientRate}%`;
  metricImageRate.textContent = `${imageRate}%`;
  metricRiskRate.textContent = `${riskRate}%`;

  renderBarChart(
    platformChart,
    countProperty(events, "report_generated", "platform"),
    platformNames,
    "暂无报告生成数据",
  );
  renderBarChart(
    involvementChart,
    countProperty(events, "report_generated", "aiInvolvement"),
    involvementNames,
    "暂无 AI 参与程度数据",
  );
  renderBarChart(ipChart, countProperty(events, "page_view", "ip"), {}, "暂无 IP 访问数据");
  renderIpList(events);
  renderKeywordChart(submissions);
  renderSubmissionList(submissions);
  renderEventList(events);
}

function saveSubmission(report) {
  const submissions = getSubmissions();
  submissions.push({
    id: report.reportId,
    createdAt: report.createdAt,
    platform: report.platform,
    aiInvolvement: report.aiInvolvement,
    status: report.status,
    isClientCampaign: report.isClientCampaign,
    hasImage: Boolean(report.media),
    copyLength: report.publishCopyLength,
    publishCopy: report.publishCopy,
    ip: clientInfo.ip,
    country: clientInfo.country,
    region: clientInfo.region,
    city: clientInfo.city,
    userAgent: clientInfo.userAgent,
    fileName: report.media?.fileName || "",
    fileType: report.media?.fileType || "",
    fileSizeBytes: report.media?.fileSizeBytes || 0,
    sha256: report.media?.sha256 || "",
    exifPresent: report.media?.exifPresent || false,
    c2paPresent: report.media?.c2paPresent || false,
  });
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions.slice(-200)));
  trackEvent("submission_saved", {
    platform: report.platform,
    aiInvolvement: report.aiInvolvement,
    status: report.status,
    copyLength: report.publishCopyLength,
    ip: clientInfo.ip,
    country: clientInfo.country,
    region: clientInfo.region,
    city: clientInfo.city,
  });
  syncSubmission(report);
}

function getSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || "[]");
  } catch {
    return [];
  }
}

function countByName(events, name) {
  return events.filter((event) => event.name === name).length;
}

function countProperty(events, eventName, propertyName) {
  return events
    .filter((event) => event.name === eventName)
    .reduce((result, event) => {
      const value = event.properties[propertyName] || "unknown";
      result[value] = (result[value] || 0) + 1;
      return result;
    }, {});
}

function renderBarChart(container, counts, labels, emptyText) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map(([, count]) => count));

  if (entries.length === 0) {
    container.innerHTML = `<div class="empty-row">${escapeHtml(emptyText)}</div>`;
    return;
  }

  container.innerHTML = entries
    .map(([key, count]) => {
      const width = Math.max(8, Math.round((count / max) * 100));
      return `
        <div class="bar-row">
          <span>${escapeHtml(labels[key] || key)}</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");
}

function renderEventList(events) {
  const recent = [...events].reverse().slice(0, 12);

  if (recent.length === 0) {
    eventList.innerHTML = `<div class="empty-row">暂无事件</div>`;
    return;
  }

  eventList.innerHTML = recent
    .map((event) => {
      const properties = Object.entries(event.properties)
        .map(([key, value]) => `${key}: ${String(value)}`)
        .join(" · ");
      return `
        <div class="event-item">
          <time>${formatDateTime(event.timestamp)}</time>
          <div>
            <strong>${escapeHtml(getEventLabel(event.name))}</strong>
            <div>${escapeHtml(properties || "-")}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderIpList(events) {
  const recent = events
    .filter((event) => event.name === "page_view" && event.properties.ip)
    .reverse()
    .slice(0, 12);

  if (recent.length === 0) {
    ipList.innerHTML = `<div class="empty-row">暂无 IP 访问数据</div>`;
    return;
  }

  ipList.innerHTML = recent
    .map((event) => {
      const location = [event.properties.country, event.properties.region, event.properties.city]
        .filter(Boolean)
        .join(" / ");
      return `
        <div class="ip-item">
          <strong>${escapeHtml(event.properties.ip)}</strong>
          <div>
            <span>${formatDateTime(event.timestamp)}</span>
            <div>${escapeHtml(location || "未知位置")}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderKeywordChart(submissions) {
  const words = submissions.flatMap((item) => extractKeywords(item.publishCopy));
  const counts = words.reduce((result, word) => {
    result[word] = (result[word] || 0) + 1;
    return result;
  }, {});
  const entries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 18);

  if (entries.length === 0) {
    keywordChart.innerHTML = `<div class="empty-row">暂无已保存提交内容</div>`;
    return;
  }

  keywordChart.innerHTML = entries
    .map(([word, count]) => `<span class="tag">${escapeHtml(word)} <strong>${count}</strong></span>`)
    .join("");
}

function renderSubmissionList(submissions) {
  const recent = [...submissions].reverse().slice(0, 10);

  if (recent.length === 0) {
    submissionList.innerHTML = `<div class="empty-row">暂无提交内容。勾选“保存本次提交内容用于本地分析”后才会记录。</div>`;
    return;
  }

  submissionList.innerHTML = recent
    .map((item) => {
      const preview = item.publishCopy.length > 180 ? `${item.publishCopy.slice(0, 180)}...` : item.publishCopy;
      return `
        <article class="submission-item">
          <div class="submission-meta">
            <span>${formatDateTime(item.createdAt)}</span>
            <span>${escapeHtml(platformNames[item.platform] || item.platform)}</span>
            <span>${escapeHtml(involvementNames[item.aiInvolvement] || item.aiInvolvement)}</span>
            <span>${escapeHtml(getStatusLabel(item.status))}</span>
            <span>${item.hasImage ? "含图片" : "无图片"}</span>
          </div>
          <p class="submission-copy">${escapeHtml(preview || "未填写文案")}</p>
        </article>
      `;
    })
    .join("");
}

function extractKeywords(copy) {
  return (copy.match(/[A-Za-z0-9]+|[\u4e00-\u9fa5]{2,}/g) || [])
    .map((word) => word.trim())
    .filter((word) => word.length >= 2)
    .filter((word) => !stopWords.has(word.toUpperCase()) && !stopWords.has(word));
}

function getEventLabel(name) {
  const labels = {
    page_view: "访问页面",
    report_generated: "生成报告",
    report_downloaded: "下载报告",
    disclosure_copied: "复制披露文案",
    form_cleared: "清空表单",
    analytics_reset: "清空埋点",
  };
  return labels[name] || name;
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(value));
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function percentage(value, total) {
  return total ? Math.round((value / total) * 100) : 0;
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function syncVisit() {
  postJson("/api/track-visit", {
    language: currentLanguage,
    page: window.location.pathname + window.location.search,
  });
}

function syncEvent(eventName, properties) {
  postJson("/api/track-event", {
    eventName,
    properties,
    language: currentLanguage,
  });
}

function syncSubmission(report) {
  postJson("/api/track-submission", {
    platform: report.platform,
    aiInvolvement: report.aiInvolvement,
    status: report.status,
    publishCopy: report.publishCopy,
    copyLength: report.publishCopyLength,
    hasImage: Boolean(report.media),
    fileName: report.media?.fileName || "",
    fileType: report.media?.fileType || "",
    fileSizeBytes: report.media?.fileSizeBytes || 0,
    fileSha256: report.media?.sha256 || "",
    language: currentLanguage,
  });
}

async function postJson(url, payload) {
  if (!isHostedHttp()) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: JSON.stringify(payload).length < 60000,
    });
  } catch {
    // Keep the tool usable even if analytics storage is temporarily unavailable.
  }
}
