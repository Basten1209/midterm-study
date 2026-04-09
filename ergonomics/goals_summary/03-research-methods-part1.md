## Research Methods in HF/E (Part 1)

### Goal 1 : Primary purpose of HF/E research
- **Systematic Inquiry** (anecdotal observation ✕)
- **Generalizable Knowledge**: **fundamental principles & guidelines** 도출
- **Multi-Methodological**: descriptive / experimental / evaluation 상호보완
- 인간의 capabilities, limitations, behaviors를 technology, tasks, environments 관계 속에서 파악

### Goal 2 : Generic process of HF/E research
- **5단계 Iterative**: (1) Problem & Theory (2) Measures — DV, pilot testing (3) Study Design — IV, confound 통제 (4) Data & Analysis (5) Reporting
- **IRB**: informed consent, 참가자 안전, 프라이버시

### Goal 3 : Descriptive vs Experimental vs Evaluation research
- **Research Funnel**: Descriptive(What's happening?) → Experimental(Why?) → Evaluation(Is design A better?)
- **Descriptive**: Low control / observations, surveys, task analysis
- **Experimental**: **High control** / 인과관계 검증, effect sizes, statistical significance
- **Evaluation**: Moderate control / Pass/Fail, usability scores
- 데이터 유형: Nominal, Ordinal, Interval/Ratio

### Goal 4 : Criterion vs Stratification variables
- **Criterion** = "무엇을 측정하나" — task completion time, error rate, HRV, comfort rating
- **Stratification** = "누구를 비교하나" — age group, expertise, gender, physical size (사전 존재 특성, 조작 ✕)

### Goal 5 : Between-subjects vs Within-subjects design
- **Between**: 조건마다 **다른 참가자** / learning effect ✕ / **큰 표본** 필요, 개인차가 error variance↑
- **Within**: **동일 참가자** 모든 조건 / 적은 참가자, 개인차 통제 / **order effect** → **counterbalancing** 필수
- **Factorial**: 2+ IV로 main effects + interactions 분석 / Mixed Design = between + within 결합

### Goal 6 : Independent Variable, Dependent Variable, Extraneous variables [P15, 26-29]
- **IV (Independent Variable)** "The Cause": 연구자가 **조작**하는 요인, 최소 2 levels — Equipment / Environment / Task
- **DV (Dependent Variable)** "The Effect": 측정 결과, **sensitive, reliable, valid** 해야 함
  - Performance (RT, completion time, error rate) / Subjective (**NASA-TLX**: 6차원) / Physiological (HR, HRV, EEG)
  - Multiple DVs → **triangulation**
- **Extraneous** ("The Noise"): held constant 또는 randomized → 통제 실패 시 **confound**
- Extraneous = noise / **Confound** = IV와 systematically covary → **internal validity 위협**

### Goal 7 : Methods to control confounds [P30-33]
- **통제 위계**: (1) **Elimination** — 외생변수 고정 (2) **Grouping** — blocking/stratification (3) **Adjustment** — ANCOVA로 통계적 제거 (4) **Randomization**
- **Random Sampling** = external validity / **Random Assignment** = **internal validity** (HF/E에서 더 중요)
- **Counterbalancing** (within-subjects order effect 통제):
  - Complete (N=k!), Partial, **Latin Square** (N=k배수), **Balanced Latin Square** (carryover 통제)
- **Manipulation Check**: IV 의도대로 조작되었는지 확인 / **Pilot Testing**: ceiling/floor effect 방지

### Goal 8 : Formative vs Summative evaluation [P17, 18, 20]
- **Formative**: 개발 **중** — Test → Fix → Retest, 문제 파악 및 반복 개선
- **Summative**: 개발 **후** — 벤치마크 충족 여부, **Pass/Fail**
- Methods: Usability Testing, Heuristic Evaluation, Cognitive Walkthrough
- **NASA-TLX** (workload) / **SUS** (10항목, 0-100점, **68점↑ = acceptable**)

### Goal 9 : Lab vs Field settings [P21-24]
- **Field**: high ecological validity, rich context / low control, confound 위험, 비용↑
- **Lab**: high control, repeatability, 정밀 장비 / artificiality, **Hawthorne Effect**, 일반화↓
- **Hybrid: Simulator/XR** — controlled realism, 위험 상황 안전 연구 가능
- Continuum: Lab(Precision) ↔ Simulator/XR ↔ Field(Context)

### Goal 10 : Experimental control vs Ecological validity trade-off [P21, 23-24, HW Sol.]
- **Control↑** → internal validity↑, ecological validity↓ / **Ecological validity↑** → external validity↑, control↓
- HF/E 연구 설계의 **fundamental trade-off**
- HW 예시: Marras & Kroemer — distress flares 테스트, 해상 고무보트에서 실험 → lab 통제 포기, 현실 조건 확보
- 대안: **High-Fidelity Simulator / XR**
