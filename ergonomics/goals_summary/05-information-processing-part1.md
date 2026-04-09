## Information Processing (Part 1)

### Goal 1 : Information = reduction of uncertainty [P6-7]
- **Information** = **reduction of uncertainty** / 높은 확률 → 적은 정보, 낮은 확률 → 많은 정보
- **1 Bit** = 동일 확률 **2가지** 대안 중 하나 결정 / **Shannon**: father of information theory
- Information **Quantity ≠ Importance** (의미·가치가 아닌 bits만 측정)

### Goal 2 : Information (H) in bits 계산 [P7-8]
- **Equal prob**: **H = log₂(N)** — N=2→1bit, N=4→2, N=8→3, N=16→4 / 2배 = +1bit
- **Unequal**: hi = log₂(1/pi) / **Entropy**: **H_av = Σ[pi·log₂(1/pi)]**
  - 예: pA=0.8, pB=0.2 → hA=0.32, hB=2.32 → H_av = 0.8×0.32 + 0.2×2.32 = **0.72 bits**
- **Redundancy** = (1 - H_av/H_max) × 100%
  - 예: N=4, H_av=1.2, H_max=2.0 → **Redundancy = 40%**

### Goal 3 : Hick-Hyman Law [P10, HW Sol.]
- **RT = a + b·H** (a=non-decision time, b=1bit 처리 시간, H=bits)
- Doubling N = +1bit = +b ms (N에 대해 logarithmic)
- 예 (a=250ms, b=200ms/bit): 4옵션 H=2→**650ms** / 8옵션 H=3→**850ms** / 16옵션 H=4→**1050ms**
- 설계: (1) **Minimize Alternatives** (2) **Broad > Deep** (3) **Frequency & Defaults**

### Goal 4 : Static vs Dynamic displays + 8 information types [P14-15]
- **Static**: 정보 고정 (signs, labels) / **Dynamic**: 연속 변화 (speedometer, radar)
- 8 types: **Quantitative**, **Qualitative**, **Status (Check-Reading)**, **Warning/Signal**, **Representational**, **Identification**, **Alphanumeric**, **Time-phased**

### Goal 5 : Visual vs Auditory display trade-offs [P16, HW Sol.]
- **Auditory**: simple/short, 즉각 조치, visual overloaded, 수신자 이동 중
- **Visual**: complex/long, 나중 참조, 공간 위치, auditory overloaded, 수신자 고정

### Goal 6 : Multimodal safety — "Hear the alert, See the problem" [P17]
- **Alerting → Auditory** (≥**15dB** above ambient, 긴급 시 **3-5 pulses/sec**)
- **Diagnosis → Visual** (시선 **30°이내**, Red/Amber + **Flashing 3-5Hz**, ≥**1° visual angle**)
- Safety critical → **Audio + Visual 동시** (redundancy)
- **EICAS**: Warning(Red/Siren) / Caution(Amber/Chime) / Advisory(Cyan/Text) / **Inhibit Logic** (cry wolf 방지)

### Goal 7 : Absolute vs Relative Judgment [P21, HW Sol.]
- **Absolute**: 기억 속 내부 기준으로 식별, **5-9개** 수준 한계 (기억의 제한, 감각 아님)
- **Relative**: 동시 비교, high precision
- 설계: absolute → **relative로 전환** (reference scales, comparison standards 제공)

### Goal 8 : Miller's Law (7±2) [P22, HW Sol.]
- **Channel Capacity** ≈ **2-3 bits** (단일 차원) — log₂(5)=2.3 ~ log₂(9)=3.2 / ~7개 초과 시 오류 급증
- Pure Tones **5개** / Loudness **4-5** / Size **5-7** / Brightness **3-5**
- 설계: 단일 코딩 차원 **5-7개로 제한**

### Goal 9 : Orthogonal vs Redundant Coding [P25, HW Sol.]
- **Orthogonal**: 차원 **independent**, 정보 용량 극대화 (Shape=Type, Color=Altitude → N×M)
- **Redundant**: 동일 변수를 여러 차원에 인코딩, 감지력·신뢰성 극대화 (Red+Octagon+"STOP")
- **선택**: Orthogonal = max density / Redundant = safety, adverse conditions (noise, CVD)

### Goal 10 : SDT 4 outcomes [P31, HW Sol.]
- **Hit** (신호O→"Yes") / **Miss** (신호O→"No", Type II) / **False Alarm** (신호X→"Yes", Type I) / **Correct Rejection** (신호X→"No")
- Trade-off: Hit↑ → FA도↑

### Goal 11 : Sensitivity (d') & Response Criterion (β) [P30, 32-33]
- **d'** = (μ_S+N - μ_N) / σ — 클수록 분리력↑, β와 독립 / d'=0 → 구분 불가 / 적용 범위 **0.5~2.0**
- **β** = f(S+N) / f(N) at criterion point
- **β > 1 (Conservative)**: FA↓ Miss↑ (FA 비용 클 때) / **β < 1 (Liberal)**: Hit↑ FA↑ (Miss 비용 클 때)
- β 영향: **Signal Prevalence**, **Payoff Matrix**, **Instructions/Feedback**

### Goal 12 : ROC Curves & decision threshold calibration [P34-37]
- **ROC**: Y=Hit Rate, X=FA Rate / **AUC**: 0.5=random, 1.0=perfect / 높은 d' → 좌상단
- 의료: Miss 비용 >> FA → **liberal (low β)** + CAD로 d'↑
- 공항: **Low Prevalence Effect** → conservative → Miss↑ → **TIP** (가짜 위협 삽입)으로 vigilance 유지
- **3원칙**: (1) d'↑ (SNR, 훈련) (2) β 설정 (cost/benefit) (3) Decision support (ROC policies, automated checks)
