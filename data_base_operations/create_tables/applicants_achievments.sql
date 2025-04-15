CREATE TABLE applicants_achievments (
    applicant_id NUMERIC(11),
    CONSTRAINT ap_ach_app_id FOREIGN KEY (applicant_id) REFERENCES applicants_data(snils),
    achievment_id NUMERIC(3),
    CONSTRAINT ap_ach_ach_id FOREIGN KEY (achievment_id) REFERENCES individual_achievments(id)
)