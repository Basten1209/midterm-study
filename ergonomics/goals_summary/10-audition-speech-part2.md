## Audition & Speech Communication (Part 2)

### Goal 1 : Evaluate the characteristics and effectiveness of various warning and alarm signals. (경고 및 알람 신호의 특성과 효과성 평가) [Page 6]
**8가지 알람 장치 특성 비교** (Intensity / Frequency / Attention-getting / Noise-penetration):

| 장치 | 강도 | 주파수 | 주의획득 | 소음투과 |
|---|---|---|---|---|
| **Diaphone(foghorn)** | Very high intensity | Very low freq | Good attention | 저주파 소음에서 Poor |
| **Horn** | High intensity | Low~High freq | Good attention | Good penetration |
| **Whistle** | High intensity | Low~High freq | **intermittent일 때** Good | 주파수 적절히 선택 시 Good |
| **Siren** | High intensity | Low~High freq | **pitch 오르내릴 때 Very good** | rising/falling freq → Very good penetration |
| **Bell** | Medium intensity | Med~High freq | Good | 저주파 소음에서 Good |
| **Buzzer** | Low~Med intensity | Low~Med freq | Good | Fair (스펙트럼이 배경 소음에 맞을 때) |
| **Chimes & Gong** | Low~Med | Low~Med | Fair | Fair |
| **Oscillator** | Low~High | Med~High | **intermittent일 때** Good | 주파수 적절히 선택 시 Good |

**설계 권장사항** (Page 7):

| 상황/목표 | 권장 설계 |
|---|---|
| 일반 주파수 범위 | **200~5,000 Hz** 일반용; **500~3,000 Hz** 선호 (귀 민감도 peak) |
| **장거리** | < 1,000 Hz 사용 (고주파는 300m 넘으면 감쇠) |
| **장애물 통과** | < 500 Hz (저주파가 벽/장벽 우회) |
| **변조 신호** | modulated > steady tone: 1~8 beeps/s 또는 warbling 1~3 Hz |
| 배경소음 회피 | 배경소음이 약한 주파수 대역 선택 (**spectral separation**) |
| 다중 경고 | 각각 **구별 가능**해야 하며, 중간 강도 **85~95 dBA** 사용 |
| 오디오 채널 | **전용 채널** 사용 (다른 오디오 소스와 공유 금지) |

**Reaction Time** (Page 8):

| 신호 | 패턴 | 결과 |
|---|---|---|
| **Beep** | intermittent horn 425 Hz, on 0.7s / off 0.6s | best |
| **Yeow** | descending freq sweep 800→100 Hz every 1.4s | best |
| **Wail** | slow freq rise 400→925 Hz over 3.8s | worst |
| **Simple RT** | intensity 높을수록 | 반응 빠름 (monotonic) |
| **Choice RT** | **중간 강도(85~95 dBA)** | 가장 빠름; 고강도 → **startle reflex** → 선택 반응(response selection) 저하 |

### Goal 2 : Describe phonemes and its characteristics such as coarticulation and context dependency. (음소 정의 및 동시 조음·문맥 의존성) [Page 11]
- **Phoneme** = 단어 의미를 바꿀 수 있는 **최소 음성 단위**
- 영어: **44 phonemes** (20 vowels: 12 monophthongs + 8 diphthongs, 24 consonants)
- **Coarticulation(동시 조음)**: 이웃 음소에 따라 음향 특성 변화하지만 같은 음소로 지각
  - 예: /d/ in 'di' vs 'du', "Did you...?" → [didʒu]
- **Context Dependency(문맥 의존성)**: 자연 발화에서 단어를 분리하면 **~50%가 인식 불가** (Pollack & Pickett, 1964)
- **모음 vs 자음**: 모음 = 음향 **파워** 대부분 차지 (예: /a/ in 'talk'은 /th/ in 'then'보다 **680배 = 28 dB** 더 큼), 자음 = **명료도 정보** 대부분 담당

### Goal 3 : Analyze the differences in acoustic power between vowels and consonants, and their relative impact on speech intelligibility. (모음·자음의 음향적 차이 및 명료도 영향) [Page 11]
| 구분 | 음향 특성 | 명료도 영향 |
|---|---|---|
| **Vowels(모음)** | 음향 파워 높음 → 소음 마스킹에 저항력 있음 | **명료도 기여 낮음** |
| **Consonants(자음)** | 음향 파워 낮음 → 소음에 **쉽게 마스킹** | **명료도의 핵심 단서** 제공 |
| 실용적 함의 | 소음 환경에서 자음 손실 | 곧 명료도 하락 → 자음 보존이 설계 핵심 |

