---
layout: default
permalink: /publications/
title: Publications
description: All of my publications are showcased here.
nav: true
nav_order: 1
---
<h1 class="post-title">{{ page.title }}</h1>
<p class="post-description">{{ page.description }}<br>
<!-- <hr> -->
<!-- _pages/publications.md -->
<div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
