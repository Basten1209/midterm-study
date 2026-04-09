## Vision, Visual Display Design (Part 2)

### Goal 1 : Dynamic displays — Quantitative, Qualitative, Check, SA [P6, 20]
- **Quantitative**: exact numeric value 읽기
- **Qualitative**: 대략값, **trend**, **rate of change**
- **Check**: **정상 범위** 내인지 빠른 판단
- **Situation Awareness**: 현재 상태 지각 + **미래 상태 예측**

### Goal 2 : Analog vs Digital quantitative displays [P7, 9]
- **Golden Rule**: display type = **TASK requirement** 에 맞추기
- **Analog**: **방향/변화율** 중요, 값 빠르게 변할 때, **trend detection** → 예: speedometer
- **Digital**: **정확한 수치** 필요, 값 천천히 변할 때, **recording** 작업 → 예: fuel gauge
- Analog: **Fixed scale + Moving pointer** (일반적, reversal error↓) vs **Moving scale + Fixed pointer** (reversal error↑)

### Goal 3 : Parallax Errors & pointer design [P10, HW Sol. P4]
- **Parallax**: 시선 각도 차이 → 겉보기 위치 변동 → 읽기 오류
- 포인터 4대 가이드라인: (1) **Tip ~20도** 테이퍼 (2) 끝이 눈금에 **닿되 겹치지 않게** (3) 눈금 면에 **최대한 가깝게** 장착 (4) 색상 끝→**axle 연장**, 꼬리는 배경색

### Goal 4 : Compatibility of Proximity Principle [P12, HW Sol. P4-5]
- **Mental Proximity**: 정보원의 **cognitive integration** 요구 정도
- **Display Proximity**: 정보원의 물리적/지각적 근접도
- **Integration Task**: display proximity↑ → 성능↑
- **Focused Attention Task**: display proximity↑ → **visual clutter** → 성능↓
- 설계: **display proximity = mental proximity에 match**

### Goal 5 : Emergent Features & parallel processing [P13, HW Sol. P5]
- **Emergent Feature**: 개별 부분엔 없고 **전체에서 나타나는** 지각적 속성 — **AREA**, **SHAPE**
- 변수 → polygon 매핑 → 정상 = **대칭 형태** / 이상 = 형태 왜곡 → **즉시 인식**
- 순차적 변수 확인 대신 **동시(parallel) 처리** 가능

### Goal 6 : Object Display trade-offs [P14]
- **장점**: **Integration tasks**, **pattern recognition**, **rapid state detection** (예: 발전소 모니터링)
- **단점**: **Focused attention** 어려움, **precise reading** 곤란, specific query 느림 → 별도 **digital counter** 필요

### Goal 7 : Color/Shape coding in qualitative displays [P16]
- **Qualitative Reading**: "안전한가?" 판단 (정확한 숫자 ✕)
- **Color Coding**: **Green**(Normal) / **Yellow**(Caution) / **Red**(Danger) → 인지 처리 시간↓
- **Shape Coding**: **색각 이상자** / **저조도** 환경 보조

### Goal 8 : Gestalt principles — check reading pop-out [P17, HW Sol. P5-6]
- **9 O'clock Alignment**: 모든 다이얼 정상 포인터 **9시(또는 12시)** 정렬
- **Similarity**: 같은 방향 포인터 → 그룹 지각 / **Continuity**: 연속 패턴 지각
- **Pop-out Effect**: 이탈 포인터 → 패턴 깨짐 → **pre-attentive** 즉시 감지
- **50개+ 다이얼** 개별 읽기 없이 **single glance** 확인

### Goal 9 : Signal & warning light guidelines [HW Sol. P5]
- **Color**: 위험 = **Red** / **Intensity**: 배경 대비 **>2:1** / **Size**: 최소 **1도 visual angle**
- **Location**: 정상 시선 **30도 이내** / **Flash**: **3~10Hz**, 최소 **0.05초**
- **Steady** = 지속 상태, **Flashing** = 긴급/새 상태에만 / 점멸 속도 **≤3가지**

### Goal 10 : Situation Awareness 3 levels [P20]
- **Level 1 Perception**: "What now?" — 환경 요소의 **상태·속성·dynamics** 지각
- **Level 2 Comprehension**: "What does it mean?" — 요소 **종합** → **significance** 이해
- **Level 3 Projection**: "What next?" — **미래 상태 예측** → **proactive decision making**

### Goal 11 : Roscoe's 4 principles for representational displays [P25, HW Sol. P6-7]
- (1) **Pictorial Realism**: 실세계 공간적·아날로그적 표현 + 깊이 단서
- (2) **Compatible Motion**: 디스플레이 움직임 = 운영자 **frame of reference** → **Moving-aircraft + Fixed horizon**
- (3) **Integration**: 관련 정보 **단일 통합 디스플레이** → 스캔 시간↓
- (4) **Pursuit Presentation**: 목표+추적자 모두 이동 > compensatory display
- **Outside-In**(Bird's Eye) vs **Inside-Out**(Pilot's Eye) / **3D** 깊이 단서 우수, 단 **head-on traffic**에서 방향 모호

### Goal 12 : HUD dark focus trap [HW Sol. P7]
- HUD **collimate** → 광학적 무한대 초점 → 실제론 **dark focus (~1m)** 로 조절 경향
- **Micropsia**: 먼 물체가 **더 작고 더 멀리** 보임 → 크기·거리 오판
- **Safety Risk**: 거리 과대평가 → **회피 기동 지연**, 착륙 **flare 타이밍 지연**

### Goal 13 : Future trends in visual displays [P29]
- **Adaptive Displays**: workload·physiological state에 따라 자동 조정
- **Eye-Tracking**: gaze-contingent, 시선 위치만 고해상도
- **AI-Driven**: 사용자 의도 예측 → 인터페이스 동적 재구성
- **Mixed Reality Cockpits** / **Neural Interface (BCI)**
