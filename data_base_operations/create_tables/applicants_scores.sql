CREATE TABLE applicants_scores(
    id NUMERIC(11),
    CONSTRAINT app_sc_app_id FOREIGN KEY (id) REFERENCES applicants_data(snils),
    subject_id NUMERIC(5) NOT NULL,
    CONSTRAINT app_sc_subj_id FOREIGN KEY (subject_id) REFERENCES subjects(id),
    test_ball NUMERIC(3) NOT NULL,
    is_submit_original_docs NUMERIC(1)
)