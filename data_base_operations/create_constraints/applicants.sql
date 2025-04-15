ALTER TABLE applicants ADD CONSTRAINT subj_ref
FOREIGN KEY (subject_id) REFERENCES subjects(id)