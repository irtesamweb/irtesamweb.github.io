---
layout: page
title: A computational modeling study of COVID-19 in Bangladesh
description: SIR model based modeling of the pandemic was done to predict the pandemic situation in Bangladesh.
img: assets/img/publication_preview/covid_bd.jpg
importance: 2
category: Research Projects
# giscus_comments: true
github: https://github.com/rizvi23061998/bd_prediction.git
pdfFile: covid_bd.pdf 
date: 2020-2021
project_date: 2019-2020
related_publications: Khan2021

---
<h3>Highlights</h3>
<ul>
    <li>We considered the SIR model for modeling the pandemic situation in Bangladesh</li>
    <li>We varied different parameters for simulating different situations such as stricter lockdowns, better treatment facilities, etc.
    </li>
    <li> Markov Chain Monte Carlo(MCMC) method was used to fit the model with daily incidence data.
    </li>
</ul>

<a href='{{ page.github }}'> Github Repository </a>
<br>
<a href='/assets/pdf/covid_bd.pdf'>Download Full Text</a>

<h3>Abstract</h3>
The COVID-19 pandemic has spread globally. Only three cases in Bangladesh were reported on March 8, 2020. Here, we aim to predict the epidemic progression for 1 year under different scenarios in Bangladesh. We extracted the number of daily confirmed cases from March 8 to July 20, 2020. We considered the suspected-infected-removed (SIR) model and performed a maximum likelihood-based grid search to determine the removal rate (\( \Gamma \)). The transmi\( \Beta \)ssion was modeled as a stochastic random walk process, and sequential Monte Carlo simulation was run 100 times with bootstrap fits to infer the transmission rate () and \( \R_t \) . According to the simulation, the (real) peak daily incidence of 3,600 would be followed by a steady decline, reaching below 1,000 in late January 2021. Thus, the model predicted that there would still be more than 300 cases/day even after a year. However, with proper interventions, a much steeper decline would be achieved following the peak. If we apply a combined (0.8\( \Beta \), 1.2\( \Gamma \)) intervention, there would be less than 100 cases by mid-October, only around five odd cases at the beginning of the year 2021, and zero cases in early March 2021. The predicted total number of deaths (in status quo) after 1 year would be 8,533 which would reduce to 3,577 if combined (0.8\( \Beta \), 1.2\( \Gamma \)) intervention is applied. We have also predicted the ideal number of tests that Bangladesh should perform and based on that redid the whole simulation. The outcome, though worse, would be manageable with interventions according to the simulation.