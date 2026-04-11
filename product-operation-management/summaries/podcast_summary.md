# Week 1

## 핵심 주제
- **Matching Supply and Demand**가 운영관리의 기본 문제라는 점을 사례 중심으로 설명한다.
- 수요는 빠르게 변하지만 공급은 설비, 인력, 공급망 때문에 경직적이므로 mismatch가 반복된다.

## 핵심 개념
- **Demand-Supply Mismatch**: 수요와 공급이 맞지 않아 lost sales, excess inventory, waiting, idle capacity가 생기는 상태.
- **Rigid Supply**: 공장, 항공기, 인력, 공급망처럼 단기간에 쉽게 늘리거나 줄이기 어려운 공급 구조.
- **Load Factor**: 항공기 좌석 capacity 중 실제로 승객이 채운 비율. 고정비가 큰 산업에서 수익성에 큰 영향을 준다.
- **Efficiency Frontier**: service responsiveness와 labor productivity처럼 서로 상충하는 성과 지표 사이에서 달성 가능한 효율적 경계.
- **Trade-off**: 한 성과를 높이면 다른 성과가 희생되는 관계.

## 수업/자료의 논리 흐름
- Airbus A380은 너무 큰 aircraft capacity를 전제로 설계되어 특정 고수요 노선에서는 유리했지만, 수요 변동에 유연하게 대응하기 어려웠다.
- PlayStation 5는 팬데믹 시기 게임기 수요가 폭증했지만 반도체 공급망 제약 때문에 unmet demand가 발생했다.
- 2020년 원유 가격이 음수가 된 사례는 수요가 급감했지만 공급과 저장 구조가 즉시 멈추지 못한 극단적 mismatch다.
- 항공사는 비용의 상당 부분이 fixed cost이므로, 탑승률이 몇 퍼센트포인트만 올라가도 추가 승객의 revenue가 대부분 profit으로 전환될 수 있다.
- 콜센터 예시는 운영 개선 접근을 세 단계로 정리한다: inefficiency 제거, 전략에 맞는 trade-off 지점 선택, 기술/프로세스 혁신으로 frontier 자체 확장.

## 사례 및 적용 포인트
- Premium service 전략이면 더 많은 인력과 짧은 waiting time을 선택할 수 있고, low-cost 전략이면 어느 정도의 waiting을 감수하고 labor productivity를 높일 수 있다.
- AI chatbot이나 상담 시스템 개선은 단순 trade-off 안에서 움직이는 것이 아니라 responsiveness와 productivity를 동시에 개선해 frontier를 이동시킬 수 있다.

## 에세이 대비 연결 포인트
- 수요와 공급을 맞춘다는 것은 단순 예측 문제가 아니라, demand variability와 supply rigidity 사이에서 capacity, inventory, price, process design을 조정하는 문제다.
- 운영관리의 목표는 무조건 utilization 100%가 아니라 strategy에 맞는 trade-off를 고르고, 가능하면 process innovation으로 trade-off 자체를 완화하는 것이다.

# Week 2

## 핵심 주제
- 조직을 **process**라는 블랙박스로 보고, flow unit이 들어가서 output이 되는 흐름을 분석한다.
- **Little's Law**를 이용해 inventory, flow rate, flow time의 관계를 이해한다.

## 핵심 개념
- **Flow Unit**: 프로세스를 통과하는 분석 대상. 병원에서는 환자, 공장에서는 제품, 세무서에서는 신고서가 된다.
- **Inventory**: 프로세스 안에 머물고 있는 flow units의 수. 병원 대기실의 환자도 process inventory다.
- **Flow Time**: flow unit이 프로세스에 들어와 나갈 때까지 걸리는 총 시간. 가치창출 시간과 waiting time을 모두 포함한다.
- **Flow Rate**: 단위 시간당 프로세스가 output을 내보내는 속도.
- **Little's Law**: `Average Inventory = Average Flow Rate x Average Flow Time`.
- **Inventory Turnover**: 일정 기간 동안 inventory가 얼마나 빨리 매출이나 output으로 전환되는지 보여주는 지표.
- **Product-Process Matrix**: 제품 variety/volume과 process type의 적합성을 설명하는 프레임.

