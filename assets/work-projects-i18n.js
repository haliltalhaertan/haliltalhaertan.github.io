/* Selected projects on the Work page. */
(() => {
  const projects = {
  "tr": {
    "workProjectsNav": "Projeler",
    "workProjectsTitle": "06 / Seçili projeler",
    "workProjectsIntro": "SAP entegrasyonu ve yapay zekâ destekli çalışma için geliştirdiğim araçlar.",
    "workProviderDeck": "Yapay zekâ kodlama aboneliklerinin kotalarını ve API bakiyelerini izleyen yerel panel. Model sağlayıcılarını tahmini giriş, önbellek ve çıkış maliyetine göre karşılaştırıyor.",
    "workRepoLink": "GitHub’da incele",
    "workTpzInspector": "Canlı SAP sistemine bağlanmadan SAP PI/PO .tpz taşıma arşivlerini açmak, mesaj eşlemelerini incelemek ve arşiv içeriklerini karşılaştırmak için çevrimdışı çalışma aracı.",
    "workStudioTitle": "Entegrasyon Stüdyosu",
    "workIntegrationStudio": "Doğal dille tarif edilen entegrasyonu, tuval üzerinde incelenip düzenlenebilen bir akışa çeviren yapay zekâ destekli görsel editör.",
    "workPoMonitoring": "SAP PI/PO’da hatalı veya takılı mesajları salt okunur olarak izler. Tekrarlayan sorunları gruplar ve kullanıcı incelemesi için rapor taslağı hazırlar.",
    "workICollector": "SAP PI/PO Integrated Configuration (ICO) nesnelerini salt okunur olarak inceler. Yönlendirme koşullarını ve iletişim kanalı ayrıntılarını belgeleme ve karşılaştırma için Excel’e aktarır."
  },
  "de": {
    "workProjectsNav": "Projekte",
    "workProjectsTitle": "06 / Ausgewählte Projekte",
    "workProjectsIntro": "Meine Werkzeuge für SAP-Integration und KI-gestütztes Arbeiten.",
    "workProviderDeck": "Lokales Dashboard für Kontingente von KI-Coding-Abos und API-Guthaben. Vergleicht Modellanbieter anhand der geschätzten Kosten für Eingabe, Cache und Ausgabe.",
    "workRepoLink": "Auf GitHub ansehen",
    "workTpzInspector": "Offline-Werkzeug zur Analyse von SAP-PI/PO-Transportarchiven (.tpz), zur Ansicht von Message-Mappings und zum Vergleich von Archivinhalten ohne Verbindung zu einem laufenden SAP-System.",
    "workStudioTitle": "Integration Studio",
    "workIntegrationStudio": "KI-gestützter visueller Editor, der eine natürlichsprachliche Integrationsbeschreibung in einen bearbeitbaren Ablauf auf einer Arbeitsfläche verwandelt.",
    "workPoMonitoring": "Überwacht fehlerhafte oder blockierte Nachrichten in SAP PI/PO mit Lesezugriff. Gruppiert wiederkehrende Probleme und erstellt Berichtsentwürfe zur Prüfung.",
    "workICollector": "Liest Integrated-Configuration-Objekte (ICO) in SAP PI/PO und exportiert Routingbedingungen und Details der Kommunikationskanäle zur Dokumentation und zum Vergleich nach Excel."
  },
  "zh": {
    "workProjectsNav": "项目",
    "workProjectsTitle": "06 / 精选项目",
    "workProjectsIntro": "我为 SAP 集成和 AI 辅助工作开发的工具。",
    "workProviderDeck": "用于查看 AI 编程订阅配额和 API 余额的本地面板，按预计的输入、缓存输入和输出成本比较模型服务。",
    "workRepoLink": "在 GitHub 上查看",
    "workTpzInspector": "用于离线检查 SAP PI/PO 的 .tpz 传输归档、查看消息映射并对比归档内容，无需连接运行中的 SAP 系统。",
    "workStudioTitle": "集成工作室",
    "workIntegrationStudio": "AI 辅助的可视化编辑器，将自然语言描述的集成方案转化为可在画布上查看和编辑的工作流。",
    "workPoMonitoring": "以只读方式监控 SAP PI/PO 中失败或停滞的消息，对重复问题进行分组，并生成供人工审核的报告草稿。",
    "workICollector": "以只读方式读取 SAP PI/PO 集成配置（ICO）对象，将路由条件和通信通道详情导出到 Excel，便于记录与比较。"
  },
  "ru": {
    "workProjectsNav": "Проекты",
    "workProjectsTitle": "06 / Избранные проекты",
    "workProjectsIntro": "Мои инструменты для интеграции SAP и работы с ИИ.",
    "workProviderDeck": "Локальная панель для просмотра квот подписок на ИИ-инструменты для программирования и балансов API. Сравнивает стоимость ввода, кэшированного ввода и вывода.",
    "workRepoLink": "Смотреть на GitHub",
    "workTpzInspector": "Офлайн-инструмент для изучения транспортных архивов SAP PI/PO (.tpz), просмотра схем преобразования сообщений и сравнения архивов без подключения к работающей системе SAP.",
    "workStudioTitle": "Студия интеграции",
    "workIntegrationStudio": "Визуальный редактор с ИИ превращает описание интеграции на естественном языке в схему, которую можно просматривать и редактировать.",
    "workPoMonitoring": "Отслеживает ошибочные и зависшие сообщения в SAP PI/PO в режиме чтения. Группирует повторяющиеся проблемы и готовит черновики отчётов для проверки.",
    "workICollector": "Читает объекты интегрированной конфигурации (ICO) в SAP PI/PO и экспортирует условия маршрутизации и сведения о каналах связи в Excel для документирования и сравнения."
  },
  "ja": {
    "workProjectsNav": "プロジェクト",
    "workProjectsTitle": "06 / 主なプロジェクト",
    "workProjectsIntro": "SAP 連携と AI を活用した作業のために開発したツール。",
    "workProviderDeck": "AI コーディングサービスの利用枠と API 残高を確認できるローカルダッシュボード。入力、キャッシュ済み入力、出力の見積もり費用でモデルの提供先を比較します。",
    "workRepoLink": "GitHub で見る",
    "workTpzInspector": "稼働中の SAP に接続せず、SAP PI/PO の .tpz 移送アーカイブを調べ、メッセージマッピングを確認し、内容を比較できるオフラインツール。",
    "workStudioTitle": "Integration Studio",
    "workIntegrationStudio": "自然言語による連携の説明を、キャンバスで確認・編集できるワークフローに変換する AI 支援のビジュアルエディター。",
    "workPoMonitoring": "SAP PI/PO で失敗または滞留したメッセージを読み取り専用で監視します。繰り返し発生する問題を分類し、人が確認するためのレポートの下書きを作成します。",
    "workICollector": "SAP PI/PO の統合設定（ICO）を読み取り、文書化や比較のためにルーティング条件と通信チャネルの詳細を Excel に出力します。"
  },
  "ko": {
    "workProjectsNav": "프로젝트",
    "workProjectsTitle": "06 / 주요 프로젝트",
    "workProjectsIntro": "SAP 통합과 AI 지원 작업을 위해 만든 도구입니다.",
    "workProviderDeck": "AI 코딩 구독 사용량 한도와 API 잔액을 확인하는 로컬 대시보드입니다. 입력, 캐시 입력, 출력의 예상 비용을 기준으로 모델 제공 경로를 비교합니다.",
    "workRepoLink": "GitHub에서 보기",
    "workTpzInspector": "실행 중인 SAP 시스템에 연결하지 않고 SAP PI/PO .tpz 전송 아카이브와 메시지 매핑을 살펴보고 아카이브 내용을 비교하는 오프라인 도구입니다.",
    "workStudioTitle": "Integration Studio",
    "workIntegrationStudio": "자연어로 설명한 통합을 캔버스에서 확인하고 수정할 수 있는 워크플로로 만드는 AI 지원 시각 편집기입니다.",
    "workPoMonitoring": "SAP PI/PO에서 실패하거나 멈춘 메시지를 읽기 전용으로 모니터링합니다. 반복되는 문제를 분류하고 검토용 보고서 초안을 작성합니다.",
    "workICollector": "SAP PI/PO의 통합 구성(ICO) 객체를 읽고, 문서화와 비교를 위해 라우팅 조건과 통신 채널 세부 정보를 Excel로 내보냅니다."
  },
  "es": {
    "workProjectsNav": "Proyectos",
    "workProjectsTitle": "06 / Proyectos destacados",
    "workProjectsIntro": "Herramientas que he creado para integrar sistemas SAP y trabajar con IA.",
    "workProviderDeck": "Panel local para consultar cuotas de suscripciones de programación con IA y saldos de API. Compara proveedores según el coste estimado de entrada, caché y salida.",
    "workRepoLink": "Ver en GitHub",
    "workTpzInspector": "Herramienta sin conexión para inspeccionar archivos de transporte .tpz de SAP PI/PO, explorar mapeos de mensajes y comparar su contenido sin conectarse a un sistema SAP activo.",
    "workStudioTitle": "Estudio de Integración",
    "workIntegrationStudio": "Editor visual asistido por IA que convierte una descripción de integración en lenguaje natural en un flujo que se puede inspeccionar y editar en un lienzo.",
    "workPoMonitoring": "Monitoriza en modo de solo lectura los mensajes fallidos o bloqueados de SAP PI/PO. Agrupa incidencias recurrentes y prepara borradores de informes para su revisión.",
    "workICollector": "Lee objetos de configuración integrada (ICO) de SAP PI/PO y exporta a Excel las condiciones de enrutamiento y los detalles de los canales de comunicación para documentarlos y compararlos."
  }
};
  for (const [language, labels] of Object.entries(projects)) {
    Object.assign(window.siteTranslations[language], labels);
  }
})();
