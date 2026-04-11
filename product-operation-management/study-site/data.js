window.POM_SUMMARIES = {
  "generatedAt": "2026-04-11T18:31:33.048Z",
  "categories": [
    {
      "key": "lecture",
      "label": "Lecture",
      "file": "../summaries/lecture_summary.md",
      "weekCount": 4
    },
    {
      "key": "podcast",
      "label": "Podcast",
      "file": "../summaries/podcast_summary.md",
      "weekCount": 7
    },
    {
      "key": "applied_learning",
      "label": "Applied Learning",
      "file": "../summaries/applied_learning_summary.md",
      "weekCount": 5
    },
    {
      "key": "discussion_topics",
      "label": "Discussion Topics",
      "file": "../summaries/discussion_topics_summary.md",
      "weekCount": 5
    },
    {
      "key": "quiz",
      "label": "Quiz",
      "file": "../summaries/quiz_summary.md",
      "weekCount": 5
    }
  ],
  "weeks": [
    {
      "week": 1,
      "categories": [
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Matching Supply and Demand</strong>가 운영관리의 기본 문제라는 점을 사례 중심으로 설명한다.</li><li>수요는 빠르게 변하지만 공급은 설비, 인력, 공급망 때문에 경직적이므로 mismatch가 반복된다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Demand-Supply Mismatch</strong>: 수요와 공급이 맞지 않아 lost sales, excess inventory, waiting, idle capacity가 생기는 상태.</li><li><strong>Rigid Supply</strong>: 공장, 항공기, 인력, 공급망처럼 단기간에 쉽게 늘리거나 줄이기 어려운 공급 구조.</li><li><strong>Load Factor</strong>: 항공기 좌석 capacity 중 실제로 승객이 채운 비율. 고정비가 큰 산업에서 수익성에 큰 영향을 준다.</li><li><strong>Efficiency Frontier</strong>: service responsiveness와 labor productivity처럼 서로 상충하는 성과 지표 사이에서 달성 가능한 효율적 경계.</li><li><strong>Trade-off</strong>: 한 성과를 높이면 다른 성과가 희생되는 관계.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Airbus A380은 너무 큰 aircraft capacity를 전제로 설계되어 특정 고수요 노선에서는 유리했지만, 수요 변동에 유연하게 대응하기 어려웠다.</li><li>PlayStation 5는 팬데믹 시기 게임기 수요가 폭증했지만 반도체 공급망 제약 때문에 unmet demand가 발생했다.</li><li>2020년 원유 가격이 음수가 된 사례는 수요가 급감했지만 공급과 저장 구조가 즉시 멈추지 못한 극단적 mismatch다.</li><li>항공사는 비용의 상당 부분이 fixed cost이므로, 탑승률이 몇 퍼센트포인트만 올라가도 추가 승객의 revenue가 대부분 profit으로 전환될 수 있다.</li><li>콜센터 예시는 운영 개선 접근을 세 단계로 정리한다: inefficiency 제거, 전략에 맞는 trade-off 지점 선택, 기술/프로세스 혁신으로 frontier 자체 확장.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Premium service 전략이면 더 많은 인력과 짧은 waiting time을 선택할 수 있고, low-cost 전략이면 어느 정도의 waiting을 감수하고 labor productivity를 높일 수 있다.</li><li>AI chatbot이나 상담 시스템 개선은 단순 trade-off 안에서 움직이는 것이 아니라 responsiveness와 productivity를 동시에 개선해 frontier를 이동시킬 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>수요와 공급을 맞춘다는 것은 단순 예측 문제가 아니라, demand variability와 supply rigidity 사이에서 capacity, inventory, price, process design을 조정하는 문제다.</li><li>운영관리의 목표는 무조건 utilization 100%가 아니라 strategy에 맞는 trade-off를 고르고, 가능하면 process innovation으로 trade-off 자체를 완화하는 것이다.</li></ul>"
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "categories": [
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>조직을 <strong>process</strong>라는 블랙박스로 보고, flow unit이 들어가서 output이 되는 흐름을 분석한다.</li><li><strong>Little&#39;s Law</strong>를 이용해 inventory, flow rate, flow time의 관계를 이해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Flow Unit</strong>: 프로세스를 통과하는 분석 대상. 병원에서는 환자, 공장에서는 제품, 세무서에서는 신고서가 된다.</li><li><strong>Inventory</strong>: 프로세스 안에 머물고 있는 flow units의 수. 병원 대기실의 환자도 process inventory다.</li><li><strong>Flow Time</strong>: flow unit이 프로세스에 들어와 나갈 때까지 걸리는 총 시간. 가치창출 시간과 waiting time을 모두 포함한다.</li><li><strong>Flow Rate</strong>: 단위 시간당 프로세스가 output을 내보내는 속도.</li><li><strong>Little&#39;s Law</strong>: <code>Average Inventory = Average Flow Rate x Average Flow Time</code>.</li><li><strong>Inventory Turnover</strong>: 일정 기간 동안 inventory가 얼마나 빨리 매출이나 output으로 전환되는지 보여주는 지표.</li><li><strong>Product-Process Matrix</strong>: 제품 variety/volume과 process type의 적합성을 설명하는 프레임.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>병원 중재적 방사선과 사례에서 Gantt chart의 순수 처리시간은 약 2시간이어도, 실제 환자 경험에는 waiting time이 포함된다.</li><li>Process 관점에서는 부가가치 활동뿐 아니라 waiting과 queue도 flow time에 영향을 주므로 반드시 분석해야 한다.</li><li>Champagne 산업은 숙성 때문에 flow time이 길고 inventory가 매우 크다. 이는 Little&#39;s Law로 설명할 수 있다.</li><li>대기실 평균 inventory와 시간당 처리율을 알면, 개별 환자를 모두 추적하지 않아도 평균 waiting time을 계산할 수 있다.</li><li>Walmart와 Kohl&#39;s, Kroger와 Tiffany 사례는 inventory turnover를 산업 특성과 margin 구조에 맞게 해석해야 함을 보여준다.</li><li>Inventory가 생기는 이유는 pipeline inventory, seasonal inventory, cycle inventory, decoupling buffer, safety stock처럼 다양하다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Tiffany처럼 높은 margin과 낮은 turnover를 가진 business model은 Walmart 같은 high-turnover retailer와 같은 기준으로 평가하면 안 된다.</li><li>Best Buy의 제품 체류 시간을 줄이는 사례는 flow time 감소가 inventory holding cost와 margin에 직접 영향을 줄 수 있음을 보여준다.</li><li>Product-process matrix에서는 industry가 대체로 job shop에서 batch, assembly line, continuous process 방향으로 이동하며 efficiency를 추구한다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Waiting과 inventory를 &quot;우연한 불편함&quot;이 아니라 demand-supply mismatch와 process design의 결과로 설명해야 한다.</li><li>Little&#39;s Law는 복잡한 프로세스에서도 inventory, flow rate, flow time 중 두 개를 알면 나머지를 추정하게 해 주는 핵심 도구다.</li></ul>"
            }
          ]
        }
      ]
    },
    {
      "week": 3,
      "categories": [
        {
          "key": "lecture",
          "label": "Lecture",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>공급 프로세스의 산출 능력을 <strong>process capacity</strong> 관점에서 평가하고, 병목이 전체 시스템 속도를 어떻게 결정하는지 이해한다.</li><li>수요에 맞추려면 전체 작업시간을 더 작은 station으로 나누되, 각 station의 cycle time이 균형을 이뤄야 한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Standard Time (ST)</strong>: 한 flow unit을 완성하는 데 필요한 총 작업시간.</li><li><strong>Cycle Time (CT)</strong>: 한 station 또는 line이 다음 unit을 내보내는 시간 간격. Line CT는 가장 느린 station의 CT, 즉 bottleneck CT가 된다.</li><li><strong>Takt Time (TT)</strong>: 고객 수요가 요구하는 생산 박자. <code>Available Time / Demand</code>로 계산한다.</li><li><strong>Bottleneck</strong>: 가장 긴 CT 또는 가장 낮은 capacity를 가진 station. 전체 line capacity를 제한한다.</li><li><strong>Work-in-Process (WIP)</strong>: 프로세스 내부에서 아직 완료되지 않고 대기하거나 처리 중인 flow units.</li><li><strong>Line Balancing (LOB)</strong>: station별 작업량을 균등하게 배분해 idle time과 bottleneck을 줄이는 개선 활동. 예시 식은 <code>sum of station cycle times / (bottleneck CT x number of stations)</code>.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>한 사람이 자동차 1대를 4시간에 조립하면 하루 8시간 기준 capacity는 2대다.</li><li>수요가 하루 60대이고 가용시간이 480분이면 takt time은 8분이다. 총 조립 시간이 240분이면 이상적으로 필요한 station 수는 <code>240 / 8 = 30</code>이다.</li><li>작업을 station 2개, 4개, 5개로 나누면 이론상 CT가 줄고 daily output이 증가하지만, 실제로는 모든 station의 작업시간을 완벽히 같게 만들기 어렵다.</li><li>station별 CT가 <code>0.4, 1, 2, 0.2, 0.4</code>처럼 불균형하면 line CT는 2시간이 되고, 병목 앞에 WIP가 쌓인다.</li><li>Mass production은 반복 작업과 표준화로 productivity를 높이지만, 큰 batch, end-of-line inspection, push policy 때문에 responsiveness 저하, 결함 조기 발견 실패, overproduction, WIP 증가가 생길 수 있다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>단순히 station 수를 늘리는 것보다 bottleneck CT와 line balancing이 실제 output을 결정한다.</li><li>Push 방식에서 한 작업자의 효율이 떨어지면 line balancing이 무너지고, 병목 전에는 재고가 쌓이며 병목 후에는 starvation이 발생한다.</li><li>결함률을 예상해 110% 생산하는 방식은 overproduction과 inventory를 유발할 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>&quot;capacity를 늘린다&quot;는 말은 전체 station을 다 빠르게 만든다는 뜻이 아니라 bottleneck을 찾아 그 제약을 완화한다는 뜻으로 설명해야 한다.</li><li>단순한 flow diagram은 정상 경로만 보여줄 수 있으므로 실제 capacity 분석에서는 rework, defect, delay, WIP accumulation을 함께 고려해야 한다.</li></ul>"
            }
          ]
        },
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>복잡한 공정을 <strong>flow diagram</strong>으로 단순화하고, 전체 system capacity를 제한하는 <strong>bottleneck</strong>을 찾는다.</li><li>서로 다른 flow units가 섞인 경우에는 작업량을 공통 단위로 환산해 <strong>implied utilization</strong>을 계산한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Process Capacity</strong>: 프로세스가 단위 시간당 처리할 수 있는 최대 output.</li><li><strong>Bottleneck</strong>: capacity가 가장 낮아 전체 output을 제한하는 step 또는 resource.</li><li><strong>Utilization</strong>: 실제 output을 capacity로 나눈 비율. Demand가 낮으면 capacity가 있어도 utilization은 낮을 수 있다.</li><li><strong>Implied Utilization</strong>: demand를 capacity로 나눈 비율. 업무 압박을 보여주며 100%를 넘을 수 있다.</li><li><strong>Common Workload Unit</strong>: 여러 종류의 flow unit을 비교하기 위해 시간 같은 공통 작업량 단위로 바꾸는 기준.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>병원이나 화학 공장처럼 복잡한 시스템도 flow unit을 따라가면 네모, 삼각형, 화살표로 단순화할 수 있다.</li><li>서코레드 공장 사례에서는 각 공정의 capacity를 비교해 두 번째 반응기가 시간당 100톤으로 bottleneck이 됨을 파악한다.</li><li>첫해 생산량이 계획 capacity보다 낮았다고 해서 무조건 실패는 아니다. 수요가 부족하면 100% utilization은 오히려 unsold inventory를 만든다.</li><li>Demand가 capacity를 넘으면 실제 utilization은 100%에서 멈추지만 implied utilization은 125%처럼 system pressure를 보여준다.</li><li>채용 대행사처럼 컨설팅, 일반 직원, 인턴 지원서가 섞이면 지원서 개수가 아니라 각 지원서 처리시간을 곱한 workload minutes로 비교해야 한다.</li><li>공항 입국장 예시는 각 resource를 전체 arrival demand와 독립적으로 비교해야 현재 bottleneck뿐 아니라 잠재 bottleneck도 볼 수 있음을 보여준다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Bottleneck을 개선하면 기존 두 번째로 느린 step이 새로운 bottleneck이 될 수 있다.</li><li>Flow diagram은 복잡성을 줄이기 위한 도구지만, rework와 variability를 빠뜨리면 실제 capacity를 잘못 판단할 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Bottleneck 분석은 단순히 가장 큰 장비나 가장 복잡한 공정을 찾는 것이 아니라, capacity를 같은 시간 단위로 환산해 가장 낮은 처리율을 찾는 작업이다.</li><li>Utilization 100%를 목표로 삼기 전에 demand-constrained인지 supply-constrained인지 먼저 판단해야 한다.</li></ul>"
            }
          ]
        },
        {
          "key": "applied_learning",
          "label": "Applied Learning",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Capacity Utilization</strong>을 가격 결정과 product mix 의사결정에 연결한다.</li><li>단순한 margin per unit보다 <strong>margin per constraint</strong>가 더 정확한 수익성 판단 기준이 될 수 있다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Capacity Constraint</strong>: 생산량을 제한하는 병목 자원. 제조업에서는 machine hours, 유통업에서는 truck capacity, 서비스업에서는 partner/staff time이 될 수 있다.</li><li><strong>Margin per Unit</strong>: 제품 1개당 이익. 병목 자원 사용량을 무시할 수 있다.</li><li><strong>Margin per Constraint</strong>: 병목 자원 1단위당 이익. 제약된 capacity를 가장 수익성 있게 배분하는 데 유용하다.</li><li><strong>Product Mix</strong>: 제한된 capacity 안에서 어떤 제품/서비스 조합을 생산하거나 판매할지 결정하는 문제.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>기업은 보통 unit당 margin을 중심으로 pricing을 생각하지만, capacity가 제한되어 있으면 병목 자원이 실제 기회비용이 된다.</li><li>제조 사례에서는 큰 제품의 unit margin이 높아도 작은 제품이 시간당 더 많이 생산된다면, machine hour당 profit은 작은 제품이 더 높을 수 있다.</li><li>유통업에서는 truck당 profitability를 보면 unit당 profitability와 다른 결론이 나올 수 있다.</li><li>서비스업에서는 partner의 고가 시간을 어디에 쓰는지가 수익성을 좌우하므로, 낮은 hourly rate의 support staff와 역할 배분을 조정할 수 있다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Capacity-constrained 상황에서는 가격을 단순히 원가에 margin을 더하는 방식으로 정하면 잘못된 product mix를 유도할 수 있다.</li><li>제약 자원당 수익성을 기준으로 가격과 판매 전략을 조정하면 추가 unit 판매 없이도 총 profit이 개선될 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Week 3 lecture의 bottleneck, capacity, utilization 개념을 pricing과 연결하는 응용 자료다.</li><li>&quot;높은 margin 제품이 항상 좋은가&quot;라는 판단은 병목 자원 사용량을 함께 봐야 한다.</li></ul>"
            }
          ]
        },
        {
          "key": "discussion_topics",
          "label": "Discussion Topics",
          "sections": [
            {
              "heading": "Topic 1 : 단순한 Flow Diagram이 실제 Bottleneck, Rework, Delay, Capacity Constraint를 숨길 수 있는가?",
              "html": "<ul><li>이 주제는 깔끔한 process map이 운영 분석에 충분한지, 실제 공정의 복잡성을 지나치게 단순화하는지 묻는다.</li><li>핵심은 flow diagram의 clarity와 실제 capacity analysis의 accuracy 사이의 균형이다.</li></ul><h4>찬성측</h4><ul><li>단순한 <strong>flow diagram</strong>은 happy path만 보여주기 쉬워 error, rework, waiting, delay를 놓칠 수 있다.</li><li>표면적으로는 공정이 매끄러워 보여도 실제로는 특정 단계에서 WIP가 쌓이는 <strong>hidden bottleneck</strong>이 존재할 수 있다.</li><li>Defect나 재작업이 반복되면 실제 capacity가 줄어드는데, 단순 diagram은 이런 변동성을 충분히 표현하지 못한다.</li><li>운영 개선을 위해서는 흐름의 순서뿐 아니라 processing time, queue, resource utilization, exception path까지 함께 봐야 한다.</li></ul><h4>반대측</h4><ul><li>단순한 flow diagram은 복잡한 공정을 빠르게 이해하게 해 주는 전략적 커뮤니케이션 도구다.</li><li>처음부터 모든 예외와 변동성을 넣으면 분석이 지나치게 복잡해져 핵심 bottleneck을 찾기 어려울 수 있다.</li><li>High-level map은 세부 capacity analysis로 들어가기 전 공정 경계와 주요 단계에 대한 공통 이해를 만든다.</li><li>문제는 단순 diagram 자체가 아니라, 그것을 실제 운영의 완전한 representation으로 오해하는 데 있다.</li></ul>"
            },
            {
              "heading": "Topic 2 : Supply-Constrained 환경에서 Non-Bottleneck Capacity Buffer는 Waste인가, Resilience Buffer인가?",
              "html": "<ul><li>이 주제는 bottleneck이 전체 output을 결정할 때, 다른 resource의 낮은 utilization을 낭비로 볼지 운영 안정성을 위한 여유로 볼지 묻는다.</li><li>핵심은 capital efficiency와 system resilience 사이의 trade-off를 판단하는 것이다.</li></ul><h4>찬성측</h4><ul><li>Bottleneck이 전체 throughput을 결정한다면 non-bottleneck에 과도한 capacity를 두는 것은 capital efficiency를 낮출 수 있다.</li><li>특정 resource가 계속 idle하면 조직은 실제 output 증가 없이 설비와 인력 비용만 부담하게 된다.</li><li>Utilization gap이 크면 process design이 bottleneck 중심으로 최적화되지 않았다는 신호일 수 있다.</li><li>제한된 자본은 non-bottleneck capacity보다 bottleneck 제거, 품질 개선, setup reduction에 우선 배분되어야 한다.</li></ul><h4>반대측</h4><ul><li>Non-bottleneck slack은 demand volatility, equipment failure, quality issue를 흡수하는 <strong>resilience buffer</strong>가 될 수 있다.</li><li>모든 resource를 100% utilization에 가깝게 운영하면 작은 disruption도 전체 flow를 쉽게 멈추게 만든다.</li><li>Bottleneck 앞뒤의 여유 capacity는 bottleneck이 굶거나 막히지 않도록 보호해 overall throughput을 안정화한다.</li><li>Supply-constrained system에서는 efficiency뿐 아니라 reliability와 recovery speed도 함께 고려해야 한다.</li></ul>"
            }
          ]
        },
        {
          "key": "quiz",
          "label": "Quiz",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>프로세스 capacity와 bottleneck을 정의하고, 실제 output인 flow rate와 구분한다.</li><li>수요와 capacity의 관계에 따라 demand-constrained 또는 supply-constrained 상태를 판단한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Process Capacity</strong>: 전체 시스템이 낼 수 있는 최대 output rate. 가장 낮은 resource capacity가 결정한다.</li><li><strong>Bottleneck</strong>: 시스템에서 capacity가 가장 낮아 전체 속도를 제한하는 resource 또는 step.</li><li><strong>Flow Rate</strong>: 실제로 시스템을 통과해 완료되는 output rate. <code>min {input rate, demand, process capacity}</code>로 이해한다.</li><li><strong>Utilization</strong>: 실제 flow rate를 capacity로 나눈 값. 일반 utilization은 100%를 넘지 않는다.</li><li><strong>Implied Utilization</strong>: demand를 capacity와 비교한 값. demand pressure를 보여주므로 100%를 넘을 수 있다.</li><li><strong>Demand-Constrained</strong>: demand가 capacity보다 낮아 output이 수요에 의해 제한되는 상태.</li><li><strong>Supply-Constrained</strong>: demand가 capacity보다 높아 output이 capacity에 의해 제한되는 상태.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Capacity는 &quot;할 수 있는 최대치&quot;이고, flow rate는 &quot;실제로 흐르는 양&quot;이다.</li><li>Bottleneck capacity보다 많이 생산할 수 없으며, demand가 낮으면 bottleneck조차 idle time을 가질 수 있다.</li><li>Demand가 갑자기 capacity를 넘으면 bottleneck 앞에 backlog 또는 queue가 쌓인다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>시간당 30개를 처리하는 machine이 8시간 운영되면 daily capacity는 240 units이다.</li><li>높은 utilization은 병목 후보를 찾는 데 유용하지만, 병목의 정의는 가장 낮은 capacity에 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Capacity, flow rate, utilization, implied utilization을 서로 바꿔 쓰지 않는 것이 중요하다.</li><li>&quot;수요가 늘었다&quot;는 현상을 output 증가로 바로 연결하지 말고, capacity 초과 여부와 backlog 발생 여부를 함께 설명한다.</li></ul>"
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "categories": [
        {
          "key": "lecture",
          "label": "Lecture",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>수요와 공급을 맞추기 위해 <strong>labor cost per unit</strong>, <strong>idle time</strong>, <strong>line balancing</strong>을 연결해서 이해한다.</li><li>노동 활용률을 무조건 최대화하는 것이 목표가 아니라, bottleneck과 demand 조건을 기준으로 프로세스를 개선하는 것이 목표다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Labor Content</strong>: 제품 1개를 만들기 위해 노동자가 실제로 수행하는 처리시간의 합.</li><li><strong>Labor Cost per Unit</strong>: 일정 기간 지급되는 총 임금을 실제 생산량으로 나눈 비용. 수요가 낮아 flow rate가 낮으면 단위당 노동비가 상승한다.</li><li><strong>Idle Time</strong>: 노동자가 투입되어 있지만 처리할 일이 없어 대기하는 시간. 항상 나쁜 것은 아니지만 비용 구조에는 반영된다.</li><li><strong>Worker-Paced Line</strong>: 작업자의 처리 속도가 각 station의 capacity를 결정하는 line.</li><li><strong>Line Balancing (LOB)</strong>: 과부하 station의 일부 작업을 여유 station으로 옮겨 bottleneck을 완화하고 flow rate를 높이는 방법.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Assembly line은 보통 CT가 takt time과 비슷하도록 설계되며, line CT는 bottleneck CT와 같다.</li><li>LOB는 station별 CT 합을 bottleneck CT와 station 수의 곱으로 나눠 계산한다. 값이 낮으면 idle time과 작업 불균형이 크다.</li><li>수요가 capacity보다 낮은 demand-constrained 상황에서는 bottleneck도 idle time을 가질 수 있다. 총 임금은 고정되어 있으므로 생산량이 적어져 labor cost per unit이 높아진다.</li><li>수요가 capacity보다 높은 supply-constrained 상황에서는 bottleneck이 계속 작동하고, output은 process capacity에 묶인다. 이때 병목 개선은 실제 생산량 증가로 이어질 수 있다.</li><li>예시 프로세스에서는 Burn 공정이 병목이면 Cut 공정으로 일부 작업을 옮기거나, Burn 공정 효율을 높이거나, labor/capacity를 추가해 개선한다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>하루 수요가 40개이고 capacity가 64개이면 실제 flow rate는 40개로 제한되어 단위당 노동비가 커진다.</li><li>하루 수요가 120개이면 실제 flow rate는 capacity인 64개로 제한되지만, 같은 임금으로 더 많은 unit을 만들기 때문에 단위당 노동비는 낮아진다.</li><li>폭발적 수요 증가에는 bottleneck capacity 확대, 작업 재배분, 추가 인력, overtime, 가격 조정 등의 대응을 연결해 생각할 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>&quot;idle time은 항상 제거해야 하는가&quot;라는 주제는 비용 절감 논리와 slack이 주는 문제 해결 여유를 분리해서 설명하면 좋다.</li><li>과도한 specialization은 작업을 더 이상 잘게 나눌 수 없는 한계에 부딪힐 수 있고, parallel work cells가 더 나은 대안이 될 수 있다.</li></ul>"
            }
          ]
        },
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Labor Cost</strong>가 단순히 labor content와 wage rate의 곱으로 결정되지 않는 이유를 설명한다.</li><li><strong>Line Balancing</strong>으로 idle time을 줄이고, 같은 자원으로 capacity와 labor productivity를 높인다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Labor Content</strong>: 제품 1개를 만드는 데 필요한 총 노동 처리시간.</li><li><strong>Idle Time</strong>: worker가 paid time 안에 있지만 다음 작업을 기다리느라 생산하지 못하는 시간.</li><li><strong>Average Labor Utilization</strong>: 작업자가 실제 가치창출 작업에 투입된 시간의 비율.</li><li><strong>Worker-Paced Line</strong>: 작업자가 각 step의 속도를 정하는 라인.</li><li><strong>Line Balancing</strong>: 작업을 더 작은 task로 분해하고 worker 간 재배분해 bottleneck과 idle time을 줄이는 방식.</li><li><strong>Work Cell</strong>: 한 작업자가 여러 단계를 묶어 처리하거나 제품 하나를 처음부터 끝까지 책임지는 구조.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>킥보드 1대에 labor content가 32분이고 시급이 12달러라면 단순 계산상 인건비는 6.40달러지만, 실제 비용은 idle time 때문에 더 커질 수 있다.</li><li>13분, 11분, 8분의 3인 조립 라인에서는 가장 느린 13분 step이 bottleneck이 되고, 빠른 worker는 기다리게 된다.</li><li>첫 unit이 나오기 전에는 세 step의 시간이 모두 필요하므로 empty system의 initial delay를 무시하면 납기 계산이 틀릴 수 있다.</li><li>작업을 초단위로 쪼개고 일부 task를 여유 worker에게 넘기면 bottleneck time을 792초에서 665초로 줄여 capacity를 개선할 수 있다.</li><li>수요가 더 커지면 라인 복제, bottleneck worker 추가, 더 세분화된 12인 라인, work cell 같은 scale-up 옵션을 비교해야 한다.</li><li>극단적 specialization은 교육이 쉽고 속도가 빠를 수 있지만, 작업 단위가 더 이상 나뉘지 않는 indivisibility 때문에 balancing이 어려워진다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Work cell은 구조적 idle time을 줄이고 ownership을 높일 수 있지만, worker training cost와 skill requirement가 커진다.</li><li>Supply chain 전체를 보면 구매 부품 가격 안에도 upstream suppliers의 labor bottleneck과 idle time이 숨어 있을 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>노동비 절감은 임금 삭감이 아니라 idle time을 보이게 만들고 line balancing으로 같은 인력의 flow rate를 높이는 방식으로 설명할 수 있다.</li><li>&quot;사람을 더 뽑자&quot;보다 먼저 현재 프로세스 안의 workload imbalance를 확인하는 것이 운영관리적 접근이다.</li></ul>"
            }
          ]
        },
        {
          "key": "applied_learning",
          "label": "Applied Learning",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Labor Cost</strong>와 <strong>Production Efficiency</strong>를 단순한 규모의 경제 문제가 아니라 노동의 opportunity cost와 생산자 상황의 차이로 이해한다.</li><li>작은 생산자가 항상 비효율적인 것은 아니며, 적절한 asset set과 labor cost 가정에 따라 결론이 달라진다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Long-Run Average Cost Function</strong>: 생산 규모별 장기 평균 비용을 나타내는 함수. 전통적으로 규모가 커질수록 비용이 감소하다가 완만해지는 형태로 설명된다.</li><li><strong>Opportunity Cost of Labor</strong>: 노동을 다른 곳에 썼을 때 얻을 수 있는 대안 수익.</li><li><strong>Durable Asset Set</strong>: 생산 규모에 맞는 장비와 설비 조합. 작은 농장이 큰 농장의 장비 조합을 그대로 써야 한다고 가정하면 비용을 과대평가할 수 있다.</li><li><strong>Family Income Target</strong>: 농업 외 소득까지 고려했을 때 가족이 필요로 하는 소득 목표.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>작은 농장이 큰 농장과 같은 장비 조합을 가져야 한다고 가정하면, 작은 농장의 unit cost가 높아 보인다.</li><li>그러나 작은 규모에는 다른 최적 asset set이 있을 수 있으므로, 규모가 작다는 이유만으로 비효율이라고 단정할 수 없다.</li><li>Labor cost도 모든 작은 농장에 동일한 opportunity cost를 적용하면 왜곡된다.</li><li>비농업 소득, 은퇴, 투자소득, 가족 소득 목표에 따라 농업 노동의 경제적 비용은 크게 달라진다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>도시 근처의 작은 농장은 비농업 고용 기회가 많아 농업에서 반드시 벌어야 하는 소득이 낮을 수 있다.</li><li>외부 소득이 거의 없는 농장은 농업 수익 압박이 크므로 consolidation pressure가 더 강할 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Week 4 lecture의 labor cost per unit 논의를 확장해, 노동비는 단순 임금이 아니라 opportunity cost와 생산자 조건에 따라 달라진다고 설명할 수 있다.</li><li>&quot;효율성&quot;은 계산 방식과 가정에 민감하므로, 단일 비용 지표만으로 운영 구조를 평가하면 위험하다.</li></ul>"
            }
          ]
        },
        {
          "key": "discussion_topics",
          "label": "Discussion Topics",
          "sections": [
            {
              "heading": "Topic 1 : 고도로 세분화된 Assembly Line보다 Parallel Work Cells가 더 나은 상황이 있는가?",
              "html": "<ul><li>이 주제는 task specialization이 항상 efficiency를 높이는지, 또는 작업을 지나치게 잘게 나누면 coordination cost와 품질 문제가 커지는지 묻는다.</li><li>핵심은 specialization의 learning effect와 parallel work cells의 flexibility를 비교하는 것이다.</li></ul><h4>찬성측</h4><ul><li>작업은 물리적, 기술적, 인지적 이유로 무한히 쪼갤 수 없으므로 과도한 세분화는 오히려 비효율을 만들 수 있다.</li><li><strong>Parallel work cells</strong>에서는 작업자가 여러 단계를 함께 이해하므로 품질 문제와 예외 상황에 더 빠르게 대응할 수 있다.</li><li>제품 mix가 다양하거나 demand pattern이 변동적이면 rigid assembly line보다 flexible cell 구조가 더 안정적일 수 있다.</li><li>한 사람이 지나치게 단순한 반복 작업만 수행하면 motivation과 ownership이 낮아져 장기 productivity가 떨어질 수 있다.</li></ul><h4>반대측</h4><ul><li>고도로 세분화된 assembly line은 반복 학습을 통해 속도, 정확성, cost advantage를 만들 수 있다.</li><li>Task specialization은 training을 단순화하고 작업 표준화를 쉽게 만들어 high-volume production에 적합하다.</li><li>작업이 명확히 나뉘면 책임 범위와 performance measurement가 분명해져 관리가 쉬워진다.</li><li>Parallel work cells는 작업자에게 더 넓은 skill을 요구하므로 training cost와 performance variability가 커질 수 있다.</li></ul>"
            },
            {
              "heading": "Topic 2 : TPS식 Idle Time 제거는 Productivity를 높이는가, Root-Cause Problem Solving을 위한 Slack을 없애는가?",
              "html": "<ul><li>이 주제는 idle time을 waste로 보고 제거하는 것이 좋은지, 문제 탐색과 개선을 위한 여유를 남겨야 하는지 묻는다.</li><li>핵심은 waste reduction과 improvement capacity를 구분해서 판단하는 것이다.</li></ul><h4>찬성측</h4><ul><li>Idle time 제거는 자원 활용도를 높이고 같은 인력과 설비로 더 많은 output을 만들게 한다.</li><li>TPS 관점에서 낭비를 줄이면 문제가 더 빨리 드러나고, 팀이 표준 작업과 flow 개선에 집중하게 된다.</li><li>불필요한 대기 시간이 줄어들면 cycle time이 짧아지고 customer response가 빨라질 수 있다.</li><li>Discipline 있는 운영은 느슨한 buffer에 의존하지 않고 defect와 delay의 원인을 지속적으로 제거하게 만든다.</li></ul><h4>반대측</h4><ul><li>모든 시간을 production으로 채우면 작업자가 defect, delay, process instability의 root cause를 분석할 여유가 사라질 수 있다.</li><li><strong>Slack</strong>은 단순한 낭비가 아니라 kaizen, training, problem solving을 가능하게 하는 improvement capacity가 될 수 있다.</li><li>100% utilization에 가까운 시스템은 작은 변동에도 queue와 delay가 급격히 증가할 위험이 있다.</li><li>제거해야 할 idle time과 의도적으로 남겨야 할 learning time을 구분하지 않으면 단기 productivity가 장기 품질 개선을 해칠 수 있다.</li></ul>"
            }
          ]
        },
        {
          "key": "quiz",
          "label": "Quiz",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>Labor cost를 단순 wage rate가 아니라 flow rate, idle time, line balancing과 연결해 이해한다.</li><li>노동 활용률 최대화가 항상 목적은 아니며, bottleneck과 demand 조건에 맞게 process를 개선해야 한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Labor Content</strong>: 제품 1개를 만들기 위해 필요한 모든 labor processing time의 합.</li><li><strong>Idle Time</strong>: worker가 대기하지만 생산활동을 하지 않는 시간.</li><li><strong>Line Balancing</strong>: 작업을 station 간에 재배분해 bottleneck과 idle time을 줄이는 활동.</li><li><strong>Labor Cost per Unit</strong>: 총 지급 임금을 실제 생산량으로 나눈 값. Flow rate가 증가하면 보통 낮아진다.</li><li><strong>Worker-Paced Bottleneck</strong>: worker-paced line에서 processing time이 가장 긴 worker 또는 station.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Process objective는 labor utilization 자체를 최대화하는 것이 아니라 수요에 맞춰 가치를 만드는 것이다.</li><li>Demand-constrained process에서는 bottleneck도 idle time을 가질 수 있다.</li><li>Idle time은 worker에게 임금이 지급되는 동안 output이 만들어지지 않는 시간이므로 단위당 노동비를 높인다.</li><li>Line balancing은 현재 인력과 장비를 유지한 채 숨은 capacity를 열 수 있는 개선 방식이다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>총임금이 일정할 때 flow rate가 증가하면 direct labor cost per unit은 감소한다.</li><li>병목 worker의 일부 작업을 여유 station으로 옮기면 bottleneck CT를 줄이고 전체 capacity를 높일 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Labor cost 절감은 임금을 낮추는 것만이 아니라 flow rate를 높이고 idle time을 줄여 단위당 비용을 낮추는 방식으로 설명할 수 있다.</li><li>Idle time은 비용 관점에서는 부담이지만, 개선과 문제 해결을 위한 slack으로 볼 수 있는 논점도 남는다.</li></ul>"
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "categories": [
        {
          "key": "lecture",
          "label": "Lecture",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>batch</strong>와 <strong>setup/changeover</strong>가 capacity, inventory, responsiveness 사이의 trade-off를 어떻게 만드는지 이해한다.</li><li>큰 batch는 setup time을 분산시켜 per-unit cost와 capacity 측면에서 유리하지만, cycle inventory와 lead time을 증가시킨다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Batch</strong>: 장비 설정을 바꾸기 전에 함께 처리되는 flow units의 묶음.</li><li><strong>Setup / Changeover</strong>: 제품 유형이나 공정 조건을 바꾸기 위해 장비를 재설정하는 시간.</li><li><strong>Cycle Inventory</strong>: batch 생산 때문에 생산과 소비가 동기화되지 않아 생기는 평균 재고.</li><li><strong>Responsiveness</strong>: 수요 변화나 고객 맞춤 요청에 빠르게 반응하는 능력.</li><li><strong>SMED / Quick Setup</strong>: setup 시간을 줄여 작은 batch와 낮은 per-unit cost를 동시에 달성하려는 접근.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>setup 시간이 존재하면 batch size가 커질수록 setup 시간이 많은 unit에 나뉘어 capacity가 증가한다.</li><li>하지만 batch size가 너무 커지면 cycle inventory가 증가하고, 고객 수요에 대한 responsiveness가 낮아진다.</li><li>비용 관점에서는 setup cost와 inventory cost의 합이 최소가 되는 batch size가 존재한다.</li><li>더 바람직한 방향은 단순히 큰 batch를 선택하는 것이 아니라 setup 시간을 줄여 작은 batch에서도 낮은 비용을 달성하는 것이다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Bagel 예시는 basic과 crispy 제품 사이에 warming/cooling setup이 있을 때 batch size 결정이 capacity와 재고를 동시에 바꾼다는 점을 보여준다.</li><li>Executive Shirt Company는 기존 60장 batch 중심 공정에 custom shirt를 넣을 때 batch size 축소, buffer 증가, 별도 line 운영 같은 선택지가 생기는 사례다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Batch size 의사결정은 &quot;capacity vs inventory&quot;의 trade-off로 설명하는 것이 핵심이다.</li><li>Setup이 bottleneck에서 발생하고 demand가 capacity를 초과하면 큰 batch가 유리할 수 있지만, setup이 non-bottleneck에서 발생하거나 responsiveness가 중요하면 작은 batch가 더 적합할 수 있다.</li></ul>"
            }
          ]
        },
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Setup Time</strong>이 존재할 때 왜 batch production이 생기고, batch size가 capacity와 inventory 사이의 trade-off를 만드는지 설명한다.</li><li><strong>SMED</strong>와 <strong>EOQ</strong>를 통해 생산 내부의 시간 문제와 외부 조달의 현금 비용 문제를 구분한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Setup Time</strong>: 제품이나 작업 종류를 바꾸기 위해 장비를 멈추고 준비하는 시간.</li><li><strong>Batch Size</strong>: 한 번의 setup 후 연속으로 처리하는 unit 수.</li><li><strong>Cycle Inventory</strong>: 큰 batch 때문에 생산과 demand가 동기화되지 않아 생기는 재고.</li><li><strong>Heijunka</strong>: 생산량과 제품 mix를 평준화해 큰 inventory wave를 줄이는 Toyota 방식.</li><li><strong>SMED (Single-Minute Exchange of Die)</strong>: internal setup을 external setup으로 전환해 setup time을 한 자리 수 분으로 줄이는 접근.</li><li><strong>EOQ (Economic Order Quantity)</strong>: fixed ordering cost와 inventory holding cost의 합을 최소화하는 주문량 모델.</li><li><strong>Sunk Cost</strong>: 이미 지불되어 의사결정에서 새 현금 유출로 보지 말아야 하는 비용.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>팬데믹 초기 화장지 공장들은 variety를 줄이고 기본 제품만 생산해 setup time을 줄이며 capacity를 극대화했다.</li><li>밀링 머신이 조향 지지대와 갈비대 사이를 전환할 때 1시간 setup이 필요하면, 작은 batch에서는 setup 부담 때문에 effective capacity가 낮다.</li><li>Batch size를 키우면 setup time이 많은 unit에 분산되어 capacity는 증가하지만, inventory와 flow time이 커진다.</li><li>세단과 station wagon을 8주 단위로 번갈아 만드는 자동차 공장 사례는 큰 batch가 대규모 finished goods inventory를 만든다는 점을 보여준다.</li><li>Bottleneck에서 setup이 발생하면 큰 batch가 필요하지만, non-bottleneck에서 setup이 발생하면 작은 batch로 inventory를 줄이는 편이 유리할 수 있다.</li><li>제품 variety가 늘면 setup 횟수가 증가하고, 동일 demand를 맞추기 위해 batch size와 inventory가 커진다.</li><li>EOQ는 외부 주문처럼 실제 ordering cost가 발생할 때 쓰는 모델이고, 공장 내부의 이미 보유한 설비/정규직 시간과 혼동하면 안 된다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Onion soup 하나를 추가하면 setup 횟수가 늘어 chicken noodle soup inventory까지 증가할 수 있다.</li><li>F1 pit stop 비유는 internal setup을 외부 준비로 전환하면 machine downtime을 크게 줄일 수 있음을 보여준다.</li><li>이메일을 하루 두 번 몰아서 처리하는 것은 attention setup time을 줄이기 위해 batch size를 키우는 일상적 응용이다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Batch size는 &quot;크면 효율적&quot;이 아니라 bottleneck 위치, demand, setup time, holding cost, responsiveness를 함께 고려해 판단해야 한다.</li><li>Variety 증가는 매출 기회일 수 있지만 setup과 inventory를 통해 hidden cost를 만든다.</li></ul>"
            }
          ]
        },
        {
          "key": "applied_learning",
          "label": "Applied Learning",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>Executive Shirt Company 사례를 통해 <strong>batch process</strong>, <strong>customization</strong>, <strong>lead time</strong>, <strong>WIP inventory</strong> 사이의 trade-off를 본다.</li><li>기존 대량생산 공정에 custom product를 넣을 때 통합 공정과 별도 line 운영 중 어떤 방식이 적합한지 비교한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Batch Process</strong>: 여러 unit을 묶어서 이동하고 처리하는 방식. setup 효율은 높지만 WIP와 lead time이 늘기 쉽다.</li><li><strong>Low-Ply Cutting Machine</strong>: 적은 layer를 빠르게 자르는 장비. custom shirt에는 빠르지만 scrap rate가 높아질 수 있다.</li><li><strong>Manufacturing Lead Time</strong>: 주문부터 생산 완료까지 걸리는 시간.</li><li><strong>Dedicated Line</strong>: 특정 제품군을 별도 공정으로 분리해 운영하는 방식.</li><li><strong>Buffer Inventory</strong>: station 사이에 둔 여유 재고. 흐름 안정성은 높일 수 있지만 lead time과 WIP를 늘린다.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>ESC는 표준 셔츠를 큰 batch와 제한된 variety로 생산해 왔고, custom shirt 시장 진입을 위해 10 working days 이내 delivery를 목표로 한다.</li><li>기존 공정은 60 layers를 한 번에 자르고 60장 batch로 sewing에 넘기는 구조라 표준화와 volume에는 적합하지만 customization에는 둔하다.</li><li>Mike의 계획은 custom shirts를 기존 regular shirts 공정에 섞고 전체 batch size를 60에서 5로 줄이는 방식이다. Lead time은 줄 수 있지만 전체 regular shirt 공정의 WIP와 복잡도가 커질 수 있다.</li><li>Ike의 계획은 custom shirt를 별도 assembly line으로 분리하는 방식이다. Regular process의 안정성을 유지할 수 있지만 인력 재배치와 regular line capacity 감소가 생긴다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Minimum order quantity 5장은 custom 생산의 batch size를 줄이면서도 setup과 handling 부담을 관리하려는 타협이다.</li><li>별도 line은 customization과 responsiveness를 높일 수 있지만, 공장 전체 capacity와 direct labor utilization을 다시 계산해야 한다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Week 5의 batch size 논리를 실제 case에 적용할 때는 cost만 보지 말고 lead time, WIP, customer responsiveness, standard product capacity까지 함께 비교해야 한다.</li><li>통합 공정은 resource sharing이 장점이고, dedicated line은 flow clarity와 responsiveness가 장점이다.</li></ul>"
            }
          ]
        },
        {
          "key": "discussion_topics",
          "label": "Discussion Topics",
          "sections": [
            {
              "heading": "Topic 1 : 공장은 Output 개선을 위해 Inventory 추가보다 Variability Reduction을 우선해야 하는가?",
              "html": "<ul><li>이 주제는 output을 개선할 때 root cause인 variability를 줄여야 하는지, 불확실성을 흡수하기 위해 inventory buffer를 둬야 하는지 묻는다.</li><li>핵심은 inventory를 waste로 볼지, variability를 관리하는 engineering tool로 볼지 비교하는 것이다.</li></ul><h4>찬성측</h4><ul><li>Inventory는 unreliable process를 가리는 buffer가 되어 root cause를 해결하려는 urgency를 낮출 수 있다.</li><li>WIP buffer가 많아지면 carrying cost, longer lead time, delayed defect detection 같은 hidden cost가 발생한다.</li><li>Toyota식 low inventory는 문제를 노출시켜 variability reduction과 continuous improvement를 촉진한다.</li><li><strong>VUT Equation</strong> 관점에서 variability를 줄이면 cycle time 압박을 구조적으로 낮출 수 있다.</li></ul><h4>반대측</h4><ul><li>Equipment, material, demand에서 발생하는 variability는 완전히 제거할 수 없으므로 일정 수준의 buffer가 필요하다.</li><li>Strategic inventory는 낭비가 아니라 disruption을 흡수하고 service level을 지키는 운영 설계 도구가 될 수 있다.</li><li>Variability reduction에는 diminishing returns가 있어 어느 시점부터는 buffer가 더 경제적인 선택일 수 있다.</li><li>Buffer 없이 공정을 운영하면 작은 공급 충격이나 품질 문제가 곧바로 output failure로 이어질 수 있다.</li></ul>"
            },
            {
              "heading": "Topic 2 : Zero Inventory는 Calculated Buffer로 대체하지 말고 Aspirational Target으로 유지해야 하는가?",
              "html": "<ul><li>이 주제는 <strong>Zero Inventory</strong>를 지속적인 개선 방향으로 유지할지, data 기반의 calculated buffer 수준으로 대체할지 묻는다.</li><li>핵심은 lean ideal과 quantitative risk management 사이의 균형이다.</li></ul><h4>찬성측</h4><ul><li>Zero Inventory는 실제 재고를 즉시 0으로 만들라는 명령보다 문제를 계속 드러내는 improvement target으로 기능한다.</li><li>높은 buffer를 편안하게 받아들이면 overstock이 정당화되고 process improvement 압력이 약해질 수 있다.</li><li>재고를 줄이려는 목표는 defect, setup time, supplier reliability 같은 근본 문제를 해결하게 만든다.</li><li>Toyota의 성공은 &quot;안전한 재고 수준&quot;에 안주하지 않고 zero에 가까워지려는 지속적 노력과 연결된다.</li></ul><h4>반대측</h4><ul><li>정량적 근거 없는 zero inventory 구호는 reckless buffer cut으로 이어져 real operational failure를 만들 수 있다.</li><li>Demand variability, lead time, service level을 계산해 필요한 safety stock을 정하는 것이 더 책임 있는 의사결정이다.</li><li>Supply disruption이나 demand spike가 큰 환경에서는 inventory가 고객 서비스와 매출을 보호하는 risk buffer가 된다.</li><li>Aspirational target만 강조하면 현장의 실제 uncertainty와 recovery time을 과소평가할 위험이 있다.</li></ul>"
            }
          ]
        },
        {
          "key": "quiz",
          "label": "Quiz",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>Batch와 setup이 있을 때 batch size가 capacity와 inventory에 어떤 영향을 주는지 정리한다.</li><li>큰 batch와 작은 batch의 trade-off를 responsiveness, inventory, setup burden 관점에서 이해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Batch</strong>: 함께 처리되는 flow units의 묶음.</li><li><strong>Setup Time / Changeover Time</strong>: 다른 제품이나 공정 조건으로 넘어가기 위해 장비를 준비하는 시간.</li><li><strong>Effective Capacity</strong>: 실제 processing에 쓸 수 있는 시간에서 setup 부담을 고려한 capacity.</li><li><strong>Cycle Inventory</strong>: batch 생산 때문에 생기는 평균 재고.</li><li><strong>SMED</strong>: setup 시간을 줄여 작은 batch에서도 비용과 responsiveness를 동시에 개선하려는 방법.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Setup time이 존재하면 큰 batch는 setup 시간을 더 많은 unit에 나누므로 capacity 측면에서 유리하다.</li><li>그러나 큰 batch는 생산과 demand의 동기화를 약하게 만들어 inventory와 lead time을 증가시킨다.</li><li>Setup이 non-bottleneck에서 발생하고 demand가 낮다면 batch size를 줄여도 전체 flow rate가 떨어지지 않을 수 있다.</li><li>제품 variety가 늘면 setup 빈도가 증가하고, capacity를 유지하려면 batch size와 cycle inventory가 커지기 쉽다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Setup이 bottleneck에서 발생하고 demand가 capacity를 초과하면 큰 batch가 더 매력적이다.</li><li>Quick setup 기술은 responsiveness를 높이면서 per-unit cost를 낮출 수 있는 핵심 개선 방향이다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Batch size 문제는 &quot;큰 batch가 좋다/나쁘다&quot;가 아니라 setup 위치, demand 수준, bottleneck 여부에 따라 달라지는 trade-off로 설명해야 한다.</li><li>Product variety 증가는 고객 대응력을 높이지만 setup과 inventory 부담을 키울 수 있다.</li></ul>"
            }
          ]
        }
      ]
    },
    {
      "week": 6,
      "categories": [
        {
          "key": "lecture",
          "label": "Lecture",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>운영 개선이 재무성과, 특히 <strong>ROIC (Return on Invested Capital)</strong>에 어떻게 연결되는지 이해한다.</li><li>높은 수준의 재무지표를 flow rate, inventory, setup time 같은 daily operational variables로 분해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>ROIC</strong>: <code>Net Income / Invested Capital</code>. 기업이 투입자본으로 얼마나 수익을 창출했는지 보여준다.</li><li><strong>Invested Capital</strong>: <code>Working Capital + PP&amp;E</code>. Working capital은 current assets에서 current liabilities를 뺀 값이다.</li><li><strong>DuPont Analysis</strong>: ROIC를 margin ratio와 capital turnover로 분해해 어떤 요소가 성과 변화를 주도하는지 보는 분석.</li><li><strong>Margin Ratio</strong>: 매출 대비 이익률. Flow rate가 증가하면 fixed cost가 더 많은 unit에 분산되어 margin에 영향을 준다.</li><li><strong>Capital Turnover</strong>: 투입자본 대비 매출. Inventory가 줄거나 flow rate가 증가하면 개선될 수 있다.</li><li><strong>ROIC Tree / KPI Tree</strong>: ROIC를 현장에서 통제 가능한 가격, 비용, flow rate, inventory, receivables, PP&amp;E 등으로 내려 쪼개는 구조.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>기업의 목표는 cost of capital보다 높은 return을 만들어 economic value를 창출하는 것이다.</li><li>운영 개선은 flow time, inventory, flow rate를 바꾸며, 이 세 변수는 ROIC의 margin과 capital turnover에 연결된다.</li><li>Flow rate는 <code>min {input rate, process capacity, demand}</code>이므로 병목 개선이 항상 수익으로 이어지는 것은 아니고, demand와 input 조건도 함께 봐야 한다.</li><li>Setup time 감소, 제품 설계 변경, 임금 조정, supplier payment term 조정 같은 atomic activities는 각각 fixed cost, variable cost, flow rate, invested capital 항목에 연결된다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Tesla 재무제표 예시는 invested capital과 net income을 이용해 ROIC를 계산하는 방식 자체를 보여준다.</li><li>Setup time을 줄이면 process capacity와 flow rate가 증가하고, inventory와 fixed cost per unit이 줄어 ROIC에 영향을 줄 수 있다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>운영 개선을 주장할 때는 &quot;효율이 좋아진다&quot;에서 멈추지 말고, flow rate 증가, inventory 감소, margin 개선, asset turns 개선 중 어느 경로로 ROIC가 변하는지 연결해야 한다.</li><li>ROIC는 현장 관리자가 매일 직접 조작하는 숫자가 아니므로, KPI tree를 통해 통제 가능한 운영 지표로 번역하는 논리가 중요하다.</li></ul>"
            }
          ]
        },
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>현장 운영 변수와 재무 성과를 <strong>ROIC Tree / KPI Tree</strong>로 연결한다.</li><li>작은 setup time 개선이 fixed cost leverage를 통해 ROIC에 큰 영향을 줄 수 있음을 이해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>ROIC (Return on Invested Capital)</strong>: 투입자본 대비 수익률. 경제적 가치 창출의 핵심 지표.</li><li><strong>DuPont Decomposition</strong>: ROIC를 margin과 asset turnover로 나누어 성과 원인을 분석하는 방식.</li><li><strong>KPI Tree</strong>: ROIC 같은 상위 재무지표를 price, fixed cost, variable cost, flow rate, inventory, setup time 같은 운영지표로 분해하는 도구.</li><li><strong>Fixed Cost Leverage</strong>: 손익분기점 이후 추가 output의 contribution margin이 크게 커지는 구조.</li><li><strong>ASM (Available Seat Miles)</strong>: 항공사가 공급한 총 좌석거리.</li><li><strong>RPM (Revenue Passenger Miles)</strong>: 실제 유상 승객이 이동한 좌석거리.</li><li><strong>Turnaround Time</strong>: 항공기가 착륙 후 다음 비행을 위해 다시 이륙하기까지 걸리는 시간.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>임원 회의실의 ROIC와 공장 현장의 setup time, waiting time은 다른 언어처럼 보이지만 KPI tree로 연결할 수 있다.</li><li>Paul Downs 가구점 사례에서는 고객 선수금, 원목 재고, 목수 노동, 기계 setup time, waiting time이 모두 ROIC에 연결된다.</li><li>Setup time을 15%에서 10%로 줄이면 추가 capacity가 생기고, 이미 fixed cost를 회수한 이후의 추가 식탁은 높은 contribution margin을 만든다.</li><li>이 때문에 작은 setup time 개선이 ROIC를 11.3%에서 31.1%로 크게 끌어올리는 민감한 value driver가 될 수 있다.</li><li>외부 투자자는 현장에 직접 들어가지 못해도 public financial data와 operating metrics를 통해 top-down으로 운영 효율성을 추정할 수 있다.</li><li>Southwest Airlines 사례에서는 ticket yield나 load factor가 비슷해도, 단일 기종 운영과 빠른 turnaround가 employee당 ASM을 높여 수익성 차이를 만들 수 있다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Boeing 737 단일 기종 운영은 정비와 부품 관리, turnaround를 단순화해 capacity utilization을 높인다.</li><li>조종사와 승무원까지 빠른 청소와 정리에 참여하는 운영 방식은 aircraft를 지상에 묶어두는 시간을 줄이고 추가 flight opportunity를 만든다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>운영 개선의 재무 효과를 설명할 때는 &quot;효율이 좋아졌다&quot;가 아니라 flow rate, fixed cost absorption, margin, asset turnover, invested capital 중 어느 경로가 바뀌었는지 명확히 해야 한다.</li><li>ROIC는 추상적 재무 목표이지만, 현장에서는 setup time, waiting time, turnaround time 같은 작은 operational driver로 관리된다.</li></ul>"
            }
          ]
        },
        {
          "key": "applied_learning",
          "label": "Applied Learning",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>DuPont Analysis</strong>를 통해 높은 ROE/ROIC의 원인이 margin, asset turnover, leverage 중 어디에서 오는지 분해한다.</li><li>운영 성과가 재무지표에 반영되는 경로를 이해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>ROE</strong>: <code>Net Income / Equity</code>. 주주자본 대비 이익률.</li><li><strong>DuPont Analysis</strong>: <code>ROE = Profit Margin x Asset Turnover Ratio x Equity Multiplier</code>로 분해하는 분석.</li><li><strong>Profit Margin</strong>: 매출 대비 이익률. 운영 효율, 가격, 비용구조의 영향을 받는다.</li><li><strong>Asset Turnover Ratio</strong>: 자산이 매출을 얼마나 잘 창출하는지 보여주는 효율 지표.</li><li><strong>Equity Multiplier</strong>: 자산을 자기자본 대비 얼마나 크게 운용하는지 보여주는 leverage 지표.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>단순 ROE만 보면 성과의 원인이 고마진 사업, 높은 asset turnover, 높은 leverage 중 무엇인지 알기 어렵다.</li><li>DuPont 분석은 같은 ROE를 가진 기업도 다른 성격을 가질 수 있음을 보여준다.</li><li>High-end fashion은 margin 중심, retail goods는 turnover 중심으로 수익성을 만들 수 있다.</li><li>높은 ROE가 과도한 debt 때문에 만들어진 것이라면 운영 경쟁력으로 보기 어렵다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>스크리닝 기준은 profit margin, asset turnover, equity multiplier를 함께 사용해 재무성과의 질을 보려는 접근이다.</li><li>이 자료는 Week 6 lecture의 ROIC decomposition과 같은 사고방식을 ROE 투자 분석으로 확장한다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>운영 개선을 재무성과와 연결할 때 &quot;수익률이 높다&quot;보다 &quot;margin이 좋아졌는가, asset turnover가 좋아졌는가, leverage 효과인가&quot;를 구분해야 한다.</li><li>Flow rate 증가와 inventory 감소는 asset turnover와 capital efficiency를 높이는 운영적 경로로 설명할 수 있다.</li></ul>"
            }
          ]
        },
        {
          "key": "discussion_topics",
          "label": "Discussion Topics",
          "sections": [
            {
              "heading": "Topic 1 : Service Companies는 높은 Labor Cost를 Expense보다 Superior Performance를 위한 Investment로 봐야 하는가?",
              "html": "<ul><li>이 주제는 서비스 기업의 높은 인건비를 줄여야 할 비용으로 볼지, 서비스 품질과 customer loyalty를 만드는 투자로 볼지 묻는다.</li><li>핵심은 labor cost minimization과 <strong>Service-Profit Chain</strong> 관점의 장기 performance를 비교하는 것이다.</li></ul><h4>찬성측</h4><ul><li>서비스 품질은 사람에게 크게 의존하므로 낮은 임금과 부족한 training은 turnover와 inconsistent service를 만들 수 있다.</li><li>높은 labor spending은 직원 만족, service quality, customer loyalty, profitability로 이어지는 investment가 될 수 있다.</li><li>Costco와 Trader Joe&#39;s처럼 labor를 investment로 보는 기업은 안정적인 인력과 높은 고객 경험을 만들 수 있다.</li><li>단기 임금 절감이 turnover, 재교육, 품질 실패 비용을 키우면 total cost는 오히려 높아질 수 있다.</li></ul><h4>반대측</h4><ul><li>Labor는 service operations에서 가장 큰 controllable cost 중 하나이므로 disciplined cost management가 필요하다.</li><li>Standardization과 automation을 활용하면 premium wage 없이도 consistent service를 제공할 수 있다.</li><li>높은 labor cost는 margin을 압박하고 price flexibility를 낮춰 cost leadership 전략과 충돌할 수 있다.</li><li>Walmart나 Ryanair처럼 낮은 비용 구조를 통해 가격 경쟁력과 operational discipline을 확보하는 전략도 가능하다.</li></ul>"
            },
            {
              "heading": "Topic 2 : Demand가 Capacity를 초과할 때 Price Increase를 Capacity Expansion보다 우선해야 하는가?",
              "html": "<ul><li>이 주제는 초과수요 상황에서 가격을 올려 margin을 확보할지, capacity를 늘려 market share와 접근성을 지킬지 묻는다.</li><li>핵심은 ROIC, fixed cost risk, customer loyalty 사이의 trade-off를 판단하는 것이다.</li></ul><h4>찬성측</h4><ul><li>초과수요는 pricing power를 의미하므로 price increase는 기존 capacity로 margin과 ROIC를 빠르게 개선할 수 있다.</li><li>Capacity expansion은 큰 capital investment와 fixed cost를 만들며, demand가 줄어들면 되돌리기 어렵다.</li><li>가격 인상은 structural cost를 추가하지 않고 demand를 조절하는 비교적 빠른 방법이다.</li><li>불확실한 shortage period에는 새 설비나 인력 확충보다 가격 조정이 더 낮은 risk를 가질 수 있다.</li></ul><h4>반대측</h4><ul><li>Price increase는 customer defection과 brand damage를 만들 수 있으며, 경쟁사가 displaced demand를 가져갈 수 있다.</li><li>Quality-driven market에서는 delivery speed와 accessibility가 loyalty를 결정하므로 capacity expansion이 장기 market share를 지킨다.</li><li>Capacity 부족이 계속되면 lead time이 길어지고 고객은 더 안정적인 공급자를 찾게 된다.</li><li>초과수요가 구조적 성장 신호라면 expansion은 단기 비용보다 장기 성장 기회를 확보하는 선택일 수 있다.</li></ul>"
            }
          ]
        },
        {
          "key": "quiz",
          "label": "Quiz",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li>운영 지표가 재무성과, 특히 ROIC와 firm value에 연결되는 방식을 정리한다.</li><li>DuPont decomposition과 KPI tree를 통해 high-level financial metric을 현장 활동으로 번역한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Economic Value</strong>: ROIC가 WACC를 초과할 때 창출되는 가치.</li><li><strong>ROIC</strong>: 투입자본 대비 수익률.</li><li><strong>DuPont Decomposition</strong>: ROIC를 margin과 asset turns로 나누어 성과 원인을 보는 방식.</li><li><strong>KPI Tree</strong>: ROIC 같은 상위 지표를 flow rate, setup time, inventory, price, costs 등 daily controllable variables로 연결하는 구조.</li><li><strong>Working Capital</strong>: inventory, receivables 등 일상 운영에 묶인 자본.</li><li><strong>Load Factor</strong>: airline 예시에서 utilization과 유사하게 capacity 대비 실제 사용 정도를 나타내는 지표.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Managers는 ROIC 자체를 매일 직접 조작할 수 없지만, ROIC에 영향을 주는 운영 변수는 관리할 수 있다.</li><li>Flow rate는 margin과 asset turns 양쪽에 영향을 준다.</li><li>Setup time 감소는 capacity와 flow rate를 높이고, fixed cost를 더 많은 unit에 분산시켜 margin과 ROIC를 개선할 수 있다.</li><li>Inventory는 working capital에 포함되므로 inventory 감소는 invested capital을 낮춰 ROIC를 개선할 수 있다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Machine setup time을 줄이면 생산량이 늘고, 이미 발생한 fixed cost를 더 많은 unit에 나누어 firm value 개선으로 이어질 수 있다.</li><li>Finished goods inventory는 working capital이므로 운영 개선의 재무 효과를 설명할 때 중요한 연결고리다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>운영 개선의 효과를 말할 때 &quot;flow rate 증가&quot;, &quot;inventory 감소&quot;, &quot;margin 개선&quot;, &quot;asset turns 개선&quot; 중 어떤 경로인지 명확히 해야 한다.</li><li>ROIC tree는 현장 작업과 재무지표 사이의 번역 도구로 설명할 수 있다.</li></ul>"
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "categories": [
        {
          "key": "podcast",
          "label": "Podcast",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Toyota Production System (TPS)</strong>과 <strong>Lean Operations</strong>의 핵심은 단순한 속도 향상이 아니라 waste 제거, 문제 가시화, 인간 지성 활용이라는 점을 설명한다.</li><li>Lean system이 강력하지만, black swan shock에서는 strategic buffer가 필요할 수 있음을 이해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Muda</strong>: 고객 가치를 만들지 않는 낭비. Overproduction, waiting, transportation, overprocessing, inventory, defects/rework, unnecessary motion이 포함된다.</li><li><strong>OEE (Overall Equipment Effectiveness)</strong>: 설비가 멈추지 않고, 제 속도로, 불량 없이 운영되는 비율.</li><li><strong>JIT (Just-in-Time)</strong>: 필요한 것을 필요한 때 필요한 만큼 생산하는 방식.</li><li><strong>One-Piece Flow</strong>: unit을 batch로 묶지 않고 하나씩 흐르게 해 waiting과 inventory를 줄이는 이상적 흐름.</li><li><strong>Takt Time</strong>: customer demand에 맞춘 생산 박자. <code>Available Time / Customer Demand</code>.</li><li><strong>Pull System</strong>: downstream demand가 upstream production을 당겨오는 방식.</li><li><strong>Kanban</strong>: pull system에서 필요한 수량만 생산하도록 보내는 시각적 신호.</li><li><strong>Jidoka</strong>: 이상이 발생하면 자동으로 감지하고 멈춰 root cause를 해결하게 하는 원칙.</li><li><strong>Andon</strong>: 문제가 생겼을 때 작업자가 라인을 멈추고 도움을 요청하는 시각적 신호 장치.</li><li><strong>5 Whys</strong>: 왜라는 질문을 반복해 표면 증상 뒤의 root cause를 찾는 방법.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>GM 공장과 Toyota Takaoka 공장의 비교는 Toyota가 더 짧은 조립시간과 더 낮은 defect 수를 동시에 달성했음을 보여준다.</li><li>Ford식 mass production은 interchangeable parts, large machines, economies of scale로 단가를 낮추는 방식이었다.</li><li>Toyota는 전후 일본의 자본 부족과 작은 시장이라는 제약 때문에 필요한 것만 만들고 waste를 철저히 제거하는 방식으로 진화했다.</li><li>Inventory는 안전해 보이지만 overproduction, storage cost, delayed defect detection을 만들고 root cause를 숨길 수 있다.</li><li>JIT는 one-piece flow, takt time, pull system, kanban을 통해 supply를 demand에 맞춘다.</li><li>물 수위를 낮추면 바위가 드러나듯, inventory buffer를 줄이면 공정의 문제와 defect가 드러난다.</li><li>Jidoka와 Andon은 문제가 생겼을 때 숨기지 않고 라인을 멈춰 해결하도록 만든다.</li><li>5 Whys는 fuse 교체 같은 임시 조치가 아니라 쇳가루 유입 같은 root cause를 찾아 재발을 막는 방식이다.</li><li>Lean은 worker를 단순 노동력이 아니라 현장 문제 해결의 지성을 가진 주체로 본다.</li><li>N95 mask 사례처럼 팬데믹 수준의 shock에서는 JIT와 low inventory가 취약해질 수 있으므로, 생명과 안전에 관련된 물자는 strategic stockpile이 필요할 수 있다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>은행 대출 심사와 병원 수술실 사례는 제조업이 아니어도 value-added time이 전체 근무 시간의 일부에 불과할 수 있음을 보여준다.</li><li>Kanban card 수를 줄이면 system inventory를 직접 통제할 수 있지만, 너무 줄이면 defect나 supply shock에 취약해진다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Lean을 &quot;재고를 줄이는 기법&quot;으로만 쓰면 부족하다. 문제를 보이게 하고, 멈출 권한을 주고, root cause를 해결하는 operating philosophy로 설명해야 한다.</li><li>효율성과 resilience는 trade-off가 있을 수 있으므로, 일상적 환경에서는 lean이 강력하지만 예측 불가능한 충격에는 buffer와 비축 전략이 필요하다는 균형이 중요하다.</li></ul>"
            }
          ]
        },
        {
          "key": "applied_learning",
          "label": "Applied Learning",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Lean Technology</strong>가 제조 현장의 waste를 식별하고 줄여 profitability를 높이는 방식을 이해한다.</li><li>Lean tools인 <strong>Value Stream Mapping (VSM)</strong>과 <strong>Poka-Yoke</strong>를 데이터 기반 기술과 연결한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Lean Manufacturing</strong>: waste를 줄이고 efficiency를 높이는 운영 철학.</li><li><strong>Lean Technology</strong>: 생산 데이터를 실시간으로 수집, 분석, 공유해 lean improvement를 빠르게 실행하게 하는 기술.</li><li><strong>Value Stream Mapping (VSM)</strong>: 생산 흐름의 각 단계와 material/information flow를 시각화해 non-value-added activities를 찾는 도구.</li><li><strong>Poka-Yoke</strong>: 실수를 예방하거나 즉시 발견하도록 공정과 작업환경을 설계하는 mistake-proofing 방식.</li><li><strong>Downtime Event</strong>: 설비가 멈추거나 생산이 중단되는 사건. 시간 낭비와 cost per product 증가로 이어진다.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Waste가 늘면 제품당 비용이 증가하고 profitability가 낮아진다.</li><li>Lean technology는 현장의 machine data와 process metrics를 cloud/dashboard로 모아 의사결정자와 작업자가 문제를 빨리 볼 수 있게 한다.</li><li>VSM은 흐름이 끊기는 지점, 결함 발생 위치, 비효율적인 material flow를 찾는 데 쓰인다.</li><li>Poka-yoke는 부품 접근성, contact method, fixed-value method, motion-step method 등을 통해 결함과 재작업을 줄인다.</li><li>제조 현장이 profitability를 높이는 가장 직접적인 방법은 revenue 증가보다 waste와 cost 감소에 가깝다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Real-time KPI dashboard는 어떤 workstation과 shift에서 waste가 발생하는지 파악하게 해 개선의 우선순위를 정한다.</li><li>Raw material, time, energy waste는 모두 invested capital 또는 operating cost의 낭비로 이어진다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>TPS와 Lean을 단순히 inventory 감소로만 설명하지 말고, 문제의 가시화, 표준화, 결함 예방, 데이터 기반 개선까지 연결하면 좋다.</li><li>Lean technology는 kaizen의 대체물이 아니라, 현장 정보를 더 빠르고 정확하게 보이게 만드는 지원 수단으로 이해한다.</li></ul>"
            }
          ]
        },
        {
          "key": "discussion_topics",
          "label": "Discussion Topics",
          "sections": [
            {
              "heading": "Topic 1 : TPS 도입은 High-Mix High-Volume Electronics Manufacturer와 Service-Oriented Companies에서 어떻게 조정되어야 하는가?",
              "html": "<ul><li>이 주제는 TPS를 단순 복제할지, business context에 맞춰 원칙을 조정할지 묻는다.</li><li>핵심은 TPS를 waste reduction 도구가 아니라 context-sensitive operating system으로 이해하는 것이다.</li></ul><h4>적용 관점</h4><ul><li>High-mix high-volume electronics manufacturer에서는 TPS가 defect visibility, standardized work, setup reduction, supplier coordination에 도움을 줄 수 있다.</li><li>제품 다양성이 큰 환경에서는 Just-in-Time과 표준화를 그대로 적용하기보다 flexibility와 buffer policy를 함께 설계해야 한다.</li><li>Service-oriented companies에서는 pull, visual management, WIP limit, kaizen, root-cause problem solving을 대기시간과 service error 감소에 적용할 수 있다.</li><li>Software development나 retail에서는 physical inventory보다 information flow, queue, customer experience를 중심으로 TPS 원칙을 변형해야 한다.</li><li>Fishbowl discussion에서는 참여자가 각 business context에서 TPS adoption stance와 implementation approach를 구체적으로 제시해야 한다.</li></ul><h4>Red Team 관점</h4><ul><li>Red Team은 TPS가 모든 조직에 같은 방식으로 맞는지, 단순 도구 복제가 context mismatch를 만들지 점검해야 한다.</li><li>High-mix 환경에서 지나친 standardization이 product flexibility와 customization capability를 제한할 수 있다.</li><li>Buffer를 과도하게 줄이면 supply disruption, demand volatility, quality issue에 대한 resilience가 약해질 수 있다.</li><li>Service work를 제조처럼 표준화하면 human judgment, tacit knowledge, customer interaction quality가 손상될 수 있다.</li><li>Fishbowl 형식에서는 Red Team의 반론을 통해 TPS의 장점뿐 아니라 implementation risk와 boundary condition까지 함께 검토해야 한다.</li></ul>"
            }
          ]
        },
        {
          "key": "quiz",
          "label": "Quiz",
          "sections": [
            {
              "heading": "핵심 주제",
              "html": "<ul><li><strong>Lean Operations</strong>와 <strong>Toyota Production System (TPS)</strong>의 기본 원칙을 정리한다.</li><li>Waste 제거, pull system, standardized work, visual management, employee problem-solving의 연결을 이해한다.</li></ul>"
            },
            {
              "heading": "핵심 개념",
              "html": "<ul><li><strong>Muda</strong>: 고객에게 가치를 더하지 않는 활동. Overproduction, waiting time, inventory 등이 대표적이다.</li><li><strong>Kaizen</strong>: 모든 구성원이 참여하는 지속적이고 점진적인 개선.</li><li><strong>Just-in-Time (JIT)</strong>: 필요한 것을 필요한 때에 필요한 만큼 생산하는 방식.</li><li><strong>Jidoka</strong>: 이상을 감지하면 공정을 멈추고 원인을 해결하는 autonomation.</li><li><strong>Pull System</strong>: downstream process 또는 customer demand가 생산 신호를 보내는 방식.</li><li><strong>Takt Time</strong>: <code>Available Work Time / Customer Demand</code>.</li><li><strong>Standardized Work</strong>: 현재 가장 좋은 작업 방식을 표준으로 정해 문제를 보이게 하고 개선의 기준을 만드는 것.</li><li><strong>Visual Management</strong>: 문제와 상태를 현장에서 바로 보이게 만드는 관리 방식.</li><li><strong>One-Piece Flow</strong>: 재고와 대기 시간을 줄이기 위해 unit이 하나씩 흐르도록 하는 이상적 흐름.</li></ul>"
            },
            {
              "heading": "수업/자료의 논리 흐름",
              "html": "<ul><li>Lean은 단순히 output을 최대화하는 것이 아니라 non-value-added activities를 줄여 flow와 quality를 개선한다.</li><li>TPS의 핵심 축은 JIT와 jidoka이며, 표준화와 시각관리는 문제를 드러내는 기반이다.</li><li>JIT는 inventory buffer를 줄여 waste를 드러내지만, 외부 충격에는 취약해질 수 있다.</li><li>Worker는 단순 작업자가 아니라 결함을 발견하고 root cause를 해결하는 현장 전문가로 다뤄진다.</li></ul>"
            },
            {
              "heading": "사례 및 적용 포인트",
              "html": "<ul><li>Poka-yoke, Andon, 5 Whys는 이상을 보이게 하고 원인을 찾아 kaizen으로 연결하는 도구다.</li><li>Push system은 즉각적 수요와 무관하게 생산해 inventory를 만들기 쉽고, pull system은 downstream demand에 맞춰 생산해 waste를 줄인다.</li></ul>"
            },
            {
              "heading": "에세이 대비 연결 포인트",
              "html": "<ul><li>Lean은 inventory 감소만이 아니라 quality, visibility, employee involvement, continuous improvement를 함께 포함한다.</li><li>JIT의 장점과 위험을 함께 설명하면 균형 잡힌 답변이 된다.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "stats": {
    "totalCategories": 5,
    "totalWeeks": 7,
    "totalSections": 114
  }
};
