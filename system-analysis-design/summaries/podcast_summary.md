# Week 1

## 핵심 주제
- 시스템 개발은 단순한 코딩이 아니라 조직 목표를 달성하기 위한 체계적 process다.
- 전통적 **SDLC / Waterfall**과 현대적 **Agile**은 불확실성과 변화에 대응하는 방식이 다르다.

## 핵심 개념
- **SDLC (Systems Development Life Cycle)**: 정보 시스템을 기획, 분석, 설계, 구현, 유지보수 단계로 개발하는 수명주기 모델.
- **Planning**: 프로젝트의 비즈니스 필요성과 타당성을 확인하고 승인받는 단계.
- **Analysis**: 기존 시스템 문제와 사용자 요구 사항을 조사하는 단계.
- **Design**: 요구 사항을 논리적/물리적 설계로 바꾸는 단계.
- **Logical Design**: 기술 구현보다 기능과 구조에 초점을 둔 개념적 설계.
- **Physical Design**: 실제 기술, 하드웨어, 소프트웨어, 데이터베이스 구조를 반영한 구현 설계.
- **Waterfall Model**: 각 단계를 순차적으로 완료하고 다음 단계로 넘어가는 전통적 개발 방식.
- **Object-Oriented Analysis and Design (OAD)**: 데이터와 기능을 객체 단위로 묶어 재사용성과 독립성을 높이는 접근.
- **Agile**: 문서와 고정 계획보다 작동하는 소프트웨어, 고객 협력, 변화 대응을 중시하는 개발 철학.
- **Scrum**: sprint, product backlog, sprint backlog를 활용해 짧은 주기로 사용 가능한 기능을 만드는 Agile framework.
- **Extreme Programming (XP)**: pair programming, TDD 같은 실천을 통해 코드 품질과 사용자 피드백을 강화하는 방법.

## 수업/자료의 논리 흐름
- 1950년대의 시스템 개발은 소수 프로그래머의 장인적 역량에 의존했지만, 기업 규모와 데이터 처리량이 커지면서 표준화된 개발 process가 필요해졌다.
- SDLC는 시스템 개발을 기획, 분석, 설계, 구현, 유지보수라는 관리 가능한 단계로 나누어 예측 가능성을 높이려 했다.
- Waterfall model은 초기에 요구 사항을 확정할 수 있다는 가정에 기대지만, 실제 비즈니스 환경은 개발 중에도 계속 바뀐다.
- Waterfall의 한계 때문에 요구 변경에 대응하는 비용이 커지고, 시스템 개발 비용의 큰 부분이 유지보수에 쓰이는 문제가 나타났다.
- 객체지향 사고는 시스템을 재사용 가능한 독립적 객체로 나누어 수정과 확장을 쉽게 만들었다.
- Agile은 OAD 같은 유연한 설계 기반 위에서 짧은 iteration, 사용자 피드백, 작동하는 소프트웨어를 중시하는 방향으로 발전했다.
- Scrum은 sprint 단위로 작은 기능을 완성하고, XP는 pair programming과 TDD로 품질과 협업을 강화한다.

## 사례 및 적용 포인트
- Waterfall은 완벽한 청사진으로 댐을 짓는 방식에 가깝고, Agile은 환경과 상호작용하며 정원을 가꾸는 방식에 가깝다.
- OAD는 콘크리트 건물이 아니라 레고 블록으로 시스템을 만드는 방식으로 설명할 수 있다.
- Scrum은 긴 영화 한 편을 비밀리에 제작하는 것이 아니라, 드라마를 짧은 주기로 방영하며 반응을 보고 다음 회차를 조정하는 방식이다.
- Pair programming은 겉보기에는 두 사람이 한 컴퓨터를 쓰는 비효율처럼 보이지만, 결함 감소와 지식 공유 효과가 있다.
- 원자력 발전소 제어 시스템이나 항공기 운항 시스템처럼 요구 사항이 안정적이고 안전성이 중요한 경우에는 Waterfall이 더 적합할 수 있다.
- 요구 사항이 계속 바뀌고 소규모 자율 팀이 일하는 환경에서는 Agile이 더 유리하다.

## 에세이 대비 연결 포인트
- "Agile이 항상 좋고 Waterfall은 나쁘다"가 아니라, 요구 사항의 불확실성, 위험 수준, 팀 규모, 조직 문화에 따라 방법론을 선택해야 한다.
- 시스템 개발 방법론의 핵심 쟁점은 예측 가능성과 변화 대응성 사이의 trade-off다.
- 객체지향과 Agile은 단순 기술 기법이 아니라 변화하는 비즈니스 요구에 적응하기 위한 조직적 사고방식으로 설명할 수 있다.