## 수업/자료의 논리 흐름
- 병원 중재적 방사선과 사례에서 Gantt chart의 순수 처리시간은 약 2시간이어도, 실제 환자 경험에는 waiting time이 포함된다.
- Process 관점에서는 부가가치 활동뿐 아니라 waiting과 queue도 flow time에 영향을 주므로 반드시 분석해야 한다.
- Champagne 산업은 숙성 때문에 flow time이 길고 inventory가 매우 크다. 이는 Little's Law로 설명할 수 있다.
- 대기실 평균 inventory와 시간당 처리율을 알면, 개별 환자를 모두 추적하지 않아도 평균 waiting time을 계산할 수 있다.
- Walmart와 Kohl's, Kroger와 Tiffany 사례는 inventory turnover를 산업 특성과 margin 구조에 맞게 해석해야 함을 보여준다.
- Inventory가 생기는 이유는 pipeline inventory, seasonal inventory, cycle inventory, decoupling buffer, safety stock처럼 다양하다.

## 사례 및 적용 포인트
- Tiffany처럼 높은 margin과 낮은 turnover를 가진 business model은 Walmart 같은 high-turnover retailer와 같은 기준으로 평가하면 안 된다.
- Best Buy의 제품 체류 시간을 줄이는 사례는 flow time 감소가 inventory holding cost와 margin에 직접 영향을 줄 수 있음을 보여준다.
- Product-process matrix에서는 industry가 대체로 job shop에서 batch, assembly line, continuous process 방향으로 이동하며 efficiency를 추구한다.

## 에세이 대비 연결 포인트
- Waiting과 inventory를 "우연한 불편함"이 아니라 demand-supply mismatch와 process design의 결과로 설명해야 한다.
- Little's Law는 복잡한 프로세스에서도 inventory, flow rate, flow time 중 두 개를 알면 나머지를 추정하게 해 주는 핵심 도구다.

# Week 3

## 핵심 주제
- 복잡한 공정을 **flow diagram**으로 단순화하고, 전체 system capacity를 제한하는 **bottleneck**을 찾는다.
- 서로 다른 flow units가 섞인 경우에는 작업량을 공통 단위로 환산해 **implied utilization**을 계산한다.

## 핵심 개념
- **Process Capacity**: 프로세스가 단위 시간당 처리할 수 있는 최대 output.
- **Bottleneck**: capacity가 가장 낮아 전체 output을 제한하는 step 또는 resource.
- **Utilization**: 실제 output을 capacity로 나눈 비율. Demand가 낮으면 capacity가 있어도 utilization은 낮을 수 있다.
- **Implied Utilization**: demand를 capacity로 나눈 비율. 업무 압박을 보여주며 100%를 넘을 수 있다.
- **Common Workload Unit**: 여러 종류의 flow unit을 비교하기 위해 시간 같은 공통 작업량 단위로 바꾸는 기준.

## 수업/자료의 논리 흐름
- 병원이나 화학 공장처럼 복잡한 시스템도 flow unit을 따라가면 네모, 삼각형, 화살표로 단순화할 수 있다.
- 서코레드 공장 사례에서는 각 공정의 capacity를 비교해 두 번째 반응기가 시간당 100톤으로 bottleneck이 됨을 파악한다.
- 첫해 생산량이 계획 capacity보다 낮았다고 해서 무조건 실패는 아니다. 수요가 부족하면 100% utilization은 오히려 unsold inventory를 만든다.
- Demand가 capacity를 넘으면 실제 utilization은 100%에서 멈추지만 implied utilization은 125%처럼 system pressure를 보여준다.
- 채용 대행사처럼 컨설팅, 일반 직원, 인턴 지원서가 섞이면 지원서 개수가 아니라 각 지원서 처리시간을 곱한 workload minutes로 비교해야 한다.
- 공항 입국장 예시는 각 resource를 전체 arrival demand와 독립적으로 비교해야 현재 bottleneck뿐 아니라 잠재 bottleneck도 볼 수 있음을 보여준다.

## 사례 및 적용 포인트
- Bottleneck을 개선하면 기존 두 번째로 느린 step이 새로운 bottleneck이 될 수 있다.
- Flow diagram은 복잡성을 줄이기 위한 도구지만, rework와 variability를 빠뜨리면 실제 capacity를 잘못 판단할 수 있다.

## 에세이 대비 연결 포인트
- Bottleneck 분석은 단순히 가장 큰 장비나 가장 복잡한 공정을 찾는 것이 아니라, capacity를 같은 시간 단위로 환산해 가장 낮은 처리율을 찾는 작업이다.
- Utilization 100%를 목표로 삼기 전에 demand-constrained인지 supply-constrained인지 먼저 판단해야 한다.

