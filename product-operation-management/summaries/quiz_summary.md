# Week 3

## 핵심 주제
- 프로세스 capacity와 bottleneck을 정의하고, 실제 output인 flow rate와 구분한다.
- 수요와 capacity의 관계에 따라 demand-constrained 또는 supply-constrained 상태를 판단한다.

## 핵심 개념
- **Process Capacity**: 전체 시스템이 낼 수 있는 최대 output rate. 가장 낮은 resource capacity가 결정한다.
- **Bottleneck**: 시스템에서 capacity가 가장 낮아 전체 속도를 제한하는 resource 또는 step.
- **Flow Rate**: 실제로 시스템을 통과해 완료되는 output rate. `min {input rate, demand, process capacity}`로 이해한다.
- **Utilization**: 실제 flow rate를 capacity로 나눈 값. 일반 utilization은 100%를 넘지 않는다.
- **Implied Utilization**: demand를 capacity와 비교한 값. demand pressure를 보여주므로 100%를 넘을 수 있다.
- **Demand-Constrained**: demand가 capacity보다 낮아 output이 수요에 의해 제한되는 상태.
- **Supply-Constrained**: demand가 capacity보다 높아 output이 capacity에 의해 제한되는 상태.

## 수업/자료의 논리 흐름
- Capacity는 "할 수 있는 최대치"이고, flow rate는 "실제로 흐르는 양"이다.
- Bottleneck capacity보다 많이 생산할 수 없으며, demand가 낮으면 bottleneck조차 idle time을 가질 수 있다.
- Demand가 갑자기 capacity를 넘으면 bottleneck 앞에 backlog 또는 queue가 쌓인다.

## 사례 및 적용 포인트
- 시간당 30개를 처리하는 machine이 8시간 운영되면 daily capacity는 240 units이다.
- 높은 utilization은 병목 후보를 찾는 데 유용하지만, 병목의 정의는 가장 낮은 capacity에 있다.

## 에세이 대비 연결 포인트
- Capacity, flow rate, utilization, implied utilization을 서로 바꿔 쓰지 않는 것이 중요하다.
- "수요가 늘었다"는 현상을 output 증가로 바로 연결하지 말고, capacity 초과 여부와 backlog 발생 여부를 함께 설명한다.

# Week 4

## 핵심 주제
- Labor cost를 단순 wage rate가 아니라 flow rate, idle time, line balancing과 연결해 이해한다.
- 노동 활용률 최대화가 항상 목적은 아니며, bottleneck과 demand 조건에 맞게 process를 개선해야 한다.

## 핵심 개념
- **Labor Content**: 제품 1개를 만들기 위해 필요한 모든 labor processing time의 합.
- **Idle Time**: worker가 대기하지만 생산활동을 하지 않는 시간.
- **Line Balancing**: 작업을 station 간에 재배분해 bottleneck과 idle time을 줄이는 활동.
- **Labor Cost per Unit**: 총 지급 임금을 실제 생산량으로 나눈 값. Flow rate가 증가하면 보통 낮아진다.
- **Worker-Paced Bottleneck**: worker-paced line에서 processing time이 가장 긴 worker 또는 station.

## 수업/자료의 논리 흐름
- Process objective는 labor utilization 자체를 최대화하는 것이 아니라 수요에 맞춰 가치를 만드는 것이다.
- Demand-constrained process에서는 bottleneck도 idle time을 가질 수 있다.
- Idle time은 worker에게 임금이 지급되는 동안 output이 만들어지지 않는 시간이므로 단위당 노동비를 높인다.
- Line balancing은 현재 인력과 장비를 유지한 채 숨은 capacity를 열 수 있는 개선 방식이다.

## 사례 및 적용 포인트
- 총임금이 일정할 때 flow rate가 증가하면 direct labor cost per unit은 감소한다.
- 병목 worker의 일부 작업을 여유 station으로 옮기면 bottleneck CT를 줄이고 전체 capacity를 높일 수 있다.

## 에세이 대비 연결 포인트
- Labor cost 절감은 임금을 낮추는 것만이 아니라 flow rate를 높이고 idle time을 줄여 단위당 비용을 낮추는 방식으로 설명할 수 있다.
- Idle time은 비용 관점에서는 부담이지만, 개선과 문제 해결을 위한 slack으로 볼 수 있는 논점도 남는다.

# Week 5

## 핵심 주제
- Batch와 setup이 있을 때 batch size가 capacity와 inventory에 어떤 영향을 주는지 정리한다.
- 큰 batch와 작은 batch의 trade-off를 responsiveness, inventory, setup burden 관점에서 이해한다.

## 핵심 개념
- **Batch**: 함께 처리되는 flow units의 묶음.
- **Setup Time / Changeover Time**: 다른 제품이나 공정 조건으로 넘어가기 위해 장비를 준비하는 시간.
- **Effective Capacity**: 실제 processing에 쓸 수 있는 시간에서 setup 부담을 고려한 capacity.
- **Cycle Inventory**: batch 생산 때문에 생기는 평균 재고.
- **SMED**: setup 시간을 줄여 작은 batch에서도 비용과 responsiveness를 동시에 개선하려는 방법.

## 수업/자료의 논리 흐름
- Setup time이 존재하면 큰 batch는 setup 시간을 더 많은 unit에 나누므로 capacity 측면에서 유리하다.
- 그러나 큰 batch는 생산과 demand의 동기화를 약하게 만들어 inventory와 lead time을 증가시킨다.
- Setup이 non-bottleneck에서 발생하고 demand가 낮다면 batch size를 줄여도 전체 flow rate가 떨어지지 않을 수 있다.
- 제품 variety가 늘면 setup 빈도가 증가하고, capacity를 유지하려면 batch size와 cycle inventory가 커지기 쉽다.