# Week 2

## 핵심 주제
- 소프트웨어는 직접 개발, 구매, 외주, 클라우드 등 다양한 출처에서 얻을 수 있으며, 선택 자체가 전략적 의사결정이다.
- 소프트웨어 획득의 핵심은 비용만이 아니라 vendor viability, support, reuse, organizational fit을 함께 평가하는 것이다.

## 핵심 개념
- **In-house Development**: 조직 내부 인력이 소프트웨어를 직접 개발하는 방식.
- **Outsourcing**: 조직의 IT 기능이나 시스템 개발을 외부 전문 업체에 맡기는 방식.
- **Nearshoring**: 시차와 거리 문제를 줄이기 위해 가까운 국가나 지역으로 아웃소싱하는 전략.
- **IT Services Firm**: 맞춤형 시스템 개발, 통합, 컨설팅을 제공하는 외부 IT 서비스 기업.
- **Packaged Software**: Microsoft Word, TurboTax처럼 이미 만들어져 판매되는 기성 소프트웨어.
- **ERP (Enterprise Resource Planning)**: 회계, 인사, 재고, 생산 등 조직의 주요 데이터를 하나의 통합 시스템으로 연결하는 software suite.
- **Cloud Computing**: 하드웨어와 소프트웨어를 직접 소유하지 않고 인터넷을 통해 빌려 쓰는 방식.
- **Open Source Software**: 소스 코드가 공개되어 있으며, 지원/유지보수/프리미엄 기능을 통해 수익화될 수 있는 소프트웨어.
- **Vendor Viability**: 소프트웨어 공급업체가 장기적으로 생존하고 제품을 지원할 가능성.
- **RFP (Request for Proposal)**: 조직 요구 사항을 공식적으로 정리해 vendor에게 제안서를 요청하는 문서.
- **Software Reuse**: 기존 객체, 코드, component를 다른 프로젝트에서 다시 사용하는 접근.
- **Recontextualization**: 재사용 대상이 새 조직/부서/업무 맥락에서도 의미 있게 작동하도록 조정하는 과정.

## 수업/자료의 논리 흐름
- 최초의 비즈니스 정보 시스템은 IT 기업이 아니라 영국의 J. Lyons 찻집 체인에서 재고와 급여 관리 필요 때문에 등장했다.
- 미국의 초기 관리용 정보 시스템은 GE의 급여 처리 시스템처럼 거의 전부 in-house로 개발되었다.
- 이후 기업은 비용 절감, 본업 집중, 조직 문제 우회를 위해 outsourcing을 활용하기 시작했다.
- 오늘날 조직은 IT services, packaged software, ERP, cloud, open source, in-house development라는 다양한 소프트웨어 출처를 비교한다.
- Packaged software는 빠르게 도입할 수 있지만 조직 요구 사항을 완전히 충족하지 못해 업무 방식을 소프트웨어에 맞추거나 customization해야 할 수 있다.
- ERP는 데이터 통합을 제공하지만 구축이 복잡하고 비용이 크다.
- Cloud는 초기 비용을 낮추지만 보안, 신뢰성, 규제 준수 문제를 만든다.
- Open source는 무료 코드와 유료 support/maintenance가 결합된 business model을 가질 수 있다.
- Vendor selection에서는 기능과 비용뿐 아니라 vendor viability와 vendor support가 매우 중요하다.
- Reuse는 abstraction, storage, recontextualization이 필요하며, 조직적 관리 수준이 높아질수록 초기 투자와 장기 효율이 함께 커진다.

## 사례 및 적용 포인트
- J. Lyons는 유통기한이 짧은 홍차와 케이크의 재고/배송/급여 문제 때문에 정보 시스템을 도입했다.
- Grand Rapids 시청은 내부 인력 관리와 노조/공무원 규정 문제를 우회하기 위해 컴퓨팅 센터 운영을 outsourcing했다.
- Packaged software는 조직 요구의 최대 70% 정도만 충족할 수 있어 나머지 gap을 업무 변경이나 customization으로 해결해야 할 수 있다.
- Red Hat은 open source software를 무료로 제공하되 기업용 지원과 유지보수 서비스를 판매하는 모델을 보여 준다.
- 자동 코드 생성기는 개발을 쉽게 해도 나중의 maintenance burden을 키울 수 있다.
- Petrie Electronics 사례에서 짐 와타나베는 loyalty system을 in-house로 만들지, cloud를 구독할지, package를 살지 전략적으로 선택해야 한다.