# Week 4

## 핵심 주제
- **Labor Cost**가 단순히 labor content와 wage rate의 곱으로 결정되지 않는 이유를 설명한다.
- **Line Balancing**으로 idle time을 줄이고, 같은 자원으로 capacity와 labor productivity를 높인다.

## 핵심 개념
- **Labor Content**: 제품 1개를 만드는 데 필요한 총 노동 처리시간.
- **Idle Time**: worker가 paid time 안에 있지만 다음 작업을 기다리느라 생산하지 못하는 시간.
- **Average Labor Utilization**: 작업자가 실제 가치창출 작업에 투입된 시간의 비율.
- **Worker-Paced Line**: 작업자가 각 step의 속도를 정하는 라인.
- **Line Balancing**: 작업을 더 작은 task로 분해하고 worker 간 재배분해 bottleneck과 idle time을 줄이는 방식.
- **Work Cell**: 한 작업자가 여러 단계를 묶어 처리하거나 제품 하나를 처음부터 끝까지 책임지는 구조.

## 수업/자료의 논리 흐름
- 킥보드 1대에 labor content가 32분이고 시급이 12달러라면 단순 계산상 인건비는 6.40달러지만, 실제 비용은 idle time 때문에 더 커질 수 있다.
- 13분, 11분, 8분의 3인 조립 라인에서는 가장 느린 13분 step이 bottleneck이 되고, 빠른 worker는 기다리게 된다.
- 첫 unit이 나오기 전에는 세 step의 시간이 모두 필요하므로 empty system의 initial delay를 무시하면 납기 계산이 틀릴 수 있다.
- 작업을 초단위로 쪼개고 일부 task를 여유 worker에게 넘기면 bottleneck time을 792초에서 665초로 줄여 capacity를 개선할 수 있다.
- 수요가 더 커지면 라인 복제, bottleneck worker 추가, 더 세분화된 12인 라인, work cell 같은 scale-up 옵션을 비교해야 한다.
- 극단적 specialization은 교육이 쉽고 속도가 빠를 수 있지만, 작업 단위가 더 이상 나뉘지 않는 indivisibility 때문에 balancing이 어려워진다.

## 사례 및 적용 포인트
- Work cell은 구조적 idle time을 줄이고 ownership을 높일 수 있지만, worker training cost와 skill requirement가 커진다.
- Supply chain 전체를 보면 구매 부품 가격 안에도 upstream suppliers의 labor bottleneck과 idle time이 숨어 있을 수 있다.

## 에세이 대비 연결 포인트
- 노동비 절감은 임금 삭감이 아니라 idle time을 보이게 만들고 line balancing으로 같은 인력의 flow rate를 높이는 방식으로 설명할 수 있다.
- "사람을 더 뽑자"보다 먼저 현재 프로세스 안의 workload imbalance를 확인하는 것이 운영관리적 접근이다.

# Week 5

## 핵심 주제
- **Setup Time**이 존재할 때 왜 batch production이 생기고, batch size가 capacity와 inventory 사이의 trade-off를 만드는지 설명한다.
- **SMED**와 **EOQ**를 통해 생산 내부의 시간 문제와 외부 조달의 현금 비용 문제를 구분한다.

## 핵심 개념
- **Setup Time**: 제품이나 작업 종류를 바꾸기 위해 장비를 멈추고 준비하는 시간.
- **Batch Size**: 한 번의 setup 후 연속으로 처리하는 unit 수.
- **Cycle Inventory**: 큰 batch 때문에 생산과 demand가 동기화되지 않아 생기는 재고.
- **Heijunka**: 생산량과 제품 mix를 평준화해 큰 inventory wave를 줄이는 Toyota 방식.
- **SMED (Single-Minute Exchange of Die)**: internal setup을 external setup으로 전환해 setup time을 한 자리 수 분으로 줄이는 접근.
- **EOQ (Economic Order Quantity)**: fixed ordering cost와 inventory holding cost의 합을 최소화하는 주문량 모델.
- **Sunk Cost**: 이미 지불되어 의사결정에서 새 현금 유출로 보지 말아야 하는 비용.

