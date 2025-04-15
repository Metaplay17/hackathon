using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("Lists")]
    public class ListsController : ControllerBase
    {
        private Logic logic;
        public ListsController(Logic logic)
        {
            this.logic = logic;
        }

        [HttpGet("[direction]/result")]
        public void GetDirectionResult(string direction)
        {
            string[] JsonApplicants = logic.GetDirectionResult(direction);
        }

    }
}
