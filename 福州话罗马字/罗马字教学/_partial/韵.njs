{### 韵模板 ###}
{% import "./helper.njs" as helper %}
{% block config %}
  {% set buc = "a" %}
  {% set qilin = "戚林韵字" %}
  {% set tones = [1,2,3,4,5,6,7] %}
  {% set ipa = [1,2,3,4,5,6,7] %}
  {% set sample = [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]] %}
{% endblock %}
{% set s_char = [] %}
{% set s_spelling = []　%}
{% for c,s in sample %}
{% s_char.push(c) %}
{% s_spelling.push(s) %}
{% endfor %}
# {{ buc }} ({{ qilin }})

| BUC {{ helper.tr(tones) }}
| --- | --- | --- | --- | --- | --- | --- | --- |
| IPA {{ helper.tr(ipa) }}
| 例字 {{ helper.tr(s_char) }}
|  {{ helper.tr(s_spelling) }}