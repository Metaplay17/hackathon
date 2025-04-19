using api.Structures;
using Npgsql;

namespace api.models
{
    public class Database
    {
        public string connectionString;

        public Database()
        {
            connectionString = "Host=localhost;Username=postgres;Password=qazedcrfvs1A;Database=hackathon_abitura";
        }

        public Applicant[] LoadApplicants()
        {
            var scores = new List<ApplicantScore>();
            Dictionary<string, Applicant> applicants = new Dictionary<string, Applicant>();

            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();

                string sql = @"
                SELECT id, subject_id, test_ball, snils 
                FROM applicants_scores";

                using (var command = new NpgsqlCommand(sql, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var score = new ApplicantScore
                        {
                            Id = reader.GetInt32(0),
                            SubjectId = reader.GetInt32(1),
                            TestBall = reader.GetInt32(2),
                            Snils = reader.GetInt64(3).ToString()
                        };
                        scores.Add(score);
                        if (!applicants.ContainsKey(score.Snils))
                        {
                            applicants.Add(score.Snils, new Applicant(score.Snils));
                        }
                    }
                }
            }

            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();

                const string sql = "SELECT snils, is_submit_original FROM applicants_data";

                using (var command = new NpgsqlCommand(sql, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var appInfo = new ApplicantSimpleInfo
                        {
                            // Преобразуем numeric(11) в string
                            Snils = reader.GetDecimal(0).ToString(),

                            // numeric(1) преобразуем в bool (0 - false, 1 - true)
                            IsSubmitOriginal = reader.GetDecimal(1) == 1
                        };
                        if (appInfo.IsSubmitOriginal)
                        {
                            applicants[appInfo.Snils].ConfirmOrginalDocs();
                        }
                    }
                }
            }

            var subjects = new Dictionary<int, string>();

            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();

                string sql = @"
                SELECT id, subject_name, min_treshold 
                FROM subjects";

                using (var command = new NpgsqlCommand(sql, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var subject = new Subject
                        {
                            Id = reader.GetInt32(0),
                            SubjectName = reader.GetString(1),
                            MinThreshold = reader.GetInt32(2)
                        };
                        subjects.Add(subject.Id, subject.SubjectName);
                    }
                }
            }

            var areas = new Dictionary<int, string>();

            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();

                const string sql = "SELECT id, name FROM areas_of_study";

                using (var command = new NpgsqlCommand(sql, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var area = new AreaShortInfo
                        {
                            Id = reader.GetInt32(0),
                            Name = reader.GetString(1)
                        };
                        areas.Add(area.Id, area.Name);
                    }
                }
            }

            Dictionary<string, string[]> prioritiesDict = new Dictionary<string, string[]>();

            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();

                const string sql = @"
                SELECT id, area_id, snils, priority_num 
                FROM priorities";

                using (var command = new NpgsqlCommand(sql, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var pr = new ApplicantPriority
                        {
                            Id = reader.GetInt32(0),
                            AreaId = reader.GetInt32(1),
                            Snils = reader.GetDecimal(2).ToString(), // Преобразуем numeric(11) в string
                            PriorityNumber = reader.GetInt32(3)
                        };
                        if (!prioritiesDict.ContainsKey(pr.Snils))
                        {
                            prioritiesDict.Add(pr.Snils, new string[5]);
                        }

                        prioritiesDict[pr.Snils][pr.PriorityNumber - 1] = areas[pr.AreaId];
                    }
                }

            }

            foreach (ApplicantScore score in scores)
            {
                applicants[score.Snils].AddResult(subjects[score.SubjectId], score.TestBall);
            }
            foreach(string snils in prioritiesDict.Keys)
            {
                applicants[snils].SetPrioroties(prioritiesDict[snils]);
            }
            return applicants.Values.ToArray();
        }

        public Dictionary<string, Direction> LoadDirections()
        {
            var directions = new Dictionary<string, Direction>();

            using (var connection = new NpgsqlConnection(connectionString))
            {
                connection.Open();

                const string sql = @"
                SELECT id, name, code, n_budget_places, n_fee_places, 
                       form_education, subject1_id, subject2_id, subject3_id,
                       subject4_id, subject5_id, subject6_id
                FROM areas_of_study";

                using (var command = new NpgsqlCommand(sql, connection))
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var area = new AreaOfStudy
                        {
                            Id = reader.GetInt32(0),
                            Name = reader.GetString(1),
                            Code = reader.GetString(2),
                            BudgetPlaces = reader.GetInt32(3),
                            FeePlaces = reader.GetInt32(4),
                            FormEducation = reader.GetString(5),
                            Subject1Id = reader.GetInt32(6),
                            Subject2Id = reader.GetInt32(7),
                            Subject3Id = reader.GetInt32(8)
                        };

                        area.Subject4Id = !reader.IsDBNull(9) ? reader.GetInt32(9) : (int?)null;
                        area.Subject5Id = !reader.IsDBNull(10) ? reader.GetInt32(10) : (int?)null;
                        area.Subject6Id = !reader.IsDBNull(11) ? reader.GetInt32(11) : (int?)null;

                        directions.Add(area.Name, new Direction(area.Name, area.Code, area.BudgetPlaces, area.FeePlaces));

                    }
                }
            }
            return directions;
        }

        public async void AddApplicant(ApplicantStruct applicant)
        {
            await using var connection = new NpgsqlConnection(connectionString);
            await connection.OpenAsync();

            await using (var cmd = new NpgsqlCommand(
                "SQL",
                connection))
            {
                cmd.Parameters.AddWithValue("PARAMETER NAME", "PARAMETER VALUE");

                int rowsAffected = await cmd.ExecuteNonQueryAsync();
                if (rowsAffected != 1)
                {
                    using (StreamWriter writer = new StreamWriter("/logs/logs.txt", append: true))
                    {
                        writer.WriteLine($"OPERATION: AddApplicant; CLASS: Database; ERROR: ROWS AFFECTED: {rowsAffected}");
                    }
                }
            }
        }
    }
}
