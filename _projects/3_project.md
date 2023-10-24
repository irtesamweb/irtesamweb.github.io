---
layout: page
title: COVID-19 in China - Risk Factors and R0 Revisited
description: SIR model based modeling with unsupervised clustering of the pandemic was done to predict the pandemic situation in China.
img: assets/img/publication_preview/covid_china.jpg
importance: 3
category: Research Projects
# giscus_comments: true
github: https://github.com/rizvi23061998/estimate_chinese_r0.git
pdfFile: /assets/pdf/covid_china.pdf
date: 2020-2021
related_publications: Khan2021china
---
<h3>Highlights</h3>
<ul>
    <li>We employed the K-means clustering algorithm to divide all the prefectures in China into three different regions</li>
    <li>For the COVID-19 pandemic, reproduction number \( R_0 \) was calculated using the SIR model and Sequential Monte Carlo method.
    </li>
    <li> Finally, \( R_0 \) of different regions were compared with respect to the variation of risk factors and temperature profile.
    </li>
</ul>

<a href='{{ page.github }}'> Github Repository </a>
<br>
<a href='{{ page.pdfFile }}'>Download Full Text</a>

<h3>Abstract</h3>
The COVID-19 epidemic spread rapidly through China and subsequently proliferated globally leading to a pandemic situation around the globe. Human-to-human transmission, as well as asymptomatic transmission of the infection, have been confirmed. As of April 03, 2020, public health crisis in China due to COVID-19 was potentially under control. We compiled a daily dataset of case counts, mortality, recovery, temperature, population density, and demographic information for each prefecture during the period of January 11 to April 07, 2020. Understanding the characteristics of spatial clustering of the COVID-19 epidemic and \( R_0 \) is critical in effectively preventing and controlling the ongoing global pandemic. Considering this, the prefectures were grouped based on several relevant features using unsupervised machine learning techniques. Subsequently, we performed a computational analysis utilizing the reported cases in China to estimate the revised R0 among different regions. Finally, our overall research indicates that the impact of temperature and demographic factors on virus transmission may be characterized using a stochastic transmission model. Such predictions will help in prevention planning in an ongoing global pandemic, prioritizing segments of a given community/region for action and providing a visual aid in designing prevention strategies for a specific geographic region. Furthermore, revised estimation and our methodology will aid in improving the human health consequences of COVID-19 elsewhere.