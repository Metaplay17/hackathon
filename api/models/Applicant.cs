namespace api.models
{
    public class Applicant : IComparable<Applicant>
    {
        private int id;
        private Dictionary<Subject, int> results;
        private int ballAmount;
        private bool isSubmitOriginalDocs;
        private string snils;

        public Applicant(int id, string snils)
        {
            this.id = id;
            results = new Dictionary<Subject, int>();
            this.snils = snils;
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


    }
}