## 에세이 대비 연결 포인트
- 소프트웨어 획득은 "직접 만들 것인가, 살 것인가, 빌릴 것인가, 외주 줄 것인가"의 trade-off로 설명할 수 있다.
- Cloud나 package는 빠르고 저렴해 보일 수 있지만, security, compliance, vendor lock-in, support risk를 함께 고려해야 한다.
- Reuse가 어려운 이유는 코드 자체가 아니라 부서마다 다른 business context와 definition 때문이다.
- IT 부서는 단순한 기술 지원 부서가 아니라 기업의 경쟁 전략과 운영 방식을 좌우하는 의사결정 주체로 보아야 한다.

# Week 3

## 핵심 주제
- 정보 시스템 프로젝트 관리는 일정표 작성이 아니라 사람, 자원, 위험, 커뮤니케이션을 통합적으로 조율하는 management process다.
- PM은 프로젝트를 initiation, planning, execution, closedown까지 관리하며, 계획과 현실 사이의 차이를 계속 통제해야 한다.

## 핵심 개념
- **Project Management**: 프로젝트 목표를 달성하기 위해 scope, time, cost, quality, risk, communication을 관리하는 활동.
- **SSR (System Service Request)**: 현업 부서가 시스템 개발이나 개선 필요를 공식적으로 요청하는 문서.
- **Project Workbook**: 회의록, 이메일, 설계 자료, 진행 기록 등 프로젝트 관련 raw information을 모아 두는 저장소.
- **Project Charter**: 프로젝트 목표, 권한, 책임, 승인 정보를 간결하게 정리한 공식 요약 문서.
- **WBS (Work Breakdown Structure)**: 프로젝트 작업을 관리 가능한 하위 작업으로 나누는 구조.
- **COCOMO**: 코드 라인 수, 복잡성 등을 바탕으로 소프트웨어 개발 노력과 비용을 추정하는 모델.
- **Communication Matrix**: 이해관계자별로 어떤 정보를 언제, 어떤 형식으로 전달할지 정리한 표.
- **Baseline Project Plan**: 승인된 기준 계획. 실제 진행과 비교하는 기준점이 된다.
- **Critical Path**: 전체 프로젝트 완료 시간을 결정하는 가장 긴 작업 경로.
- **Slack Time**: 특정 작업이 지연되어도 전체 프로젝트 완료일에 영향을 주지 않는 여유 시간.
- **PERT**: 낙관치, 현실치, 비관치를 이용해 작업 기간을 확률적으로 추정하는 기법.
- **Gantt Chart / Network Diagram**: 작업 기간과 선행 관계를 시각화해 일정 통제를 돕는 도구.

## 수업/자료의 논리 흐름
- 현대 정보 시스템 프로젝트는 ERP, outsourcing, legacy integration 때문에 복잡성이 커졌고 PM은 기술자보다 조율자에 가까워졌다.
- PVF 사례는 작은 가구 회사가 성장하면서 수작업 주문 처리에서 중앙집중식 database system으로 발전하는 과정을 보여 준다.
- 프로젝트는 현업의 pain point와 신뢰 관계 속에서 SSR로 공식화된다.
- Project workbook은 모든 세부 자료를 담는 raw repository이고, project charter는 경영진이 승인할 수 있는 요약 문서다.
- Planning 단계에서는 가까운 미래는 세밀하게, 먼 미래는 거시적이고 유연하게 계획해야 한다.
- WBS와 COCOMO는 작업 분해와 effort estimation을 돕지만, 실제 resource allocation은 팀원의 skill, speed, quality, boredom까지 고려해야 한다.
- Execution 단계에서 문제가 생겼다고 baseline plan을 바로 바꾸면 project discipline이 무너질 수 있으므로, 먼저 우회로와 조정안을 찾아야 한다.
- Closedown은 성공 종료뿐 아니라 예산 부족, 시장 변화 등으로 인한 비자연적 종료도 포함한다.
- Gantt chart와 network diagram은 critical path와 slack time을 파악하는 데 쓰이며, PERT는 작업 시간 추정의 편향을 줄인다.

