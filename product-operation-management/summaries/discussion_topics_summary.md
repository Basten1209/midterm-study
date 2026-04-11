# Week 3

## 핵심 주제
- 단순한 **flow diagram**이 실제 bottleneck, capacity constraint, rework, delay를 숨길 수 있는지 논의한다.
- **Supply-constrained** 환경에서 bottleneck 중심 설계와 non-bottleneck capacity buffer의 의미를 비교한다.

## 핵심 개념
- **Simplified Flow Diagram**: 프로세스 흐름을 단순화해 보여주는 그림. 명확성은 높지만 실제 변동성과 예외 경로를 누락할 수 있다.
- **Happy Path**: 문제가 없을 때의 정상 흐름. 실제 운영에서는 error, rework, waiting, delay가 capacity를 바꾼다.
- **Hidden Bottleneck**: 표면적 flowchart에는 드러나지 않지만 실제로 WIP와 delay를 만드는 제약.
- **Utilization Gap**: bottleneck과 다른 resource 사이의 utilization 차이.
- **Theory of Constraints (TOC)**: 전체 시스템 성과가 가장 약한 제약에 의해 결정된다는 관점.
- **Resilience Buffer**: 낭비처럼 보일 수 있지만 변동성과 충격을 흡수하기 위해 의도적으로 남겨둔 여유 capacity.

## 수업/자료의 논리 흐름
- 단순 flowchart는 전략적 커뮤니케이션에는 유용하지만, 실제 capacity 분석에서는 rework, defect, waiting, variability를 숨길 수 있다.
- 찬성 논리는 "지도는 실제 영토가 아니다"라는 관점이다. 깔끔한 process map만 믿으면 병목과 traffic jam을 놓칠 수 있다.
- 반대 논리는 "위성사진보다 나침반이 필요하다"는 관점이다. 지나치게 복잡한 분석은 방향성을 흐릴 수 있고, 단순도는 전략 수립에 도움이 된다.
- Supply-constrained 환경에서는 bottleneck이 전체 속도를 정하므로 시스템을 bottleneck 중심으로 설계해야 한다.
- Bottleneck은 100% 일하고 다른 resource가 크게 idle하면 과잉 capacity를 산 것처럼 볼 수도 있고, 변동성에 대비한 insurance로 볼 수도 있다.

## 사례 및 적용 포인트
- Non-bottleneck 설비가 지나치게 많은 capacity를 가지면 capital efficiency가 낮아질 수 있다.
- 반대로 demand volatility, equipment failure, quality issue가 크다면 non-bottleneck slack은 system resilience를 높일 수 있다.

## 에세이 대비 연결 포인트
- 단순 diagram을 비판할 때는 "틀렸다"보다 "분석 목적에 따라 충분하지 않을 수 있다"로 설명하는 것이 정확하다.
- Utilization gap은 무조건 waste가 아니라 design failure와 resilience buffer 두 해석이 모두 가능하므로, context를 붙여 판단해야 한다.

# Week 4

## 핵심 주제
- 고도로 세분화된 assembly line이 항상 효율적인지, 또는 **parallel work cells**가 더 나은 상황이 있는지 논의한다.
- TPS식 idle time 제거가 productivity에는 도움이 되지만, root-cause problem solving을 위한 **slack**을 없앨 위험이 있는지 검토한다.

## 핵심 개념
- **Task Specialization**: 일을 작은 반복 작업으로 나누어 작업자가 특정 작업만 수행하게 하는 방식.
- **Parallel Work Cells**: 여러 작업자가 각각 여러 단계를 묶어 수행하거나 완제품 단위로 병렬 처리하는 구조.
- **Indivisibility of Work**: 작업을 무한히 잘게 나눌 수 없다는 한계.
- **Slack**: 당장의 생산에는 쓰이지 않지만 문제 탐색과 개선에 쓸 수 있는 여유 시간 또는 여유 capacity.
- **Idle Time as Waste**: 생산에 직접 기여하지 않는 대기 시간을 waste로 보는 관점.
- **Root-Cause Problem Solving**: 표면 증상이 아니라 결함이나 지연의 근본 원인을 찾아 제거하는 활동.

