## Audition & Speech Communication (Part 1)

### Goal 1 : Physical attributes of sound — Frequency/Intensity vs Pitch/Loudness [P3, 9-11]
- **Sound** = mechanical vibration in air, 가청 범위 **20~20,000 Hz**
- **Frequency (Hz)** = objective, physical → **Pitch** = subjective (intensity, duration에도 영향)
- **Intensity (W/m²)** = objective, physical → **Loudness** = subjective (frequency, duration, 다른 소리에도 영향)
- Loudness 단위: **Sones** (perceived doubling), **Phons** (1kHz 기준)
- 핵심: Freq/Intensity = **물리적·객관적** vs Pitch/Loudness = **심리적·주관적**

### Goal 2 : Decibel (dB) as logarithmic measure of SPL [P3, 12]
- **SPL = 20 log₁₀(P / P₀)** (P₀ = 20 μPa)
- Energy **2배** → **+3 dB** (∵ 10 log₁₀ 2 ≈ 3)
- **A-weighting (dBA)**: human ear response 근사 / occupational limit = **85 dBA**
- 대표 SPL: pain ~120+ / traffic ~85 / conversation ~60 / library ~30 / threshold ~0

### Goal 3 : Pure tone vs Complex sound [P3, 13]
- **Pure tone** = single freq sinusoidal (tuning fork), spectrum에서 single line
- **Complex sound** = multiple freq 합성 (speech, machinery), multiple lines/bands
- **Bandwidth** = f₂ - f₁ / ANSI **10 octave bands** (31.5~16kHz), **1/3-octave** 세분화

### Goal 4 : Outer/Middle/Inner Ear structure & function [P3, 19]
| 구조 | 구성/작동 | 핵심 기능/수치 |
|---|---|---|
| **Outer** | Pinna + Canal + Eardrum | canal resonance **2~5kHz에서 max 12dB** |
| **Middle** | **Malleus→Incus→Stapes** / **Acoustic reflex** (stapedius 수축) | oval window pressure **~22× 증폭** |
| **Inner** | **Cochlea** + **Basilar membrane** + **Organ of Corti** | fluid→neural 변환, **Tonotopic organization** |
| **Acoustic Reflex** | trigger **~80dB** above threshold | attenuation max **20dB**, sustain **max 15min**, **Latency 35~150ms** → impulse noise 보호 불가 ⚠ |

### Goal 5 : Place theory vs Temporal theory [P3, 21]
- 두 이론은 **complementary**

| 이론 | 작동 원리 | 주파수 범위 | 한계/특징 |
|---|---|---|---|
| **Place** | basilar membrane **특정 위치**에서 max vibration | effective **1,000~5,000 Hz** | high freq→oval window 근처, low freq→apex |
| **Temporal** | nerve fires in **temporal pattern** matching freq | effective **< 1,000 Hz** | 한계: **>1,000 firings/s 불가** |

### Goal 6 : Auditory masking [P4, 22]
- **Masking** = 한 소리가 다른 소리의 **audibility threshold 상승**
- **Near-frequency**: masker freq 및 harmonics 근처에서 최대 효과
- High-intensity masker → **spreads to higher freq** / **Critical band**: 이 band 내 noise만 효과적 masking

### Goal 7 : Auditory vs Visual display advantages [P4, 25]
- **Auditory**: simple/short, immediate action, **visual overloaded**, receiver moving
- **Visual**: complex/long, later reference, spatial info, no immediate action, auditory overloaded

### Goal 8 : Four primary auditory functions [P4, 26]
- **Detection**: signal 존재 여부 / **Absolute Identification**: 단독 제시 signal 식별
- **Relative Discrimination**: 2+ signals 비교 구분 / **Localization**: direction 결정

### Goal 9 : JND & design implications [P4, 30]
| 항목 | 조건/수치 | 설계 의미 |
|---|---|---|
| **JND** | **50%** probability로 감지 가능한 minimum change | 감지 가능한 최소 변화 기준 |
| **Intensity JND** | **≥60dB** above threshold에서 smallest, **1,000 & 4,000 Hz**에서 best | 강도 변화 구분이 쉬운 조건 |
| **Frequency JND** | **<1,000 Hz**에서 smallest, intensity **≥30dB**, duration **>0.1s** 필요 | 주파수 변화 구분 조건 |
| **Absolute ID** (Miller) | Intensity **4-5** / Frequency **4-7** / Duration **2-3** / combined **9 levels** | 한 차원에 너무 많은 단계 배정 금지 |
| 전략 | **MORE dimensions × FEWER steps** | 여러 차원에 적은 단계씩 분산 |

### Goal 10 : Sound localization mechanisms [P4, 31]
| 단서 | 주파수 범위 | 역할 |
|---|---|---|
| **ITD** (Interaural Time Diff) | **<1,500 Hz** | ~**0.8ms** difference |
| **ILD** (Interaural Level Diff) | **>3,000 Hz** | head shadow |
| **Spectral Cues (Pinna)** | all freq | **up-down localization** |
| **Head Movement** | all freq | resolves **front-back ambiguity** |

### Goal 11 : Auditory display design principles [P4, 33]
| 원칙 | 의미 |
|---|---|
| **Compatibility** | high pitch="up", fast rate="urgent" |
| **Approximation** | 2-stage — Attention signal → Designation signal |
| **Dissociability** | background noise/speech와 명확 구분 |
| **Parsimony** | 필요 정보만 |
| **Invariance** | same signal=same info |
| **Standardization** | consistent coding |

### Goal 12 : Presentation principles for auditory displays [P4, 27, 34]
- **Avoid extremes** (startle 방지) / masked threshold +**15~25dB** / **interrupted/variable** signals (adaptation 방지)
- Detection: quiet env → threshold+**40~50dB** / pure tone **200~300ms** build-up / very high intensity → **choice RT 저하**
- **7 ways to improve detection in noise**: ①critical band 내 noise↓ ②intensity↑(+15~25dB) ③duration **≥0.5s** ④shift signal to noise valley ⑤**phase-shift** across ears ⑥signal to **one ear only** ⑦**1,000~4,000Hz** complex signals