**Speech Spectrum** (Page 12):

| 항목 | 핵심 내용 |
|---|---|
| 대화 수준 | **55~65 dBA**; 큰 소리 최대 **85 dBA** |
| 성별 차이 | 남성: 여성보다 **3~5 dB** 더 크고, 저주파 에너지 더 많음 |
| 이해도 결정 | **Band-specific SNR**이 이해도 결정 |

| 발화 수준 | dBA |
|---|---|
| Weak | 45 dBA |
| Normal | 55 dBA |
| Telephone·Lecture | 65 dBA |
| Loud | 75 dBA |
| Shouting | 85 dBA |

**Speech Visualization** (Page 13):

| 도구 | 축/표현 | 용도 |
|---|---|---|
| Waveform | 시간-강도 | 시간에 따른 음성 강도 변화 |
| Spectrogram | 시간-주파수+강도 음영 | 시간별 주파수 구성과 강도 확인 |
| Spectrum | 주파수-강도 | 특정 시점의 주파수별 강도 확인 |

### Goal 4 : Differentiate between the criteria of speech intelligibility and speech quality. (명료도와 품질 구분) [Page 14]
| 기준 | **Speech Intelligibility(명료도)** | **Speech Quality(품질)** |
|---|---|---|
| 측정 대상 | 메시지 이해도 (% words recognized, accuracy) | 자연스러움·유쾌함 |
| 측정 방식 | 청자에게 전송 → 듣고 반복/질문 응답으로 평가 | **선호도 평점**(excellent→unacceptable) 또는 비교 선호 테스트 |
| 의존 단서 | **자음 + 문맥 단서**에 의존 | **모음, 운율(prosody), fidelity**에 의존 |
| 가능한 특징 | 로봇/합성 음성에서도 높을 수 있음 | 화자 식별·사용자 만족에 중요 (전화통화 등) |
| 중요한 시스템 | **경고, 군사, 안전 시스템**에 핵심 | 장기 사용 수용성에 필수 |
| 핵심 대비 | Intelligibility = **정보 전달 정확도** | Quality = **화자 정체성·현실감** |

### Goal 5 : Explain the components of a speech communication system. (음성 통신 시스템 구성 요소 설명) [Page 16]
- **4대 구성 요소**: **Speaker** → **Message** → **Transmission System** → **Listener**
- **Environment**(Noise, Room)가 전 과정에 영향

| 구성 요소 | 명료도 영향 |
|---|---|
| **Speaker** | 발음, 억양, 리듬, 명확한 발성, 속도, 유창성 (Page 17) |
| **Message** | 음소 혼동, 어휘 특성, 문맥 특성 |
| **Transmission** | 필터링, 클리핑, 잔향 |
| **Listener** | 청력, 나이, 청력 보호구, 훈련 |
| **Environment** | 소음, 잔향 |

### Goal 6 : Describe the acoustic characteristics of a speaker with high speech intelligibility. (높은 명료도 화자의 음향적 특성) [Page 18]
Bilger, Hanley & Steer (1955) 연구: 우수 화자 vs 비명료 화자의 **4가지 음향 차이**:

| 특성 | 효과 |
|---|---|
| **Longer syllable duration(긴 음절 지속시간)** | 청자 청각 시스템이 각 음소를 통합할 시간 확보 |
| **Greater speech intensity(높은 음성 강도)** | 배경 소음 대비 **S/N ratio 향상** |
| **More speech time / fewer pauses(적은 휴지기)** | 전송 시간 효율적 사용, 청자 주의 유지 |
| **Greater vocal frequency variation(큰 음성 주파수 변화)** | pitch 변화가 리듬 구조·주의 조절 개선 |

- **Speech training**: 조음·명료도 **moderate 수준** 개선 가능, but 조음기관의 구조적 차이는 대부분 고정

### Goal 7 : Identify how message characteristics influence the intelligibility of speech in noisy environments. (메시지 특성이 소음 환경 명료도에 미치는 영향) [Page 19]
- **Phoneme confusions**: 혼동 잘 되는 음소 그룹 → MNDGBVZ, TKPFS

