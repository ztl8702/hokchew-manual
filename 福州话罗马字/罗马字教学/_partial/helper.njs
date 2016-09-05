{% macro md_table_row( values = [] ) %}
|{% for value in values %} value |{% endfor %}
{% endmacro %}