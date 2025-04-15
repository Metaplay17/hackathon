CREATE TABLE areas_of_study(
    id NUMERIC(3) PRIMARY KEY,
    area_name VARCHAR(70), 
    code VARCHAR(9), 
    n_budget_place NUMERIC(3), 
    required_subject1_id NUMERIC(2) NOT NULL, 
    required_subject2_id NUMERIC(2) NOT NULL, 
    possible_subject1_id NUMERIC(2) NOT NULL, 
    possible_subject2_id NUMERIC(2), 
    possible_subject3_id NUMERIC(2),  
)