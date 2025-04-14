using api.DataStructures;

namespace api.models
{
    public class ApplicantsBase
    {
        private SortedSet<Applicant> applicantsSet;
        private Database database;

        public ApplicantsBase()
        {
            applicantsSet = new SortedSet<Applicant>();
            database = new Database();
        }

        public void LoadApplicants()
        {
            Applicant[] applicants = database.LoadApplicants();
            foreach (Applicant applicant in applicants)
            {
                applicantsSet.Add(applicant);
            }
        }

      

        

    }
}
