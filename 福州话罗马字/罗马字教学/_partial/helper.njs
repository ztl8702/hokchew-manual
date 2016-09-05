{% macro tr( values = [] ) %}
|{% for value in values %} {{value}} |{% endfor %}
{% endmacro %}