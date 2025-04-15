using api.models;
using api.Structures;
using System.Text.Json;

namespace api
{
    public class Logic
    {
        ApplicantsBase appBase;
        Database db;

        public Logic()
        {
            appBase = new ApplicantsBase();
            db = new Database();
            appBase.LoadApplicants();
        }

        public string[] GetDirectionResult(string direction)
        {
            Applicant[] applicants = appBase.GetDirectionResult(direction);
            List<string> applicantsJson = new List<string>();

            foreach(Applicant applicant in applicants)
            {
                string[] priorities = applicant.Priorities;
                var app = new
                {
                    Snils = applicant.Snils,
                    BallAmount = applicant.BallAmount,
                    Priority = Array.IndexOf(applicant.Priorities, direction) + 1
                };
                applicantsJson.Add(JsonSerializer.Serialize(app));
            }
            applicantsJson.Reverse();
            return applicantsJson.ToArray();
        }

        public void CalcFinalList()
        {
            SortedSet<Applicant> allApplicants = new SortedSet<Applicant>();
            Dictionary<string, Direction> directions = appBase.DirectionsDictionary;
            foreach (Direction d in appBase.DirectionsArray)
            {
                foreach(Applicant app in d.Applicants)
                {
                    allApplicants.Add(app);
                }
            }

            foreach(Applicant app in allApplicants)
            {
                bool used = false;
                foreach(string priority in app.Priorities)
                {
                    if (directions[priority].FinalList.Count() < directions[priority].FreePlaces)
                    {
                        directions[priority].FinalList.Add(app);
                        used = true;
                        break;
                    }
                }
                if (!used)
                {
                    foreach (string priority in app.Priorities)
                    {
                        if (directions[priority].FinalList.Count() - directions[priority].FreePlaces < directions[priority].FeePlaces)
                        {
                            directions[priority].FinalList.Add(app);
                        }
                    }
                }
            }
        }

        public Applicant[] GetDirectionFinalList(string direction)
        {
            return appBase.DirectionsDictionary[direction].FinalList.ToArray();
        }

        public void AddApplicant(ApplicantStruct applicant)
        {
            db.AddApplicant(applicant);
        } 
    }
}
