---
layout: default
permalink: /teaching/
title: Teaching
description: I have been serving as a lecturer at the Department of CSE, United International University since March 2021. Over the last couple years, I have taught an array of courses. This page contains a list of selected courses.
nav: true
nav_order: 5
---
<h1 class="post-title">{{ page.title }}</h1>
<p class="post-description">{{ page.description }}<br>
<hr>
<ul>
{% for course in site.data.courses.courselist %}
    <li>
        <b>{{ course.title }}</b> : {{ course.date }} 
    </li>
{% endfor %}
</ul>