## 수업/자료의 논리 흐름
- 팬데믹 초기 화장지 공장들은 variety를 줄이고 기본 제품만 생산해 setup time을 줄이며 capacity를 극대화했다.
- 밀링 머신이 조향 지지대와 갈비대 사이를 전환할 때 1시간 setup이 필요하면, 작은 batch에서는 setup 부담 때문에 effective capacity가 낮다.
- Batch size를 키우면 setup time이 많은 unit에 분산되어 capacity는 증가하지만, inventory와 flow time이 커진다.
- 세단과 station wagon을 8주 단위로 번갈아 만드는 자동차 공장 사례는 큰 batch가 대규모 finished goods inventory를 만든다는 점을 보여준다.
- Bottleneck에서 setup이 발생하면 큰 batch가 필요하지만, non-bottleneck에서 setup이 발생하면 작은 batch로 inventory를 줄이는 편이 유리할 수 있다.
- 제품 variety가 늘면 setup 횟수가 증가하고, 동일 demand를 맞추기 위해 batch size와 inventory가 커진다.
- EOQ는 외부 주문처럼 실제 ordering cost가 발생할 때 쓰는 모델이고, 공장 내부의 이미 보유한 설비/정규직 시간과 혼동하면 안 된다.

## 사례 및 적용 포인트
- Onion soup 하나를 추가하면 setup 횟수가 늘어 chicken noodle soup inventory까지 증가할 수 있다.
- F1 pit stop 비유는 internal setup을 외부 준비로 전환하면 machine downtime을 크게 줄일 수 있음을 보여준다.
- 이메일을 하루 두 번 몰아서 처리하는 것은 attention setup time을 줄이기 위해 batch size를 키우는 일상적 응용이다.

## 에세이 대비 연결 포인트
- Batch size는 "크면 효율적"이 아니라 bottleneck 위치, demand, setup time, holding cost, responsiveness를 함께 고려해 판단해야 한다.
- Variety 증가는 매출 기회일 수 있지만 setup과 inventory를 통해 hidden cost를 만든다.

# Week 6

## 핵심 주제
- 현장 운영 변수와 재무 성과를 **ROIC Tree / KPI Tree**로 연결한다.
- 작은 setup time 개선이 fixed cost leverage를 통해 ROIC에 큰 영향을 줄 수 있음을 이해한다.

## 핵심 개념
- **ROIC (Return on Invested Capital)**: 투입자본 대비 수익률. 경제적 가치 창출의 핵심 지표.
- **DuPont Decomposition**: ROIC를 margin과 asset turnover로 나누어 성과 원인을 분석하는 방식.
- **KPI Tree**: ROIC 같은 상위 재무지표를 price, fixed cost, variable cost, flow rate, inventory, setup time 같은 운영지표로 분해하는 도구.
- **Fixed Cost Leverage**: 손익분기점 이후 추가 output의 contribution margin이 크게 커지는 구조.
- **ASM (Available Seat Miles)**: 항공사가 공급한 총 좌석거리.
- **RPM (Revenue Passenger Miles)**: 실제 유상 승객이 이동한 좌석거리.
- **Turnaround Time**: 항공기가 착륙 후 다음 비행을 위해 다시 이륙하기까지 걸리는 시간.

## 수업/자료의 논리 흐름
- 임원 회의실의 ROIC와 공장 현장의 setup time, waiting time은 다른 언어처럼 보이지만 KPI tree로 연결할 수 있다.
- Paul Downs 가구점 사례에서는 고객 선수금, 원목 재고, 목수 노동, 기계 setup time, waiting time이 모두 ROIC에 연결된다.
- Setup time을 15%에서 10%로 줄이면 추가 capacity가 생기고, 이미 fixed cost를 회수한 이후의 추가 식탁은 높은 contribution margin을 만든다.
- 이 때문에 작은 setup time 개선이 ROIC를 11.3%에서 31.1%로 크게 끌어올리는 민감한 value driver가 될 수 있다.
- 외부 투자자는 현장에 직접 들어가지 못해도 public financial data와 operating metrics를 통해 top-down으로 운영 효율성을 추정할 수 있다.
- Southwest Airlines 사례에서는 ticket yield나 load factor가 비슷해도, 단일 기종 운영과 빠른 turnaround가 employee당 ASM을 높여 수익성 차이를 만들 수 있다.

## 사례 및 적용 포인트
- Boeing 737 단일 기종 운영은 정비와 부품 관리, turnaround를 단순화해 capacity utilization을 높인다.
- 조종사와 승무원까지 빠른 청소와 정리에 참여하는 운영 방식은 aircraft를 지상에 묶어두는 시간을 줄이고 추가 flight opportunity를 만든다.

