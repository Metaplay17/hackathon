ALTER TABLE final_list ADD CONSTRAINT appl_fl_ref
FOREIGN KEY applicant_id REFERENCES applicants(id)