## Intro to HF/E (Part 2)

### Goal 1 : Three levels of ergonomic design (corrective, preventative, creative)
- **Corrective (Reactive)**: 기존 시스템 문제를 **사후** 해결. post-implementation
- **Preventative (Proactive)**: 설계 단계에서 잠재 문제 **사전** 방지. early design/prototype 단계
- **Creative**: 작업/시스템 자체를 **재정의**하여 혁신적 솔루션. conceptual phase

### Goal 2 : Human capabilities & limitations in sensory, cognitive, physical domains
- 전제: **Demand > Capability = Error**
- **Sensory**
  - Visual Acuity: 남성 ~**8%** color blindness → **redundant coding** 필수
  - Audition : 알람은 주변 소음 +**15dB** 이상 (ISO 7731)
  - Touch(Tactile): fingertips, lips best / **Multimodal Redundancy**: Visual+Auditory+Tactile 결합
- **Cognitive [P8]**:
  - Attention: Selective (한 소스 집중) vs Divided (다중작업, limited resource)
  - Working Memory: **7±2** items, 10-20초 decay / Decision: 시간 압박 → heuristics → biases
  - **Fitts' Law**: Speed-Accuracy Trade-off
- **Physical [P9]**:
  - Reach → **Design for Smallest (P5)** / Clearance → **Design for Largest (P95)** / Strength → **Design for Weakest**
  - NIOSH max lift **23kg** / neutral posture, avoid static loading >15% MVC / **Design for Adjustable Range**

### Goal 3 : Cost-benefit of ergonomic interventions (Oxenburgh model, ROI)
- **"Good Ergonomics = Good Economics"** — $1 투자 → **$3+ 회수**
- **Iceberg Effect**: Indirect Costs = Direct의 **4~10배** (결근, 이직, 생산성↓)
- **ROI = (Benefits - Costs) / Costs × 100%**

### Goal 4 : Four basic functions in human-machine system
- System: 인간+기계+요소가 상호작용 → 개별 달성 불가한 목표 수행
- **4 Functions**: (1) **Sensing** (2) **Information Storage** (인간=memory, 기계=DB) (3) **Information Processing & Decision** (4) **Action** (Control/Communication)

### Goal 5 : Human roles across system types + open/closed-loop
- **Manual**: 인간 = power + control + 결정, 기계 = passive tool (예: hammering)
- **Mechanical (Semi-Auto)**: 기계 = power, 인간 = supervise/adjust (예: driving)
- **Automated**: 기계 = autonomous, 인간 = monitor + exception handling (예: autonomous vehicle)
- **핵심**: 자동화 ≠ HF/E 불필요. 역할이 active control → **monitoring & exception handling**으로 shift → 새로운 cognitive challenges
- **Open-Loop**: feedback 없음, initiate-and-leave (예: unguided rocket) → robust initial settings + **fail-safe** 필요
- **Closed-Loop**: 연속 제어, error = desired - actual → 보정 (예: driving, thermostat) → timely **feedback channels** 필요

### Goal 6 : Redundancy for system reliability 
- **Series (직렬)**: R = R_A × R_B → 하나 실패 = 전체 실패, 구성요소 추가 시 신뢰도 **감소**
- **Parallel (병렬 = Redundancy)**: R = 1 - (1-R_A)(1-R_B) → **모두** 동시 실패해야 시스템 실패
- 예: R_A=R_B=0.70 → Series **0.49** / Parallel **0.91**
- 인간이 자동화 시스템의 **redundant monitor** 역할 → 전반적 신뢰성 향상

### Goal 7 : Systems approach in HF/E (ISO 9241-210)
- **6단계**: (1) Context of Use 파악 (2) User Requirements 설정 (3) Design Solutions 생성 (4) Evaluate vs Requirements (5) Iterate or Implement (6) Deploy & Monitor
- 핵심: **iterative** — 3~5단계가 loop

### Goal 8 : Participatory approach to system design
- **Benefits**: higher acceptance, sustained gains (vs top-down), smoother change, better solutions (frontline 지식 활용)
- **Requirements**: early involvement (concept부터), representative participation, transparent communication
- **Coch & French (1948)**: total participation group → 즉시 생산 상승 및 유지 / control group → 생산 감소

### Goal 9 : Major HF/E standards & guidelines
- Ergonomics : ISO/TC 159, ISO 7250-1
- Industry: ANSI/HFES 100 (USA/Office, Computer), MIL-STD-1472H (Defense), IEC 62366 (Medical Device), DOT/FAA/AM-24/23 (Flight Deck)