## 에세이 대비 연결 포인트
- 운영 개선의 재무 효과를 설명할 때는 "효율이 좋아졌다"가 아니라 flow rate, fixed cost absorption, margin, asset turnover, invested capital 중 어느 경로가 바뀌었는지 명확히 해야 한다.
- ROIC는 추상적 재무 목표이지만, 현장에서는 setup time, waiting time, turnaround time 같은 작은 operational driver로 관리된다.

# Week 7

## 핵심 주제
- **Toyota Production System (TPS)**과 **Lean Operations**의 핵심은 단순한 속도 향상이 아니라 waste 제거, 문제 가시화, 인간 지성 활용이라는 점을 설명한다.
- Lean system이 강력하지만, black swan shock에서는 strategic buffer가 필요할 수 있음을 이해한다.

## 핵심 개념
- **Muda**: 고객 가치를 만들지 않는 낭비. Overproduction, waiting, transportation, overprocessing, inventory, defects/rework, unnecessary motion이 포함된다.
- **OEE (Overall Equipment Effectiveness)**: 설비가 멈추지 않고, 제 속도로, 불량 없이 운영되는 비율.
- **JIT (Just-in-Time)**: 필요한 것을 필요한 때 필요한 만큼 생산하는 방식.
- **One-Piece Flow**: unit을 batch로 묶지 않고 하나씩 흐르게 해 waiting과 inventory를 줄이는 이상적 흐름.
- **Takt Time**: customer demand에 맞춘 생산 박자. `Available Time / Customer Demand`.
- **Pull System**: downstream demand가 upstream production을 당겨오는 방식.
- **Kanban**: pull system에서 필요한 수량만 생산하도록 보내는 시각적 신호.
- **Jidoka**: 이상이 발생하면 자동으로 감지하고 멈춰 root cause를 해결하게 하는 원칙.
- **Andon**: 문제가 생겼을 때 작업자가 라인을 멈추고 도움을 요청하는 시각적 신호 장치.
- **5 Whys**: 왜라는 질문을 반복해 표면 증상 뒤의 root cause를 찾는 방법.

## 수업/자료의 논리 흐름
- GM 공장과 Toyota Takaoka 공장의 비교는 Toyota가 더 짧은 조립시간과 더 낮은 defect 수를 동시에 달성했음을 보여준다.
- Ford식 mass production은 interchangeable parts, large machines, economies of scale로 단가를 낮추는 방식이었다.
- Toyota는 전후 일본의 자본 부족과 작은 시장이라는 제약 때문에 필요한 것만 만들고 waste를 철저히 제거하는 방식으로 진화했다.
- Inventory는 안전해 보이지만 overproduction, storage cost, delayed defect detection을 만들고 root cause를 숨길 수 있다.
- JIT는 one-piece flow, takt time, pull system, kanban을 통해 supply를 demand에 맞춘다.
- 물 수위를 낮추면 바위가 드러나듯, inventory buffer를 줄이면 공정의 문제와 defect가 드러난다.
- Jidoka와 Andon은 문제가 생겼을 때 숨기지 않고 라인을 멈춰 해결하도록 만든다.
- 5 Whys는 fuse 교체 같은 임시 조치가 아니라 쇳가루 유입 같은 root cause를 찾아 재발을 막는 방식이다.
- Lean은 worker를 단순 노동력이 아니라 현장 문제 해결의 지성을 가진 주체로 본다.
- N95 mask 사례처럼 팬데믹 수준의 shock에서는 JIT와 low inventory가 취약해질 수 있으므로, 생명과 안전에 관련된 물자는 strategic stockpile이 필요할 수 있다.

## 사례 및 적용 포인트
- 은행 대출 심사와 병원 수술실 사례는 제조업이 아니어도 value-added time이 전체 근무 시간의 일부에 불과할 수 있음을 보여준다.
- Kanban card 수를 줄이면 system inventory를 직접 통제할 수 있지만, 너무 줄이면 defect나 supply shock에 취약해진다.

## 에세이 대비 연결 포인트
- Lean을 "재고를 줄이는 기법"으로만 쓰면 부족하다. 문제를 보이게 하고, 멈출 권한을 주고, root cause를 해결하는 operating philosophy로 설명해야 한다.
- 효율성과 resilience는 trade-off가 있을 수 있으므로, 일상적 환경에서는 lean이 강력하지만 예측 불가능한 충격에는 buffer와 비축 전략이 필요하다는 균형이 중요하다.
