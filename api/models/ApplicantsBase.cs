namespace api.models
{
    public class ApplicantsBase
    {
        private Database database;
        private Dictionary<string, Direction> directions;

        public ApplicantsBase()
        {
            database = new Database();
            directions = new Dictionary<string, Direction>();
        }

        public void LoadApplicants()
        {
            Applicant[] applicants = database.LoadApplicants();
            foreach (Applicant applicant in applicants)
            {
                foreach(string priority in applicant.Priorities)
                {
                    directions[priority].AddApplicant(applicant);
                }
            }
        }

        public void AddDirection(Direction direction)
        {
            directions.Add(direction.Name, direction);
        }

        public Applicant[] GetDirectionResult(string directionName)
        {
            return directions[directionName].GetResultList();
        }

        public Direction[] DirectionsArray
        {
            get { return directions.Values.ToArray(); }
        }

        public Dictionary<string, Direction> DirectionsDictionary
        {
            get { return directions; }
        }
    }
}
