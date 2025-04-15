using api.Structures;
using Npgsql;

namespace api.models
{
    public class Database
    {
        public string connectionString;
        public string databaseName;
        public string password;

        public Database()
        {

        }

        public Applicant[] LoadApplicants()
        {
            return new Applicant[0];
        }

        public Dictionary<string, Direction> GetAllDirectionsList()
        {
            return new Dictionary<string, Direction>();
        }

        public void AddApplicant(ApplicantStruct applicant)
        {

        }
    }
}
