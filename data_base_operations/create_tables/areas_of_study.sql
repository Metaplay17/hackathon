CREATE TABLE areas_of_study(
    id NUMERIC(3) PRIMARY KEY,
    area_name VARCHAR(70), 
    code VARCHAR(9), 
    n_budget_place NUMERIC(3), 
    required_subject1_id NUMERIC(2) NOT NULL, 
    CONSTRAINT arfs_req_1 FOREIGN KEY (required_subject1_id) REFERENCES subjects(id),
    required_subject2_id NUMERIC(2) NOT NULL, 
    CONSTRAINT arfs_req_2 FOREIGN KEY (required_subject2_id) REFERENCES subjects(id),
    possible_subject1_id NUMERIC(2) NOT NULL, 
    CONSTRAINT arfs_pos_1 FOREIGN KEY (possible_subject1_id) REFERENCES subjects(id),
    possible_subject2_id NUMERIC(2), 
    CONSTRAINT arfs_pos_2 FOREIGN KEY (possible_subject2_id) REFERENCES subjects(id),
    possible_subject3_id NUMERIC(2), 
    CONSTRAINT arfs_pos_3 FOREIGN KEY (possible_subject3_id) REFERENCES subjects(id)
)