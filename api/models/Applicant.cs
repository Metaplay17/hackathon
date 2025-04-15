namespace api.models
{
    public class Applicant : IComparable<Applicant>
    {
        private int id;
        private Dictionary<Subject, int> results;
        private int ballAmount;
        private bool isSubmitOriginalDocs;
        private string snils;
        private string[] priorities;

        public Applicant(int id, string snils)
        {
            this.id = id;
            results = new Dictionary<Subject, int>();
            this.snils = snils;
            priorities = new string[5];
        }

        public void AddResult(Subject subject, int ball)
        {
            results.Add(subject, ball);
            ballAmount += ball;
        }

        public void RemoveResult(Subject subject) 
        { 
            if (results.ContainsKey(subject))
            {
                ballAmount -= results[subject];
                results.Remove(subject);
            }
        }

        public void SetPrioroties(string[] newPrioroties)
        {
            priorities = newPrioroties;
        }

        public void ConfirmOrginalDocs()
        {
            isSubmitOriginalDocs = true;
        }

        public void RemoveConfirmationOriginalDocs()
        {
            isSubmitOriginalDocs = false;
        }

        public int Id
        {
            get { return id; }
        }

        public string Snils
        {
            get { return snils; }
        }

        public int BallAmount
        {
            get { return ballAmount; }
        }

        public bool IsSubmitOriginalDocs
        {
            get { return isSubmitOriginalDocs; }
        }

        public int CompareTo(Applicant other)
        {
            return ballAmount - other.ballAmount;
        }

        public string[] Priorities
        {
            get { return Priorities; }
        }
    }
}