## 사례 및 적용 포인트
- PVF의 후아니타 로페즈와 크리스 마틴 사례는 SSR이 단순 양식이 아니라 현업과 IT 사이의 신뢰 위에서 나온다는 점을 보여 준다.
- Project workbook과 project charter를 혼동하면 경영진에게 너무 많은 detail을 주거나 실무진에게 너무 적은 정보를 주는 문제가 생긴다.
- 칼은 빠르지만 버그가 많고, 브렌다는 느리지만 품질이 높다는 사례는 resource assignment가 단순 수학 문제가 아님을 보여 준다.
- Slack time이 있는 작업의 인력은 critical path에서 병목이 생길 때 전략적 예비군처럼 활용될 수 있다.
- PERT는 낙관치와 비관치뿐 아니라 현실치에 더 큰 weight를 주어 추정 편향을 줄인다.
- MS Project 같은 도구는 critical path 계산을 자동화하지만, PM의 전략적 판단과 사람 관리까지 대체하지는 못한다.

## 에세이 대비 연결 포인트
- 프로젝트 관리는 technical scheduling과 human leadership이 결합된 영역으로 설명해야 한다.
- 기준 계획은 현실이 바뀔 때마다 쉽게 바꾸는 문서가 아니라, 실제 성과를 비교하고 문제의 원인을 드러내는 통제 기준이다.
- Critical path만 보는 것이 아니라 slack time을 resource flexibility로 보는 관점이 중요하다.
- AI가 일정 추정과 위험 예측을 자동화하더라도, 이해관계자 조율과 팀 동기 관리 같은 인간적 PM 역량은 계속 중요할 수 있다.

# Week 4

## 핵심 주제
- 시스템 프로젝트 선택은 기술 문제가 아니라 제한된 자원을 어디에 배분할지 정하는 strategic decision이다.
- 조직의 **information islands**를 줄이려면 bottom-up 요구와 top-down 전략을 함께 조율해야 한다.

## 핵심 개념
- **Information Islands**: 부서별로 고립된 시스템과 데이터가 생겨 중복, 불일치, 오류가 발생하는 상태.
- **Top-down Project Identification**: 최고경영진이나 운영위원회가 조직 전체 관점에서 프로젝트를 제안하는 방식.
- **Bottom-up Project Identification**: 현업 부서나 IT 개발 그룹이 구체적 문제를 해결하기 위해 프로젝트를 제안하는 방식.
- **Steering Committee**: 여러 부서의 고위 임원이 참여해 정보 시스템 프로젝트를 검토하고 우선순위를 정하는 기구.
- **Value Chain Analysis**: 회사가 가치와 경쟁우위를 만드는 활동을 분석해 어떤 IT 프로젝트가 전략적으로 중요한지 판단하는 방법.
- **Weighted Multicriteria Analysis**: requirements와 constraints에 점수와 weight를 부여해 대안을 비교하는 평가 방식.
- **Requirements**: 시스템이 수행해야 하는 기능적 요구 사항.
- **Constraints**: 예산, 일정, 하드웨어, 규제처럼 선택을 제한하는 현실 조건.
- **Incremental Commitment**: 프로젝트 단계마다 계속 진행할지, 중단할지, 방향을 바꿀지 재검토하는 접근.
- **ISP (Information Systems Planning)**: 조직 전략과 정보 시스템 포트폴리오를 장기적으로 연결하는 계획 활동.
- **Affinity Clustering**: 자주 함께 쓰이는 process와 data를 묶어 큰 정보 구조를 파악하는 기법.

## 수업/자료의 논리 흐름
- 부서가 당장 자기 업무를 빠르게 처리하려고 별도 spreadsheet나 소규모 시스템을 만들면 information islands가 생긴다.
- Information islands는 현업 관점에서는 효율적일 수 있지만, 조직 전체 관점에서는 데이터 중복과 오류를 만든다.
- Top-down 접근은 조직 전체의 master plan을 보는 데 강하고, bottom-up 접근은 현장의 구체적 pain point를 빠르게 해결하는 데 강하다.
- Petrie Electronics의 customer loyalty project는 경영진이 전략적으로 주도하는 top-down project의 예시다.
- 여러 프로젝트 제안이 경쟁할 때 value chain analysis는 회사의 핵심 가치 창출 활동에 가까운 프로젝트를 우선시하게 한다.
- Weighted multicriteria analysis는 기능 점수뿐 아니라 예산, 운영비, 기술 제약 같은 constraints를 함께 반영한다.
- 점수표는 객관적으로 보이지만, 어떤 항목에 weight를 줄지는 조직 정치와 협상의 결과다.
- Incremental commitment는 큰 프로젝트를 무작정 끝까지 밀어붙이지 않고 단계별로 재검토하게 한다.
- ISP는 개별 프로젝트 선택을 넘어 기업 전략, data architecture, long-term system portfolio를 연결한다.
- 인터넷/e-commerce/IoT 환경에서는 사용자 위치, device, network condition을 알 수 없으므로 통제 가능한 시작점을 전략적으로 선택해야 한다.

