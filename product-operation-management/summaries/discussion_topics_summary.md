# Week 3

## Topic 1 : 단순한 Flow Diagram이 실제 Bottleneck, Rework, Delay, Capacity Constraint를 숨길 수 있는가?
- 이 주제는 깔끔한 process map이 운영 분석에 충분한지, 실제 공정의 복잡성을 지나치게 단순화하는지 묻는다.
- 핵심은 flow diagram의 clarity와 실제 capacity analysis의 accuracy 사이의 균형이다.

### 찬성측
- 단순한 **flow diagram**은 happy path만 보여주기 쉬워 error, rework, waiting, delay를 놓칠 수 있다.
- 표면적으로는 공정이 매끄러워 보여도 실제로는 특정 단계에서 WIP가 쌓이는 **hidden bottleneck**이 존재할 수 있다.
- Defect나 재작업이 반복되면 실제 capacity가 줄어드는데, 단순 diagram은 이런 변동성을 충분히 표현하지 못한다.
- 운영 개선을 위해서는 흐름의 순서뿐 아니라 processing time, queue, resource utilization, exception path까지 함께 봐야 한다.

### 반대측
- 단순한 flow diagram은 복잡한 공정을 빠르게 이해하게 해 주는 전략적 커뮤니케이션 도구다.
- 처음부터 모든 예외와 변동성을 넣으면 분석이 지나치게 복잡해져 핵심 bottleneck을 찾기 어려울 수 있다.
- High-level map은 세부 capacity analysis로 들어가기 전 공정 경계와 주요 단계에 대한 공통 이해를 만든다.
- 문제는 단순 diagram 자체가 아니라, 그것을 실제 운영의 완전한 representation으로 오해하는 데 있다.

## Topic 2 : Supply-Constrained 환경에서 Non-Bottleneck Capacity Buffer는 Waste인가, Resilience Buffer인가?
- 이 주제는 bottleneck이 전체 output을 결정할 때, 다른 resource의 낮은 utilization을 낭비로 볼지 운영 안정성을 위한 여유로 볼지 묻는다.
- 핵심은 capital efficiency와 system resilience 사이의 trade-off를 판단하는 것이다.

### 찬성측
- Bottleneck이 전체 throughput을 결정한다면 non-bottleneck에 과도한 capacity를 두는 것은 capital efficiency를 낮출 수 있다.
- 특정 resource가 계속 idle하면 조직은 실제 output 증가 없이 설비와 인력 비용만 부담하게 된다.
- Utilization gap이 크면 process design이 bottleneck 중심으로 최적화되지 않았다는 신호일 수 있다.
- 제한된 자본은 non-bottleneck capacity보다 bottleneck 제거, 품질 개선, setup reduction에 우선 배분되어야 한다.

### 반대측
- Non-bottleneck slack은 demand volatility, equipment failure, quality issue를 흡수하는 **resilience buffer**가 될 수 있다.
- 모든 resource를 100% utilization에 가깝게 운영하면 작은 disruption도 전체 flow를 쉽게 멈추게 만든다.
- Bottleneck 앞뒤의 여유 capacity는 bottleneck이 굶거나 막히지 않도록 보호해 overall throughput을 안정화한다.
- Supply-constrained system에서는 efficiency뿐 아니라 reliability와 recovery speed도 함께 고려해야 한다.

# Week 4

## Topic 1 : 고도로 세분화된 Assembly Line보다 Parallel Work Cells가 더 나은 상황이 있는가?
- 이 주제는 task specialization이 항상 efficiency를 높이는지, 또는 작업을 지나치게 잘게 나누면 coordination cost와 품질 문제가 커지는지 묻는다.
- 핵심은 specialization의 learning effect와 parallel work cells의 flexibility를 비교하는 것이다.

### 찬성측
- 작업은 물리적, 기술적, 인지적 이유로 무한히 쪼갤 수 없으므로 과도한 세분화는 오히려 비효율을 만들 수 있다.
- **Parallel work cells**에서는 작업자가 여러 단계를 함께 이해하므로 품질 문제와 예외 상황에 더 빠르게 대응할 수 있다.
- 제품 mix가 다양하거나 demand pattern이 변동적이면 rigid assembly line보다 flexible cell 구조가 더 안정적일 수 있다.
- 한 사람이 지나치게 단순한 반복 작업만 수행하면 motivation과 ownership이 낮아져 장기 productivity가 떨어질 수 있다.

### 반대측
- 고도로 세분화된 assembly line은 반복 학습을 통해 속도, 정확성, cost advantage를 만들 수 있다.
- Task specialization은 training을 단순화하고 작업 표준화를 쉽게 만들어 high-volume production에 적합하다.
- 작업이 명확히 나뉘면 책임 범위와 performance measurement가 분명해져 관리가 쉬워진다.
- Parallel work cells는 작업자에게 더 넓은 skill을 요구하므로 training cost와 performance variability가 커질 수 있다.

