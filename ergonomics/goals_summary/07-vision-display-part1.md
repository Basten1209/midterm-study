## Vision, Visual Display Design (Part 1)

### Goal 1 : Major anatomical structures of the eye [P6]
- 빛 → **Cornea** (초점의 **65~75%**) → **Lens** (**accommodation**, 원근 조절) → **Retina** (빛 감지, **Rods** + **Cones**) → **도립상**
- **Fovea**: 망막 중앙, **Cones만**, 최고 **visual acuity**

### Goal 2 : Rods vs Cones — daylight/night, color, motion, adaptation [P7, 14-16]
- **Cones**: ~**6-7M**, **Fovea**, **Photopic** (주간), 색+고해상도 / L(red), M(green), S(blue) — 남성 ~**8%** 색각결함
- **Rods**: ~**130M**, 주변부, **Scotopic** (야간), 흑백, **움직임 감지**
- **Dark adaptation**: Cones 먼저(0~5min) → **Rod-Cone Break**(5~10min) → Rods 인계(**30~35min**, rhodopsin 재생)
- **Light adaptation**: ~**1분 이내** (rod pigment bleach → cones 전환)

### Goal 3 : Accommodation, Dark Focus, Myopia/Hyperopia [P8-9, HW]
- **Accommodation**: Lens 형태 변화 → 원근 초점 / **Near point** (최소거리) / **Far point** (최대거리, 정상=∞)
- **Dark focus**: 어둠/빈 시야 → 휴식 상태 ~**1m** (1 Diopter) — HUD에서 물체가 더 작고 멀게 보이는 왜곡
- **Myopia** (근시): 초점 망막 **앞** / **Hyperopia** (원시): 초점 망막 **뒤** / **Presbyopia** (노안): Lens 유연성↓

### Goal 4 : Visual Acuity vs Contrast Sensitivity [P10-12]
- **Visual Acuity**: 미세 디테일 분별 / **Snellen chart** — 20/20 = **1 min of arc** / 20/50 = 정상인 50ft를 20ft에서 읽음
- **Contrast Sensitivity**: 저대비 환경 밝기 차이 구별 / **Pelli-Robson test** / 20/20이어도 CS 낮을 수 있음
- 원인: cataracts, glaucoma, macular degeneration, **노화**

### Goal 5 : Visual angle 계산 & 영향 요인 [P10, 13]
- **Visual Angle (min of arc) = (H / D) × 3,438**
- **Luminance↑** → VA·CS 향상 후 level off / **Contrast↑** → 작은 target 식별 / **Exposure time↑** → VA 향상 (100~200ms)
- **Target motion >60°/sec** → Dynamic VA 급격↓ / **Age** → 40세 이후 VA·CS 감소 / **Training** → 향상 가능

### Goal 6 : Visibility vs Legibility vs Readability [P18]
- **Visibility** (detectability): 따로 보이는 정도 → **font size**
- **Legibility** (discriminability): 혼동 없이 식별 → **stroke width-to-height ratio**, **W/H ratio**, **typeface**, **contrast**
- **Readability** (ease of understanding): 텍스트 이해 → **inter-letter/word/line spacing**, **margins**, **sentence structure**
- 소문자 > 대문자 (ascender/descender → **word envelope**) / **Flesch** = 206.835 - 0.846S - 1.015W (**60~70** 표준)

### Goal 7 : Stroke width & letter height 계산, Irradiation effect [P19-20, HW]
- **Stroke Width (in) = 1.45 × 10⁻⁵ × S × D** (S=Snellen 분모, D=거리 in inches)
- **Letter Height = Stroke Width / R** (R=stroke W/H ratio 소수값, 1:6→0.167)
- 예: D=1200in, S=40, R=1:6 → SW=**0.696in**, LH=**4.17in**
- **Ratio 기준**: Black-on-white **1:6~1:8** / White-on-black **1:8~1:10** / 저조도 **1:5** / 후광식 **1:12~1:20**
- **Irradiation effect**: white-on-black에서 밝은 글자 번짐 → 획 더 **얇게**
