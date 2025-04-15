-- Insert into individual_achievments
INSERT INTO individual_achievments (id, achivment_name, ball) VALUES
(1, 'Gold Medal in School', 10),
(2, 'Winner of National Olympiad', 8),
(3, 'Champion in Sports Competition', 5),
(4, 'Volunteer Work', 3),
(5, 'Art Competition Winner', 4);

-- Insert into applicants_data
INSERT INTO applicants_data (snils, f_name, s_name, is_need_domitory) VALUES
(12345678901, 'Ivan', 'Ivanov', 1),
(23456789012, 'Petr', 'Petrov', 0),
(34567890123, 'Anna', 'Sidorova', 1),
(45678901234, 'Maria', 'Kuznetsova', 0),
(56789012345, 'Alexey', 'Smirnov', 1);

-- Insert into applicants_achievments
INSERT INTO applicants_achievments (applicant_id, achievment_id) VALUES
(12345678901, 1),
(12345678901, 2),
(23456789012, 3),
(34567890123, 4),
(45678901234, 5),
(56789012345, 1),
(56789012345, 3);

-- Insert into subjects
INSERT INTO subjects (id, sublect_name, min_treshold) VALUES
(1, 'Mathematics', 27),
(2, 'Russian Language', 36),
(3, 'Physics', 36),
(4, 'Chemistry', 36),
(5, 'Biology', 36),
(6, 'History', 32),
(7, 'Social Studies', 42),
(8, 'Computer Science', 40),
(9, 'Literature', 32),
(10, 'Foreign Language', 22);

-- Insert into areas_of_study
INSERT INTO areas_of_study (id, area_name, code, n_budget_place, required_subject1_id, required_subject2_id, possible_subject1_id, possible_subject2_id, possible_subject3_id) VALUES
(1, 'Computer Science', '09.03.01', 25, 1, 8, 2, 3, 7),
(2, 'Mathematics', '01.03.01', 20, 1, 2, 3, 4, NULL),
(3, 'Physics', '03.03.02', 15, 1, 3, 2, 4, 8),
(4, 'Economics', '38.03.01', 30, 1, 7, 2, 6, NULL),
(5, 'Linguistics', '45.03.02', 18, 2, 10, 9, 6, 7);

-- Insert into applicants_scores
INSERT INTO applicants_scores (id, subject_id, test_ball, is_submit_original_docs) VALUES
(12345678901, 1, 85, 1),
(12345678901, 2, 78, 1),
(12345678901, 8, 92, 1),
(23456789012, 1, 76, 0),
(23456789012, 2, 82, 0),
(23456789012, 3, 88, 0),
(34567890123, 1, 90, 1),
(34567890123, 2, 85, 1),
(34567890123, 7, 79, 1),
(45678901234, 2, 91, 0),
(45678901234, 10, 95, 0),
(45678901234, 9, 87, 0),
(56789012345, 1, 94, 1),
(56789012345, 2, 89, 1),
(56789012345, 3, 93, 1);