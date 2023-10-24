---
layout: page
title: A Machine Learning-based Approach for Groundwater Mapping
description: Both classification and regression based approach were used to predict ground water level.
img: assets/img/publication_preview/gwl.png
importance: 6
category: Research Projects
# giscus_comments: true
github:  https://github.com/rizvi23061998/GWL_BD.git
pdfFile: /assets/pdf/gwl.pdf
project_date: 2022
related_publications: Zzaman2021
---
<h3>Highlights</h3>
<ul>
    <li>We proposed a machine learning model to predict Ground Water Level(GWL) from relevant hydrogeological factors.</li>
    <li>We employed a two-stage approach, where we first employed a classification model to identify the suitable abstraction technology for the point of interest and subsequently predict the actual GWL using the appropriate Random Forest regressor
    </li>
    <li>We achieved a remarkable AUC of 96% for classification, moreover, the regression model also performed reasonably well.</li>
</ul>

<a href='{{ page.github }}'> Github Repository </a>
<br>
<a href='{{ page.pdfFile }}'>Download Full Text</a>

<h3>Abstract</h3>
<p>
In Bangladesh, groundwater is the main source of both drinking water and irrigation. Suction lift pumps and force mode of operation are the predominant technologies for groundwater abstraction in Bangladesh. For a sustainable usage policy, it is thus important to identify which technology would be more appropriate for which area in Bangladesh. With that aim in mind, this paper proposes a methodology that leverages the power of machine learning that can potentially learn intricate relationships between the (annual maximum) groundwater level (GWL) and the relevant hydrogeological factors (HGFs). A number of machine learning algorithms—both classification and regression models—was trained. Our classification models were trained as a binary classifier to predict the abstraction technology of a particular point. Notably, our best classification model was based on the Random Forest algorithm, which achieved an accuracy of 91% and an excellent value of 96% for the area under receiver operating characteristics curve, indicating its strong discriminant capability. We also identified (elevation derived from) digital elevation model, specific yield and lithology as the three most important HGFs for GWL in Bangladesh. On the other hand, to predict the actual (annual maximum) GWL, we employed a two-stage approach, where we first employed the above-mentioned classification model to identify the suitable abstraction technology for the point of interest and subsequently predict the actual GWL using the appropriate Random Forest regressor. This also had a reasonable accuracy (minimum absolute error was less than 1 for suction mode and less than 5 for the force mode). Finally, using our prediction models, we prepared groundwater (technology) maps for the whole Bangladesh.
</p>