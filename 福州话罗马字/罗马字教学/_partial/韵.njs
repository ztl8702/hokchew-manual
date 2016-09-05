{# 韵模板 #}
{# comment 2 #}
{% import "./helper.njs" as helper %}
{% block config %}
  {% set buc = "a" %}
  {% set qilin = "戚林韵字" %}
  {% set tones = [1,2,3,4,5,6,7] %}
  {% set ipa = [1,2,3,4,5,6,7] %}
  {% set sample = [1,2,3,4,5,6,7] %}
  {% set samplebuc = [1,2,3,4,5,6,7] %}
{% endblock %}
# {{ buc }} ({{ qilin }})


| BUC {{ helper.tr(tones) }}
| --- | --- | --- | --- | --- | --- | --- | --- |
| IPA {{ helper.tr(ipa) }}
| 例字 {{ helper.tr(sample) }}
|  {{ helper.tr(samplebuc) }}