## Topic 2 : TPS식 Idle Time 제거는 Productivity를 높이는가, Root-Cause Problem Solving을 위한 Slack을 없애는가?
- 이 주제는 idle time을 waste로 보고 제거하는 것이 좋은지, 문제 탐색과 개선을 위한 여유를 남겨야 하는지 묻는다.
- 핵심은 waste reduction과 improvement capacity를 구분해서 판단하는 것이다.

### 찬성측
- Idle time 제거는 자원 활용도를 높이고 같은 인력과 설비로 더 많은 output을 만들게 한다.
- TPS 관점에서 낭비를 줄이면 문제가 더 빨리 드러나고, 팀이 표준 작업과 flow 개선에 집중하게 된다.
- 불필요한 대기 시간이 줄어들면 cycle time이 짧아지고 customer response가 빨라질 수 있다.
- Discipline 있는 운영은 느슨한 buffer에 의존하지 않고 defect와 delay의 원인을 지속적으로 제거하게 만든다.

### 반대측
- 모든 시간을 production으로 채우면 작업자가 defect, delay, process instability의 root cause를 분석할 여유가 사라질 수 있다.
- **Slack**은 단순한 낭비가 아니라 kaizen, training, problem solving을 가능하게 하는 improvement capacity가 될 수 있다.
- 100% utilization에 가까운 시스템은 작은 변동에도 queue와 delay가 급격히 증가할 위험이 있다.
- 제거해야 할 idle time과 의도적으로 남겨야 할 learning time을 구분하지 않으면 단기 productivity가 장기 품질 개선을 해칠 수 있다.

# Week 5

## Topic 1 : 공장은 Output 개선을 위해 Inventory 추가보다 Variability Reduction을 우선해야 하는가?
- 이 주제는 output을 개선할 때 root cause인 variability를 줄여야 하는지, 불확실성을 흡수하기 위해 inventory buffer를 둬야 하는지 묻는다.
- 핵심은 inventory를 waste로 볼지, variability를 관리하는 engineering tool로 볼지 비교하는 것이다.

### 찬성측
- Inventory는 unreliable process를 가리는 buffer가 되어 root cause를 해결하려는 urgency를 낮출 수 있다.
- WIP buffer가 많아지면 carrying cost, longer lead time, delayed defect detection 같은 hidden cost가 발생한다.
- Toyota식 low inventory는 문제를 노출시켜 variability reduction과 continuous improvement를 촉진한다.
- **VUT Equation** 관점에서 variability를 줄이면 cycle time 압박을 구조적으로 낮출 수 있다.

### 반대측
- Equipment, material, demand에서 발생하는 variability는 완전히 제거할 수 없으므로 일정 수준의 buffer가 필요하다.
- Strategic inventory는 낭비가 아니라 disruption을 흡수하고 service level을 지키는 운영 설계 도구가 될 수 있다.
- Variability reduction에는 diminishing returns가 있어 어느 시점부터는 buffer가 더 경제적인 선택일 수 있다.
- Buffer 없이 공정을 운영하면 작은 공급 충격이나 품질 문제가 곧바로 output failure로 이어질 수 있다.

## Topic 2 : Zero Inventory는 Calculated Buffer로 대체하지 말고 Aspirational Target으로 유지해야 하는가?
- 이 주제는 **Zero Inventory**를 지속적인 개선 방향으로 유지할지, data 기반의 calculated buffer 수준으로 대체할지 묻는다.
- 핵심은 lean ideal과 quantitative risk management 사이의 균형이다.

### 찬성측
- Zero Inventory는 실제 재고를 즉시 0으로 만들라는 명령보다 문제를 계속 드러내는 improvement target으로 기능한다.
- 높은 buffer를 편안하게 받아들이면 overstock이 정당화되고 process improvement 압력이 약해질 수 있다.
- 재고를 줄이려는 목표는 defect, setup time, supplier reliability 같은 근본 문제를 해결하게 만든다.
- Toyota의 성공은 "안전한 재고 수준"에 안주하지 않고 zero에 가까워지려는 지속적 노력과 연결된다.

### 반대측
- 정량적 근거 없는 zero inventory 구호는 reckless buffer cut으로 이어져 real operational failure를 만들 수 있다.
- Demand variability, lead time, service level을 계산해 필요한 safety stock을 정하는 것이 더 책임 있는 의사결정이다.
- Supply disruption이나 demand spike가 큰 환경에서는 inventory가 고객 서비스와 매출을 보호하는 risk buffer가 된다.
- Aspirational target만 강조하면 현장의 실제 uncertainty와 recovery time을 과소평가할 위험이 있다.

# Week 6

