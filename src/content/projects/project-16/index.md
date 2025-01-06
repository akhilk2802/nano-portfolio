---
title: "GAIA Benchmarking Application"
description: "Developed an ETL pipeline with AWS services and Hugging Face’s GAIA dataset, enabling interactive data validation with and OpenAI models."
date: "Dec 20 2024"
repoURL: "https://github.com/akhilk2802/BigDataSystems/tree/main/gaia-openai-validations"
---

This project focuses on building a robust ETL (Extract, Transform, Load) pipeline using AWS services like RDS, S3, and PostgreSQL, integrated with Hugging Face’s GAIA dataset. The application processes metadata, files, and annotations, stores them securely in AWS infrastructure, and facilitates interactions via a Streamlit-powered web interface.

Users can interactively select test cases, send them to OpenAI, and compare the AI-generated responses with predefined answers. If OpenAI’s response doesn’t match the expected outcome, users are given the flexibility to modify the validation steps and re-submit the question for another validation attempt.

The application provides:

1. Model Evaluation: Uses Hugging Face’s BERT model to generate answers
2. Test Case Management: Extracts test questions and context from the dataset.
3. Evaluation Metrics: Compares model responses with predefined Answers
4. Feedback Recording: Records user corrections and feedback in a CSV file
5. Evaluation Report: Displays all evaluation results in a tabular format and visualisations.

###### Built this application as a part of course work 