## 사례 및 적용 포인트
- 각 부서가 자기만의 mini system을 만들면 마치 셰어하우스 룸메이트들이 각자 미니 냉장고를 사는 것처럼 전체 중복과 혼란이 생긴다.
- 당일배송 기업이라면 화려한 AI HR system보다 warehouse barcode scanning system이 value chain상 더 우선일 수 있다.
- Weighted scoring에서 기능 점수가 높은 스포츠카 같은 대안보다, 예산 constraint를 만족하는 중형차 같은 대안이 선택될 수 있다.
- 현대차 같은 low-cost strategy 기업은 inventory, automation, assembly efficiency system이 중요하고, Rolls-Royce 같은 niche/premium strategy 기업은 CRM과 customization data가 더 중요하다.
- 수강신청 방식은 종이, 웹, 모바일로 바뀌어도 학생, 교수, 과목, 성적이라는 data structure는 오래 유지된다.
- PVF가 webstore의 첫 target을 B2C가 아니라 B2B furniture로 잡은 것은 불확실한 인터넷 환경에서 가장 통제 가능한 entry point를 고른 전략적 선택이다.

## 에세이 대비 연결 포인트
- 정보 시스템 프로젝트 선택은 기술적 우수성보다 strategic fit과 value creation을 중심으로 설명해야 한다.
- Bottom-up 요구만 따르면 information islands가 늘고, top-down 전략만 따르면 현장 pain point를 놓칠 수 있으므로 둘의 균형이 필요하다.
- Weighted scoring은 유용하지만 정치적 weight assignment가 숨어 있으므로 완전한 객관성으로 착각하면 안 된다.
- ISP의 핵심은 특정 기술 트렌드가 아니라 오래 지속되는 data architecture와 기업 전략을 연결하는 것이다.

# Week 5

## 핵심 주제
- 프로젝트 실패는 코딩 전에 이미 결정될 수 있으며, **Project Initiation and Planning (PIP)** 단계가 이를 막는 핵심 보험이다.
- 좋은 프로젝트 계획은 경제적, 기술적, 운영적, 일정, 법률/계약, 정치적 타당성을 모두 검토해야 한다.

## 핵심 개념
- **PIP (Project Initiation and Planning)**: 모호한 시스템 요청을 실행 가능한 프로젝트 범위와 계획으로 바꾸는 초기 단계.
- **PSS (Project Scope Statement)**: 프로젝트 범위, 목표, 경계, 주요 산출물을 정의하는 문서.
- **BPP (Baseline Project Plan)**: 프로젝트 개요, 시스템 설명, 타당성 평가, 관리 이슈를 담은 기준 계획서.
- **Cost-Benefit Analysis**: 시스템 비용과 편익을 비교해 경제적 타당성을 판단하는 분석.
- **Tangible Benefit / Intangible Benefit**: 돈으로 직접 측정 가능한 편익과 고객 만족, 직원 사기처럼 직접 수치화하기 어려운 편익.
- **One-time Cost / Recurring Cost**: 초기 도입 비용과 시스템 운영 중 반복적으로 발생하는 비용.
- **TCO (Total Cost of Ownership)**: 구매 비용뿐 아니라 유지보수, 인력, storage, operation cost까지 포함한 총소유비용.
- **TVM (Time Value of Money)**: 현재 돈과 미래 돈의 가치가 다르다는 원리.
- **NPV / ROI / Breakeven**: 투자안을 현재가치, 수익률, 손익분기점 관점에서 평가하는 재무 지표.
- **Technical Feasibility**: 프로젝트 규모, 구조화 정도, 개발팀 경험, 사용자 익숙함 등을 바탕으로 구현 위험을 판단하는 평가.
- **Political Feasibility**: 시스템이 조직 내 권력과 정보 분배에 미치는 영향을 고려하는 타당성 평가.
- **Structured Walkthrough**: BPP를 이해관계자들이 공식적으로 검토하고 질문하는 회의.
- **Maintenance Oracle**: 장기 유지보수 관점에서 설계의 미래 문제를 경고하는 역할.

