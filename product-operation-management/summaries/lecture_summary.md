# Week 3

## 핵심 주제
- 공급 프로세스의 산출 능력을 **process capacity** 관점에서 평가하고, 병목이 전체 시스템 속도를 어떻게 결정하는지 이해한다.
- 수요에 맞추려면 전체 작업시간을 더 작은 station으로 나누되, 각 station의 cycle time이 균형을 이뤄야 한다.

## 핵심 개념
- **Standard Time (ST)**: 한 flow unit을 완성하는 데 필요한 총 작업시간.
- **Cycle Time (CT)**: 한 station 또는 line이 다음 unit을 내보내는 시간 간격. Line CT는 가장 느린 station의 CT, 즉 bottleneck CT가 된다.
- **Takt Time (TT)**: 고객 수요가 요구하는 생산 박자. `Available Time / Demand`로 계산한다.
- **Bottleneck**: 가장 긴 CT 또는 가장 낮은 capacity를 가진 station. 전체 line capacity를 제한한다.
- **Work-in-Process (WIP)**: 프로세스 내부에서 아직 완료되지 않고 대기하거나 처리 중인 flow units.
- **Line Balancing (LOB)**: station별 작업량을 균등하게 배분해 idle time과 bottleneck을 줄이는 개선 활동. 예시 식은 `sum of station cycle times / (bottleneck CT x number of stations)`.

## 수업/자료의 논리 흐름
- 한 사람이 자동차 1대를 4시간에 조립하면 하루 8시간 기준 capacity는 2대다.
- 수요가 하루 60대이고 가용시간이 480분이면 takt time은 8분이다. 총 조립 시간이 240분이면 이상적으로 필요한 station 수는 `240 / 8 = 30`이다.
- 작업을 station 2개, 4개, 5개로 나누면 이론상 CT가 줄고 daily output이 증가하지만, 실제로는 모든 station의 작업시간을 완벽히 같게 만들기 어렵다.
- station별 CT가 `0.4, 1, 2, 0.2, 0.4`처럼 불균형하면 line CT는 2시간이 되고, 병목 앞에 WIP가 쌓인다.
- Mass production은 반복 작업과 표준화로 productivity를 높이지만, 큰 batch, end-of-line inspection, push policy 때문에 responsiveness 저하, 결함 조기 발견 실패, overproduction, WIP 증가가 생길 수 있다.

## 사례 및 적용 포인트
- 단순히 station 수를 늘리는 것보다 bottleneck CT와 line balancing이 실제 output을 결정한다.
- Push 방식에서 한 작업자의 효율이 떨어지면 line balancing이 무너지고, 병목 전에는 재고가 쌓이며 병목 후에는 starvation이 발생한다.
- 결함률을 예상해 110% 생산하는 방식은 overproduction과 inventory를 유발할 수 있다.

## 에세이 대비 연결 포인트
- "capacity를 늘린다"는 말은 전체 station을 다 빠르게 만든다는 뜻이 아니라 bottleneck을 찾아 그 제약을 완화한다는 뜻으로 설명해야 한다.
- 단순한 flow diagram은 정상 경로만 보여줄 수 있으므로 실제 capacity 분석에서는 rework, defect, delay, WIP accumulation을 함께 고려해야 한다.

# Week 4

## 핵심 주제
- 수요와 공급을 맞추기 위해 **labor cost per unit**, **idle time**, **line balancing**을 연결해서 이해한다.
- 노동 활용률을 무조건 최대화하는 것이 목표가 아니라, bottleneck과 demand 조건을 기준으로 프로세스를 개선하는 것이 목표다.

## 핵심 개념
- **Labor Content**: 제품 1개를 만들기 위해 노동자가 실제로 수행하는 처리시간의 합.
- **Labor Cost per Unit**: 일정 기간 지급되는 총 임금을 실제 생산량으로 나눈 비용. 수요가 낮아 flow rate가 낮으면 단위당 노동비가 상승한다.
- **Idle Time**: 노동자가 투입되어 있지만 처리할 일이 없어 대기하는 시간. 항상 나쁜 것은 아니지만 비용 구조에는 반영된다.
- **Worker-Paced Line**: 작업자의 처리 속도가 각 station의 capacity를 결정하는 line.
- **Line Balancing (LOB)**: 과부하 station의 일부 작업을 여유 station으로 옮겨 bottleneck을 완화하고 flow rate를 높이는 방법.

## 수업/자료의 논리 흐름
- Assembly line은 보통 CT가 takt time과 비슷하도록 설계되며, line CT는 bottleneck CT와 같다.
- LOB는 station별 CT 합을 bottleneck CT와 station 수의 곱으로 나눠 계산한다. 값이 낮으면 idle time과 작업 불균형이 크다.
- 수요가 capacity보다 낮은 demand-constrained 상황에서는 bottleneck도 idle time을 가질 수 있다. 총 임금은 고정되어 있으므로 생산량이 적어져 labor cost per unit이 높아진다.
- 수요가 capacity보다 높은 supply-constrained 상황에서는 bottleneck이 계속 작동하고, output은 process capacity에 묶인다. 이때 병목 개선은 실제 생산량 증가로 이어질 수 있다.
- 예시 프로세스에서는 Burn 공정이 병목이면 Cut 공정으로 일부 작업을 옮기거나, Burn 공정 효율을 높이거나, labor/capacity를 추가해 개선한다.

## 사례 및 적용 포인트
- 하루 수요가 40개이고 capacity가 64개이면 실제 flow rate는 40개로 제한되어 단위당 노동비가 커진다.
- 하루 수요가 120개이면 실제 flow rate는 capacity인 64개로 제한되지만, 같은 임금으로 더 많은 unit을 만들기 때문에 단위당 노동비는 낮아진다.
- 폭발적 수요 증가에는 bottleneck capacity 확대, 작업 재배분, 추가 인력, overtime, 가격 조정 등의 대응을 연결해 생각할 수 있다.