## Topic 1 : Service Companies는 높은 Labor Cost를 Expense보다 Superior Performance를 위한 Investment로 봐야 하는가?
- 이 주제는 서비스 기업의 높은 인건비를 줄여야 할 비용으로 볼지, 서비스 품질과 customer loyalty를 만드는 투자로 볼지 묻는다.
- 핵심은 labor cost minimization과 **Service-Profit Chain** 관점의 장기 performance를 비교하는 것이다.

### 찬성측
- 서비스 품질은 사람에게 크게 의존하므로 낮은 임금과 부족한 training은 turnover와 inconsistent service를 만들 수 있다.
- 높은 labor spending은 직원 만족, service quality, customer loyalty, profitability로 이어지는 investment가 될 수 있다.
- Costco와 Trader Joe's처럼 labor를 investment로 보는 기업은 안정적인 인력과 높은 고객 경험을 만들 수 있다.
- 단기 임금 절감이 turnover, 재교육, 품질 실패 비용을 키우면 total cost는 오히려 높아질 수 있다.

### 반대측
- Labor는 service operations에서 가장 큰 controllable cost 중 하나이므로 disciplined cost management가 필요하다.
- Standardization과 automation을 활용하면 premium wage 없이도 consistent service를 제공할 수 있다.
- 높은 labor cost는 margin을 압박하고 price flexibility를 낮춰 cost leadership 전략과 충돌할 수 있다.
- Walmart나 Ryanair처럼 낮은 비용 구조를 통해 가격 경쟁력과 operational discipline을 확보하는 전략도 가능하다.

## Topic 2 : Demand가 Capacity를 초과할 때 Price Increase를 Capacity Expansion보다 우선해야 하는가?
- 이 주제는 초과수요 상황에서 가격을 올려 margin을 확보할지, capacity를 늘려 market share와 접근성을 지킬지 묻는다.
- 핵심은 ROIC, fixed cost risk, customer loyalty 사이의 trade-off를 판단하는 것이다.

### 찬성측
- 초과수요는 pricing power를 의미하므로 price increase는 기존 capacity로 margin과 ROIC를 빠르게 개선할 수 있다.
- Capacity expansion은 큰 capital investment와 fixed cost를 만들며, demand가 줄어들면 되돌리기 어렵다.
- 가격 인상은 structural cost를 추가하지 않고 demand를 조절하는 비교적 빠른 방법이다.
- 불확실한 shortage period에는 새 설비나 인력 확충보다 가격 조정이 더 낮은 risk를 가질 수 있다.

### 반대측
- Price increase는 customer defection과 brand damage를 만들 수 있으며, 경쟁사가 displaced demand를 가져갈 수 있다.
- Quality-driven market에서는 delivery speed와 accessibility가 loyalty를 결정하므로 capacity expansion이 장기 market share를 지킨다.
- Capacity 부족이 계속되면 lead time이 길어지고 고객은 더 안정적인 공급자를 찾게 된다.
- 초과수요가 구조적 성장 신호라면 expansion은 단기 비용보다 장기 성장 기회를 확보하는 선택일 수 있다.

# Week 7

## Topic 1 : TPS 도입은 High-Mix High-Volume Electronics Manufacturer와 Service-Oriented Companies에서 어떻게 조정되어야 하는가?
- 이 주제는 TPS를 단순 복제할지, business context에 맞춰 원칙을 조정할지 묻는다.
- 핵심은 TPS를 waste reduction 도구가 아니라 context-sensitive operating system으로 이해하는 것이다.

### 적용 관점
- High-mix high-volume electronics manufacturer에서는 TPS가 defect visibility, standardized work, setup reduction, supplier coordination에 도움을 줄 수 있다.
- 제품 다양성이 큰 환경에서는 Just-in-Time과 표준화를 그대로 적용하기보다 flexibility와 buffer policy를 함께 설계해야 한다.
- Service-oriented companies에서는 pull, visual management, WIP limit, kaizen, root-cause problem solving을 대기시간과 service error 감소에 적용할 수 있다.
- Software development나 retail에서는 physical inventory보다 information flow, queue, customer experience를 중심으로 TPS 원칙을 변형해야 한다.
- Fishbowl discussion에서는 참여자가 각 business context에서 TPS adoption stance와 implementation approach를 구체적으로 제시해야 한다.

### Red Team 관점
- Red Team은 TPS가 모든 조직에 같은 방식으로 맞는지, 단순 도구 복제가 context mismatch를 만들지 점검해야 한다.
- High-mix 환경에서 지나친 standardization이 product flexibility와 customization capability를 제한할 수 있다.
- Buffer를 과도하게 줄이면 supply disruption, demand volatility, quality issue에 대한 resilience가 약해질 수 있다.
- Service work를 제조처럼 표준화하면 human judgment, tacit knowledge, customer interaction quality가 손상될 수 있다.
- Fishbowl 형식에서는 Red Team의 반론을 통해 TPS의 장점뿐 아니라 implementation risk와 boundary condition까지 함께 검토해야 한다.