## 수업/자료의 논리 흐름
- PIP는 전체 개발 노력의 약 10-20%를 차지할 수 있으며, 눈에 보이는 결과물이 없어도 생략하면 나중에 큰 비용을 만든다.
- PVF의 CTS 사례에서 분석가들은 project scope statement와 baseline project plan을 통해 모호한 요청을 실행 가능한 계획으로 바꾼다.
- Economic feasibility에서는 tangible/intangible benefits와 one-time/recurring costs를 구분한다.
- TCO는 초기 구매비만이 아니라 유지보수 인력, storage, cloud operation 등 전체 생애주기 비용을 보게 한다.
- TVM, NPV, ROI, breakeven은 서로 다른 시점의 현금흐름을 비교해 프로젝트의 재무적 설득력을 높인다.
- Technical feasibility는 위험을 무조건 피하는 것이 아니라 조기에 식별하고 관리 계획에 반영하는 것이다.
- 프로젝트 규모가 크고, requirements가 비구조적이며, 기술과 사용자가 낯설수록 risk가 증가한다.
- 경제적/기술적 타당성 외에도 operational, schedule, legal/contractual, political feasibility가 project approval에 중요하다.
- Political feasibility는 정보 시스템이 조직의 power structure를 바꿀 수 있다는 점 때문에 중요하다.
- BPP는 structured walkthrough에서 공식 검토되며, 각 참석자는 facilitator, presenter, user, recorder, standards bearer, maintenance oracle 같은 역할을 맡는다.

## 사례 및 적용 포인트
- PIP는 대륙 횡단 여행 전 지도, 예산, 경로를 점검하는 20%의 준비 시간과 같다.
- PVF CTS 프로젝트는 breakeven point가 2.4년이라는 식으로 경영진의 언어로 설득해야 한다.
- 최첨단 스마트 개집은 규모, 구조화, 개발자 경험, 사용자 익숙함이 모두 불리해 high-risk project가 된다.
- 급여 시스템은 법과 계산 방식이 명확해 상대적으로 구조화된 project이고, 경영진 지원 시스템은 임원 요구가 바뀌어 구조화가 어렵다.
- 특정 부서가 독점하던 데이터를 투명하게 공유하는 시스템은 그 부서의 권력을 약화시키므로 political resistance가 생길 수 있다.
- Maintenance oracle은 "지금 편한 설계가 3년 뒤 유지보수 지옥을 만들 수 있다"는 미래의 고통을 대변한다.

## 에세이 대비 연결 포인트
- PIP는 관료적 문서 작업이 아니라 project failure를 사전에 줄이는 risk management process로 설명해야 한다.
- 경제적 타당성은 단순 비용 절감이 아니라 intangible benefit의 장기적 유형화와 TCO까지 고려해야 한다.
- Technical risk는 나쁜 것이 아니라 innovation portfolio의 일부일 수 있으며, 핵심은 회피가 아니라 관리다.
- Political feasibility를 빼면 정보 시스템이 조직 권력 구조를 바꾼다는 현실을 설명하지 못한다.

# Week 6

## 핵심 주제
- 요구사항 도출은 사용자에게 "무엇을 원하세요?"라고 묻는 단순한 작업이 아니라 숨겨진 실제 업무 방식을 찾아내는 탐정 작업이다.
- Interview, observation, JAD, prototyping, BPR, Agile은 각각 다른 방식으로 requirements와 business process 문제를 드러낸다.

## 핵심 개념
- **Requirements Determination**: 시스템이 무엇을 해야 하는지 파악하기 위해 사용자, 업무, 데이터, 조직 맥락을 조사하는 과정.
- **Open-ended Question**: 사용자가 자유롭게 답하도록 해 예상치 못한 문제를 드러내는 질문.
- **Closed-ended Question**: 제한된 선택지나 수치 답변을 통해 빠르고 명확한 정보를 얻는 질문.
- **Formal System**: 문서화된 규칙, 조직도, 공식 절차.
- **Informal System**: 실제 직원들이 일을 처리하기 위해 사용하는 비공식 업무 방식.
- **Observation**: 인터뷰가 놓치는 실제 행동과 context를 보기 위해 현장을 직접 관찰하는 방법.
- **JAD (Joint Application Design)**: 사용자, 관리자, 개발자 등 이해관계자를 집중 세션에 모아 요구사항과 설계를 빠르게 합의하는 기법.
- **JAD Facilitator**: 중립적으로 회의를 통제하고 갈등을 조정하는 세션 리더.
- **Prototyping**: 초기 화면이나 작동 버전을 만들어 사용자가 요구사항을 더 구체적으로 확인하게 하는 방법.
- **BPR (Business Process Reengineering)**: 기존 프로세스를 조금 개선하는 것이 아니라 근본 가정부터 재설계하는 접근.
- **Agile / Planning Game**: 사용자 story와 개발 effort estimate를 반복적으로 조정하며 작은 기능을 우선순위화하는 방식.

