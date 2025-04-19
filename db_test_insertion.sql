INSERT INTO subjects (id, subject_name, min_treshold) VALUES (1, 'Math', '30');
INSERT INTO subjects (id, subject_name, min_treshold) VALUES (2, 'Rus', '30');
INSERT INTO subjects (id, subject_name, min_treshold) VALUES (3, 'IKT', '30');

INSERT INTO areas_of_study (id, name, code, n_budget_places, n_fee_places, form_education, subject1_id, subject2_id, subject3_id) 
VALUES (1, 'ivt', '090301', 10, 10, 'ftf', 1, 2, 3)
INSERT INTO areas_of_study (id, name, code, n_budget_places, n_fee_places, form_education, subject1_id, subject2_id, subject3_id) 
VALUES (2, 'progeng', '090304', 10, 10, 'ftf', 1, 2, 3)

INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test@test.ru', 0, false, 0)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test1@test.ru', 1, true, 1)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test1@test.ru', 2, false, 0)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test1@test.ru', 3, true, 1)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test1@test.ru', 4, false, 0)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test1@test.ru', 5, true, 1)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test2@test.ru', 6, false, 0)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test3@test.ru', 7, true, 1)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test4@test.ru', 8, false, 0)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test5@test.ru', 9, true, 1)
INSERT INTO applicants_data (snils, phone_number, mail, achievment_ball, is_need_domitry, is_submit_original)
VALUES (nextval('snils_seq'), nextval('phone_seq'), 'test6@test.ru', 10, false, 0)


INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (1, 11111111111, 1, 80);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (2, 11111111111, 2, 80);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (3, 11111111111, 3, 80);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (4, 11111111112, 1, 82);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (5, 11111111112, 2, 82);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (6, 11111111112, 3, 82);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (7, 11111111113, 1, 84);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (8, 11111111113, 2, 84);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (9, 11111111113, 3, 84);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (10, 11111111114, 1, 86);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (11, 11111111114, 2, 86);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (12, 11111111114, 3, 86);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (13, 11111111115, 1, 88);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (14, 11111111115, 2, 88);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (15, 11111111115, 3, 88);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (16, 11111111116, 1, 90);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (17, 11111111116, 2, 90);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (18, 11111111116, 3, 90);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (19, 11111111116, 1, 92);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (20, 11111111116, 2, 92);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (21, 11111111116, 3, 92);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (22, 11111111117, 1, 94);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (23, 11111111117, 2, 94);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (24, 11111111117, 3, 94);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (25, 11111111118, 1, 96);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (26, 11111111118, 2, 96);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (27, 11111111118, 3, 96);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (28, 11111111119, 1, 98);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (29, 11111111119, 2, 98);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (30, 11111111119, 3, 98);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (31, 11111111120, 1, 100);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (32, 11111111120, 2, 100);
INSERT INTO applicants_scores (id, snils, subject_id, test_ball) VALUES (33, 11111111120, 3, 100);


INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (1, 1, 11111111111, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (2, 2, 11111111111, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (3, 1, 11111111111, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (4, 2, 11111111111, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (5, 1, 11111111111, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (6, 1, 11111111112, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (7, 2, 11111111112, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (8, 1, 11111111112, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (9, 2, 11111111112, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (10, 1, 11111111112, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (11, 1, 11111111113, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (12, 2, 11111111113, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (13, 1, 11111111113, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (14, 2, 11111111113, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (15, 1, 11111111113, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (16, 1, 11111111114, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (17, 2, 11111111114, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (18, 1, 11111111114, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (19, 2, 11111111114, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (20, 1, 11111111114, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (21, 1, 11111111115, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (22, 2, 11111111115, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (23, 1, 11111111115, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (24, 2, 11111111115, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (25, 1, 11111111115, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (26, 1, 11111111116, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (27, 2, 11111111116, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (28, 1, 11111111116, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (29, 2, 11111111116, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (30, 1, 11111111116, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (31, 1, 11111111117, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (32, 2, 11111111117, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (33, 1, 11111111117, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (34, 2, 11111111117, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (35, 1, 11111111117, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (36, 1, 11111111118, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (37, 2, 11111111118, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (38, 1, 11111111118, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (39, 2, 11111111118, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (40, 1, 11111111118, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (41, 1, 11111111119, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (42, 2, 11111111119, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (43, 1, 11111111119, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (44, 2, 11111111119, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (45, 1, 11111111119, 5);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (46, 1, 11111111120, 1);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (47, 2, 11111111120, 2);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (48, 1, 11111111120, 3);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (49, 2, 11111111120, 4);
INSERT INTO priorities (id, area_id, snils, priority_num)
VALUES (50, 1, 11111111120, 5);