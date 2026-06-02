const RULE_VERSION = "cn-aigc-publish-readiness-2026-05-v0";
const ANALYTICS_KEY = "aigc_checker_analytics_events_v1";
const SUBMISSIONS_KEY = "aigc_checker_submissions_v1";
const ADMIN_CONFIG_PATH = "./admin-config.json";
const ADMIN_SESSION_KEY = "aigc_checker_admin_authenticated_v1";
const LANGUAGE_KEY = "aigc_checker_language_v1";

const translations = {
  "zh-CN": {
    appTitle: "AI 内容发布前自查",
    seoSummaryTitle: "AI 内容发布前检查、AIGC 标识合规与图片元数据自查",
    seoSummaryBody:
      "这个工具面向创作者、品牌内容团队、代运营机构和电商商家，用于在发布 AI 辅助内容前检查 AI 使用披露、AIGC 标识、图片 EXIF 元数据、C2PA Content Credentials 和发布前留痕报告。",
    seoSummaryAria: "工具简介",
    brandEyebrow: "AIGC 发布前自查",
    languageLabel: "语言",
    languageZh: "简体中文",
    languageJa: "日语",
    languageKo: "韩语",
    languageEs: "西班牙语",
    step1: "Step 1",
    step2: "Step 2",
    submitContent: "提交内容",
    submitSummary: "本地生成元数据摘要、披露建议和可存档 Markdown 报告。",
    targetPlatform: "目标平台",
    platformGeneric: "通用中文平台",
    platformXiaohongshu: "小红书",
    platformDouyin: "抖音",
    platformWechatOfficial: "微信公众号",
    platformBilibili: "Bilibili",
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
    adminEyebrow: "管理员",
    adminSummary: "输入管理员密码后查看用户行为和提交内容分析。",
    password: "密码",
    passwordError: "密码错误",
    adminConfigError: "管理员配置读取失败",
    adminApiError: "管理员接口不可用",
    enterAnalytics: "进入分析页",
    backToChecker: "返回自查工具",
    behaviorAnalytics: "用户行为分析",
    overviewEyebrow: "概览",
    visits: "访问次数",
    reports: "生成报告",
    savedSubmissions: "保存提交",
    uniqueIp: "独立 IP",
    platformPreference: "平台偏好",
    trafficAnalytics: "访问来源分析",
    trafficEyebrow: "流量",
    conversionRate: "转化率",
    ipVisits: "已识别 IP 访问",
    countryCount: "国家/地区数",
    cityCount: "城市数",
    ipDistribution: "IP 分布",
    recentIps: "最近访问 IP",
    contentAnalytics: "提交内容分析",
    contentEyebrow: "内容",
    avgCopyLength: "平均文案长度",
    clientRate: "客户内容占比",
    imageRate: "上传图片占比",
    riskRate: "高风险占比",
    keywords: "高频词",
    recentSubmissions: "最近提交",
    eventDetails: "事件明细",
    eventsEyebrow: "事件",
    exportAnalytics: "导出埋点",
    exportSubmissions: "导出提交内容",
    clearAnalytics: "清空埋点",
    clearSubmissions: "清空提交内容",
    dailyTrend: "14 天趋势",
    countryDistribution: "国家/地区分布",
    languageDistribution: "语言分布",
    riskDistribution: "风险状态分布",
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
    noReportData: "暂无报告生成数据",
    noInvolvementData: "暂无 AI 参与程度数据",
    noIpData: "暂无 IP 访问数据",
    noTrendData: "暂无趋势数据",
    noCountryData: "暂无国家/地区数据",
    noLanguageData: "暂无语言数据",
    noRiskData: "暂无风险状态数据",
    unknownLocation: "未知位置",
    visitsUnit: "次访问",
    noEvents: "暂无事件",
    noSavedContent: "暂无已保存提交内容",
    noSubmissions: "暂无提交内容。勾选“保存本次提交内容用于本地分析”后才会记录。",
    noPublishCopy: "未填写文案",
    withImage: "含图片",
    withoutImage: "无图片",
    eventPageView: "访问页面",
    eventReportGenerated: "生成报告",
    eventReportDownloaded: "下载报告",
    eventDisclosureCopied: "复制披露文案",
    eventFormCleared: "清空表单",
    eventAnalyticsReset: "清空埋点",
    eventSubmissionsReset: "清空提交",
    disclosureNone: "未检测到需要添加 AI 使用说明的自我声明；如实际使用了 AI，请按实际情况补充。",
    disclosureAssisted: "本内容使用 AI 工具辅助润色，已由人工审核修改。",
    disclosureDraft: "本内容部分使用 AI 工具辅助生成，已由人工审核、修改和确认。",
    disclosureMostly: "本内容主要由 AI 工具生成，并已进行人工审核。",
    disclosureUnknown: "本内容可能包含 AI 辅助生成部分，发布前建议进一步确认来源和标识要求。",
    reasonNoCopy: "未填写待发布文案；如果图片说明或标题会公开展示，建议补充后再检查。",
    reasonNoDisclosure: "文案里没有检测到明确的 AI 使用披露，可复制下方建议文案补充。",
    reasonUnknownClient: "品牌/客户内容不建议使用“不确定”的 AI 参与声明，需要发布前确认素材来源。",
    reasonNoMetadata: "图片未检测到 EXIF 或 C2PA/Content Credentials 标记，建议保留原始素材和生成记录。",
    reasonNoImage: "未上传图片；报告只覆盖文案披露检查。",
    reasonNoIssue: "当前信息未发现明显缺口，发布前仍建议按平台最新规则复核。",
    checkAiDeclared: "AI 参与程度已声明",
    checkDisclosureIncluded: "公开文案包含 AI 披露",
    checkMetadataDone: "图片元数据已检查",
    checkTraceArchived: "来源/留痕材料可归档",
    checkClientRisk: "品牌/客户内容风险复核",
    checkRuleVersion: "报告包含规则版本",
    noteDisclosureNeeded: "AI 参与内容建议加入明确披露。",
    noteNoAiDeclared: "用户声明未使用 AI。",
    noteMetadataChecked: "已生成文件 hash 并检查轻量元数据标记。",
    noteNoImageUploaded: "未上传图片。",
    noteKeepSourceRecords: "建议保留原始文件、生成记录、客户确认记录。",
    noteClientReview: "客户内容建议确认授权、素材来源和披露口径。",
    noteNotClientContent: "非客户发布内容。",
  },
  en: {
    appTitle: "AI Publish Readiness Checker",
    seoSummaryTitle: "AI Content Pre-Publish Check, AIGC Labeling Compliance, and Image Metadata Self-Audit",
    seoSummaryBody:
      "This tool is built for creators, brand content teams, agencies, and ecommerce sellers to check AI-use disclosure, AIGC labeling, image EXIF metadata, C2PA Content Credentials, and pre-publish audit reports before publishing AI-assisted content.",
    seoSummaryAria: "Tool summary",
    brandEyebrow: "AIGC Publish Readiness",
    languageLabel: "Language",
    languageZh: "Simplified Chinese",
    languageJa: "Japanese",
    languageKo: "Korean",
    languageEs: "Spanish",
    step1: "Step 1",
    step2: "Step 2",
    submitContent: "Submit Content",
    submitSummary: "Generate local metadata summary, disclosure suggestions, and an archivable Markdown report.",
    targetPlatform: "Target Platform",
    platformGeneric: "Generic Platform",
    platformXiaohongshu: "Xiaohongshu",
    platformDouyin: "Douyin",
    platformWechatOfficial: "WeChat Official Account",
    platformBilibili: "Bilibili",
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
    adminEyebrow: "Admin",
    adminSummary: "Enter admin password to view behavior and submission analytics.",
    password: "Password",
    passwordError: "Incorrect password",
    adminConfigError: "Admin config failed to load",
    adminApiError: "Admin API unavailable",
    enterAnalytics: "Enter Analytics",
    backToChecker: "Back to Checker",
    behaviorAnalytics: "User Behavior Analytics",
    overviewEyebrow: "Overview",
    visits: "Visits",
    reports: "Reports",
    savedSubmissions: "Saved Submissions",
    uniqueIp: "Unique IPs",
    platformPreference: "Platform Preference",
    trafficAnalytics: "Traffic Analytics",
    trafficEyebrow: "Traffic",
    conversionRate: "Conversion Rate",
    ipVisits: "Identified IP Visits",
    countryCount: "Countries/Regions",
    cityCount: "Cities",
    ipDistribution: "IP Distribution",
    recentIps: "Recent IP Visits",
    contentAnalytics: "Submission Analytics",
    contentEyebrow: "Content",
    avgCopyLength: "Avg Copy Length",
    clientRate: "Client Content Rate",
    imageRate: "Image Upload Rate",
    riskRate: "High Risk Rate",
    keywords: "Keywords",
    recentSubmissions: "Recent Submissions",
    eventDetails: "Event Details",
    eventsEyebrow: "Events",
    exportAnalytics: "Export Events",
    exportSubmissions: "Export Submissions",
    clearAnalytics: "Clear Events",
    clearSubmissions: "Clear Submissions",
    dailyTrend: "14-Day Trend",
    countryDistribution: "Country/Region Distribution",
    languageDistribution: "Language Distribution",
    riskDistribution: "Risk Status Distribution",
    refreshStats: "Refresh Site Stats",
    remoteStatsReady: "Site data · Supabase",
    remoteStatsLoading: "Loading site data...",
    remoteStatsFailed: "Site data failed to load. Showing local browser data.",
    localStatsReady: "Local browser data",
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
    noReportData: "No report generation data",
    noInvolvementData: "No AI involvement data",
    noIpData: "No IP visit data",
    noTrendData: "No trend data",
    noCountryData: "No country/region data",
    noLanguageData: "No language data",
    noRiskData: "No risk status data",
    unknownLocation: "Unknown location",
    visitsUnit: "visits",
    noEvents: "No events",
    noSavedContent: "No saved submission content",
    noSubmissions: "No submissions yet. Check “Save this submission for local analysis” to record content.",
    noPublishCopy: "No copy entered",
    withImage: "With image",
    withoutImage: "No image",
    eventPageView: "Page view",
    eventReportGenerated: "Generated report",
    eventReportDownloaded: "Downloaded report",
    eventDisclosureCopied: "Copied disclosure",
    eventFormCleared: "Cleared form",
    eventAnalyticsReset: "Cleared analytics",
    eventSubmissionsReset: "Cleared submissions",
    disclosureNone: "No AI-use statement appears necessary from the current declaration. If AI was used, add a disclosure that matches the actual workflow.",
    disclosureAssisted: "This content used AI tools for assisted editing and has been reviewed and revised by a human.",
    disclosureDraft: "Parts of this content were generated with AI assistance and have been reviewed, revised, and confirmed by a human.",
    disclosureMostly: "This content was mainly generated by AI tools and has been manually reviewed.",
    disclosureUnknown: "This content may include AI-assisted generation. Confirm the source and labeling requirements before publishing.",
    reasonNoCopy: "No publish copy was entered. If the image caption or title will be public, add it before checking.",
    reasonNoDisclosure: "No clear AI-use disclosure was detected in the copy. You can add the suggested disclosure below.",
    reasonUnknownClient: "Brand/client content should not use an uncertain AI involvement declaration. Confirm the source before publishing.",
    reasonNoMetadata: "No EXIF or C2PA/Content Credentials marker was detected. Keep original assets and generation records.",
    reasonNoImage: "No image was uploaded. This report only covers copy disclosure checks.",
    reasonNoIssue: "No obvious gap was found. Still review the latest platform rules before publishing.",
    checkAiDeclared: "AI involvement declared",
    checkDisclosureIncluded: "Public copy includes AI disclosure",
    checkMetadataDone: "Image metadata checked",
    checkTraceArchived: "Source/trace records can be archived",
    checkClientRisk: "Brand/client content risk reviewed",
    checkRuleVersion: "Report includes rule version",
    noteDisclosureNeeded: "AI-assisted content should include a clear disclosure.",
    noteNoAiDeclared: "The user declared no AI use.",
    noteMetadataChecked: "Generated file hash and checked lightweight metadata markers.",
    noteNoImageUploaded: "No image uploaded.",
    noteKeepSourceRecords: "Keep original files, generation records, and client confirmation records.",
    noteClientReview: "For client content, confirm authorization, source, and disclosure wording.",
    noteNotClientContent: "Not client-published content.",
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

Object.assign(translations.ja, {
  seoSummaryTitle: "AI コンテンツ公開前チェック、AIGC 表示コンプライアンス、画像メタデータ自己点検",
  seoSummaryBody:
    "このツールは、クリエイター、ブランドのコンテンツチーム、運用代行会社、EC 事業者向けに、AI 支援コンテンツ公開前の AI 利用開示、AIGC 表示、画像 EXIF メタデータ、C2PA Content Credentials、公開前記録レポートを確認するためのものです。",
});

Object.assign(translations.ko, {
  seoSummaryTitle: "AI 콘텐츠 게시 전 점검, AIGC 표시 준수, 이미지 메타데이터 자체 확인",
  seoSummaryBody:
    "이 도구는 크리에이터, 브랜드 콘텐츠 팀, 운영 대행사, 전자상거래 판매자가 AI 보조 콘텐츠를 게시하기 전에 AI 사용 공개, AIGC 표시, 이미지 EXIF 메타데이터, C2PA Content Credentials, 게시 전 기록 보고서를 확인하도록 돕습니다.",
});

Object.assign(translations.es, {
  seoSummaryTitle: "Revisión previa de contenido con IA, cumplimiento de etiquetado AIGC y metadatos de imagen",
  seoSummaryBody:
    "Esta herramienta está pensada para creadores, equipos de contenido de marca, agencias y vendedores ecommerce que necesitan revisar la divulgación del uso de IA, el etiquetado AIGC, los metadatos EXIF de imágenes, C2PA Content Credentials y el informe de trazabilidad antes de publicar contenido asistido por IA.",
});

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
const statusNames = {
  pass: "可发布前复核",
  needs_review: "需要补充后发布",
  high_risk: "高风险，先别发布",
};

const platformLabelKeys = {
  generic_cn: "platformGeneric",
  xiaohongshu: "platformXiaohongshu",
  douyin: "platformDouyin",
  wechat_official: "platformWechatOfficial",
  bilibili: "platformBilibili",
};

const involvementLabelKeys = {
  none: "involvementNone",
  assisted_editing: "involvementAssisted",
  ai_draft_human_revised: "involvementDraft",
  mostly_ai_generated: "involvementMostly",
  unknown: "involvementUnknown",
};

const statusLabelKeys = {
  pass: "statusPass",
  needs_review: "statusReview",
  high_risk: "statusHighRisk",
};

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
const dailyTrendChart = document.querySelector("#dailyTrendChart");
const countryChart = document.querySelector("#countryChart");
const languageChart = document.querySelector("#languageChart");
const statusChart = document.querySelector("#statusChart");
const ipList = document.querySelector("#ipList");
const keywordChart = document.querySelector("#keywordChart");
const submissionList = document.querySelector("#submissionList");
const eventList = document.querySelector("#eventList");
const adminDataStatus = document.querySelector("#adminDataStatus");
const refreshAdminStatsButton = document.querySelector("#refreshAdminStatsButton");
const exportAnalyticsButton = document.querySelector("#exportAnalyticsButton");
const exportSubmissionsButton = document.querySelector("#exportSubmissionsButton");
const clearAnalyticsButton = document.querySelector("#clearAnalyticsButton");
const clearSubmissionsButton = document.querySelector("#clearSubmissionsButton");

let currentReport = null;
let adminPassword = "";
let adminPasswordForStats = "";
let remoteStats = null;
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
  if (currentReport) {
    currentReport = relocalizeReport(currentReport);
    renderReport(currentReport);
  }
  renderAnalytics();
  trackEvent("language_changed", {
    language: currentLanguage,
    country: clientInfo.country,
  });
});

adminLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = adminPasswordInput.value;
  const isValid = await verifyAdminPassword(password);
  if (!isValid) {
    adminLoginError.textContent = t("passwordError");
    adminLoginError.classList.remove("hidden");
    trackEvent("admin_login_failed");
    renderAnalytics();
    return;
  }

  adminPasswordForStats = password;
  sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  adminPasswordInput.value = "";
  adminLoginError.classList.add("hidden");
  showPage("analyticsPage");
  trackEvent("admin_login_success");
  await loadAdminStats();
  renderAnalytics();
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

refreshAdminStatsButton.addEventListener("click", async () => {
  await loadAdminStats();
  renderAnalytics();
});

exportAnalyticsButton.addEventListener("click", () => {
  if (remoteStats) {
    downloadJson(remoteStats, `aigc-checker-site-stats-${new Date().toISOString().slice(0, 10)}.json`);
    return;
  }

  const events = getAnalyticsEvents();
  downloadJson(events, `aigc-checker-analytics-${new Date().toISOString().slice(0, 10)}.json`);
});

exportSubmissionsButton.addEventListener("click", () => {
  if (remoteStats) {
    downloadJson(remoteStats.recentSubmissions || [], `aigc-checker-site-submissions-${new Date().toISOString().slice(0, 10)}.json`);
    return;
  }

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
      note: getInvolvementLabel(aiInvolvement),
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

function getDisclosure(aiInvolvement) {
  const disclosures = {
    none: t("disclosureNone"),
    assisted_editing: t("disclosureAssisted"),
    ai_draft_human_revised: t("disclosureDraft"),
    mostly_ai_generated: t("disclosureMostly"),
    unknown: t("disclosureUnknown"),
  };

  return disclosures[aiInvolvement] || disclosures.unknown;
}

function getReasons({ aiInvolvement, hasDisclosure, media, isClientCampaign, copy }) {
  const reasons = [];

  if (!copy) reasons.push(t("reasonNoCopy"));
  if (aiInvolvement !== "none" && !hasDisclosure) reasons.push(t("reasonNoDisclosure"));
  if (aiInvolvement === "unknown" && isClientCampaign) reasons.push(t("reasonUnknownClient"));
  if (media && !media.exifPresent && !media.c2paPresent) reasons.push(t("reasonNoMetadata"));
  if (!media) reasons.push(t("reasonNoImage"));
  if (reasons.length === 0) reasons.push(t("reasonNoIssue"));

  return reasons;
}

function buildChecklist({ aiInvolvement, copy, hasDisclosure, media, isClientCampaign }) {
  const needsDisclosure = aiInvolvement !== "none";

  return [
    {
      label: t("checkAiDeclared"),
      result: aiInvolvement === "unknown" ? "review" : "pass",
      note: getInvolvementLabel(aiInvolvement),
    },
    {
      label: t("checkDisclosureIncluded"),
      result: !needsDisclosure ? "not_applicable" : hasDisclosure ? "pass" : "missing",
      note: needsDisclosure ? t("noteDisclosureNeeded") : t("noteNoAiDeclared"),
    },
    {
      label: t("checkMetadataDone"),
      result: media ? "pass" : "not_applicable",
      note: media ? t("noteMetadataChecked") : t("noteNoImageUploaded"),
    },
    {
      label: t("checkTraceArchived"),
      result: media && (media.exifPresent || media.c2paPresent) ? "pass" : "review",
      note: t("noteKeepSourceRecords"),
    },
    {
      label: t("checkClientRisk"),
      result: isClientCampaign && aiInvolvement === "unknown" ? "missing" : "pass",
      note: isClientCampaign ? t("noteClientReview") : t("noteNotClientContent"),
    },
    {
      label: t("checkRuleVersion"),
      result: "pass",
      note: RULE_VERSION,
    },
  ];
}

function relocalizeReport(report) {
  const hasDisclosure = containsDisclosure(report.publishCopy);
  return {
    ...report,
    reasons: getReasons({
      aiInvolvement: report.aiInvolvement,
      hasDisclosure,
      media: report.media,
      isClientCampaign: report.isClientCampaign,
      copy: report.publishCopy,
    }),
    suggestedDisclosure: getDisclosure(report.aiInvolvement),
    checklist: buildChecklist({
      aiInvolvement: report.aiInvolvement,
      copy: report.publishCopy,
      hasDisclosure,
      media: report.media,
      isClientCampaign: report.isClientCampaign,
    }),
  };
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

Target platform: ${getPlatformLabel(report.platform)}

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

- AI involvement level: ${getInvolvementLabel(report.aiInvolvement)}
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
  if (!isApiHosted()) {
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
  if (isApiHosted()) {
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

function isApiHosted() {
  return isHostedHttp() && !["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
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
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
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
    properties: {
      language: currentLanguage,
      ...properties,
    },
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
  if (remoteStats) {
    renderRemoteAnalytics(remoteStats);
    return;
  }

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
  adminDataStatus.textContent = t("localStatsReady");

  renderBarChart(
    platformChart,
    countProperty(events, "report_generated", "platform"),
    getPlatformLabels(),
    t("noReportData"),
  );
  renderBarChart(
    involvementChart,
    countProperty(events, "report_generated", "aiInvolvement"),
    getInvolvementLabels(),
    t("noInvolvementData"),
  );
  renderBarChart(ipChart, countProperty(events, "page_view", "ip"), {}, t("noIpData"));
  renderTrendChart(dailyTrendChart, buildLocalTrend(events, submissions), t("noTrendData"));
  renderBarChart(countryChart, countEventProperty(events, "country"), {}, t("noCountryData"));
  renderBarChart(languageChart, countEventProperty(events, "language"), {}, t("noLanguageData"));
  renderBarChart(statusChart, countSubmissionProperty(submissions, "status"), getStatusLabels(), t("noRiskData"));
  renderIpList(events);
  renderKeywordChart(submissions);
  renderSubmissionList(submissions);
  renderEventList(events);
}

async function loadAdminStats() {
  if (!adminPasswordForStats || !isApiHosted()) {
    remoteStats = null;
    adminDataStatus.textContent = t("localStatsReady");
    return;
  }

  adminDataStatus.textContent = t("remoteStatsLoading");
  refreshAdminStatsButton.disabled = true;

  try {
    const response = await fetch("/api/admin-stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: adminPasswordForStats }),
    });
    if (!response.ok) throw new Error("Admin stats unavailable");
    const stats = await response.json();
    if (!stats.ok) throw new Error("Admin stats failed");
    remoteStats = stats;
    adminDataStatus.textContent = t("remoteStatsReady");
  } catch {
    remoteStats = null;
    adminDataStatus.textContent = t("remoteStatsFailed");
  } finally {
    refreshAdminStatsButton.disabled = false;
  }
}

function renderRemoteAnalytics(stats) {
  const overview = stats.overview || {};
  const content = stats.content || {};
  const traffic = stats.traffic || {};
  const submissions = normalizeRemoteSubmissions(stats.recentSubmissions || []);
  const events = normalizeRemoteEvents(stats.recentEvents || []);
  const visitCount = Number(overview.visits || 0);
  const reportCount = Number(overview.reports || 0);
  const submissionCount = Number(overview.submissions || 0);
  const conversion = visitCount ? Math.round((reportCount / visitCount) * 100) : 0;

  metricVisits.textContent = String(visitCount);
  metricReports.textContent = String(reportCount);
  metricSubmissions.textContent = String(submissionCount);
  metricUniqueIps.textContent = String(overview.unique_ips || 0);
  metricConversion.textContent = `${conversion}%`;
  metricIpVisits.textContent = String(traffic.ip_visits || overview.unique_ips || 0);
  metricCountryCount.textContent = String(traffic.country_count || 0);
  metricCityCount.textContent = String(traffic.city_count || 0);
  metricAvgCopyLength.textContent = String(content.avg_copy_length || 0);
  metricClientRate.textContent = `${content.client_rate || 0}%`;
  metricImageRate.textContent = `${content.image_rate || 0}%`;
  metricRiskRate.textContent = `${content.risk_rate || 0}%`;
  adminDataStatus.textContent = t("remoteStatsReady");

  renderBarChart(platformChart, rowsToCounts(stats.platformRows || []), getPlatformLabels(), t("noReportData"));
  renderBarChart(involvementChart, rowsToCounts(stats.involvementRows || []), getInvolvementLabels(), t("noInvolvementData"));
  renderBarChart(ipChart, rowsToCounts(stats.ipRows || [], "ip"), {}, t("noIpData"));
  renderTrendChart(dailyTrendChart, stats.dailyRows || [], t("noTrendData"));
  renderBarChart(countryChart, rowsToCounts(stats.countryRows || [], "country"), {}, t("noCountryData"));
  renderBarChart(languageChart, rowsToCounts(stats.languageRows || [], "language"), {}, t("noLanguageData"));
  renderBarChart(statusChart, rowsToCounts(stats.statusRows || []), getStatusLabels(), t("noRiskData"));
  renderRemoteIpList(stats.ipRows || []);
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

function getPlatformLabel(key) {
  return t(platformLabelKeys[key]) || platformNames[key] || key || "unknown";
}

function getPlatformLabels() {
  return Object.fromEntries(Object.keys(platformLabelKeys).map((key) => [key, getPlatformLabel(key)]));
}

function getInvolvementLabel(key) {
  return t(involvementLabelKeys[key]) || involvementNames[key] || key || "unknown";
}

function getInvolvementLabels() {
  return Object.fromEntries(Object.keys(involvementLabelKeys).map((key) => [key, getInvolvementLabel(key)]));
}

function getStatusLabels() {
  return Object.fromEntries(Object.keys(statusLabelKeys).map((key) => [key, t(statusLabelKeys[key]) || key]));
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

function countEventProperty(events, propertyName) {
  return events.reduce((result, event) => {
    const value = event.properties[propertyName] || "unknown";
    result[value] = (result[value] || 0) + 1;
    return result;
  }, {});
}

function countSubmissionProperty(submissions, propertyName) {
  return submissions.reduce((result, item) => {
    const value = item[propertyName] || "unknown";
    result[value] = (result[value] || 0) + 1;
    return result;
  }, {});
}

function buildLocalTrend(events, submissions) {
  const days = getRecentDays(14).map((day) => ({
    day,
    visits: 0,
    reports: 0,
    submissions: 0,
  }));
  const byDay = Object.fromEntries(days.map((row) => [row.day, row]));

  events.forEach((event) => {
    const day = toDayKey(event.timestamp);
    if (!byDay[day]) return;
    if (event.name === "page_view") byDay[day].visits += 1;
    if (event.name === "report_generated") byDay[day].reports += 1;
  });

  submissions.forEach((item) => {
    const day = toDayKey(item.createdAt);
    if (byDay[day]) byDay[day].submissions += 1;
  });

  return days;
}

function getRecentDays(length) {
  return Array.from({ length }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (length - index - 1));
    return toDayKey(date);
  });
}

function toDayKey(value) {
  return new Date(value).toISOString().slice(0, 10);
}

function rowsToCounts(rows, keyName = "key") {
  return rows.reduce((result, row) => {
    const key = row[keyName] || "unknown";
    result[key] = Number(row.count || 0);
    return result;
  }, {});
}

function normalizeRemoteSubmissions(rows) {
  return [...rows].reverse().map((item) => ({
    createdAt: item.created_at,
    platform: item.platform,
    aiInvolvement: item.ai_involvement,
    status: item.status,
    publishCopy: item.publish_copy || "",
    copyLength: Number(item.copy_length || 0),
    hasImage: Boolean(item.has_image),
    country: item.country || "",
    city: item.city || "",
  }));
}

function normalizeRemoteEvents(rows) {
  return [...rows].reverse().map((item) => ({
    name: item.event_name,
    timestamp: item.created_at,
    properties: {
      ...(item.properties || {}),
      ip: item.ip || "",
      country: item.country || "",
      city: item.city || "",
    },
  }));
}

function renderTrendChart(container, rows, emptyText) {
  const normalized = rows.map((row) => ({
    day: row.day,
    visits: Number(row.visits || 0),
    reports: Number(row.reports || 0),
    submissions: Number(row.submissions || 0),
  }));
  const max = Math.max(0, ...normalized.flatMap((row) => [row.visits, row.reports, row.submissions]));

  if (max === 0) {
    container.innerHTML = `<div class="empty-row">${escapeHtml(emptyText)}</div>`;
    return;
  }

  container.innerHTML = normalized
    .map((row) => {
      const label = row.day.slice(5);
      return `
        <div class="trend-row">
          <time>${escapeHtml(label)}</time>
          ${renderTrendSegment("visits", row.visits, max)}
          ${renderTrendSegment("reports", row.reports, max)}
          ${renderTrendSegment("submissions", row.submissions, max)}
        </div>
      `;
    })
    .join("");
}

function renderTrendSegment(type, value, max) {
  const width = value ? Math.max(6, Math.round((value / max) * 100)) : 0;
  return `
    <div class="trend-segment ${type}">
      <span style="width: ${width}%"></span>
      <strong>${value}</strong>
    </div>
  `;
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

function renderRemoteIpList(rows) {
  if (rows.length === 0) {
    ipList.innerHTML = `<div class="empty-row">${escapeHtml(t("noIpData"))}</div>`;
    return;
  }

  ipList.innerHTML = rows
    .slice(0, 12)
    .map((row) => {
      const location = [row.country, row.region, row.city].filter(Boolean).join(" / ");
      return `
        <div class="ip-item">
          <strong>${escapeHtml(row.ip || "unknown")}</strong>
          <div>
            <span>${formatDateTime(row.last_seen)}</span>
            <div>${escapeHtml(location || t("unknownLocation"))} · ${Number(row.count || 0)} ${escapeHtml(t("visitsUnit"))}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderEventList(events) {
  const recent = [...events].reverse().slice(0, 12);

  if (recent.length === 0) {
    eventList.innerHTML = `<div class="empty-row">${escapeHtml(t("noEvents"))}</div>`;
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
    ipList.innerHTML = `<div class="empty-row">${escapeHtml(t("noIpData"))}</div>`;
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
            <div>${escapeHtml(location || t("unknownLocation"))}</div>
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
    keywordChart.innerHTML = `<div class="empty-row">${escapeHtml(t("noSavedContent"))}</div>`;
    return;
  }

  keywordChart.innerHTML = entries
    .map(([word, count]) => `<span class="tag">${escapeHtml(word)} <strong>${count}</strong></span>`)
    .join("");
}

function renderSubmissionList(submissions) {
  const recent = [...submissions].reverse().slice(0, 10);

  if (recent.length === 0) {
    submissionList.innerHTML = `<div class="empty-row">${escapeHtml(t("noSubmissions"))}</div>`;
    return;
  }

  submissionList.innerHTML = recent
    .map((item) => {
      const preview = item.publishCopy.length > 180 ? `${item.publishCopy.slice(0, 180)}...` : item.publishCopy;
      return `
        <article class="submission-item">
          <div class="submission-meta">
            <span>${formatDateTime(item.createdAt)}</span>
            <span>${escapeHtml(getPlatformLabel(item.platform))}</span>
            <span>${escapeHtml(getInvolvementLabel(item.aiInvolvement))}</span>
            <span>${escapeHtml(getStatusLabel(item.status))}</span>
            <span>${item.hasImage ? t("withImage") : t("withoutImage")}</span>
          </div>
          <p class="submission-copy">${escapeHtml(preview || t("noPublishCopy"))}</p>
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
    page_view: t("eventPageView"),
    report_generated: t("eventReportGenerated"),
    report_downloaded: t("eventReportDownloaded"),
    disclosure_copied: t("eventDisclosureCopied"),
    form_cleared: t("eventFormCleared"),
    analytics_reset: t("eventAnalyticsReset"),
    submissions_reset: t("eventSubmissionsReset"),
  };
  return labels[name] || name;
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat(currentLanguage, {
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
  if (!isApiHosted()) return;

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
