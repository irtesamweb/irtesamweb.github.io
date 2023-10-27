---
layout: page
title: Predicting protein-peptide binding sites - an LLM based approach
description: A pretrained language model was used to extract features from protein sequences. This is a structure agnostic approach to predict peptide binding sites.
img: assets/img/project/pepbind.png
importance: 7
category: Research Projects
# giscus_comments: true
github:  https://drive.google.com/drive/folders/1YakE-XOM8PDDJwmvaFGDFEytuNn7prso?usp=drive_link
pdfFile: /assets/pdf/pepbind.pdf
project_date: 2022

---
<h3>Highlights</h3>
<ul>
    <li>We used ProtBert, a large language model pre-trained on billions of amino acids, to extract features from the sequences.</li>
    <li>WLater, we trained a model, comprising both CNN and RNN, to predict the binding sites.
    </li>
    <li>Our results were on par with the state-of-the-art methods that take only sequence-related information as input, achieving an MCC score of 0.39.</li>
</ul>

<a href='{{ page.github }}'> Github Repository </a>
<br>
<a href='{{ page.pdfFile }}'>Download Full Text</a>

<h3>Abstract</h3>
<p>
Protein-peptide binding sites are crucial to our
understanding of several cellular processes. Due to the lack of
experimental data, especially information related to protein structure, this is a tricky problem to conquer. Recently, many machine
learning models have been developed to tackle this issue, but
have not performed very well without structural information. We
propose a deep learning based technique that takes only protein
sequence as input and predicts binding sites. We have leveraged
pretrained language models and undersampling techniques to
make the model more robust. We also proposed an attention
based mechanism to increase the explainability of the model.
</p>