## Research Methods in HF/E (Part 2)

### Goal 1 : System-descriptive vs Task performance vs Human criteria [P5]
- **System-Descriptive Criteria**: 시스템 자체 특성, 사용자 행동과 독립 — **Reliability (MTBF)**, **Maintainability**, **Safety features**, **Operational costs**
- **Task Performance Criteria**: 인간+시스템 산출물 — **Quantity (Output)**, **Quality (Accuracy)**, **Time (Speed/Duration)**
- **Human Criteria**: 인간의 반응/상태/경험 — **Performance measures**, **Physiological & behavioral measures**, **Subjective measures**

### Goal 2 : Objective vs Subjective measures [P6]
- **Objective**: (1) **Performance** (2) **Physiological** (3) **Behavioral** / 장: reliable, quantitative / 단: "why" 불가
- **Subjective**: (1) **Rating Scales** (2) **Verbal Protocols** (3) **Questionnaires** / 장: "why" 파악 / 단: bias, **Dissociation from performance**
- **Triangulation**: 양쪽 결합 → 포괄적 평가

### Goal 3 : Performance, Physiological, Behavioral, Subjective measures [P7-14]
- **Performance [P7]**:
  - **Speed/Efficiency**: RT, completion time, movement time (**Fitts' Law**)
  - **Accuracy/Errors**: **Omission** vs **Commission errors**, **Slip** vs **Mistake** / **SATO**
  - **Throughput** = **ID / MT** (bits/s)
- **Physiological [P8-12]**:
  - **HR/HRV** (cognitive load, **ECG**) / **EDA/GSR** (arousal, **sympathetic NS**) / **EMG** (workload, fatigue)
  - **EEG**: **Delta**(0.3-4) **Theta**(4-8) **Alpha**(8-13)=relaxation **Beta**(13-30) **Gamma**(30+) / **Theta/Beta** → engagement/fatigue
  - intrusive, noisy, **"Reverse Inference" problem**
- **Behavioral [P12]**:
  - **Eye-Tracking**: **Fixations**, **Saccades**, **Pupil diameter**, **PERCLOS**
  - **Behavioral Kinematics**: motion capture, movement paths
- **Subjective [P13-14]**:
  - **NASA-TLX** (6 subscales) / **SUS** (10-item, 0-100) / **Borg RPE** (**심박수 상관**, **Body Map**) / **Verbal Protocols** (Think-Aloud)

### Goal 4 : Psychometric requirements — Reliability, Validity, Contamination, Sensitivity [P16-21]
- **Reliability**: consistency — **Test-Retest** / **Inter-Rater** / **Internal Consistency** (**Cronbach's α**: ≥0.9 Excellent, ≥0.8 Good, ≥0.7 Acceptable)
- **Validity**: 측정하려는 것을 실제로 측정하는 정도 — **Convergent**, **Discriminant**, **Predictive** (→ Goal 5 상세)
- **Freedom from Contamination**: extraneous 영향 배제
  - 오염원: **Practice & Fatigue Effects**, **Reactivity (Hawthorne Effect)**, **Instrumentation Drift**, **Environmental Noise**
  - 대책: **Counterbalancing & Randomization**, **Unobtrusive Measurement**, **Strict Standardization**, **Blinding** (single/double)
- **Sensitivity**: small but meaningful 변화 감지
  - **Ceiling Effect** / **Floor Effect** / **Scale Granularity**
  - Low sensitivity → **statistical power↓** → **Type II error**

### Goal 5 : Face vs Content vs Construct validity [P18, HW Sol.]
- **Face Validity**: 표면적으로 적절해 "보이는지" — **Subjective judgment**, 참가자 motivation에 중요
- **Content Validity**: construct의 **entire domain** 커버 — **Expert review**로 확립
- **Construct Validity**: 이론적 construct를 실제로 측정, **"gold standard" of validity**
  - **Convergent Validity**: 동일 construct 기존 측정과 강한 상관
  - **Discriminant Validity**: 비관련 construct와 비상관

### Goal 6 : Practical requirements for human criteria [P22-23]
- **6가지**: **Objectivity**, **Quantitativeness**, **Unobtrusiveness**, **Ease of Use**, **Speed**, **Inexpensiveness**
- Low cost: **Task Time/Errors**, **NASA-TLX** / High cost: **Eye-Tracking** / Med cost: **HRV**, **Verbal Protocol**

### Goal 7 : Descriptive vs Inferential statistics [P24]
- **Descriptive**: 요약 — Mean, Median, SD, Percentiles
- **Inferential**: 인과 검증 — **Effect Size**, CI (95%)
- **Evaluation**: benchmark — SUS, One-sample t-test, Binomial Test

### Goal 8 : Correlation, t-test, ANOVA 선택 [P25-27]
- **Correlation [P25]**: **linear relationship**의 strength & direction
  - **Pearson's r** (parametric) / **Spearman's rho** (non-parametric)
  - **R²** = 분산 설명 비율 / **Correlation ≠ Causation**, **Third Variable Problem**
- **t-Test [P26]**: **두 그룹** 평균 비교
  - **Independent Samples** (**Between**) / **Paired Samples** (**Within**)
  - 2개 초과 → **Type I error↑** → ANOVA 사용
- **ANOVA [P27]**: **3개+ 그룹** 또는 multiple IVs
  - **Main Effect** + **Interaction** (design trade-offs 핵심)
  - **Post-Hoc**: **Tukey HSD**, **Bonferroni**
  - **Sphericity** 위반 → **Greenhouse-Geisser** correction

### Goal 9 : Statistical significance vs Practical significance [P28, HW Sol.]
- **p-value**: p < .05, trivial 효과도 significant 가능 → **exact p-values** 보고
- **Effect Size**: **Cohen's d** (Small 0.2, Medium 0.5, Large 0.8), **eta_p²** / **p-value와 함께 보고 필수**
- HW: 0.01% output↑ (significant) but massive cost → **practical significance 없음**
- **Parametric 가정**: **Normality** (Shapiro-Wilk), **Homogeneity** (Levene's), **Sphericity** (Mauchly's)
- **Nonparametric 대안**: **Mann-Whitney U** ← ind. t / **Wilcoxon** ← paired t / **Kruskal-Wallis** ← ANOVA / **Friedman** ← RM-ANOVA

### Goal 10 : Triangulation — objective + subjective 종합 평가 [P6, 15]
- **Data Triangulation**: Performance + Physiological/Behavioral + Subjective → **Converging Evidence** → **Robust Design Decision**
- **Cross-Validation**: 한 방법으로 다른 방법 검증
- **Resolving Discrepancies**: 불일치가 hidden trade-offs 드러냄 (예: **fast performance but high frustration**)
- 목표: **single-method bias 제거**

### Goal 11 : HF/E research methods 실제 적용 [P29-30]
- **Iterative Refinement Pipeline**: (1) **Scope** — Descriptive (2) **Explain** — Experimental (3) **Decide** — Evaluation
- 결과를 **actionable design requirements**로 변환: **User Needs** → **Evidence-Based Research** → **Better Systems**
- **Showcase: Motion Seat** (You et al., 2018): **SS** vs **SM** condition
  - Objective: velocity SD, **PERCLOS**, **LF/HF ratio** / Subjective: fatigue, drowsiness
  - 결과: SM이 **passive TR fatigue 4.4~56.5%↓**