## 수업/자료의 논리 흐름
- 찬성 논리는 high-volume assembly에서도 작업을 지나치게 잘게 자르면 coordination cost와 motivation 문제가 커질 수 있다는 관점이다.
- 작업 분할에는 물리적, 기술적, 인지적 한계가 있으므로, 어떤 상황에서는 각 작업자가 여러 단계를 맡는 parallel cells가 더 빠르거나 안정적일 수 있다.
- 반대 논리는 specialization이 산업화의 핵심 엔진이라는 관점이다. 반복 작업은 학습효과와 속도, cost advantage를 만들 수 있다.
- Idle time 제거 논의에서는 100% 바쁘게 만드는 것이 단기 productivity는 높일 수 있지만, 문제 원인을 찾고 개선할 여유를 없앨 수 있다는 우려가 제기된다.
- 반대 관점에서는 idleness를 줄이면 discipline이 생기고 문제가 더 빨리 드러나 quality improvement로 이어질 수 있다고 본다.

## 사례 및 적용 포인트
- "Stop slicing the cake into crumbs"는 과도한 작업 세분화가 오히려 비효율을 만들 수 있음을 설명하는 비유다.
- "Breathing room to think"는 slack이 단순한 낭비가 아니라 improvement capacity가 될 수 있음을 설명한다.

## 에세이 대비 연결 포인트
- Specialization vs parallel cells는 속도와 비용만이 아니라 작업 분할 가능성, motivation, quality feedback, flexibility를 함께 봐야 한다.
- Idle time 논의는 waste reduction과 kaizen을 구분해서, 제거해야 할 idle과 의도적으로 남길 slack을 나눠 설명하면 좋다.

# Week 5

## 핵심 주제
- Variability를 줄이는 것과 inventory buffer를 추가하는 것 중 무엇이 output 개선에 더 적합한지 논의한다.
- **Zero Inventory**를 실천적 목표로 볼지, 계산된 buffer 수준으로 대체할지 비교한다.

## 핵심 개념
- **Variability**: 수요, 설비, 작업시간, 품질 등에서 발생하는 변동성.
- **Inventory / WIP Buffer**: 변동성을 흡수하기 위해 공정 사이에 두는 재고.
- **VUT Equation**: `Cycle Time = Variability x Utilization x Process Time`으로 정리되는 사고방식. Variability와 utilization이 높을수록 cycle time 압박이 커진다.
- **Zero Inventory**: 재고를 궁극적으로 없애려는 lean 지향점.
- **Safety Stock / Buffer**: 서비스 수준과 불확실성을 고려해 의도적으로 보유하는 재고.
- **Risk Exposure**: buffer를 줄였을 때 disruption에 노출되는 정도.

## 수업/자료의 논리 흐름
- Variability reduction 찬성 논리는 inventory가 root cause를 가리고 개선 압력을 줄인다는 점을 강조한다.
- Buffer 찬성 논리는 variability는 완전히 제거할 수 없으므로 inventory를 engineering tool로 써야 한다는 점을 강조한다.
- Zero Inventory 찬성 논리는 comfort를 줄이고 문제를 계속 드러내는 aspirational target의 역할을 본다.
- Calculated buffer 찬성 논리는 demand variability, lead time, service level을 계산해 buffer를 정해야 하며, 구호만으로 buffer를 줄이면 operational failure가 생긴다고 본다.

## 사례 및 적용 포인트
- Toyota식 low inventory는 문제를 드러내고 개선하게 만드는 장점이 있지만, 공급 충격이나 수요 변동이 크면 buffer 없는 시스템은 취약해진다.
- Inventory는 carrying cost, longer lead time, delayed defect detection을 만들 수 있다.

## 에세이 대비 연결 포인트
- Inventory를 무조건 waste로만 보지 말고, 문제 은폐 비용과 risk absorption 기능을 함께 설명해야 한다.
- Zero inventory는 실제 재고 0을 당장 강제하는 정책보다 개선 방향을 유지하는 목표로 이해하는 편이 균형적이다.

# Week 6

## 핵심 주제
- 서비스 기업에서 높은 labor cost를 superior performance를 위한 investment로 볼지, 최소화해야 할 expense로 볼지 논의한다.
- Demand가 capacity를 초과할 때 price increase와 capacity expansion 중 어떤 대응이 적절한지 비교한다.

