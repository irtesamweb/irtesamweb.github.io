---
layout: default
permalink: /awards/
title: Awards
description: This page contains a list of honors and awards I received 
nav: true
nav_order: 6

# profiles:
#   # if you want to include more than one profile, just replicate the following block
#   # and create one content file for each profile inside _pages/
#   - align: right
#     image: prof_pic.jpg
#     content: about_einstein.md
#     image_circular: false # crops the image to make it circular
#     more_info: >
#       <p>555 your office number</p>
#       <p>123 your address street</p>
#       <p>Your City, State 12345</p>
#   - align: left
#     image: prof_pic.jpg
#     content: about_einstein.md
#     image_circular: false # crops the image to make it circular
#     more_info: >
#       <p>555 your office number</p>
#       <p>123 your address street</p>
#       <p>Your City, State 12345</p>
---


<h1 class="post-title">{{ page.title }} and Honors</h1>
<p class="post-description">{{ page.description }}<br>
<hr>
<ul>
{% for award in site.data.awards.awardlist %}
    <li>
        <b>{{ award.title }}</b>,<i> {{ award.org }} </i><br>
        {{ award.date }} <br>
        {% if award.url %}
        <a href=' {{ award.url }}'> Newspaper Link of the award ceremoney </a>
        {% endif %}
    </li>
{% endfor %}
</ul>


