/* Selected projects on the Work page. */
(() => {
  const projects = {
  "tr": {
    "workProjectsNav": "Projeler",
    "workProjectsTitle": "06 / Seçili projeler",
    "workProjectsIntro": "Yapay zekâ destekli çalışma, SAP entegrasyonu ve dil öğrenimi için geliştirdiğim araçlar.",
    "workProviderDeck": "Yapay zekâ kodlama aboneliklerinin kotalarını ve API bakiyelerini izleyen yerel panel. Model sağlayıcılarını tahmini giriş, önbellek ve çıkış maliyetine göre karşılaştırıyor.",
    "workRepoLink": "GitHub’da incele",
    "workTpzInspector": "Canlı SAP sistemine bağlanmadan SAP PI/PO .tpz taşıma arşivlerini açmak, mesaj eşlemelerini incelemek ve arşiv içeriklerini karşılaştırmak için çevrimdışı çalışma aracı.",
    "workStudioTitle": "Entegrasyon Stüdyosu",
    "workIntegrationStudio": "Doğal dille tarif edilen entegrasyonu, tuval üzerinde incelenip düzenlenebilen bir akışa çeviren yapay zekâ destekli görsel editör.",
    "workKartla": "Altyazıda seçilen bir Almanca kelimeyi, o sahnedeki anlamına göre Anki kartına dönüştüren dil öğrenme aracı."
  },
  "de": {
    "workProjectsNav": "Projekte",
    "workProjectsTitle": "06 / Ausgewählte Projekte",
    "workProjectsIntro": "Meine Werkzeuge für KI-gestütztes Arbeiten, SAP-Integration und das Sprachenlernen.",
    "workProviderDeck": "Lokales Dashboard für Kontingente von KI-Coding-Abos und API-Guthaben. Vergleicht Modellanbieter anhand der geschätzten Kosten für Eingabe, Cache und Ausgabe.",
    "workRepoLink": "Auf GitHub ansehen",
    "workTpzInspector": "Offline-Werkzeug zur Analyse von SAP-PI/PO-Transportarchiven (.tpz), zur Ansicht von Message-Mappings und zum Vergleich von Archivinhalten ohne Verbindung zu einem laufenden SAP-System.",
    "workStudioTitle": "Integration Studio",
    "workIntegrationStudio": "KI-gestützter visueller Editor, der eine natürlichsprachliche Integrationsbeschreibung in einen bearbeitbaren Ablauf auf einer Arbeitsfläche verwandelt.",
    "workKartla": "Ein Lernwerkzeug, das ein deutsches Wort aus einem Untertitel anhand seiner Bedeutung in der Szene in eine Anki-Karte umwandelt."
  },
  "zh": {
    "workProjectsNav": "项目",
    "workProjectsTitle": "06 / 精选项目",
    "workProjectsIntro": "我为 AI 辅助工作、SAP 集成和语言学习开发的工具。",
    "workProviderDeck": "用于查看 AI 编程订阅配额和 API 余额的本地面板，按预计的输入、缓存输入和输出成本比较模型服务。",
    "workRepoLink": "在 GitHub 上查看",
    "workTpzInspector": "用于离线检查 SAP PI/PO 的 .tpz 传输归档、查看消息映射并对比归档内容，无需连接运行中的 SAP 系统。",
    "workStudioTitle": "集成工作室",
    "workIntegrationStudio": "AI 辅助的可视化编辑器，将自然语言描述的集成方案转化为可在画布上查看和编辑的工作流。",
    "workKartla": "将字幕中选中的德语单词按其在场景中的含义制作成 Anki 卡片。"
  },
  "ru": {
    "workProjectsNav": "Проекты",
    "workProjectsTitle": "06 / Избранные проекты",
    "workProjectsIntro": "Мои инструменты для работы с ИИ, интеграции SAP и изучения языков.",
    "workProviderDeck": "Локальная панель для просмотра квот подписок на ИИ-инструменты для программирования и балансов API. Сравнивает стоимость ввода, кэшированного ввода и вывода.",
    "workRepoLink": "Смотреть на GitHub",
    "workTpzInspector": "Офлайн-инструмент для изучения транспортных архивов SAP PI/PO (.tpz), просмотра схем преобразования сообщений и сравнения архивов без подключения к работающей системе SAP.",
    "workStudioTitle": "Студия интеграции",
    "workIntegrationStudio": "Визуальный редактор с ИИ превращает описание интеграции на естественном языке в схему, которую можно просматривать и редактировать.",
    "workKartla": "Инструмент для изучения немецкого: превращает выбранное в субтитрах слово в карточку Anki с учётом его значения в сцене."
  },
  "ja": {
    "workProjectsNav": "プロジェクト",
    "workProjectsTitle": "06 / 主なプロジェクト",
    "workProjectsIntro": "AI を活用した作業、SAP 連携、語学学習のために開発したツール。",
    "workProviderDeck": "AI コーディングサービスの利用枠と API 残高を確認できるローカルダッシュボード。入力、キャッシュ済み入力、出力の見積もり費用でモデルの提供先を比較します。",
    "workRepoLink": "GitHub で見る",
    "workTpzInspector": "稼働中の SAP に接続せず、SAP PI/PO の .tpz 移送アーカイブを調べ、メッセージマッピングを確認し、内容を比較できるオフラインツール。",
    "workStudioTitle": "Integration Studio",
    "workIntegrationStudio": "自然言語による連携の説明を、キャンバスで確認・編集できるワークフローに変換する AI 支援のビジュアルエディター。",
    "workKartla": "字幕で選んだドイツ語の単語を、場面での意味に合わせて Anki カードに変換する語学学習ツール。"
  },
  "ko": {
    "workProjectsNav": "프로젝트",
    "workProjectsTitle": "06 / 주요 프로젝트",
    "workProjectsIntro": "AI 지원 작업, SAP 통합, 언어 학습을 위해 만든 도구입니다.",
    "workProviderDeck": "AI 코딩 구독 사용량 한도와 API 잔액을 확인하는 로컬 대시보드입니다. 입력, 캐시 입력, 출력의 예상 비용을 기준으로 모델 제공 경로를 비교합니다.",
    "workRepoLink": "GitHub에서 보기",
    "workTpzInspector": "실행 중인 SAP 시스템에 연결하지 않고 SAP PI/PO .tpz 전송 아카이브와 메시지 매핑을 살펴보고 아카이브 내용을 비교하는 오프라인 도구입니다.",
    "workStudioTitle": "Integration Studio",
    "workIntegrationStudio": "자연어로 설명한 통합을 캔버스에서 확인하고 수정할 수 있는 워크플로로 만드는 AI 지원 시각 편집기입니다.",
    "workKartla": "자막에서 고른 독일어 단어를 해당 장면에서의 의미에 맞춰 Anki 카드로 바꾸는 언어 학습 도구입니다."
  },
  "es": {
    "workProjectsNav": "Proyectos",
    "workProjectsTitle": "06 / Proyectos destacados",
    "workProjectsIntro": "Herramientas que he creado para trabajar con IA, integrar sistemas SAP y aprender idiomas.",
    "workProviderDeck": "Panel local para consultar cuotas de suscripciones de programación con IA y saldos de API. Compara proveedores según el coste estimado de entrada, caché y salida.",
    "workRepoLink": "Ver en GitHub",
    "workTpzInspector": "Herramienta sin conexión para inspeccionar archivos de transporte .tpz de SAP PI/PO, explorar mapeos de mensajes y comparar su contenido sin conectarse a un sistema SAP activo.",
    "workStudioTitle": "Estudio de Integración",
    "workIntegrationStudio": "Editor visual asistido por IA que convierte una descripción de integración en lenguaje natural en un flujo que se puede inspeccionar y editar en un lienzo.",
    "workKartla": "Herramienta para aprender alemán que convierte una palabra seleccionada en los subtítulos en una tarjeta de Anki según lo que significa en esa escena."
  }
};
  for (const [language, labels] of Object.entries(projects)) {
    Object.assign(window.siteTranslations[language], labels);
  }
})();
