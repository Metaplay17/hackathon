CREATE TABLE applicants_scores (
    id NUMERIC(11),
    subject_id NUMERIC(5) NOT NULL,
    test_ball NUMERIC(3) NOT NULL,
    is_submit_original_docs NUMERIC(1)
);

CREATE TABLE areas_of_study (
    id NUMERIC(3) PRIMARY KEY,
    area_name VARCHAR(70), 
    code VARCHAR(9), 
    n_budget_place NUMERIC(3), 
    required_subject1_id NUMERIC(2) NOT NULL, 
    required_subject2_id NUMERIC(2) NOT NULL, 
    possible_subject1_id NUMERIC(2) NOT NULL, 
    possible_subject2_id NUMERIC(2), 
    possible_subject3_id NUMERIC(2)  
);

-- Используйте SERIAL, если вы работаете с PostgreSQL
CREATE TABLE final_list (
    id SERIAL PRIMARY KEY,
    area_id NUMERIC(3),
    applicant_id NUMERIC(11),
    sum_of_ball NUMERIC(3), 
    prioritet NUMERIC(1)
);

CREATE TABLE individual_achievements (
    id NUMERIC(3) PRIMARY KEY, 
    achievement_name VARCHAR(100), 
    ball NUMERIC(2)
);

CREATE TABLE subjects (
    id NUMERIC(2) PRIMARY KEY,
    subject_name VARCHAR(50),
    min_treshold NUMERIC(2)
);


ALTER TABLE applicants_scores ADD CONSTRAINT subj_ref
FOREIGN KEY (subject_id) REFERENCES subjects(id);

ALTER TABLE final_list ADD CONSTRAINT appl_fl_ref
FOREIGN KEY (applicant_id) REFERENCES applicants_data(snils);