## 에세이 대비 연결 포인트
- "idle time은 항상 제거해야 하는가"라는 주제는 비용 절감 논리와 slack이 주는 문제 해결 여유를 분리해서 설명하면 좋다.
- 과도한 specialization은 작업을 더 이상 잘게 나눌 수 없는 한계에 부딪힐 수 있고, parallel work cells가 더 나은 대안이 될 수 있다.

# Week 5

## 핵심 주제
- **batch**와 **setup/changeover**가 capacity, inventory, responsiveness 사이의 trade-off를 어떻게 만드는지 이해한다.
- 큰 batch는 setup time을 분산시켜 per-unit cost와 capacity 측면에서 유리하지만, cycle inventory와 lead time을 증가시킨다.

## 핵심 개념
- **Batch**: 장비 설정을 바꾸기 전에 함께 처리되는 flow units의 묶음.
- **Setup / Changeover**: 제품 유형이나 공정 조건을 바꾸기 위해 장비를 재설정하는 시간.
- **Cycle Inventory**: batch 생산 때문에 생산과 소비가 동기화되지 않아 생기는 평균 재고.
- **Responsiveness**: 수요 변화나 고객 맞춤 요청에 빠르게 반응하는 능력.
- **SMED / Quick Setup**: setup 시간을 줄여 작은 batch와 낮은 per-unit cost를 동시에 달성하려는 접근.

## 수업/자료의 논리 흐름
- setup 시간이 존재하면 batch size가 커질수록 setup 시간이 많은 unit에 나뉘어 capacity가 증가한다.
- 하지만 batch size가 너무 커지면 cycle inventory가 증가하고, 고객 수요에 대한 responsiveness가 낮아진다.
- 비용 관점에서는 setup cost와 inventory cost의 합이 최소가 되는 batch size가 존재한다.
- 더 바람직한 방향은 단순히 큰 batch를 선택하는 것이 아니라 setup 시간을 줄여 작은 batch에서도 낮은 비용을 달성하는 것이다.

## 사례 및 적용 포인트
- Bagel 예시는 basic과 crispy 제품 사이에 warming/cooling setup이 있을 때 batch size 결정이 capacity와 재고를 동시에 바꾼다는 점을 보여준다.
- Executive Shirt Company는 기존 60장 batch 중심 공정에 custom shirt를 넣을 때 batch size 축소, buffer 증가, 별도 line 운영 같은 선택지가 생기는 사례다.

## 에세이 대비 연결 포인트
- Batch size 의사결정은 "capacity vs inventory"의 trade-off로 설명하는 것이 핵심이다.
- Setup이 bottleneck에서 발생하고 demand가 capacity를 초과하면 큰 batch가 유리할 수 있지만, setup이 non-bottleneck에서 발생하거나 responsiveness가 중요하면 작은 batch가 더 적합할 수 있다.

# Week 6

## 핵심 주제
- 운영 개선이 재무성과, 특히 **ROIC (Return on Invested Capital)**에 어떻게 연결되는지 이해한다.
- 높은 수준의 재무지표를 flow rate, inventory, setup time 같은 daily operational variables로 분해한다.

## 핵심 개념
- **ROIC**: `Net Income / Invested Capital`. 기업이 투입자본으로 얼마나 수익을 창출했는지 보여준다.
- **Invested Capital**: `Working Capital + PP&E`. Working capital은 current assets에서 current liabilities를 뺀 값이다.
- **DuPont Analysis**: ROIC를 margin ratio와 capital turnover로 분해해 어떤 요소가 성과 변화를 주도하는지 보는 분석.
- **Margin Ratio**: 매출 대비 이익률. Flow rate가 증가하면 fixed cost가 더 많은 unit에 분산되어 margin에 영향을 준다.
- **Capital Turnover**: 투입자본 대비 매출. Inventory가 줄거나 flow rate가 증가하면 개선될 수 있다.
- **ROIC Tree / KPI Tree**: ROIC를 현장에서 통제 가능한 가격, 비용, flow rate, inventory, receivables, PP&E 등으로 내려 쪼개는 구조.

## 수업/자료의 논리 흐름
- 기업의 목표는 cost of capital보다 높은 return을 만들어 economic value를 창출하는 것이다.
- 운영 개선은 flow time, inventory, flow rate를 바꾸며, 이 세 변수는 ROIC의 margin과 capital turnover에 연결된다.
- Flow rate는 `min {input rate, process capacity, demand}`이므로 병목 개선이 항상 수익으로 이어지는 것은 아니고, demand와 input 조건도 함께 봐야 한다.
- Setup time 감소, 제품 설계 변경, 임금 조정, supplier payment term 조정 같은 atomic activities는 각각 fixed cost, variable cost, flow rate, invested capital 항목에 연결된다.

## 사례 및 적용 포인트
- Tesla 재무제표 예시는 invested capital과 net income을 이용해 ROIC를 계산하는 방식 자체를 보여준다.
- Setup time을 줄이면 process capacity와 flow rate가 증가하고, inventory와 fixed cost per unit이 줄어 ROIC에 영향을 줄 수 있다.

## 에세이 대비 연결 포인트
- 운영 개선을 주장할 때는 "효율이 좋아진다"에서 멈추지 말고, flow rate 증가, inventory 감소, margin 개선, asset turns 개선 중 어느 경로로 ROIC가 변하는지 연결해야 한다.
- ROIC는 현장 관리자가 매일 직접 조작하는 숫자가 아니므로, KPI tree를 통해 통제 가능한 운영 지표로 번역하는 논리가 중요하다.