**Word features**:

| 설계 원칙 | 이유 |
|---|---|
| **Word-spelling alphabet** (alpha, bravo, charlie) > 단일 문자 (A, B) | 명료도 향상 |
| **익숙한 단어** > 낯선 단어 | 친숙성이 인식 보조 |
| **긴 단어** > 짧은 단어 | 음성 단서 더 많아서 식별 용이 |

**Context features**:

| 설계 원칙 | 이유 |
|---|---|
| **Sentences > isolated words > nonsense syllables** | 문맥이 지각 보조 |
| **어휘 수(vocabulary)가 작을수록** | 소음 환경에서 명료도 향상 |
| **표준 문장 구조** 사용 + 정보 전달 순서 고정 | 예: bin location, part number, part name, quantity |
| 수신자에게 사용될 어휘·문장 구조 **사전 숙지** 시키기 | 예측 가능한 어휘·구조가 인식 보조 |

**효과적 메시지 설계 가이드라인 4가지**:

| 번호 | 가이드라인 |
|---|---|
| 1 | 짧은 단어/단일 문자 피하기 → word-spelling alphabet 사용 |
| 2 | 어휘 수 최소화 |
| 3 | 표준 문장 구조 사용 |
| 4 | 수신자에게 어휘·문장 구조 사전 교육 |

### Goal 8 : Apply human factors guidelines for integrating synthesized speech into systems. (합성 음성 시스템 통합 가이드라인 적용) [Page 28]
**합성 음성 유형** (Page 26):

| 유형 | 장점 | 한계 | 핵심 포인트 |
|---|---|---|---|
| **Analog/Digital Recording** | 매우 높은 품질, 자연스러움 | 고정 어휘만 가능, 대용량 저장 | 8,000 samples/s |
| **Synthesis by Analysis(압축 디지털화, LPC)** | 저장 공간 절약, 녹음 수준 품질 | 고정 어휘, 단어 연결 시 **부자연스러운 coarticulation** | 예: 'bookcase' = /k/ 두 번 |
| **Synthesis by Rule(TTS)** | **무제한 어휘**, 메모리 최소, 새 어휘에 화자 불필요 | 품질 낮음, prosody 모델링 어려움 | 새 어휘 생성 가능 |

**합성 음성 성능** (Page 27):

| 항목 | 내용 |
|---|---|
| 명료도 비교 | 자연 음성 99% vs 최고 합성 95% vs 최악 합성 84% |
| **Adaptation effect** | 짧은 노출/훈련으로 명료도 크게 향상 |
| **Memory burden** | 합성 음성은 자연 음성보다 **처리 용량 더 필요** → 메시지 기억 어려움 |
| 해결책 | **inter-word interval 증가** (1s→5s로 recall 거의 2배), pause-grouped digit strings |

**사용자 선호도** (Page 29):

| 항목 | 내용 |
|---|---|
| Intelligibility =/= Preference | 명료해도 불쾌할 수 있음 |
| 합성 음성 묘사 | machinelike, choppy, harsh/grainy, flat, noisy |
| 조종석 조종사 | **기계적 목소리 선호** (인간 승무원 음성과 구별 위해) |
| **Intonation pattern** | continuant(rising pitch) 그룹 전달이 선호됨 |

**8가지 가이드라인** (Page 30):

| 가이드라인 | 적용 의미 |
|---|---|
| **Voice differentiation** | 경고 음성은 시스템 내 다른 음성과 **질적으로 다르게** (특히 조종석) |
| **Alerting tones** | 경고 전용이면 사전 경고음 불필요; 비경고 정보도 있으면 **경고 전용 tone 추가** |
| **Maximize intelligibility** | 안전-critical 메시지에서 명료도 최대화 설정 |
| **Natural voice for general use** | 일반 정보는 자연스러운 목소리로 **사용자 수용성** 향상 |
| **Replay mode** | 복잡한 정보에 **재생 기능** 제공 (단, 실제 사용률 낮음 - Roelofs, 1987) |
| **User interrupt** | 숙련 사용자가 메시지 **중간에 중단** 가능하게 → 효율성 |
| **Training period** | 운영 전 시스템 음성에 **사전 노출** 제공 |
| **Use sparingly** | 시각 대안보다 **확실히 우수할 때만** 사용 ('high-tech fever' 경계) |