## 사례 및 적용 포인트
- Setup이 bottleneck에서 발생하고 demand가 capacity를 초과하면 큰 batch가 더 매력적이다.
- Quick setup 기술은 responsiveness를 높이면서 per-unit cost를 낮출 수 있는 핵심 개선 방향이다.

## 에세이 대비 연결 포인트
- Batch size 문제는 "큰 batch가 좋다/나쁘다"가 아니라 setup 위치, demand 수준, bottleneck 여부에 따라 달라지는 trade-off로 설명해야 한다.
- Product variety 증가는 고객 대응력을 높이지만 setup과 inventory 부담을 키울 수 있다.

# Week 6

## 핵심 주제
- 운영 지표가 재무성과, 특히 ROIC와 firm value에 연결되는 방식을 정리한다.
- DuPont decomposition과 KPI tree를 통해 high-level financial metric을 현장 활동으로 번역한다.

## 핵심 개념
- **Economic Value**: ROIC가 WACC를 초과할 때 창출되는 가치.
- **ROIC**: 투입자본 대비 수익률.
- **DuPont Decomposition**: ROIC를 margin과 asset turns로 나누어 성과 원인을 보는 방식.
- **KPI Tree**: ROIC 같은 상위 지표를 flow rate, setup time, inventory, price, costs 등 daily controllable variables로 연결하는 구조.
- **Working Capital**: inventory, receivables 등 일상 운영에 묶인 자본.
- **Load Factor**: airline 예시에서 utilization과 유사하게 capacity 대비 실제 사용 정도를 나타내는 지표.

## 수업/자료의 논리 흐름
- Managers는 ROIC 자체를 매일 직접 조작할 수 없지만, ROIC에 영향을 주는 운영 변수는 관리할 수 있다.
- Flow rate는 margin과 asset turns 양쪽에 영향을 준다.
- Setup time 감소는 capacity와 flow rate를 높이고, fixed cost를 더 많은 unit에 분산시켜 margin과 ROIC를 개선할 수 있다.
- Inventory는 working capital에 포함되므로 inventory 감소는 invested capital을 낮춰 ROIC를 개선할 수 있다.

## 사례 및 적용 포인트
- Machine setup time을 줄이면 생산량이 늘고, 이미 발생한 fixed cost를 더 많은 unit에 나누어 firm value 개선으로 이어질 수 있다.
- Finished goods inventory는 working capital이므로 운영 개선의 재무 효과를 설명할 때 중요한 연결고리다.

## 에세이 대비 연결 포인트
- 운영 개선의 효과를 말할 때 "flow rate 증가", "inventory 감소", "margin 개선", "asset turns 개선" 중 어떤 경로인지 명확히 해야 한다.
- ROIC tree는 현장 작업과 재무지표 사이의 번역 도구로 설명할 수 있다.

# Week 7

## 핵심 주제
- **Lean Operations**와 **Toyota Production System (TPS)**의 기본 원칙을 정리한다.
- Waste 제거, pull system, standardized work, visual management, employee problem-solving의 연결을 이해한다.

## 핵심 개념
- **Muda**: 고객에게 가치를 더하지 않는 활동. Overproduction, waiting time, inventory 등이 대표적이다.
- **Kaizen**: 모든 구성원이 참여하는 지속적이고 점진적인 개선.
- **Just-in-Time (JIT)**: 필요한 것을 필요한 때에 필요한 만큼 생산하는 방식.
- **Jidoka**: 이상을 감지하면 공정을 멈추고 원인을 해결하는 autonomation.
- **Pull System**: downstream process 또는 customer demand가 생산 신호를 보내는 방식.
- **Takt Time**: `Available Work Time / Customer Demand`.
- **Standardized Work**: 현재 가장 좋은 작업 방식을 표준으로 정해 문제를 보이게 하고 개선의 기준을 만드는 것.
- **Visual Management**: 문제와 상태를 현장에서 바로 보이게 만드는 관리 방식.
- **One-Piece Flow**: 재고와 대기 시간을 줄이기 위해 unit이 하나씩 흐르도록 하는 이상적 흐름.

## 수업/자료의 논리 흐름
- Lean은 단순히 output을 최대화하는 것이 아니라 non-value-added activities를 줄여 flow와 quality를 개선한다.
- TPS의 핵심 축은 JIT와 jidoka이며, 표준화와 시각관리는 문제를 드러내는 기반이다.
- JIT는 inventory buffer를 줄여 waste를 드러내지만, 외부 충격에는 취약해질 수 있다.
- Worker는 단순 작업자가 아니라 결함을 발견하고 root cause를 해결하는 현장 전문가로 다뤄진다.

## 사례 및 적용 포인트
- Poka-yoke, Andon, 5 Whys는 이상을 보이게 하고 원인을 찾아 kaizen으로 연결하는 도구다.
- Push system은 즉각적 수요와 무관하게 생산해 inventory를 만들기 쉽고, pull system은 downstream demand에 맞춰 생산해 waste를 줄인다.

## 에세이 대비 연결 포인트
- Lean은 inventory 감소만이 아니라 quality, visibility, employee involvement, continuous improvement를 함께 포함한다.
- JIT의 장점과 위험을 함께 설명하면 균형 잡힌 답변이 된다.