## 수업/자료의 논리 흐름
- 많은 프로젝트는 사용자가 말한 요구를 그대로 받아 적는 방식 때문에 실패한다.
- 시스템 분석가는 기존 절차를 의심하고, 공정성을 유지하며, 세부 사항을 관찰하는 탐정 같은 태도가 필요하다.
- Interview에서는 open-ended와 closed-ended question을 목적에 맞게 섞어야 한다.
- 사용자는 자신이 실제로 어떻게 일하는지 정확히 설명하지 못할 수 있으므로 formal system과 informal system의 차이를 봐야 한다.
- Observation은 인터뷰나 매뉴얼로는 알 수 없는 비공식 활동을 드러낸다.
- JAD는 이해관계자를 한 방에 모아 이메일 핑퐁과 부서 간 오해를 줄이고 빠른 합의를 만든다.
- Prototyping은 말로 합의한 요구사항을 눈앞의 화면과 interaction으로 검증하게 한다.
- BPR은 기존 업무를 더 빠르게 자동화하는 것이 아니라 "처음부터 다시 만든다면 어떻게 할 것인가?"를 묻는다.
- Waterfall은 사용자를 초기에만 참여시키고 나중에 배제하는 문제가 있었으며, Agile은 지속적인 사용자 참여로 이를 보완한다.
- XP planning game은 사용자 story, 개발자 estimate, 우선순위 선택을 짧은 cycle로 반복한다.

## 사례 및 적용 포인트
- 음료 회사의 route optimization system은 배송 경로를 수학적으로 최적화했지만, 배송 기사와 매장 매니저의 관계 영업 시간을 없애 매출을 떨어뜨렸다.
- 이 사례는 공식 업무가 "상자 배달"이어도 비공식 업무는 "판촉 위치 확보와 관계 관리"일 수 있음을 보여 준다.
- PVF webstore JAD는 영업, 마케팅, IT가 며칠 동안 집중적으로 모여 화면, shopping cart, inventory linkage를 빠르게 합의한 사례다.
- Prototyping은 "쇼핑카트 버튼은 오른쪽" 같은 말의 해석 차이를 실제 화면으로 줄인다.
- BPR은 낡은 프로세스 위에 최신 IT라는 립스틱을 바르는 것이 아니라 process 자체를 재설계하는 것이다.
- Boeing 757 wiring design system은 사용자를 배제한 전통 방식으로 실패했지만, 사용자 대표를 개발팀에 지속 참여시킨 Agile 방식으로 개선되었다.

## 에세이 대비 연결 포인트
- Requirements determination의 핵심은 사용자의 말보다 실제 업무 context를 이해하는 것이다.
- Interview만으로는 informal system을 놓칠 수 있으므로 observation과 prototyping이 중요하다.
- JAD는 단순 회의가 아니라 중립 facilitator와 명확한 구조가 있어야 효과가 있다.
- BPR과 automation을 구분해야 한다. 나쁜 프로세스를 자동화하면 나쁜 일을 더 빠르게 할 뿐이다.
- AI가 코드를 잘 작성하게 되더라도, 인간이 "무엇을 왜 만들어야 하는가"를 정의하는 역량은 더 중요해질 수 있다.

# Week 7

## 핵심 주제
- 복잡한 정보 시스템 요구사항은 **DFD**와 **decision table**을 통해 보이지 않는 데이터 흐름과 의사결정 논리를 구조화할 수 있다.
- DFD는 system의 logical data flow를 보여 주고, decision table은 process 내부의 conditional logic을 압축해 오류를 줄인다.