## 핵심 개념
- **Service-Profit Chain**: 직원 만족, 서비스 품질, 고객 충성도, 수익성이 연결된다는 관점.
- **Labor as Investment**: 임금과 교육을 비용이 아니라 품질과 loyalty를 만드는 투자로 보는 관점.
- **Cost Leadership**: 낮은 비용 구조를 통해 가격 경쟁력과 profitability를 확보하는 전략.
- **Demand-Capacity Gap**: demand가 available capacity를 초과하는 상태.
- **Pricing Power**: 초과수요 상황에서 가격을 올려도 고객 이탈이 제한될 수 있는 힘.
- **ROIC Trade-off**: price increase는 margin을 빠르게 높일 수 있고, capacity expansion은 fixed cost와 invested capital을 늘릴 수 있다.

## 수업/자료의 논리 흐름
- Labor investment 찬성 논리는 서비스 품질이 사람에게 의존하므로 낮은 임금이 turnover와 품질 불안정을 불러 더 큰 total cost를 만들 수 있다고 본다.
- Labor cost minimization 찬성 논리는 노동이 가장 큰 controllable cost이며, standardization과 automation으로 premium wage 없이도 일관된 서비스를 만들 수 있다고 본다.
- Price increase 찬성 논리는 초과수요가 pricing power를 의미하며, 신규 capacity 투자보다 즉각적으로 margin과 ROIC를 개선한다고 본다.
- Capacity expansion 찬성 논리는 가격 인상이 고객 이탈과 brand damage를 부를 수 있고, 접근성과 delivery speed가 장기 market share를 좌우한다고 본다.

## 사례 및 적용 포인트
- Costco와 Trader Joe's는 labor spending을 service quality와 loyalty의 investment로 보는 사례로 연결된다.
- Walmart와 Ryanair는 cost discipline과 process standardization의 사례로 연결된다.
- 초과수요에서 capacity expansion은 long-term share를 지킬 수 있지만, demand가 사라지면 fixed cost risk가 남는다.

## 에세이 대비 연결 포인트
- 서비스 labor cost 논의는 단기 비용과 장기 품질/turnover 효과를 구분해서 써야 한다.
- 초과수요 대응은 price, capacity, ROIC, market share의 trade-off로 설명하면 운영과 재무를 함께 연결할 수 있다.

# Week 7

## 핵심 주제
- **Toyota Production System (TPS)**을 도입할지, 도입한다면 어떤 business context에서 어떤 방식으로 구현할지 논의한다.
- High-mix high-volume electronics manufacturer와 service-oriented companies를 비교한다.

## 핵심 개념
- **TPS**: Just-in-Time, jidoka, standardized work, kaizen 등을 통해 waste를 줄이고 품질과 flow를 개선하는 운영 시스템.
- **High-Mix, High-Volume**: 제품 다양성과 생산량이 모두 높은 환경. 표준화와 유연성이 동시에 필요하다.
- **Service Operations**: software development, retail 등 물리적 재고보다 정보 흐름, 대기, 품질 편차, 고객 경험이 중요한 운영.
- **Red Team**: 제안의 취약점과 반례를 공격적으로 검토하는 역할.
- **Fishbowl Discussion**: 일부 참여자가 안쪽에서 토론하고, 필요시 외부 참여자가 교체되어 들어오는 토론 방식.

## 수업/자료의 논리 흐름
- Electronics manufacturer에서는 TPS가 defect visibility, standardized work, flow stability에 도움을 줄 수 있지만, 제품 다양성이 크면 지나친 표준화가 flexibility를 제한할 수 있다.
- Service companies에서는 pull, visual management, kaizen, root-cause problem solving을 대기시간과 오류 감소에 적용할 수 있다.
- TPS 도입은 단순 도구 복제가 아니라 context에 맞춘 operating system 설계로 봐야 한다.
- Red Team은 "TPS가 모든 조직에 같은 방식으로 맞는가", "buffer를 줄였을 때 resilience가 약해지지 않는가", "서비스 업무를 제조처럼 표준화할 수 있는가"를 계속 점검하게 만든다.

## 사례 및 적용 포인트
- Electronics에서는 Andon, defect stop, setup reduction, supplier coordination 같은 방식이 적용될 수 있다.
- Software나 retail에서는 visual board, WIP limit, standardized service routine, continuous improvement meeting으로 변형될 수 있다.

## 에세이 대비 연결 포인트
- TPS adoption을 찬반으로만 쓰지 말고, 어떤 industry context에서 어떤 principle을 조정해 적용할지 설명해야 한다.
- Red Team 관점까지 포함하면, lean의 장점과 risk를 모두 이해하고 있다는 답변 구조를 만들 수 있다.
