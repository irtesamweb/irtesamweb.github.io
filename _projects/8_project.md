---
layout: page
title: Attention-based Host Intrusion Detection System
description: Hierarchical attention model was used to detect intrusion from system call traces.
img: assets/img/project/aids.png
importance: 8
category: Research Projects
# giscus_comments: true
github:  https://drive.google.com/drive/folders/1XqIYkzFnr-8BE_-4Bm4Zt4xKXuhPDEUs?usp=sharing
pdfFile: /assets/pdf/aids.pdf
project_date: 2022-23
---
<h3>Highlights</h3>
<ul>
    <li>We proposed a hierarchical attention model for detecting intrusion from system call traces</li>
    <li> We stacked two bidirectional GRU layers to extract higher level features and achieved an AUC of 96%</li>
    
</ul>

<a href='{{ page.github }}'> Github Repository </a>
<br>
<a href='{{ page.pdfFile }}'>Download Full Text</a>

<h3>Abstract</h3>
<p>
With the development of deep learning, various
method have been adopted in Host Intrusion Detection System
or HIDS. However, the traditional methods of HIDS have been
proven to be vulnerable to higher number of false alarm. In this
study, we have proposed a novel hierarchical attention based
deep learning method of detection intrusion on a host. We have
evaluated our model on ADLF-LD, which is a collection of a trace
data of Linux system calls. We have tuned our model’s hyper
parameters to produce the optimum result, and our method has
successfully outperforms the existing methods
</p>