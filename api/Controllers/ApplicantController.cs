using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("Applicants")]
    public class ApplicantController : ControllerBase
    {
        private Logic logic;
        public ApplicantController(Logic logic)
        {
            this.logic = logic;
        }

        [HttpPost("/Add")]
        public void GetDirectionResult(string direction)
        {
            string[] JsonApplicants = logic.GetDirectionResult(direction);
        }
    }
}