## 핵심 개념
- **DFD (Data Flow Diagram)**: 시스템 안팎의 데이터 흐름, 저장, 처리, 외부 주체를 시각화하는 분석 도구.
- **Data Flow**: 데이터가 이동하는 경로. 화살표로 표시한다.
- **Data Store**: 데이터가 저장되는 장소.
- **Process**: 입력 데이터를 받아 다른 형태의 출력 데이터로 변환하는 활동.
- **External Entity**: 시스템 밖에서 데이터를 제공하거나 받는 사람/조직/시스템.
- **Context Diagram**: 전체 시스템을 하나의 process 0으로 나타내고 외부 entity와 data flow만 보여 주는 최상위 DFD.
- **Level-0 Diagram**: context diagram의 process 0을 주요 내부 process와 data store로 분해한 DFD.
- **Primitive DFD**: 더 이상 의미 있게 분해하기 어려운 가장 낮은 수준의 DFD.
- **Balancing**: 상위 DFD와 하위 DFD 사이의 input/output data flow가 일관되어야 한다는 원칙.
- **Black Hole**: input은 있지만 output이 없는 잘못된 process.
- **Miracle**: input 없이 output이 나오는 잘못된 process.
- **Gap Analysis**: 현재 process를 모델링해 중복, 병목, 누락, 불필요한 절차를 찾는 분석.
- **Decision Table**: 조건, 행동, 규칙을 matrix로 정리해 복잡한 의사결정 logic을 표현하는 도구.
- **Indifferent Condition**: 결과에 영향을 주지 않는 조건. 대시로 표시해 rule을 압축할 수 있다.

## 수업/자료의 논리 흐름
- 비즈니스 프로세스는 X-ray처럼 눈에 보이지 않기 때문에 데이터 흐름을 시각화하는 도구가 필요하다.
- DFD는 data flow, data store, process, external entity 네 가지 기호만으로 시스템의 logical data flow를 표현한다.
- DFD는 physical implementation을 의도적으로 배제해 "어떤 정보가 어떻게 변환되는가"에 집중한다.
- 전체 시스템을 한 장에 그리면 복잡해지므로 context diagram에서 시작해 level-0, level-1, primitive DFD로 top-down decomposition한다.
- DFD 규칙은 black hole, miracle 같은 논리적 오류를 잡고, balancing으로 상위/하위 다이어그램의 일관성을 유지한다.
- DFD는 데이터가 언제 얼마나 자주 흐르는지 표현하지 않지만, 이는 timing을 배제하고 logical structure에 집중하기 위한 의도된 특징이다.
- 현재 업무를 DFD로 그리면 데이터 중복, 무한 루프, 불필요한 대기 같은 process gap이 드러난다.
- DFD는 process 내부의 decision logic까지 설명하지 못하므로 decision table이 필요하다.
- Decision table은 condition stub, action stub, rules로 구성되며, indifferent condition을 찾아 규칙 수를 줄일 수 있다.

## 사례 및 적용 포인트
- Hoosier Burger의 context diagram은 식당 시스템을 하나의 process로 두고 고객, 주방, 매니저 같은 external entity만 보여 준다.
- Level-0으로 내려가면 주문 접수, 재고 업데이트, 경영 보고서 같은 주요 process와 상품 판매 기록, 재고 목록 같은 data store가 나타난다.
- 조직에서 보고서와 데이터를 받기만 하고 아무 output을 내지 않는 부서는 DFD상 black hole처럼 해석할 수 있다.
- 필요한 input 없이 담당자가 추측으로 문서를 완성하는 과정은 miracle에 해당한다.
- IBM 대출 승인 process는 6일이 걸렸지만 실제 작업 시간은 약 90분뿐이었고, 나머지는 종이 서류가 부서 사이에서 대기하는 시간이었다.
- DFD를 통해 IBM은 5명의 전문가가 나눠 하던 업무를 한 명의 generalist가 통합 시스템으로 처리하도록 재설계해 시간을 크게 줄였다.
- Hoosier Burger 재주문 decision table에서는 부패하지 않는 냅킨의 경우 요일과 계절이 무관 조건이 되어 12개 규칙을 7개 규칙으로 줄일 수 있다.

## 에세이 대비 연결 포인트
- DFD는 implementation tool이 아니라 logical analysis tool이라는 점을 강조해야 한다.
- Black hole, miracle, balancing은 단순 규칙이 아니라 조직의 숨은 데이터 문제와 책임 누락을 드러내는 렌즈로 설명할 수 있다.
- DFD가 timing을 보여 주지 않는 것은 약점이라기보다 data structure와 transformation에 집중하기 위한 설계 선택이다.
- Decision table은 복잡한 조건문을 줄이고 예외 누락을 막아 system logic의 품질을 높인다.
- Process automation 전에 DFD로 현재 흐름을 점검하지 않으면, 비효율적인 업무를 더 빠르게 실행하는 결과가 될 수 있다.
