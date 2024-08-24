---
title: 'What happens next with GLAMorous Europe?'
author: 'Anne Mühlich'
description: 'After six months of work on GLAMorous Europe and a few months break since the launch of the prototype, during which we continued to work on other projects, the question arises as to how we want to continue with the project...'
pubDate: '2024-06-15'
updatedDate: '2024-06-30'
previewImage: '/src/assets/blog3.webp'
reference: third-post
tags: [PrototypeFund, Webapp, OpenArt, Wikidata, GLAM]
isFeatured: true
relatedPosts:
  [
    'en/we-are-nominated-for-the-digamus-award-2024',
    'en/glamorous-europe-is-live-now',
  ]
---

After six months of work on <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a> and a few months break since the launch of the prototype, during which we continued to work on other projects, the question arises as to how we want to continue with the project.

On the one hand, we have recently applied to a number of conferences to present the project and, in particular, to highlight possible collaborations and further development options for GLAMs. For example, we would like to present <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a> at Wikimania in Katowice in August, as the project is practically connected to the Wikiverse through the use of Wikidata data records and we might also find helpful contacts and tips for optimization there. We have also applied for a project presentation at CIDOC in Amsterdam in November 2024.

On the other hand, we would like to solve some fundamental problems of the application in the near future, which are also associated with the integration of Wikidata in particular.

This concerns the problem of the lack of English titles and the imbalance of the artworks displayed.

### Missing English titles

There are some large datasets, e.g. from the Belvedere in Vienna, which were not provided with English titles by default when they were uploaded. This is a pity because English titles are actually standard for data maintenance in Wikidata. This is also why we have decided to always display the English titles in <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a>, as these are the most frequently maintained. Often there is no German translation of the titles and then you would have frequently changing languages in the title display.

In the case of the missing English titles, this means that the record number from Wikidata is now displayed in our web application instead (also known as the Q number, because it starts with a Q). In order to tackle this problem, I started to look into data maintenance in Wikidata and took part in a so-called Carpentry Lesson (a kind of introductory course for Wikidata). I realized that data maintenance in Wikidata is very simple and much easier than in Wikipedia, for example. So I started translating the titles of the artworks in concerned into English or adding their English titles. As this is manual work, I have only been able to do this for around 200 objects so far (all objects from the Belvedere Vienna!). As a result, an improvement in the artworks displayed in <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a> is now immediately noticeable.

![GLAMorous Europe](/src/assets/blog3_1.webp)

Especially as the Belvedere collection currently takes up a lot of space in our project - which brings us to our second Wikidata problem:

### Imbalance of displayed artworks

Due to the data query from <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a> via Graph QL, we can only display the artworks as effectively as our query is formulated.

At the moment, we have not yet found a good solution for displaying the most diverse collection of artworks possible from this query. For us, diverse means: works of art from different data providers (GLAMs), from as many different countries and as many different art genres as possible. We hope to find a working solution for this in the course of the year that does not lead to a time-out due to the large amount of data in Wikidata.

### And now?

We have numerous ideas for optimizations, adjustments and extensions that could be aimed at different target groups. For example, we would like to link the images and artists displayed with the corresponding Wikipedia articles. We would also like to integrate a feed that recommends current exhibitions to users that match their favorite artworks. And we want to align the displayed artworks more closely with the user's selection and thus display more targeted artworks that might be of interest to the respective person. Last but not least, we can also imagine integrating a login function that allows users to continue working on collages they have started or even collaborate with others on a work of art.

We would therefore like to further develop and use <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a> with interested and active people from the museum and cultural sector. Does this appeal to you? Then write to us and pass on the information!

**_Update from June 30, 2024_**

We weren't expecting feedback any more, but Taaadaaa! we were actually accepted for both Wikimania and CIDOC. At Wikimania, we are allowed to present our <a href='/projects/glamorous-europe/'>**GLAMorous Europe**</a> project on a big stage as a lightning talk. At CIDOC in Amsterdam, we are allowed to submit a video of our presentation. We are very happy about both opportunities!
