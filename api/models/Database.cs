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
            return new Applicant[0];
        }

        public Dictionary<string, Direction> GetAllDirectionsList()
        {
            return new Dictionary<string, Direction>();
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
